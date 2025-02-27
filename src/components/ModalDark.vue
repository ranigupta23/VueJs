<template>
     <teleport to=".modals-container">
            <div v-if="modelValue" class="modal-dark">
            <!-- <h1>This is a modal</h1> -->
            <!-- <h1><slot name="title"/></h1> -->
            <h1>{{title}}</h1>
            <!-- <h1>{{props.title}}</h1> -->
            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p> -->
            <slot/>
            <!-- <button @click="$emit('hideModal')">Hide modal</button> -->
            <button @click="handleButtonClick">Hide modal</button>
        </div>

        </teleport>
    
</template>

<script setup>
/*
props
*/
// const props=defineProps({
//     title:{
//         type:String,
//         default:'No title specified'
//     }
// })
const props=defineProps({
    modelValue:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        default:'No title specified'
    }
})
console.log(props.title)

/*
emits
*/
// const emit=defineEmits(['HideModal'])
const emit=defineEmits(['update:modelValue'])
/*
/*
handle button click
*/
const handleButtonClick=()=>{
    console.log("handle button clicked")
    // emit('hideModal')
    emit('update:modelValue',false)
}
</script>

<style>
.modal-dark{
    background:#333;
    padding:10px;
    postion:absolute;
    left:0;
    right:0;
    width:100%;
    height:100%;
    color:white;

}
</style>