<template>
  <router-view></router-view>
</template>

<script setup></script>

<style>
  :root {
    --oxford-blue: #00072d;
    --penn-blue: #001c55;
    --royal-blue: #0a2472;
    --bice-blue: #0e6ba8;
    --non-photo-blue: #a6e1fa;
    --bg-img-color: #f6f6f6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul.vti__dropdown-list.below {
    width: 22rem;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
  }

  .vti__input {
    border-radius: 0 5px 5px 0 !important;
    padding: 0.5px 0;
    font-size: 12px;
    line-height: 16px;
  }

  .vti__input::placeholder {
    font-size: 12px;
    line-height: 16px;
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
