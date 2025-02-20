<template>
 <div class="home">
   <h2>{{ appTitle }}</h2>
   <!-- <h3>{{ counterTitle }}</h3> -->
   <h3>{{ counterData.title}}</h3>
    <div>
         <button @click="decreaseCounter" class="btn">-</button>
         <!-- <span class="counter">{{ counter }}</span> -->
         <span class="counter">{{ counterData.count }}</span>
         <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <!-- <input v-model="counterTitle" type="text"/> -->
      <input v-model="counterData.title" type="text"/>
    </div>
 </div>
</template>


<!-- new setup pattern -->
<script setup>
   import {ref,reactive} from 'vue'
   // non reactive data
   const appTitle="My Amazing Counter App"
   // ref
   const counter=ref(0),
   counterTitle=ref('My Counter:')
   // reactive objects
   const counterData=reactive({
      count:0,
      title:"My Counter"
   })
   // const increaseCounter=()=>{
   //       counter.value++
   //    }
   // const decreaseCounter=()=>{
   //       counter.value--
   //    }
   const increaseCounter=()=>{
         counterData.count++
      }
   const decreaseCounter=()=>{
      counterData.count--
      }
</script>

<style>
.home{
   text-align: center;
   padding:20px;
}
.btn,.counter{
   font-size: 40px;
   margin:10px;
   /* color: bisque; */
}
.edit{
   margin-top: 60px;
}
</style>
