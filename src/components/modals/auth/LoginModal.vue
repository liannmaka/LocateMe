<script setup>
import BaseLayout from '../BaseLayout.vue'
import Button1 from '../../buttons/Button1.vue';
import StoreUtils from '../../../utils/storeUtils';
import PhoneNumberInput from '../../inputs/PhoneNumberInput.vue'
import { computed, defineEmits, ref } from 'vue';

const phone = ref("")
const store = StoreUtils

const emit =  defineEmits(['close'])
const close = (value) => {
    emit('close', value)
}


const authStage = computed(() => { return store.get('auth', 'getAuthStage') })

</script>

<template>
    <BaseLayout v-slot:modal-child>
        <div class="modal-child-wrapper flex items-start justify-center lg:items-center md:items-center">
            <div class="modal-child lg:mt-0 md:mt-0 mt-16 w-[400px]  bg-white p-2 rounded-3xl">

                <div v-if="authStage === '1'" class="animate__animated animate__fadeIn animate__faster">

                    <div class="p-4 mb-2 relative">
                        <div class="flex justify-between">
                            <div>
                                <div class="text-left py-1 text-xl antialiased font-bold">SignUp/Login to Continue</div>
                                <div class="text-left py-1 mb-3 antialiased text-sm text-slate-500">Let's
                                    start with
                                    your whatsapp
                                    number</div>
                            </div>
                            <svg @click="close(false)" width="30" height="30" viewBox="0 0 50 50"
                            class="cursor-pointer hover:scale-105" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M34.0529 18.6683L27.7188 25L34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6165 32.6923 34.6165C32.4396 34.6165 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6165 17.3077 34.6165C17.055 34.6165 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683ZM50 25C50 29.9445 48.5338 34.778 45.7867 38.8892C43.0397 43.0005 39.1352 46.2048 34.5671 48.097C29.9989 49.9892 24.9723 50.4843 20.1227 49.5196C15.2732 48.555 10.8187 46.174 7.32234 42.6777C3.82603 39.1814 1.44501 34.7268 0.480379 29.8773C-0.484251 25.0277 0.0108321 20.0011 1.90302 15.4329C3.79521 10.8648 6.99952 6.96029 11.1108 4.21326C15.222 1.46622 20.0555 0 25 0C31.6283 0.00699956 37.983 2.64317 42.6699 7.33006C47.3568 12.017 49.993 18.3717 50 25ZM46.1538 25C46.1538 20.8162 44.9132 16.7263 42.5888 13.2476C40.2644 9.76882 36.9606 7.05748 33.0952 5.45639C29.2299 3.85531 24.9765 3.43639 20.8731 4.25262C16.7697 5.06884 13.0004 7.08355 10.042 10.042C7.08356 13.0004 5.06885 16.7696 4.25263 20.8731C3.4364 24.9765 3.85532 29.2299 5.4564 33.0952C7.05749 36.9606 9.76883 40.2644 13.2476 42.5888C16.7263 44.9132 20.8162 46.1538 25 46.1538C30.6084 46.1475 35.9853 43.9167 39.951 39.951C43.9167 35.9853 46.1475 30.6084 46.1538 25Z"
                                fill="black" />
                        </svg>

                        </div>

                        <div>
                            <PhoneNumberInput
                             v-model="phone"
                             />
                        </div>


                      <!--                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Phone-->
<!--                            Number</label>-->
<!--                        <div class="relative mt-2  shadow-sm flex">-->
<!--                            <div class="inset-y-0 left-0 flex items-center">-->
<!--                                <label for="currency" class="sr-only">Country code</label>-->
<!--                                <select id="currency" name="currency"-->
<!--                                    class="h-full max-w-24 lg:max-w-36 rounded-s-md bg-transparent py-0 pl-2 pr-7 text-black border-2 border-r-0 border-black focus:outline-none focus:ring-none sm:text-sm">-->
<!--                                    <option>NGN (+234)</option>-->
<!--                                </select>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; <div class="pointer-events-none inset-y-0 right-0 flex items-center pl-3">-->
<!--                                <span class="text-gray-500 sm:text-sm">+234</span>-->
<!--                            </div> &ndash;&gt;-->
<!--                            <input type="tel" name="phone" id="phone" placeholder="phone number"-->
<!--                                class="block w-full rounded-e-md  py-2 pl-3 pr-20 text-black border-2 border-black focus:outline-none focus:ring-none placeholder:text-gray-400 sm:text-sm sm:black">-->
<!--                        </div>-->
                    </div>
                    <div class="p-5">
                        <Button1 btn-type="button" btn-text="Continue" @click="store.commit('auth', 'authStage', '2')">
                        </Button1>
                    </div>

                    <div class="py-3 mt-5">
                    
                    <p class="text-center word-break text-sm text-slate-500">  
                        We’ll send a code to your whatsapp to confirm your number. Standard message and data rates apply. Privacy Policy

                    </p>
                </div>


                </div>

                <div v-else class="animate__animated animate__fadeIn animate__faster">

                    <div class="p-4 mb-5 relative">

                        <div class="flex justify-between">
                            <div class="text-left py-1 cursor-pointer hover:scale-105 text-xl antialiased font-bold flex items-center"
                            @click="store.commit('auth', 'authStage', '1')">
                            <svg width="17" height="17" viewBox="0 0 17 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.0958 1.12323L13.097 1.1237L13.0879 1.13481L0.587858 16.4087L0.587808 16.4088C0.416823 16.617 0.280783 16.8649 0.187838 17.1384C0.0948944 17.4119 0.046978 17.7054 0.046978 18.0019C0.046978 18.2984 0.0948944 18.5919 0.187838 18.8654C0.280783 19.1389 0.416823 19.3868 0.587808 19.595L0.587858 19.5951L13.0879 34.869C13.4324 35.29 13.8974 35.524 14.3797 35.524C14.862 35.524 15.327 35.29 15.6716 34.869C16.0163 34.4478 16.2111 33.8748 16.2111 33.2758C16.2111 32.6769 16.0163 32.1039 15.6716 31.6827L4.49812 18.0297L4.47382 18L4.49812 17.9703L15.6731 4.31733C16.0178 3.89611 16.2126 3.32312 16.2126 2.72417C16.2126 2.12521 16.0178 1.55222 15.6731 1.131C15.3286 0.710037 14.8636 0.475971 14.3813 0.475971C13.9019 0.475971 13.4397 0.707161 13.0958 1.12323Z"
                                    fill="black" stroke="black" stroke-width="0.09375" />
                            </svg>
                            Back
                        </div>
                            <svg @click="close(false)" width="30" height="30" viewBox="0 0 50 50"
                            class="cursor-pointer hover:scale-105" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M34.0529 18.6683L27.7188 25L34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6165 32.6923 34.6165C32.4396 34.6165 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6165 17.3077 34.6165C17.055 34.6165 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683ZM50 25C50 29.9445 48.5338 34.778 45.7867 38.8892C43.0397 43.0005 39.1352 46.2048 34.5671 48.097C29.9989 49.9892 24.9723 50.4843 20.1227 49.5196C15.2732 48.555 10.8187 46.174 7.32234 42.6777C3.82603 39.1814 1.44501 34.7268 0.480379 29.8773C-0.484251 25.0277 0.0108321 20.0011 1.90302 15.4329C3.79521 10.8648 6.99952 6.96029 11.1108 4.21326C15.222 1.46622 20.0555 0 25 0C31.6283 0.00699956 37.983 2.64317 42.6699 7.33006C47.3568 12.017 49.993 18.3717 50 25ZM46.1538 25C46.1538 20.8162 44.9132 16.7263 42.5888 13.2476C40.2644 9.76882 36.9606 7.05748 33.0952 5.45639C29.2299 3.85531 24.9765 3.43639 20.8731 4.25262C16.7697 5.06884 13.0004 7.08355 10.042 10.042C7.08356 13.0004 5.06885 16.7696 4.25263 20.8731C3.4364 24.9765 3.85532 29.2299 5.4564 33.0952C7.05749 36.9606 9.76883 40.2644 13.2476 42.5888C16.7263 44.9132 20.8162 46.1538 25 46.1538C30.6084 46.1475 35.9853 43.9167 39.951 39.951C43.9167 35.9853 46.1475 30.6084 46.1538 25Z"
                                fill="black" />
                        </svg>

                        </div>
                        
                        <div class="text-center py-1 text-xl antialiased font-bold">Check your phone</div>
                        <div class="text-center py-1 mb-3 antialiased text-base text-sm text-slate-500">we’ve sent the
                            code to your whatsapp</div>
                        

                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Enter
                            Code Here</label>
                        <div class="relative mt-2  shadow-sm flex">
                            <input type="number" name="otp" id="otp" placeholder="Enter verification code"
                                class="block w-full rounded-md  py-2 pl-3 pr-20 text-black border-2 border-black focus:outline-none focus:ring-none placeholder:text-gray-400 sm:text-sm sm:black">
                        </div>
                    </div>
                    <div class="p-5">
                        <Button1 btn-type="button" btn-text="Verify">
                        </Button1>
                    </div>
                    <div class="py-3 mt-5">
                    
                    <p class="text-center word-break text-sm text-slate-500">By creating an account, you
                        automatically
                        accept our
                        <span class="underline">Terms of service</span>, <span class="underline">Privacy Policy</span>
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
    background-color: transparent
}

.modal-child {}

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