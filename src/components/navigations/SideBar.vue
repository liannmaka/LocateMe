<script setup>
import { onMounted } from 'vue';
import { Shop, PeopleTag, HouseRooms, Bbq, Delivery, Menu, MenuScale } from '@iconoir/vue';

function toggleMenu(toggleValue) {
    const menuOpen = document.getElementById('menu_open');
    const menuClose = document.getElementById('menu_close');
    const menuTab = document.getElementById('menu_tab');
    const menuUlTab = document.getElementById('ul_menu_tab');
    const spans = document.querySelectorAll('span')
    const mobile_menu = document.getElementById('mobile_menu')

    if (!menuOpen || !menuClose || !menuTab) {
        console.error('One or more elements not found');
        return;
    }

    const isOpen = toggleValue === 'open';

    menuTab.classList.toggle('max-w-60', isOpen);
    menuTab.classList.toggle('hidden', !isOpen);
    menuOpen.classList.toggle('hidden', isOpen);
    mobile_menu.classList.toggle('hidden', !isOpen);
    menuClose.classList.toggle('hidden', !isOpen);
    menuUlTab.classList.toggle('max-w-60', isOpen);
    mobile_menu.classList.toggle('hidden', isOpen);
    spans.forEach(span => {
        span.classList.toggle('hidden', !isOpen);
    });
}


onMounted(() => {
        toggleMenu('close')

})
</script>

<template>
     <div @click="toggleMenu('open')" id="mobile_menu" class="bg-white cursor-pointer absolute p-2 rounded right-10 lg:hidden md:hidden z-20 top-3 shadow-lg flex items-center gap-2">
            <Menu width="18" color="#000"></Menu>

            
        </div>


     <!-- refactor to be a seperate component 2-->
        <div class="transition-all hidden md:block lg:block ease-out absolute z-30 bg-white delay-10 duration-100 h-screen cursor-pointer p-2 gap-2"
                id="menu_tab">

                <ul class="transition-all ease-out delay-10 duration-100" id="ul_menu_tab">
                    <!-- hover:-translate-y-1 -->
                    <div class="relative p-2 size-12">
                        <li class="text-sm absolute flex items-center gap-2" @click="toggleMenu('open')" id="menu_open">
                            <Menu width="18" color="#000"></Menu>
                        </li>

                        <li class="text-sm absolute flex items-center gap-2 hidden" @click="toggleMenu('close')"
                            id="menu_close">
                            <MenuScale width="18" color="#000"></MenuScale>
                        </li>
                    </div>
                   
                    <li class="text-sm flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                        <PeopleTag width="18" color="#000"></PeopleTag> <span class="text-sm"> Hangis</span>
                    </li>
                    <li class="flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                        <Shop width="18" color="#000"></Shop> <span class="text-sm">Online Shop </span>
                    </li>
                    <li class="flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                        <Delivery width="18" color="#000"></Delivery> <span class="text-sm">Logistics</span>
                    </li>
                    <li class="flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                        <HouseRooms width="18" color="#000"></HouseRooms> <span class="text-sm">BM Guest</span>
                    </li>
                    <li class="flex items-center gap-2 p-2 hover:p-2 hover:scale-110 hover:bg-green-500">
                        <Bbq width="18" color="#000"></BBq><span class="text-sm">BM Chef</span>
                    </li>
                </ul>
        </div>
    <!-- refactor to be a seperate component 2-->
</template>

<style scoped></style>