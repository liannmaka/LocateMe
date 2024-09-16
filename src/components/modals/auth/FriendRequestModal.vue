<script setup>
  import BaseLayout from "../BaseLayout.vue";
  import CancelSvg from "../../svg/CancelSvg.vue";
  import PhoneNumberInput from "../../inputs/PhoneNumberInput.vue";
  import Button1 from "../../buttons/Button1.vue";
  import { defineEmits } from "vue";

  const emit = defineEmits(["close"]);

  const close = () => {
    emit("close");
  };
</script>

<template>
  <BaseLayout>
    <template v-slot:modal-child>
      <div class="flex justify-center items-center h-full">
        <div
          class="modal-content bg-white w-[400px] rounded-3xl py-4 px-6"
        >
          <div>
            <div>
              <div class="flex justify-between">
                <div>
                  <div
                    class="text-xl antialiased font-bold"
                  >
                    Send Friend Request
                  </div>
                </div>
                <CancelSvg
                  @click="close"
                  class="cursor-pointer hover:scale-105"
                />
              </div>
              <div class="mt-3 mb-7">
                <PhoneNumberInput
                  label="Enter Friend's Phone Number"
                  v-model="phone"
                />
              </div>
            </div>
            <div class="flex mb-7">
              <Button1
                btn-type="button"
                btn-text="Send Request"
                variant="send"
                size="sm"
                class="mr-2"
              >
              </Button1>
              <Button1
                btn-type="button"
                btn-text="Cancel"
                variant="cancel"
                size="sm"
                @click="close"
              >
              </Button1>
            </div>
            <div>
              <p
                class="text-center word-break text-sm text-slate-500"
              >
                We’ll send a request to this number
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
