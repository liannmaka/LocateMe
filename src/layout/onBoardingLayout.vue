<template>
  <!-- content wrapper -->
  <div
    class="flex flex-col items-center h-screen w-screen lg:flex-row"
  >
    <!-- content on the left -->
    <div
      class="mx-auto h-full w-[90%] sm:w-[75%] lg:w-[50%]"
    >
      <slot />
    </div>
    <!-- content on the right -->
    <div
      class="hidden lg:flex-1 lg:flex lg:justify-center lg:items-center bg-[var(--oxford-blue)] lg:h-full"
    >
      <img
        src=".././assets/map_icons/moon.svg"
        alt="moon-svg"
        class="max-w-full max-h-full object-contain"
      />
    </div>
  </div>
</template>
