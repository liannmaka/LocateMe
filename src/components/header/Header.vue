<script setup>
import { ref } from 'vue'

const visible = ref(false)

const visibleTop = ref(false);


</script>

<template>

  <header class="lg:absolute md:absolute bg-black pl-8 lg:pl-0  lg:container flex items-center justify-between py-5 w-full z-40">
    <div class="flex w-full items-center gap-8">
      <p class="text-lg text-white"> Enno<span class="text-lg font-bold">{x}</span>vating
<!--        <img src="../../assets/xx1/x.svg"  width="80" alt="logo"/>-->
      </p>
      <div class="w-full md:flex text-white lg:flex items-center justify-end gap-4 hidden">
        <div class="flex gap-8">
          <!-- <img src="../../assets/undraw_exclamation-point.svg" width="5" /> -->
<!--          <div class="flex gap-1" @mouseenter="visibleTop = true">Tech And Culture </div>-->
<!--          <div class="flex gap-1" @mouseenter="visibleTop = true">About {x} </div>-->
          <div class="flex gap-1" @mouseenter="visibleTop = true">{x} Products</div>
          <div class="flex gap-1" @mouseenter="visibleTop = true">{x} Public Research</div>
          <div class="flex gap-1" @mouseenter="visibleTop = true">Investors Note</div>



          <!-- <div>Our Products</div> -->
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>
h2 {
  border-bottom: 1px solid var(--primary-bg);
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  width: 100%;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
}

header {
  line-height: 1.5;
}
</style>