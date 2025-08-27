<script setup>
import { ref, watch } from 'vue';

const rangeVal = ref(70)
// watch(감시할 변수, (구현부))
watch(rangeVal, (val) => {
    if (val > 20 && val < 60) {
        // 21~39 => 20으로 보내기
        rangeVal.value = 20
    } else if (val >=40 && val < 60) {
        // 48~59 => 60
        rangeVal.value = 60
    }
})
</script>

<template>
    <input v-model="rangeVal" type="range" min="0" max="100" step="1">
    <p>{{ rangeVal }}</p>
</template>

<style scoped></style>