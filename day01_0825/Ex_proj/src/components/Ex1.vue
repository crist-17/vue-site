<template>
    <!-- 이미지 import 사용 -->
 <img v-bind:src="img_beach3"  alt="ddd">

<hr>
<!-- v-bind:style 적용 -->
<div v-bind:style="{fontSize: size2 +'px'}">너는 v-bind 글자값 속성이야</div>
<div v-bind:style="{'font-size':size3+'px'}">너는 css 글자속성</div>
<!-- v-bind 색상값 -->
<div v-bind:style="{backgroundColor:`rgb(${bgVal},100,100)`}">백그라운드색상설정</div>
<div v-bind:style="{backgroundColor: isImportant ?'lightcoral' : 'lightgray'}">백그라운드색상</div>
<!-- v-bind 클라스 -->
<div v-bind:class="className">클라스 바인드</div>
<div v-bind:class="{myClass:true}">클래스 true false</div>
<br>
<div :class="{myClass:isImportant}">클래스 important 속성여부</div>
</template>

<script setup>
import { ref } from "vue";
import img_beach3 from "../assets/img_beach3.jpg"

const size = ref("50px")
const size2 = ref(69)
const size3 = ref(30)
const bgVal = ref(180)
const isImportant = ref(true)
const className = ref("impClass")
</script>

<style lang="scss" scoped>

.myClass {
    background-color: yellow;
}

.impClass {
    border: 1px solid rebeccapurple;
}
</style>