<template>
    <div class="h-screen w-full modal_wrapper fixed z-50">
       <slot name="modal-child"></slot>
    </div>

</template>
<script setup></script>
<style scoped>
.modal_wrapper{
    background-color: #000000a3;
    overflow:scroll;
}
</style>