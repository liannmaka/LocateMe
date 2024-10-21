<script setup>
  import { ref } from "vue";
  import PhoneNumberInput from "../components/inputs/PhoneNumberInput.vue";
  import Button1 from "../components/buttons/Button1.vue";
  import Input from "../components/inputs/Input.vue";
  import onBoardingLayout from "../layout/onBoardingLayout.vue";
  import FormWrapper from "../layout/FormWrapper.vue";

  const phone = ref("");
</script>

<template>
  <onBoardingLayout>
    <div
      class="w-full h-full flex justify-center items-center"
    >
      <FormWrapper
        pageTitle="Get Started!"
        paragraphTitle="Register your details"
        footerNote="Already have an account?"
        footerLink="Login"
        to="/login"
      >
        <form>
          <div>
            <Input
              ariaLabel="firstname"
              label="First Name"
              placeholder="First name"
              required
            />
          </div>
          <div class="my-4">
            <Input
              ariaLabel="lastname"
              label="Last Name"
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <PhoneNumberInput
              placeholder="Enter number"
              label="WhatsApp Number"
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
              btnText="Create account"
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
