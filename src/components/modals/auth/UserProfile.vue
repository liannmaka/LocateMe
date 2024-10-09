<script setup>
  import BaseLayout from "../BaseLayout.vue";
  import CancelSvg from "../../svg/CancelSvg.vue";
  import { defineEmits } from "vue";

  const emit = defineEmits(["close"]);
  const close = value => {
    emit("close", value);
  };
</script>

<template>
  <BaseLayout>
    <template v-slot:modal-child>
      <div
        class="h-full flex items-start justify-center lg:items-center md:items-center"
      >
        <div
          class="modal-child lg:mt-0 md:mt-0 mt-16 w-[400px] bg-white p-2 rounded-3xl"
        >
          <div class="flex justify-between">
            <h1>User Profile</h1>
            <CancelSvg
              @click="close(false)"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
