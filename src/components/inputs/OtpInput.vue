<script setup>
  import { ref, watch, nextTick, onMounted } from "vue";
  import { onlyNumbers } from "../../utils/numbers";

  const { modalOtp, length } = defineProps({
    length: {
      type: Number,
      default: 5
    },
    modalOtp: {
      type: Boolean,
      default: false
    }
  });

  const value = ref();
  const modalProp = ref(modalOtp);

  const otpForm = ref(
    Array.from({ length: length }, () => ({
      value: ""
    }))
  );

  watch(modalProp, value => {
    if (value) {
      otpForm.value = Array.from(
        { length: length },
        () => ({
          value: ""
        })
      );
      nextTick(() => {
        let input = value.value[0];
        input.focus();
      });
    }
  });

  const focusInput = index => {
    if (index >= 0) {
      let input = value.value[index];
      input.focus();
      input.select();
    }
  };

  const onInput = ($event, index) => {
    if (
      otpForm.value[index].value &&
      otpForm.value[index + 1]
    ) {
      $event.preventDefault();
      focusInput(index + 1);
    }
  };

  const onDelete = ($event, index) => {
    let keyCode = $event.keyCode
      ? $event.keyCode
      : $event.which;
    if (keyCode === 8 || keyCode === 46) {
      $event.preventDefault();
      otpForm.value[index].value = "";
      focusInput(index - 1);
    }
  };

  const onLeft = ($event, index) => {
    let keyCode = $event.keyCode
      ? $event.keyCode
      : $event.which;
    if (keyCode === 37) {
      $event.preventDefault();
      focusInput(index - 1);
    }
  };

  const onRight = ($event, index) => {
    let keyCode = $event.keyCode
      ? $event.keyCode
      : $event.which;
    if (keyCode === 39 && otpForm.value[index + 1]) {
      $event.preventDefault();
      focusInput(index + 1);
    }
  };

  const onKeydown = ($event, index) => {
    onDelete($event, index);
    onLeft($event, index);
    onRight($event, index);
  };

  const onPaste = $event => {
    let paste = $event.clipboardData.getData("text");
    paste = paste.replace(/[^\d]/g, "");
    $event.preventDefault();

    if (paste.length > otpForm.value?.length) {
      paste = paste.substring(0, otpForm.value?.length);
    }
    paste = paste.split("");

    paste.forEach((value, index) => {
      otpForm.value[index].value = value;
    });
    focusInput(paste.length - 1);
  };

  onMounted(() => {
    nextTick(() => {
      let input = value.value[0];
      input.focus();
      input.select();
    });
  });
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center"
  >
    <input
      type="text"
      v-for="(otp, index) in otpForm"
      v-model="otp.value"
      :key="index"
      maxlength="1"
      ref="value"
      @keypress="onlyNumbers"
      @keydown="onKeydown($event, index)"
      @input="onInput($event, index)"
      @paste="onPaste"
    />
    <!-- <div>
            validation
        </div> -->
  </div>
</template>

<style scoped>
  input {
    background: #ffffff;
    color: #000000;
    font-weight: 700;
    text-align: center;
    width: 2.25rem;
    height: 2.25rem;
    margin: 0 0.25rem;
    padding: 0 0.5rem;
    border: 1px solid var(--bice-blue);
    border-radius: 6px;
  }

  input:focus {
    outline: none;
  }
</style>
