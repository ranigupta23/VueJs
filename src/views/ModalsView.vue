<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal=true">Show modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
            <h1>This is a modal</h1>
            <p>lorem
            </p>
            <button @click="showModal = false">Hide modal</button>
        </div>

        </teleport>
       
    </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal=ref(false)
</script>

<style>
.modal{
    background:beige;
    padding:10px;
    postion:absolute;
    left:0;
    right:0;
    width:100%;
    height:100%;

}
</style>