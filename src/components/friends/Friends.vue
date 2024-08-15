<script setup>
import {Search, UserPlus} from "@iconoir/vue";

const friends = [
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s'},
  {name:'https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png'},
  {name:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s'},
  {name:'https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png'},
]

</script>

<template>
  <div class="friends rounded-md absolute z-20 w-full md:w-auto lg:w-auto bottom-20 md:bottom-2 lg:bottom-2 bg-white md:right-2 lg:right-2 flex p-1.5">

    <section class="flex items-center justify-start bg-white w-full h-auto gap-1 overflow-scroll">
      <div class="cursor-pointer p-2 hover:scale-105 shadow-md rounded-full">
        <Search width="24" color="#000"></Search>
      </div>
      <img v-for="(i, index) in  friends" :key="index" :src="i.name" :alt="index" class="flex w-16 h-16 rounded-full items-center justify-center gap-1 bg-white cursor-pointer p-2 hover:bg-green-500" />
      <div class="hover:scale-105 shadow-md rounded-full flex items-center justify-start gap-1 bg-white cursor-pointer p-2 w-auto">
        <UserPlus width="24" color="#000"></UserPlus>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>