<template>

<router-view></router-view>
 
</template>

<script setup>
</script>

<style>
:root {}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

ul.vti__dropdown-list.below {
  width: 22rem;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
}

#app {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* font-family */
}

@media screen and (max-width: 400px) {
  ul.vti__dropdown-list.below {
  width: 12rem;
}
}
</style>
