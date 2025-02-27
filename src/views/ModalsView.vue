<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input
                v-model="showDarkModals"
                 type="checkbox"
                />
            </label>
        </div>
        <!-- <pre>{{showDarkModals}}</pre> -->
        <button @click="showModal=true">Show modal</button>
        <!-- <Modal v-if="showModal" title="My modal title (via prop)"
            @hideModal="showModal=false">
            <template v-slot:title>My new title</template> -->
            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p> -->
        <!-- </Modal> -->
        <!-- <Modal v-model="showModal" title="My modal title (via prop)">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
        </Modal> -->

        <component v-model="showModal"
        :is="showDarkModals ? ModalDark : Modal "
         title="My modal title (via prop)">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
        </component>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
const showDarkModals=ref(false)
const showModal=ref(false)
</script>

