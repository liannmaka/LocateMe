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
      <div class="container bg-white p-5 broder-4">
        <div class="flex  mb-5 h-full flex-col md:flex-col lg:flex-row w-full gap-4 relative items-center">
          <div class="flex h-auto items-center w-full md:w-full lg:w-2/4">
            <section class="flex h-auto items-center flex-col justify-center w-full">
              <div class="logo w-full py-4 justify-center lg:justify-start">Cook for;</div>
              <h2 class="text-5xl w-full lg:text-left text-center font-bold text-gray-700 py-4"> Family and Friends</h2>
              <p class="w-full lg:text-left text-center p-1">
                The idea behind "BE MY CHEF" is having a joint food service with known friends and you as a personal
                chef/cooks to cook GOOD FOOD" at a very affordable prize.
              </p>
              <div class="flex col-6 lg:justify-start justify-center w-full p-2">
                <div class="bg-red-800 w-32  p-2 rounded-lg text-white text-sm text-center hover:scale-105 cursor-pointer">Apply as a cook</div>
              </div>
            </section>
          </div>
          <section class="flex items-center justify-center h-auto w-full lg:w-2/4">
            <img src="../assets/cooking1.png" class="rounded-lg" alt="cooking1" />
          </section>
        </div>

        <div class="w-full">
          <h2 class="text-5xl w-full lg:text-center text-center font-bold text-gray-700 py-4"> Are you a good cook?</h2>

        </div>
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
