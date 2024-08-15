<script setup>
import {Search, UserPlus} from "@iconoir/vue";
import {ref} from "vue";

const isSearching = ref(false);

const friends = [
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s'},
  {name:'https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s'},
  {name:'https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png'},
]
// #1C1C56
</script>

<template>
  <div class="rounded-md items-start justify-start flex-col transition ease-in-out delay-150 duration-300 absolute z-40 w-full md:w-auto lg:w-auto bottom-20 md:bottom-2 lg:bottom-2 bg-white md:right-2 lg:right-2 flex p-2">

    <section class="flex items-center justify-start bg-white w-full h-auto gap-1 overflow-scroll">
      <div class="">
        <svg v-if="isSearching" @click="isSearching=false" width="24" height="30" viewBox="0 0 50 50" class="cursor-pointer hover:scale-105 ml-3" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M34.0529 18.6683L27.7188 25L34.0529 31.3317C34.2316 31.5104 34.3733 31.7225 34.47 31.956C34.5667 32.1894 34.6165 32.4396 34.6165 32.6923C34.6165 32.945 34.5667 33.1952 34.47 33.4286C34.3733 33.6621 34.2316 33.8742 34.0529 34.0529C33.8742 34.2316 33.6621 34.3733 33.4286 34.47C33.1952 34.5667 32.945 34.6165 32.6923 34.6165C32.4396 34.6165 32.1894 34.5667 31.956 34.47C31.7225 34.3733 31.5104 34.2316 31.3317 34.0529L25 27.7187L18.6683 34.0529C18.4896 34.2316 18.2775 34.3733 18.044 34.47C17.8106 34.5667 17.5604 34.6165 17.3077 34.6165C17.055 34.6165 16.8048 34.5667 16.5714 34.47C16.3379 34.3733 16.1258 34.2316 15.9471 34.0529C15.7684 33.8742 15.6267 33.6621 15.53 33.4286C15.4333 33.1952 15.3836 32.945 15.3836 32.6923C15.3836 32.4396 15.4333 32.1894 15.53 31.956C15.6267 31.7225 15.7684 31.5104 15.9471 31.3317L22.2813 25L15.9471 18.6683C15.5863 18.3074 15.3836 17.818 15.3836 17.3077C15.3836 16.7974 15.5863 16.308 15.9471 15.9471C16.308 15.5863 16.7974 15.3835 17.3077 15.3835C17.818 15.3835 18.3074 15.5863 18.6683 15.9471L25 22.2812L31.3317 15.9471C31.5104 15.7684 31.7225 15.6267 31.956 15.53C32.1894 15.4333 32.4396 15.3835 32.6923 15.3835C32.945 15.3835 33.1952 15.4333 33.4286 15.53C33.6621 15.6267 33.8742 15.7684 34.0529 15.9471C34.2316 16.1258 34.3733 16.3379 34.47 16.5714C34.5667 16.8048 34.6165 17.055 34.6165 17.3077C34.6165 17.5604 34.5667 17.8106 34.47 18.044C34.3733 18.2775 34.2316 18.4896 34.0529 18.6683ZM50 25C50 29.9445 48.5338 34.778 45.7867 38.8892C43.0397 43.0005 39.1352 46.2048 34.5671 48.097C29.9989 49.9892 24.9723 50.4843 20.1227 49.5196C15.2732 48.555 10.8187 46.174 7.32234 42.6777C3.82603 39.1814 1.44501 34.7268 0.480379 29.8773C-0.484251 25.0277 0.0108321 20.0011 1.90302 15.4329C3.79521 10.8648 6.99952 6.96029 11.1108 4.21326C15.222 1.46622 20.0555 0 25 0C31.6283 0.00699956 37.983 2.64317 42.6699 7.33006C47.3568 12.017 49.993 18.3717 50 25ZM46.1538 25C46.1538 20.8162 44.9132 16.7263 42.5888 13.2476C40.2644 9.76882 36.9606 7.05748 33.0952 5.45639C29.2299 3.85531 24.9765 3.43639 20.8731 4.25262C16.7697 5.06884 13.0004 7.08355 10.042 10.042C7.08356 13.0004 5.06885 16.7696 4.25263 20.8731C3.4364 24.9765 3.85532 29.2299 5.4564 33.0952C7.05749 36.9606 9.76883 40.2644 13.2476 42.5888C16.7263 44.9132 20.8162 46.1538 25 46.1538C30.6084 46.1475 35.9853 43.9167 39.951 39.951C43.9167 35.9853 46.1475 30.6084 46.1538 25Z"
              fill="black" />
        </svg>
      </div>
      <div v-if="!isSearching" class="cursor-pointer p-2 hover:scale-105 shadow-md rounded-full" @click="isSearching=true">
        <Search width="24" color="#000"></Search>
      </div>
      <img v-for="(i, index) in  friends" :key="index" :src="i.name" :alt="index" class="flex w-16 h-16 rounded-full items-center justify-center gap-1 bg-white cursor-pointer p-2 hover:bg-green-500" />
      <div class="hover:scale-105 shadow-md rounded-full flex items-center justify-start gap-1 bg-white cursor-pointer p-2 w-auto">
        <UserPlus width="24" color="#000"></UserPlus>
      </div>
    </section>
    <section v-if="isSearching" class="w-full p-2 flex flex-col h-auto justify-center">
      <input class="w-full h-11 outline-black rounded-md border-2 border-gray-950 p-2" placeholder="Search For Friends" />

      <div>
        <div class="flex items-center flex-col mt-5 justify-center gap-2">
          <img src="../../assets/nothing.png" width="200" height="200" />
          <p class="text-sm font-bold">No friends to show.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>