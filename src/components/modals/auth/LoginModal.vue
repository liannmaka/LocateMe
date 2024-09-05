<script setup>
  import BaseLayout from "../BaseLayout.vue";
  import Button1 from "../../buttons/Button1.vue";
  import StoreUtils from "../../../utils/storeUtils";
  import PhoneNumberInput from "../../inputs/PhoneNumberInput.vue";
  import BackArrowSvg from "../../svg/BackArrowSvg.vue";
  import CancelSvg from "../../svg/CancelSvg.vue";
  import { computed, defineEmits, ref } from "vue";

  const phone = ref("");
  const store = StoreUtils;

  const emit = defineEmits(["close"]);
  const close = value => {
    emit("close", value);
  };

  const authStage = computed(() => {
    return store.get("auth", "getAuthStage");
  });
</script>

<template>
  <BaseLayout v-slot:modal-child>
    <div
      class="modal-child-wrapper flex items-start justify-center lg:items-center md:items-center"
    >
      <div
        class="modal-child lg:mt-0 md:mt-0 mt-16 w-[400px] bg-white p-2 rounded-3xl"
      >
        <div
          v-if="authStage === '1'"
          class="animate__animated animate__fadeIn animate__faster"
        >
          <div class="p-4 mb-2 relative">
            <div class="flex justify-between">
              <div>
                <div
                  class="text-left py-1 text-xl antialiased font-bold"
                >
                  SignUp/Login to Continue
                </div>
                <div
                  class="text-left py-1 mb-3 antialiased text-sm text-slate-500"
                >
                  Let's start with your whatsapp number
                </div>
              </div>
              <CancelSvg
                @click="close(false)"
                class="cursor-pointer hover:scale-105"
              />
            </div>

            <div>
              <PhoneNumberInput v-model="phone" />
            </div>
          </div>
          <div class="p-5">
            <Button1
              btn-type="button"
              btn-text="Continue"
              @click="
                store.commit('auth', 'authStage', '2')
              "
            >
            </Button1>
          </div>

          <div class="py-3 mt-5">
            <p
              class="text-center word-break text-sm text-slate-500"
            >
              We’ll send a code to your whatsapp to confirm
              your number. Standard message and data rates
              apply. Privacy Policy
            </p>
          </div>
        </div>

        <div
          v-else
          class="animate__animated animate__fadeIn animate__faster"
        >
          <div class="p-4 mb-5 relative">
            <div class="flex justify-between">
              <div
                class="text-left py-1 cursor-pointer hover:scale-105 text-xl antialiased font-bold flex items-center"
                @click="
                  store.commit('auth', 'authStage', '1')
                "
              >
                <BackArrowSvg />
                Back
              </div>
              <CancelSvg
                @click="close(false)"
                class="cursor-pointer hover:scale-105"
              />
            </div>

            <div
              class="text-center py-1 text-xl antialiased font-bold"
            >
              Check your phone
            </div>
            <div
              class="text-center py-1 mb-3 antialiased text-sm text-slate-500"
            >
              we’ve sent the code to your whatsapp
            </div>

            <label
              for="price"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Enter Code Here</label
            >
            <div class="relative mt-2 shadow-sm flex">
              <input
                type="number"
                name="otp"
                id="otp"
                placeholder="Enter verification code"
                class="block w-full rounded-md py-2 pl-3 pr-20 text-black border-2 border-black focus:outline-none focus:ring-none placeholder:text-gray-400 sm:text-sm sm:black"
              />
            </div>
          </div>
          <div class="p-5">
            <Button1
              btn-type="button"
              btn-text="Verify"
            >
            </Button1>
          </div>
          <div class="py-3 mt-5">
            <p
              class="text-center word-break text-sm text-slate-500"
            >
              By creating an account, you automatically
              accept our
              <span class="underline">Terms of service</span
              >,
              <span class="underline">Privacy Policy</span>
              and
              <span class="underline">Cookies Policy</span>
            </p>
          </div>
        </div>
        <!-- <p class="text-sm text-black text-center hover:underline cursor-pointer" @click="signUp(true)">I don't have an account? <span></span></p> -->
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
  .modal-child-wrapper {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  h2 {
    border-bottom: 1px solid #000;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    width: 100%;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  h2 span {
    background: #fff;
    padding: 0 10px;
  }

  header {
    line-height: 1.5;
  }
</style>
