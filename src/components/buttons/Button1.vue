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
          "verify",
          "cancel",
          "create",
          "naked"
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
    bordered: {
      type: Boolean,
      default: false
    }
  });
</script>
<template>
  <button
    :type="btnType"
    class="w-full rounded-lg"
    :class="[
      loading ? 'button-disabled' : variant,
      variant === 'default'
        ? 'button1'
        : variant === 'verify'
          ? 'verify'
          : variant === 'cancel'
            ? 'cancel'
            : variant === 'create'
              ? 'create'
              : variant === 'naked'
                ? 'naked'
                : '',
      size === 'xs'
        ? 'xtra-small'
        : size === 'sm'
          ? 'small'
          : size === 'lg'
            ? 'large'
            : size === 'default'
              ? ''
              : '',
      bordered ? 'bordered' : ''
    ]"
    :disabled="loading"
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

  .verify {
    background-color: var(--bice-blue);
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

  .naked {
    background: none;
    padding: 0;
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

  /* bordered */
  .bordered {
    border: 1px solid #fff;
  }
</style>
