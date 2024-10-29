<template>
  <div
    class="h-full w-full top-0 left-0 modal_wrapper overflow-x-hidden overflow-y-auto fixed z-50"
  >
    <slot name="modal-child"></slot>
  </div>
</template>
<script setup></script>
<style scoped>
  .modal_wrapper {
    background-color: #000000a3;
    /* overflow: scroll; */
  }
</style>
