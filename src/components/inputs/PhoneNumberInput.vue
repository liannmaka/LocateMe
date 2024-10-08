<script setup>
  import { computed } from "vue";
  import { VueTelInput } from "vue-tel-input";
  import "vue-tel-input/dist/vue-tel-input.css";

  const props = defineProps({
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter a phone number"
    }
  });

  const emit = defineEmits(["update:modelValue"]);

  const phone = computed({
    get() {
      return props.modelValue;
    },
    set(phone) {
      emit("update:modelValue", phone);
    }
  });
</script>

<template>
  <div>
    <label
      class="text-[var(--bice-blue)] text-[13px] font-normal"
    >
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <vue-tel-input
      class="mt-[3px]"
      v-model="phone"
      :onlyCountries="['ng', 'ie', 'tr', 'ca']"
      :defaultCountry="234"
      :validCharactersOnly="true"
      mode="international"
      :disabled="disabled"
      :dropdownOptions="{
        showFlags: true,
        showDialCodeInList: true
      }"
      :inputOptions="{
        placeholder: placeholder,
        showDialCode: true,
        maxlength: 17
      }"
    ></vue-tel-input>
  </div>
</template>

<style scoped>
  .vue-tel-input:focus-within {
    box-shadow: none;
  }

  .vue-tel-input {
    border-radius: 5px;
    border: 1.5px solid #ccc;
    padding: 0.5px 0;
  }
</style>
