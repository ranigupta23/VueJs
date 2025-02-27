<template>
   <div class="posts">
     <h1>Posts</h1>
 
     <ul>
       <li>
         <RouterLink to="/postDetail/id1">Post 1</RouterLink>
       </li>
       <li>
         <RouterLink to="/postDetail/id2">Post 2</RouterLink>
       </li>
       <li>
         <RouterLink to="/postDetail/id3">Post 3</RouterLink>
       </li>
     </ul>
 
     <textarea v-autofocus />
     <div>
      <button @click="increaseCounter(1)" class="counter-button"
      :class="{'yellow':OddorEven==='Odd'}">{{counterData.count}}</button>
     </div>
   </div>
 </template>
 
 <script setup>
 /*
   imports
 */
 
   import { vAutofocus } from '@/directives/vAutofocus'
    import {useCounter} from '@/use/useCounter'

    const {counterData,OddorEven,increaseCounter}=useCounter()
 </script>
 
 <style scoped>
 ul {
   margin-bottom: 30px;
 }
 .counter-button{
  font-size:60px;
  width:100%;
  background-color:pink;
 }
 .counter-button.yellow{
  background-color:yellow;
 }
 </style>
