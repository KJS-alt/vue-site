<script setup>
import { ref } from 'vue'


const simpleFoods = ref(['피자', '파스타', '샐러드', '김치찌개'])

const manyFoods = ref([
  { id: 1, name: '피자', url: '/src/assets/img_pizza.svg' },
  { id: 2, name: '해변', url: '/src/assets/img_beach3.jpg' },
  { id: 3, name: 'Vue 로고', url: '/src/assets/vue.svg' }
])
</script>

<template>
  <div>
    <h2>v-for 예제 (배열 순회)</h2>

<h3>1. 간단한 음식 목록</h3>
    <ul>
      <li v-for="food in simpleFoods" :key="food">
        {{ food }}
      </li>
    </ul>

   <h3>2. 음식 이미지와 이름 목록 (객체 배열)</h3>
    <figure v-for="foodItem in manyFoods" :key="foodItem.id">
      <img :src="foodItem.url" alt="음식 이미지" style="width: 100px; height: 100px;">
      <figcaption>{{ foodItem.name }}</figcaption>
    </figure>

    <h3>3. 목록과 인덱스 표시하기</h3>
    <ul>
      <li v-for="(food, index) in simpleFoods" :key="index">
        {{ index }}: {{ food }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2,
h3 {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  padding: 5px;
  margin-bottom: 5px;
}

figure {
  display: inline-block;
  margin: 10px;
  text-align: center;
}
</style>