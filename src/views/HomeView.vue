<template>
 <div class="home">
   <h2>{{ appTitle }}</h2>
   <h3>{{ counterData.title}}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
         <button @click="decreaseCounter(1)" class="btn">-</button>
         <span class="counter">{{ counterData.count }}</span>
         <button @click="increaseCounter(1,$event)" class="btn">+</button>
         <button @click="increaseCounter(2,$event)" class="btn">++</button>
    </div>
    <p>This Counter is {{ OddorEven }}</p>
    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input v-model="counterData.title" type="text"/>
    </div>
 </div>
</template>



<script setup>
   import {reactive,computed,watch, onBeforeMount,onMounted,onBeforeUnmount,onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated} from 'vue'
   const appTitle="My Amazing Counter App"
   onMounted(()=>{
      console.log("Do stuff related to app title")
   })
   const counterData=reactive({
      count:0,
      title:"My Counter"
   })
   // watch
   watch(()=>counterData.count,(newCount,oldCount)=>{
      if(newCount===20){
         alert('Way to go! You made it to 20!')
      }
   })
   // computed properties
   const OddorEven=computed(()=>{
      if(counterData.count%2===0) return 'Even'
      return 'Odd'
   })
   // passing parameter to methods
   const increaseCounter=(amount,event)=>{
         // console.log(amount)
         // console.log(event);
         counterData.count+=amount
      }
   const decreaseCounter=(amount)=>{
      counterData.count-=amount
      }
   
      onMounted(()=>{
      console.log("Do stuff related to counter")
   })
   
   onBeforeMount(()=>{
      console.log("OnBeforeMount")
   })
   onMounted(()=>{
      console.log("OnMounted")
   })
   onBeforeUnmount(()=>{
      console.log("OnBeforeUnmount")
   })
   onUnmounted(()=>{
      console.log("OnUnmounted")
   })
   onActivated(()=>{
      console.log('onActivated')
   })
   onDeactivated(()=>{
      console.log('onDeactivated')
   })
   onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
   })
   onUpdated(()=>{
      console.log("onUpdated")
   })
</script>

<style>
.home{
   text-align: center;
   padding:20px;
}
.btn,.counter{
   font-size: 40px;
   margin:10px;
}
.edit{
   margin-top: 60px;
}
</style>
