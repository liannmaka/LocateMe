<script setup>
import { onMounted, ref, watch, reactive } from 'vue';
import {ArrowDownCircle} from "@iconoir/vue";
import Header from "@/components/header/Header.vue";
import Button1 from "@/components/buttons/Button1.vue";

let timeout = { value: 5 }; // Changed to 5 seconds for quicker testing
let percentage = { value: 100 };
const section = ref()

function startTimeout() {
  let itemsCollection = document.getElementsByClassName('{x}-carousel-item');
  let items = Array.from(itemsCollection);
  let currentIndex = 0; // Track the index
  const controlWrapper = document.getElementById('controls');


  if (itemsCollection && controlWrapper)
      // Convert HTMLCollection to an array

    for (let i = 0; i < items.length; i++) {
      // Create new elements inside the loop to avoid reusing references
      let controlItemWrapper = document.createElement('div');
      let unactiveControlItem = document.createElement('div');
      let activeControlItem = document.createElement('div');

      controlItemWrapper.setAttribute('class', 'relative w-24 h-1 md:w-1 lg:w-1 md:h-24 lg:24 text-center');
      unactiveControlItem.setAttribute('class', 'control absolute w-24 h-1 md:w-1 lg:w-1 md:h-24 lg:24 text-center right-0 bg-gray-500 rounded-lg');
      activeControlItem.setAttribute('class', 'control absolute w-24 h-1 md:w-1 lg:w-1 md:h-24 lg:24 text-center right-0 bg-teal-500 rounded-lg');

      controlItemWrapper.appendChild(unactiveControlItem);
      controlItemWrapper.appendChild(activeControlItem);

      items[i].setAttribute('id', `${i}-carousel-item`);
      controlWrapper.appendChild(controlItemWrapper);

      if (i === currentIndex) {
        items[i].style.display = 'flex';
      } else {
        items[i].style.display = 'none';
      }
    }

  function updateControlAndCarousel() {
    if (controlWrapper && controlWrapper.children[currentIndex]) {
      let activeControlItem = controlWrapper.children[currentIndex].querySelector('.control.bg-teal-500');

      if (timeout.value > 0) {
        percentage.value = ((5 - timeout.value) / 5) * 100;
        if (screen.width < 700) activeControlItem.style.width = `${percentage.value}%`;
        else activeControlItem.style.height = `${percentage.value}%`;
        activeControlItem.style.transition = '0.5s linear';
        timeout.value--;
      } else {
        // Rotate carousel items
        const currentIntervalItem = items.shift();
        items.push(currentIntervalItem);

        // Hide all items
        items.forEach(item => item.style.display = 'none');
        // Show the first item
        items[0].style.display = 'flex';
        activeControlItem.style.transition = 'none';

        // Reset timeout and percentage
        timeout.value = 5;
        percentage.value = 100;

        // Reset control item height
        if (screen.width < 700) activeControlItem.style.width = '0%';
        else activeControlItem.style.height = '0%';

        // Update currentIndex
        currentIndex = (currentIndex + 1) % items.length;
      }
    }
  }

  setInterval(updateControlAndCarousel, 1000);
}

startTimeout();

function scrollToSection() {
  if (section) {
    section.value.scrollIntoView({ behavior: 'smooth' });
  }
}

onMounted(() => {
  startTimeout();

})


function funTypeAni() {
  const texts = document.querySelectorAll('.cod');
  let index = 0;

  const showText = () => {
    texts.forEach((text, i) => {
      if (i === index) {
        text.classList.add('show');
      } else {
        text.classList.remove('show');
      }
    });
    index = (index + 1) % texts.length;
    setTimeout(showText, 4000); // Adjust timing as needed
  };


  showText();
}


onMounted(() => {
  funTypeAni()
})


</script>


<template>
<!--  <div-->
<!--    class="flex items-center justify-center h-screen bg-gray-800 dark:bg-gray-800"-->
<!--  >-->
<!--    <p-->
<!--      class="text-sm md:text-lg lg:text-2xl text-center font-bold text-white"-->
<!--    >-->
<!--      Sit Back And Chill, A Design Is Coming Soon!-->
<!--    </p>-->
<!--  </div>-->

  <div class="relative w-full overflow-hidden">

    <section class="flex-col h-screen z-10  py-5 flex items-center  w-full relative">
      <Header></Header>

      <ArrowDownCircle @click="scrollToSection"  width="32" color="#fff" class="absolute z-20 bottom-8 hover:scale-125 cursor-pointer"></ArrowDownCircle>

      <video src="../assets/vb-1.mp4" class="absolute top-0 left-0 w-full h-full object-cover"
             autoplay
             muted
             loop
             playsinline>
      </video>
      <div class="absolute h-screen w-full top-0 overflow"></div>

      <div class="h-full flex items-center justify-center">
        <div
          class="{x}-carousel  bg-white flex items-center flex-col md:flex-row lg:flex-row container">
        <div
            class="{x}-carousel-item h-auto md:h-full lg:h-full flex flex-col md:flex-row lg:flex-row w-full gap-4 relative items-center hidden">
          <section class="flex items-center h-auto md:w-2/4 lg:w-2/4">
            <img src="../assets/xx1/image.png" class="rounded-lg animate__animated animate__fadeIn" alt="img-1" />
          </section>
          <div class="flex h-full items-center h-auto md:w-2/4 lg:w-2/4">
            <section class="flex h-auto items-center flex-col justify-center w-full animate__animated animate__fadeIn">
              <h2 class="text-5xl w-full text-center font-bold text-white">Build. Test. Repeat.</h2>
              <p class="w-full md:w-3/4 lg:w-2/4 md:text-left lg:text-left text-center text-white py-5 md:py-3 lg:py-3 p-1">it's
                what we do...</p>
            </section>
          </div>
        </div>
        <div
            class="{x}-carousel-item h-auto md:h-full lg:h-full  flex flex-col md:flex-row lg:flex-row w-full gap-4 relative items-center hidden">
          <section class="flex items-center h-auto md:w-2/4 lg:w-2/4">
            <img src="../assets/xx1/art.jpg" class="rounded-lg  animate__animated animate__fadeIn" alt="img-1" />
          </section>
          <div class="flex h-full items-center md:w-2/4 lg:w-2/4">
            <section class="flex h-auto items-center flex-col justify-center w-full animate__animated animate__fadeIn">
              <h2 class="text-5xl w-full text-center font-bold text-white">Art. Science. Culture.</h2>
              <p class="w-full md:w-3/4 lg:w-2/4 md:text-left lg:text-left text-center text-white  py-5 md:py-3 lg:py-3 p-1">is what
                we believe in...</p>
            </section>
          </div>
        </div>
        <!--controller-->
        <div class="md:h-full lg:h-full flex md:flex-col lg:flex-col items-center justify-center gap-2 p-4"
             id='controls'></div>
      </div>
      </div>
    </section>

    <section id="page2" ref="section" class="h-screen z-10 py-5 flex items-center justify-center w-full relative">
      <video src="../assets/vb-2.mp4" class="absolute top-0 left-0 w-full h-full object-cover"
             autoplay
             muted
             loop
             playsinline>
      </video>
      <div class="absolute h-screen w-full top-0 overflow"></div>
      <div  class="h-auto bg-white flex flex-col md:flex-row lg:flex-row container">
        <div
            class="h-auto md:h-full lg:h-full flex flex-col md:flex-row lg:flex-row w-full gap-4 relative items-center">
          <div class="flex h-full items-center h-auto md:w-2/4 lg:w-2/4">
            <section class="flex h-auto lg:items-start flex-col justify-center w-full animate__animated animate__fadeIn">
              <h2 class="text-5xl w-full lg:text-left font-bold text-white">What Does It Takes To Build. Test. Repeat?</h2>
              <p class="w-full lg:text-left text-center text-white py-5 md:py-3 lg:py-3 p-1">We are set to transform ideas into reality.</p>
              <Button1 class="custom-btn"  btnText="Join Us"
                       variant="create"
                       size="sm"></Button1>
            </section>
          </div>

        </div>


      </div>

    </section>

    <footer class="py-5 z-40 w-full bg-black">
      <section class="w-full">
        <div class="text-center w-full flex justify-center items-center text-white">
          <p class="text-white font-bold underline text-wrap w-5/12">@2024 | Enno{x}vating | App
            version - v1.0.1</p>
        </div>
      </section>
    </footer>
  </div>

</template>

<style scoped>
.custom-btn{
  width:30%;
  background-color:transparent;
  border:solid
}
@media (max-width: 1000px) {
  .custom-btn{
    width:100%;
    background-color:transparent;
    border:solid
  }
}

.overflow{
  background-color: rgba(0, 0, 0, 0.4);
}




@media (min-width: 1024px) {


  .Frame2608563 {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0px;
    gap: 16px;
    width: 100%;
    align-items: center;
  }

  main.main-grid {
    /* grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr); */
    /* gap: 20px; */
    /* padding: 20px; */
    position: relative;
    display: flex;
    height: auto;
    /* width: calc(100% - 10rem); */
    width: 100%;

    /* 5rem on each side */
    background-color: var(--primary-bg);


  }



  .download_app {
    gap: 20px;
    display: flex;
  }

  .slideshow {
    position: relative;
    width: 30%;
    height: 200px;
    display: flex;
    justify-content: start;
    margin-bottom: 2rem;
  }

  .slide {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    /* height: 700px; */
    opacity: 0;
    margin: 0 auto;

  }

  .cod {
    font-family: 'Montserrat Alternates', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.02em;
    /* text-transform: capitalize; */
    /* color: rgba(22, 21, 21, 0.82); */
    color: #000;
    display: none;
    /* overflow: hidden; */
    white-space: pre-wrap;
    /* Allows wrapping */
    word-wrap: break-word;
    /* Ensures word wrap */
    width: 100%;
    position: relative;



  }

  #slide1 {
    animation-delay: 0s;
  }

  #slide2 {
    animation-delay: 5s;
  }

  #slide3 {
    animation-delay: 10s;
  }

  .typewriter-delay-1 {
    animation-delay: 0s;
  }

  .typewriter-delay-2 {
    animation-delay: 4s;
  }

  .typewriter-delay-3 {
    animation-delay: 8s;
  }

  .typewriter-delay-4 {
    animation-delay: 12s;
  }

  .typewriter-delay-5 {
    animation-delay: 16s;
  }

  @keyframes slideAnimation {
    0% {
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    30% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes blinkCaret {

    from,
    to {
      border-color: transparent
    }

    50% {
      border-color: rgba(22, 21, 21, 0.82);
    }
  }

  @keyframes typing {
    from {
      width: 0
    }

    to {
      width: 100%
    }
  }
}

@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}


@keyframes move {
  25% {
    transform: translatey(-5.8vmin);
    opacity: 1;
  }

  50% {
    transform: translatey(-11vmin);
  }

  75% {
    transform: translatey(-16.5vmin);
  }
}
</style>