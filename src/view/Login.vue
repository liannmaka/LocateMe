<script setup>
  import { ref } from "vue";
  import onBoardingLayout from "../layout/onBoardingLayout.vue";
  import FormWrapper from "../layout/FormWrapper.vue";
  import PhoneNumberInput from "../components/inputs/PhoneNumberInput.vue";
  import Button1 from "../components/buttons/Button1.vue";

  const phone = ref("");
</script>

<template>
  <onBoardingLayout>
    <div
      class="w-full h-full flex justify-center items-center"
    >
      <FormWrapper
        pageTitle="Welcome to LocateMe"
        paragraphTitle="Enter your WhatsApp Number"
        footerNote="Don't have an account?"
        footerLink="Get Started"
        to="/sign-up"
      >
        <form>
          <div>
            <PhoneNumberInput
              label="WhatsApp Number"
              placeholder="Enter number"
              v-model="phone"
              required
            />
            <span
              class="text-[13px] text-[var(--bice-blue)]"
              >(Please enter your active whatsapp number to
              receive the verification code)</span
            >
          </div>
          <div class="mt-5">
            <Button1
              btnText="Log in"
              variant="create"
              size="sm"
            />
          </div>
        </form>
      </FormWrapper>
    </div>
  </onBoardingLayout>
</template>

<style scoped></style>
