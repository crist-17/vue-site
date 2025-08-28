<template>
    <h3>타이핑 컨택트 완료</h3>
<!-- 객체 배열을 이용한 리스트 구현 -->
    <ol>
        <li v-for="it in items" :key="it.id">
            {{ it.message }}
        </li>
    </ol>
    <hr>

    <!-- 문자열 배열을 이용한 리스트 구현 -->
    <li v-for="food in manyFoods">{{ food }}</li>
    <hr>

    <!-- assets 에 저장한 이미지 import로 가져오기 -->
    <div class="item">
            <div class="foodStyle" v-for="food in food_assets" :key="food.name">
                <img :src="food.src" alt="food.name">
                <li>{{ food.name }}</li>
            </div>
            <hr>
            <!-- public 으로 링크이미지 가져오기 -->
            <div class="foodStyle2" v-for="food in food_public" :key="food.name">
                <img :src="food.src" alt="food.name">
                <li>{{ food.name }}</li>
            </div>
    </div>



</template>


<!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->

<script setup>
import { ref } from 'vue';
import img_burrito from '../../assets/img_burrito.svg'
import img_cake from '../../assets/img_cake.svg'
import img_fish from '../../assets/img_fish.svg'
import img_pizza from '../../assets/img_pizza.svg'
import img_rice from '../../assets/img_rice.svg'
import img_salad from '../../assets/img_salad.svg'
import img_soup from '../../assets/img_soup.svg'

const items = ref([{message: 'Foo'}, {message: 'Bar'}, {message: 'Rec'}])
const manyFoods = ref(
    [
        '브리또',
        '샐러드',
        '케끼',
        '슾',
        '생선',
        '피짜',
        '밥'
    ]
)

const food_assets = ref(
    [
        {name: '브리또', src: img_burrito},
        {name: '샐러드', src: img_salad},
        {name: '케끼', src: img_cake},
        {name: '슾', src: img_soup},
        {name: '생선', src: img_fish},
        {name: '피짜', src: img_pizza},
        {name: '밥', src: img_rice},
    ]
)

const food_public = ref(
    [
        {name: '브리또', src: "images/img_burrito.svg"},
        {name: '샐러드', src: "images/img_salad.svg"},
        {name: '케끼', src: "images/img_cake.svg"},
        {name: '슾', src: "images/img_soup.svg"},
        {name: '생선', src: "images/img_fish.svg"},
        {name: '피짜', src: "images/img_pizza.svg"},
        {name: '밥', src: "/mages/img_rice.svg"},

    ]
)

</script>


<!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->

<style scoped>

.item {
    display: grid;
    grid-template-columns: repeat(3,1fr);
}

.foodStyle > img {
    width: 50%;
}
.foodStyle2 > img {
    width: 30%;
}
</style>