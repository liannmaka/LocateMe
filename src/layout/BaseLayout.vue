<script setup>
  import { UserCircle } from "@iconoir/vue";
  import { ref, onMounted } from "vue";
  import { initFlowbite } from "flowbite";
  import SideBar from "../components/navigations/SideBar.vue";
  import LoginModal from "../components/modals/auth/LoginModal.vue";
  import LocationBar from "../components/location/LocationBar.vue";
  import StoreUtils from "../utils/storeUtils";
  import NavBar from "../components/navigations/BottomNavBar.vue";
  import Friends from "@/components/friends/Friends.vue";
  import RoutingAppSample from "@/components/location/RoutingAppSample.vue";
  import FriendRequestModal from "../components/modals/auth/FriendRequestModal.vue";

  const user = StoreUtils.get("auth", "getCurrentUser");
  const isModalOpen = ref(false);
  const activeView = ref(null);

  const OpenModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    activeView.value = null;
  };

  const openShowUserModal = () => {
    if (!user) OpenModal();
    activeView.value = "show-user-modal";
  };

  const openFriendRequestModal = () => {
    OpenModal();
    activeView.value = "friend-request-modal";
  };

  onMounted(() => {
    initFlowbite();
  });
</script>

<template>
  <LoginModal
    v-if="isModalOpen && activeView === 'show-user-modal'"
    @close="closeModal"
  ></LoginModal>
  <FriendRequestModal
    v-if="
      isModalOpen && activeView === 'friend-request-modal'
    "
    @close="closeModal"
  />
  <div class="relative flex">
    <!--positon - absolute-->
    <!--this sidebar displays only on desktop ang larger screens-->
    <NavBar />
    <SideBar />
    <Friends @open-modal="openFriendRequestModal" />
    <RoutingAppSample />

    <div
      class="absolute p-2 rounded right-0 lg:right-10 z-20 top-3 flex items-start gap-2"
    >
      <div
        class="flex flex-col items-end justify-center gap-2"
      >
        <div
          @click="openShowUserModal"
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
