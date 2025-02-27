<template>
      <div class="user-data">
        {{ userData.name }} @{{ userData.username }} |
        Online:{{ online }}
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/modals">Modals</RouterLink>
      </nav>
      <!-- <KeepAlive>
        <RouterView />
      </KeepAlive> -->

      <!-- <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view> -->
      <RouterView :userData="userData"/>
</template>

<script setup>
/*
imports
*/
import { reactive ,provide } from 'vue'
import { useOnline } from '@vueuse/core'



/*
user data
*/

const userData=reactive({
  name:"Danny",
  username:"dannyconell"

})
provide('userData',userData)
const online = useOnline()
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data{
  position: absolute;
  background-color: beige;
  color:black;
  top:0;
  right:0;
  font-size: 12px;
  padding:5px;
}

</style>
