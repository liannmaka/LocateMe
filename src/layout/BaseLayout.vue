<script setup>
import SideBar from '../components/navigations/SideBar.vue';
import LoginModal from '../components/modals/auth/LoginModal.vue';
import SignUpModal from '../components/modals/auth/SignUpModal.vue';
import LocationBar from '../components/location/LocationBar.vue';
import { UserCircle,Group } from '@iconoir/vue';
import StoreUtils from '../utils/storeUtils';
import { ref } from 'vue';
import NavBar from '../components/navigations/NavBar.vue'

const user = StoreUtils.get('auth', 'getCurrentUser')
const showLoginModal = ref(false)

const handleClose = (value) => {
    showLoginModal.value = value
}

const handleShowUserModal = () => {
    if (!user) showLoginModal.value = true
}

</script>

<template>
    <LoginModal v-if="showLoginModal" @close="handleClose"></LoginModal>
    <div class="relative flex">
        <!--positon - absolute-->
        <!--this sidebar displays only on desktop ang larger screens-->
        <NavBar/>
        <SideBar></SideBar>
        <div class="absolute p-2 rounded right-0 lg:right-10 z-40 top-3 flex items-start gap-2">
            <LocationBar></LocationBar>
            <div class="flex flex-col gap-2">
                <div @click="handleShowUserModal"
                    class="shadow-lg flex rounded items-center gap-1 bg-white cursor-pointer p-2 hover:bg-green-500">
                    <UserCircle width="28" color="#000"></UserCircle>
                    <p class="text-sm">{{ user }}</p>
                </div>
                <div
                    class="shadow-lg flex rounded items-center gap-1 bg-white cursor-pointer p-2 hover:bg-green-500">
                    <Group width="28" color="#000"></Group>
                    <p class="text-sm">{{ user }}</p>
                </div>
            </div>

        </div>


        <slot name="screens"></slot>


    </div>  
</template>

<style scoped></style>