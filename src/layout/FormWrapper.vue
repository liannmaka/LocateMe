<script setup>
  defineProps({
    pageTitle: String,
    paragraphTitle: String,
    footerNote: String,
    footerLink: String,
    to: String
  });
</script>
<template>
  <!-- form wrapper -->
  <div class="w-full lg:mx-9 xl:mx-14">
    <h1
      class="font-bold text-3xl text-[var(--royal-blue)] text-center md:text-4xl lg:leading-tight lg:text-left"
    >
      {{ pageTitle }}
    </h1>
    <p
      class="mt-2 text-[var(--penn-blue)] text-base font-normal text-center lg:text-left"
    >
      {{ paragraphTitle }}
    </p>
    <div class="my-6">
      <slot />
    </div>
    <footer>
      <p class="text-sm text-center">
        <span class="text-[var(--penn-blue)] font-medium">{{
          footerNote
        }}</span>
        <router-link
          :to="to"
          class="text-[var(--bice-blue)] ml-1"
          >{{ footerLink }}</router-link
        >
      </p>
    </footer>
  </div>
</template>
