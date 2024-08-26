<script setup>
import { computed } from 'vue'
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const props = defineProps({
    label: {
        type: String,
        default: ''
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
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const phone = computed({
    get() {
        return props.modelValue
    },
    set(phone) {
        emit('update:modelValue', phone)
    }
})
</script>

<template> 
    <div class="input-wrapper">
        <label class="input-label">
            {{ label }}
            <span v-if="required">*</span>
        </label>
        <vue-tel-input 
        class="mt-2"
        v-model="phone"
        :onlyCountries="['ng', 'ie', 'tr', 'ca']"
        :defaultCountry="234"
        :validCharactersOnly ="true"
        mode="international"
        :disabled="disabled"
        :dropdownOptions ="{
            showFlags: true,
            showDialCodeInList: true,    
        }"
        :inputOptions ="{
            placeholder: 'Enter a phone number',
            showDialCode: true,
            maxlength: 17,
        }"
        ></vue-tel-input>  
    </div>
</template>

<style scoped>
.input-wrapper .input-label {
    text-transform: uppercase;
    color: rgb(84, 82, 82);
    font-size: 0.8rem;
}

.vue-tel-input:focus-within {
    box-shadow: none;
}
</style>

