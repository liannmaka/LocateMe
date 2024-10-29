<script setup>
  defineProps({
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const TYPES = [
          "text",
          "password",
          "email",
          "number",
          "url",
          "tel",
          "search",
          "color",
          "date"
        ];
        const isPresent = types => type =>
          types.includes(type);
        const isValid = isPresent(TYPES)(value);
        if (!isValid) {
          console.warn(`allowed variants are ${TYPES}`);
        }
        return isValid;
      }
    },
    ariaRequired: {
      type: Boolean,
      default: true
    },
    max: Number,
    min: Number,
    maxLength: Number
  });
</script>

<template>
  <label class="w-full">
    <div
      class="mb-1 text-[var(--bice-blue)] text-[13px] leading-snug font-normal"
    >
      {{ label }}
      <span v-if="required">*</span>
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      :aria-required="ariaRequired"
      :max="max"
      :min="min"
      :maxlength="maxLength"
      autocomplete="on"
      class="w-full py-2 px-3 text-xs rounded-md border-[1.5px] border-[#ccc] focus:border-[#ccc] focus:ring-0"
    />
  </label>
</template>

<style scoped></style>
