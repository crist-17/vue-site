<script setup>

</script>

<template>


  <p>경로 들어가기  {{ $route.fullPath }}</p> 
   <nav>
    <ul>
   
     <RouterLink to="/study"> <li>스터디</li></RouterLink>
      <!-- <RouterLink to="/wd"><li>Go to Ex_WebDesign</li></RouterLink> -->
    </ul>
  
    
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

li {
  border: 1px solid gray;
  box-sizing: border-box;
  background-color: aqua;
  list-style: none
  
  
}

</style>
