<script setup>
  import { ref } from "vue";

  const visible = ref(false);

  const visibleTop = ref(false);
</script>

<template>
  <header
    class="container flex items-center justify-between w-full z-40"
  >
    <div class="flex w-full items-center gap-8">
      <h2 class="h2 text-lg text-white">
        Enno<span class="text-lg font-bold">{x}</span>vating
      </h2>
      <div
        class="w-full md:flex text-white lg:flex items-center justify-end gap-4 hidden"
      >
        <div class="flex gap-8">
          <div
            class="flex gap-1 cursor-pointer hover:underline"
            @mouseenter="visibleTop = true"
          >
            {x} Products
          </div>
          <div
            class="flex gap-1 cursor-pointer hover:underline"
            @mouseenter="visibleTop = true"
          >
            {x} Public Research
          </div>
          <div
            class="flex gap-1 cursor-pointer hover:underline"
            @mouseenter="visibleTop = true"
          >
            Investors Note
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
