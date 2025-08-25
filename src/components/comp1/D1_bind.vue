<script setup>
import img_beach3 from '../../assets/img_beach3.jpg'
import { ref } from 'vue';

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(180)
const isImportant = ref(true)
const className = ref("impClass")
</script>

<template>
    <!-- 이미지 import 사용 -->
    <img v-bind:src="img_beach3">
    <hr>
    <!-- v-bind:style 글자값 -->
    <div v-bind:style="{ fontSize: size }">너는 v-bind:글자크기 속성이야.</div>
    <div v-bind:style="{ fontSize: size2 + 'px' }">너는 v-bind:글자값 속성이야</div>
    <div v-bind:style="{ 'font-size': size3 + 'px' }">너는 v-bind:css 글자크기 속성이야.</div>
    <!-- v-bind:style 색상값 -->
    <div v-bind:style="{ backgroundColor: `rgb(${bgVal}, 100, 100)` }">
        백그라운드 색상값을 변수 backgroundColor: `rgb(${bgVal},100, 100)`로 적용</div>
    <div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }">
        백그라운드 색상값을 조건에 따라 다르게 사용
    </div>
    <!-- v-bind:class 클래스 -->
    <div v-bind:class="className">
        클래스 바인드</div>
    <br>
    <div v-bind:class="{ myClass: true }">
        클래스 true false 바인드</div>
    <br>
    <div :class="{ myClass: isImportant }">
        클래스 important 속성 여부</div>

</template>

<style scoped>
img {
    width: 100px;
    height: 100px;
}

.impClass {
    background-color: aqua;
    border: 3px dashed rebeccapurple;
}

.myClass {
    background-color: yellow;
}
</style>