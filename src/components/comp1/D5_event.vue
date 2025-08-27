<script setup>
import { ref } from 'vue';

const inpCount = ref(0)

</script>

<template>
    <input type="text" @input="inpCount++">
    <p>{{ inpCount }}</p>
</template>

<style scoped>

</style>