<script setup>
  defineProps({
    btnText: String,
    btnType: String,
    loading: Boolean,
    loadingText: String,
    variant: {
      type: String,
      default: "default",
      validator(value) {
        const VARIANTS = [
          "default",
          "send",
          "cancel",
          "create"
        ];
        const isPresent = types => type =>
          types.includes(type);
        const isValid = isPresent(VARIANTS)(value);
        if (!isValid) {
          console.warn(`allowed variants are ${VARIANTS}`);
        }
        return isValid;
      }
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        const SIZES = ["xs", "sm", "lg", "default"];
        const isPresent = types => type =>
          types.includes(type);
        const isValid = isPresent(SIZES)(value);
        if (!isValid) {
          console.warn(`allowed sizes are ${SIZES}`);
        }
      }
    },
    style:{
      type: Object,
      default: "default",
    },
    custom:{
      type: String,
      default: "default",
    },
  });
</script>
<template>
  <button
    :type="btnType"
    class="w-full rounded-lg hover:scale-105"
    :class="[
      custom,
      loading ? 'button-disabled' : variant,
      variant === 'default'
        ? 'button1'
        : variant === 'send'
          ? 'send'
          : variant === 'cancel'
            ? 'cancel'
            : variant === 'create'
              ? 'create'
              : '',
      size === 'xs'
        ? 'xtra-small'
        : size === 'sm'
          ? 'small'
          : size === 'lg'
            ? 'large'
            : size === 'default'
              ? ''
              : ''
    ]"
    :disabled="loading"
    :style="style"
  >
    {{ loading ? loadingText : btnText }}
  </button>
</template>
<style scoped>
  .button-disabled {
    cursor: not-allowed;
    background-color: #00000098;
    padding: 0.75rem;
  }

  /* variant */
  .button1 {
    background-color: #000000;
    color: #fafafa;
  }

  .send {
    background-color: #4caf50;
    color: #fafafa;
  }

  .cancel {
    background-color: Transparent;
    color: #666666;
    border: 1px solid #666666;
  }

  .create {
    background-color: var(--penn-blue);
    color: #fafafa;
  }

  /* size */
  .xtra-small {
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0.25rem;
  }

  .small {
    font-size: 0.85rem;
    font-weight: 400;
    padding: 0.6rem;
  }

  .large {
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.7rem;
  }
</style>
