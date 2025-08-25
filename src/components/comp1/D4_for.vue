<script setup>
import { ref } from 'vue';

const foods = ref(['Apple', 'Banana', 'Cherry'])
</script>

<template>
    <ul>
        <li v-for="food in foods" :key="food">
            {{ food }}
        </li>
    </ul>
</template>

<style scoped>

</style>