<script setup>
  import SideBar from "../components/navigations/SideBar.vue";
  import LoginModal from "../components/modals/auth/LoginModal.vue";
  import LocationBar from "../components/location/LocationBar.vue";
  import { UserCircle } from "@iconoir/vue";
  import StoreUtils from "../utils/storeUtils";
  import { ref, onMounted } from "vue";
  import NavBar from "../components/navigations/BottomNavBar.vue";
  import { router } from "@/router/index.js";
  import { initFlowbite } from "flowbite";
  import Friends from "@/components/friends/Friends.vue";
  import RoutingAppSample from "@/components/location/RoutingAppSample.vue";

  const user = StoreUtils.get("auth", "getCurrentUser");
  const showLoginModal = ref(false);

  const handleClose = value => {
    showLoginModal.value = value;
  };

  const handleShowUserModal = () => {
    if (!user) showLoginModal.value = true;
  };

  onMounted(() => {
    initFlowbite();
  });
</script>

<template>
  <LoginModal
    v-if="showLoginModal"
    @close="handleClose"
  ></LoginModal>
  <div class="relative flex">
    <!--positon - absolute-->
    <!--this sidebar displays only on desktop ang larger screens-->
    <NavBar />
    <SideBar />
    <Friends />
    <RoutingAppSample />

    <div
      class="absolute p-2 rounded right-0 lg:right-10 z-20 top-3 flex items-start gap-2"
    >
      <div
        class="flex flex-col items-end justify-center gap-2"
      >
        <div
          @click="handleShowUserModal"
          class="shadow-sm flex rounded-full items-center gap-1 bg-white cursor-pointer p-2 hover:bg-green-500"
        >
          <UserCircle
            width="24"
            color="#000"
          ></UserCircle>
          <p class="text-sm">
            {{ user ? user : "Login/Signup" }}
          </p>
        </div>
        <LocationBar></LocationBar>
      </div>
    </div>

    <slot name="screens"></slot>
  </div>
</template>

<style scoped></style>
