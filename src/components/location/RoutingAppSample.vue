<script setup>
  import { DeliveryTruck } from "@iconoir/vue";
  import { ref } from "vue";

  const showCaseLogo = ref(true);
  const showSearchModal = ref(false);

  function openModal() {
    showSearchModal.value = true;
    setTimeout(() => {
      showCaseLogo.value = !showCaseLogo.value;
    }, 1000);
  }

  function closeModal() {
    showSearchModal.value = false;
    showCaseLogo.value = true;
  }
</script>

<template>
  <div
    v-if="!showSearchModal"
    class="cursor-pointer p-2 z-40 absolute right-2 lg:right-12 bg-white top-[180px] hover:scale-105 shadow-md rounded-full"
    @click="openModal"
  >
    <DeliveryTruck
      width="24"
      color="#000"
    ></DeliveryTruck>
  </div>
  <div
    v-else
    class="rounded-md items-start justify-start w-full flex-col transition ease-in-out delay-150 duration-300 absolute z-40 lg:right-0 lg:w-[30rem] h-screen bg-white flex p-2"
  >
    <div
      v-if="showCaseLogo"
      class="screen-splash h-screen w-full flex items-center justify-center"
    >
      <img
        src="https://rideralogistics.com/img/logo3.png"
        width="200"
        alt="logistics-image"
      />
    </div>
  </div>

<!--    <div v-else class="w-full">-->
<!--      <div class="flex items-center gap-2 mb-3">-->
<!--        <img src="../../assets/rideraIconremove.png" style="width: 30px"/>-->
<!--        <p class="text-xs">#1 place for your moving solution </p>-->
<!--      </div>-->
<!--      <section class="flex items-start justify-start bg-white w-full gap-5 p-2">-->
<!--        <div class="w-full flex items-center justify-center gap-2">-->
<!--          <div class="flex flex-col gap-5 w-full container">-->
<!--            <input class="w-full outline-black ring-1 ring-black text-xs rounded-md border-gray-950 p-2"  placeholder="your location" />-->
<!--            <input class="w-full outline-black ring-1 ring-black text-xs rounded-md border-gray-950 p-2"  placeholder="your destination location" />-->
<!--          </div>-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />-->
<!--          </svg>-->

<!--        </div>-->

<!--        <button @click="closeModal" class="p-1 text-sm font-bold">Cancel</button>-->
<!--      </section>-->
<!--      <section class="w-full flex flex-col gap-10 overflow-scroll p-2">-->
<!--=======-->
<!--    <div-->
<!--      v-else-->
<!--      class="w-full"-->
<!--    >-->
<!--      <section-->
<!--        class="flex items-center justify-start bg-white w-full gap-5 p-2"-->
<!--      >-->
<!--        <input-->
<!--          class="w-full outline-black ring-1 ring-black text-xs rounded-md border-gray-950 p-2"-->
<!--        />-->
<!--&gt;>>>>>> 37e48801750bde4cd6c89fbf20ef645e90c6b162-->

<!--        <button-->
<!--          @click="closeModal"-->
<!--          class="p-1 text-sm font-bold"-->
<!--        >-->
<!--          Cancel-->
<!--        </button>-->
<!--      </section>-->
<!--      <section-->
<!--        class="w-full flex flex-col gap-10 overflow-scroll p-2"-->
<!--      ></section>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped></style>
