<script setup>
  import { UserPlus, Group } from "@iconoir/vue";
  import { ref, defineEmits } from "vue";

  const showFriendModal = ref(false);
  const currentFriend = ref(null);

  defineEmits(["open-modal"]);

  function trackFriend(obj) {
    const friend = document.getElementById("friend");
    currentFriend.value = obj;
    // friend.classList.toggle("h-0");
    // friend.classList.toggle("hidden");
    if (friend.classList.contains("hidden"))
      friend.classList.toggle("hidden");
  }

  function close() {
    const friend = document.getElementById("friend");
    friend.classList.add("hidden");
  }

  const friends = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s",
      name: "CodeX Kelvin",
      last_seen: "3hrs ago",
      location: [6.5244, 3.3792]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s",
      name: "CodeX Kelvin",
      last_seen: "3hrs ago",
      location: [6.9244, 3.5792]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s",
      name: "Pascal Chidi",
      last_seen: "1hr ago",
      location: [6.5344, 3.3]
    },
    {
      img: "https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png",
      name: "Chisomaga Onwukaife",
      last_seen: "2hrs ago",
      location: [6.1044, 3.1292]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s",
      name: "Clark Kent",
      last_seen: "active",
      location: [6.5244, 3.3702]
    },
    {
      img: "https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png",
      name: "Chizzy Jnr",
      last_seen: "30hrs ago",
      location: [4.5244, 3.3792]
    }
  ];

  // #1C1C56
</script>

<template>
  <div
    v-if="!showFriendModal"
    class="cursor-pointer p-2 z-40 absolute right-2 lg:right-12 bg-white top-[130px] hover:scale-105 shadow-md rounded-full"
    @click="showFriendModal = true"
  >
    <Group
      width="24"
      color="#000"
    ></Group>
  </div>
  <div
    v-else
    class="rounded-md items-start justify-start w-full flex-col transition ease-in-out delay-150 duration-300 absolute z-40 lg:right-0 lg:w-[30rem] h-screen bg-white flex p-2"
  >
    <section
      class="flex items-center justify-start bg-white w-full gap-5 p-2"
    >
      <input
        class="w-full outline-black ring-1 ring-black text-xs rounded-md border-gray-950 p-2"
        placeholder="Search For Friends"
      />

      <button
        @click="showFriendModal = false"
        class="p-1 text-sm font-bold"
      >
        Cancel
      </button>

      <!--      <svg  width="24" height="30" viewBox="0 0 50 50" class="cursor-pointer hover:scale-105" fill="none"-->
      <!--           xmlns="http://www.w3.org/2000/svg">-->
      <!--        <path-->
      <!--            d="M34.0529 18.6683L27.7188 25L34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6165 32.6923 34.6165C32.4396 34.6165 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6165 17.3077 34.6165C17.055 34.6165 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683ZM50 25C50 29.9445 48.5338 34.778 45.7867 38.8892C43.0397 43.0005 39.1352 46.2048 34.5671 48.097C29.9989 49.9892 24.9723 50.4843 20.1227 49.5196C15.2732 48.555 10.8187 46.174 7.32234 42.6777C3.82603 39.1814 1.44501 34.7268 0.480379 29.8773C-0.484251 25.0277 0.0108321 20.0011 1.90302 15.4329C3.79521 10.8648 6.99952 6.96029 11.1108 4.21326C15.222 1.46622 20.0555 0 25 0C31.6283 0.00699956 37.983 2.64317 42.6699 7.33006C47.3568 12.017 49.993 18.3717 50 25ZM46.1538 25C46.1538 20.8162 44.9132 16.7263 42.5888 13.2476C40.2644 9.76882 36.9606 7.05748 33.0952 5.45639C29.2299 3.85531 24.9765 3.43639 20.8731 4.25262C16.7697 5.06884 13.0004 7.08355 10.042 10.042C7.08356 13.0004 5.06885 16.7696 4.25263 20.8731C3.4364 24.9765 3.85532 29.2299 5.4564 33.0952C7.05749 36.9606 9.76883 40.2644 13.2476 42.5888C16.7263 44.9132 20.8162 46.1538 25 46.1538C30.6084 46.1475 35.9853 43.9167 39.951 39.951C43.9167 35.9853 46.1475 30.6084 46.1538 25Z"-->
      <!--            fill="black" />-->
      <!--      </svg>-->
    </section>
    <section
      class="w-full flex flex-col gap-10 overflow-scroll p-2"
    >
      <!--      <ul class="flex justify-around flex-wrap rounded-md">-->
      <!--        <li class="text-xs bg-amber-500 p-2 rounded-full text-white">Friends</li>-->
      <!--        <li class="text-xs p-2">Request</li>-->
      <!--        <li class="text-xs p-2">Invites</li>-->
      <!--      </ul>-->

      <div class="w-full rounded-md shadow-md">
        <h3 class="py-3 p-3 text-md text-neutral-900">
          Friends
        </h3>
        <section
          class="w-full p-2 flex flex-col h-auto justify-center"
        >
          <div>
            <div
              class="flex items-center flex-col mt-5 justify-center gap-2"
            >
              <img
                src="../../assets/nothing.png"
                width="120"
                height="120"
                alt="no friends"
              />
              <p class="text-sm font-light">
                No friends to show.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="w-full rounded-md shadow-md">
        <h3 class="py-3 p-3 text-md text-neutral-900">
          Invites
        </h3>
        <section
          class="w-full p-2 flex flex-col h-auto justify-center"
        >
          <div>
            <div
              class="flex items-center flex-col mt-5 justify-center gap-2"
            >
              <img
                src="../../assets/nothing.png"
                width="120"
                height="120"
                alt="no friends"
              />
              <p class="text-sm font-light">
                No friends to show.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="w-full rounded-md shadow-md">
        <h3 class="py-3 p-3 text-md text-neutral-900">
          Request
        </h3>
        <section
          class="w-full p-2 flex flex-col h-auto justify-center"
        >
          <div>
            <div
              class="flex items-center flex-col mt-5 justify-center gap-2"
            >
              <img
                src="../../assets/nothing.png"
                width="120"
                height="120"
                alt="no friends"
              />
              <p class="text-sm font-light">
                No friends to show.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>

  <section
    class="flex items-center z-30 absolute bg-[#fafafa] flex-col p-1 bottom-[70px] lg:bottom-10 rounded-t-3xl lg:rounded-none lg:shadow-lg lg:justify-start lg:right-5 w-full lg:w-auto gap-1"
  >
    <div
      class="w-full bg-[#fcfcfc] absolute hidden transition-all duration-300"
      id="friend"
    >
      <svg
        @click="close"
        width="24"
        height="30"
        viewBox="0 0 50 50"
        class="cursor-pointer absolute right-3 top-1 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.0529 18.6683L27.7188 25L34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6165 32.6923 34.6165C32.4396 34.6165 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6165 17.3077 34.6165C17.055 34.6165 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683ZM50 25C50 29.9445 48.5338 34.778 45.7867 38.8892C43.0397 43.0005 39.1352 46.2048 34.5671 48.097C29.9989 49.9892 24.9723 50.4843 20.1227 49.5196C15.2732 48.555 10.8187 46.174 7.32234 42.6777C3.82603 39.1814 1.44501 34.7268 0.480379 29.8773C-0.484251 25.0277 0.0108321 20.0011 1.90302 15.4329C3.79521 10.8648 6.99952 6.96029 11.1108 4.21326C15.222 1.46622 20.0555 0 25 0C31.6283 0.00699956 37.983 2.64317 42.6699 7.33006C47.3568 12.017 49.993 18.3717 50 25ZM46.1538 25C46.1538 20.8162 44.9132 16.7263 42.5888 13.2476C40.2644 9.76882 36.9606 7.05748 33.0952 5.45639C29.2299 3.85531 24.9765 3.43639 20.8731 4.25262C16.7697 5.06884 13.0004 7.08355 10.042 10.042C7.08356 13.0004 5.06885 16.7696 4.25263 20.8731C3.4364 24.9765 3.85532 29.2299 5.4564 33.0952C7.05749 36.9606 9.76883 40.2644 13.2476 42.5888C16.7263 44.9132 20.8162 46.1538 25 46.1538C30.6084 46.1475 35.9853 43.9167 39.951 39.951C43.9167 35.9853 46.1475 30.6084 46.1538 25Z"
          fill="black"
        />
      </svg>
      <div
        class="flex items-center justify-start gap-2 w-full"
      >
        <img
          :src="currentFriend?.img"
          alt="profile_img"
          class="flex w-16 h-16 rounded-full items-center justify-center gap-1 bg-white cursor-pointer p-3 hover:bg-gray-100"
        />
        <div
          class="flex flex-col items-start justify-start gap-1 w-auto"
        >
          <p class="text-xs text-gray-500">
            {{ currentFriend?.name }}
          </p>
          <p class="text-xs text-gray-500">
            Last active {{ currentFriend?.last_seen }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex bg-[#fafafa] overflow-scroll hide-scroll-bar"
    >
      <div
        class="hover:scale-105 rounded-full flex items-center justify-center gap-1 cursor-pointer p-2"
      >
        <UserPlus
          width="24"
          color="#000"
          @click="$emit('open-modal')"
        ></UserPlus>
      </div>
      <img
        v-for="(i, index) in friends"
        :key="index"
        @click="trackFriend(i)"
        :src="i.img"
        :alt="index"
        class="flex w-16 h-16 rounded-full items-center justify-center gap-1 cursor-pointer p-3 hover:bg-gray-100"
      />
    </div>
  </section>
</template>

<style scoped>
  .hide-scroll-bar::-webkit-scrollbar {
    display: none;
  }
</style>
