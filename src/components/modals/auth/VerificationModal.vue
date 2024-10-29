<script setup>
  import BaseLayout from "../BaseLayout.vue";
  import Button1 from "../../buttons/Button1.vue";
  import OtpInput from "../../inputs/OtpInput.vue";

  const emit = defineEmits(["closeVerificationModal"]);

  const closeVerificationModal = () => {
    emit("closeVerificationModal");
  };
</script>

<template>
  <BaseLayout>
    <template v-slot:modal-child>
      <div class="flex justify-center items-center h-full">
        <div
          class="modal-content text-white bg-[var(--oxford-blue)] text-center w-[400px] rounded-3xl py-11 px-8"
        >
          <div>
            <h1 class="text-2xl font-bold">Verify Code</h1>
            <p class="text-sm mt-1 mb-9">
              Enter the code sent to your WhatsApp Number
            </p>
            <div>
              <OtpInput />
            </div>
            <div class="mt-9 mb-3">
              <Button1
                btnText="Verify"
                variant="verify"
                size="sm"
                class="mb-4"
              />
              <Button1
                btnText="Cancel"
                variant="naked"
                size="sm"
                bordered
                @click="closeVerificationModal"
              />
            </div>
            <footer class="text-sm text-center">
              Didn't receive a code?
              <span class="font-bold">Resend code</span>
            </footer>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
