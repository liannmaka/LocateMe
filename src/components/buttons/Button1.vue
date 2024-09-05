<script setup>
  defineProps({
    btnText: String,
    btnType: String,
    loading: Boolean,
    loadingText: String
  });
</script>
<template>
  <button
    :type="btnType"
    class="p-3 w-full button1 rounded-lg hover:scale-105"
    :class="{ 'button-disabled': loading }"
    :disabled="loading"
  >
    {{ loading ? loadingText : btnText }}
  </button>
</template>
<style scoped>
  .button1 {
    background-color: #000000;
    color: #fafafa;
  }

  .button1:hover {
    background-color: #000000ec;
  }

  .button-disabled {
    cursor: not-allowed;
    background-color: #00000098;
  }
</style>
