<template>
 <button v-on:click="cnt++">++1 증가버튼{{ cnt }}</button>
<hr>

<img :src=" lightOn ? pic_bulbon : pic_bulboff " alt="on">
<button @click="lightOn = !lightOn" >ON/OFF 버튼{{ lightOn }}</button>
<hr>

<div>
    <input type="text" @input="inpCount++">
    <p>{{ inpCount }}번째 키보드타자</p>
</div>
<hr>

<!-- 색상값 -->
<div class="bg" 
@mousemove="colorVal = Math.floor(Math.random()*360)"
:style="{backgroundColor: `hsl(${colorVal}, 60%, 60%)`}">
{{colorVal}}
</div>
<hr>
<!-- 메뉴판 -->
 <div class="menu">
    <ol>
        <li v-for="food in food_assets"
        @click="imgUrl = food.src">{{food.name}}</li>
    </ol>
    <img :src="imgUrl" alt="food.name">
 </div>
<p class="enter"></p>
</template>

<script setup>
import img_burrito from '../../assets/img_burrito.svg'
import img_cake from '../../assets/img_cake.svg'
import img_fish from '../../assets/img_fish.svg'
import img_pizza from '../../assets/img_pizza.svg'
import img_rice from '../../assets/img_rice.svg'
import img_salad from '../../assets/img_salad.svg'
import img_soup from '../../assets/img_soup.svg'
import { ref } from 'vue';
import pic_bulboff from '../../assets/pic_bulboff.gif'
import pic_bulbon from '../../assets/pic_bulbon.gif'
const cnt = ref(0)

//전구 켜고끄는 토글
const lightOn = ref(false)
//키입력시 카운터 증가
const inpCount = ref(0)
//색상값
const colorVal = ref(50)
//메뉴판
const food_assets = ref(
    [{ name: '브리또', src: img_burrito },
    { name: '샐러드', src: img_cake },
    { name: '케끼', src: img_fish },
    { name: '슾', src: img_pizza },
    { name: '생선', src: img_rice },
    { name: '피짜', src: img_salad },
    { name: '밥', src: img_soup }
    ]
)
const imgUrl = ref(img_burrito)
</script>

<style setup>
.bg {
    width: 200px; 
    height: 50px;
    background-color: aqua;
}
.menu ol {
    float: left;
    width: 80px;
}
.menu > img {
    width: 40%;
    height: 40%;
}
.menu li:hover {
    background-color: bisque;
    cursor: pointer;
}
.menu {
    height: 100%;
}
.enter {
    clear:both
}
</style>