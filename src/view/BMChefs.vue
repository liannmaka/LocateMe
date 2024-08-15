<script setup>
import BaseLayout from '../layout/BaseLayout.vue'
</script>

<template>
  <BaseLayout v-slot:screens>
    <div class="container-fluid w-full relative flex flex-col items-center justify-start min-h-screen bg-white dark:bg-gray-800">
      <div class="bm_chef_hero sticky">
        <p class="absolute z-10 text-white lg:text-3xl md:text-2xl text-md flex items-center justify-center w-full h-full">Embrace Good Food At Affordable Price</p>
        <div class="overlay"></div>
      </div>

      <div class="container pl-8 pr-8">
        <div class="flex h-1/3.5 lg:h-1/4 flex-col md:flex-col lg:flex-row w-full gap-4 relative">
          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">
            <section class="flex h-auto items-start flex-col justify-center w-full">
              <p class="w-full py-4 justify-center lg:justify-start flex">Cook for;</p>
              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4"> Family and Friends</h2>
              <p class="w-full lg:w-11/12 lg:text-left text-center mt-3">
                The idea behind "BE MY CHEF" is having a joint food service with known friends and you as a personal
                chef/cooks to cook GOOD FOOD" at a very affordable prize.
              </p>
              <div class="flex col-6 lg:justify-start justify-center w-full mt-5">
                <div class="bg-red-800 w-32  p-2 rounded-lg text-white text-sm text-center hover:scale-105 cursor-pointer">Apply as a cook</div>
              </div>
            </section>
          </div>
          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">
            <img src="../assets/cooking1.png" class="rounded-lg" alt="cooking1" />
          </section>
        </div>
        <section class="flex items-center gap-2 sticky top-0 z-40 bg-white">
          <h2 class="text-xl lg:text-center text-center font-bold text-gray-700 py-4"> How To Start A Cooking Career</h2>
          <img src="../assets/progress.png" class="rounded-lg w-48" alt="cooking1" />
        </section>

        <div class="flex flex-col md:flex-col lg:flex-row w-full gap-4 relative">

          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">
            <section class="flex h-auto items-start flex-col justify-center w-full">
              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4">Create a BMChef Profile</h2>
              <p class="w-full lg:w-11/12 lg:text-left text-center mt-3">
               With a BMChef Profile you can create customised meal plans and dishes, manage your customers, set
                food delivery time and organising dispatch by using our logistics system.
              </p>
              <div class="flex col-6 lg:justify-start justify-center w-full mt-5">
                <button class="bg-red-800 w-32  p-2 rounded-lg text-white text-sm text-center hover:scale-105 cursor-pointer">Create Profile</button>
              </div>
            </section>
          </div>
          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">
            <img src="../assets/apply_chef.png" class="rounded-lg" alt="cooking1" />
          </section>

        </div>

        <div class="flex flex-col md:flex-col-reverse  lg:flex-row w-full gap-4 relative">
          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">
            <img src="../assets/meal_plan.png" class="rounded-lg" alt="cooking1" />
          </section>
          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">
            <section class="flex h-auto items-start flex-col justify-center w-full">
              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4"> Create Dishes And  Meal Plans</h2>
              <p class="w-full lg:w-11/12 lg:text-left text-center mt-3">
                The idea behind "BE MY CHEF" is having a joint food service with known friends <br /> and you as a personal
                chef/cooks to cook GOOD FOOD" at a very affordable prize.
              </p>
              <div class="flex col-6 lg:justify-start justify-center w-full mt-5">
                <div class="bg-red-800 w-32  p-2 rounded-lg text-white text-sm text-center hover:scale-105 cursor-pointer">Create Meal Plan</div>
              </div>
            </section>
          </div>

        </div>

<!--        <div class="flex flex-col md:flex-col lg:flex-row w-full gap-4 relative">-->
<!--          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">-->
<!--            <img src="../assets/cook.png" class="rounded-lg" alt="cooking1" />-->
<!--          </section>-->
<!--          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">-->
<!--            <section class="flex h-auto items-start flex-col justify-center w-full">-->
<!--              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4">Cook, Cook, Cook.</h2>-->
<!--              <p class="w-full lg:w-11/12 lg:text-left text-center mt-3">-->
<!--                With a BMChef Profile you can create customised meal plans and dishes, manage your customers, set-->
<!--                food delivery time and organising dispatch by using our logistics system.-->
<!--              </p>-->

<!--            </section>-->
<!--          </div>-->


<!--        </div>-->

<!--        <div class="flex flex-col md:flex-col-reverse  lg:flex-row w-full gap-4 relative">-->
<!--          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">-->
<!--            <img src="../assets/deliver.png" class="rounded-lg" alt="cooking1" />-->
<!--          </section>-->
<!--          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">-->
<!--            <section class="flex h-auto items-start flex-col justify-center w-full">-->
<!--              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4"> Assign Dispatch</h2>-->
<!--              <p class="w-full lg:w-11/12 lg:text-left text-center mt-3">-->
<!--                The idea behind "BE MY CHEF" is having a joint food service with known friends <br /> and you as a personal-->
<!--                chef/cooks to cook GOOD FOOD" at a very affordable prize.-->
<!--              </p>-->

<!--            </section>-->
<!--          </div>-->

<!--        </div>-->



        <!--        <div class="w-full m-auto flex flex-col  items-center ">-->
<!--          <h2 class="text-5xl w-full lg:text-center text-center font-bold text-gray-700 py-4"> Are you a good cook?</h2>-->
<!--          <img src="../assets/cook_steps_plan.jpeg" class="img-fluid mt-5" alt=""/>-->

<!--        </div>-->

        <footer class="bg-white dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023. All Rights Reserved.</span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </footer>

      </div>




    </div>

  </BaseLayout>

</template>

<style scoped>

@media (max-width: 990px) {
  .wrapper{
    width: 100%;
    margin-left:0;
  }
}
.bm_chef_hero{
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: block;
  width: 100%;
  background-image: url("../assets/bm_chef_hero.png");
}

.overlay{
  background-color: rgba(0, 0, 0, 0.73);
  height: 30vh;
}
</style>
