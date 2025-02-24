<template>
  <div class="post-detail">
     <h1>This is post page</h1>
     <p>Display the content of post with ID of  {{$route.params.id}}</p>
     <div>
         <button @click="showPostId">Show Post ID</button>
     </div>
     <div>
         <button @click="goHomeIn3seconds">Go Home in 3 seconds</button>
     </div>
     <div>
         <button @click="goToFirstPost">Go To First Post</button>
     </div>
     <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
 </template>

 <script setup>
 import {useRoute,useRouter} from 'vue-router'
 const route=useRoute()
 const router=useRouter()
 const showPostId=()=>{
   // console.log("Show Post Id")
   alert(`The ID of this post is : ${route.params.id}`)
 }
 const goHomeIn3seconds=()=>{
   setTimeout(()=>{
      // router.push("/")
      // if we want push by name
      router.push({name:'home'})
   },3000)
 }
 const goToFirstPost=()=>{
      router.push({
         name:'postDetail',
         params:{
            id:'id1'
         }
      })
  
 }
</script>

 
