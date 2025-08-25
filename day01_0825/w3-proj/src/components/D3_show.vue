<template>
    <!-- 요소는 존재, 보이고/감추고 -->
    <div v-show="showDiv">
엘리먼트를 감출수있어요
    </div>

    <!-- if와 show 비교문 -->
     <p>
        Set the 'showDiv' data property to 'false',
        and run the code again. Right click this green p element, 
        choose 'Inspect' or 'Inspect element' 
        and you can see that the div element with v-show still exist,
         it is only the CSS display property that is set to 'none',
          and the div with v-if is destroyed.
     </p>
     <div v-show="showDiv">div태그 보이게/감추게</div>
     <div v-if="showDiv">div 태그를 요소생성/비생성</div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
</script>

<style lang="scss" scoped>

    #app {
      border: black dashed 1px;
      width: 80%;
      padding: 0 20px 20px 20px;
    }
    #app div {
      padding: 20px;
      margin: 10px;
      display: inline-block;
      font-weight: bold;
      border: solid black 1px;
    }
    #app p {
      padding: 10px;
      background-color: rgb(200, 246, 200);
    }

</style>