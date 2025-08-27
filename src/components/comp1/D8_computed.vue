<script setup>
import { ref, computed } from 'vue';

const chbxVal = ref(false)
const isImportant = computed(
    () => {
        if (chbxVal.value){
            return "아주~중요해요"
        } else {
            return "평범해요"
        }
    }
)

</script>



<template>
    <div>
        <label>
            <input type="checkbox" v-model="chbxVal">
            {{ isImportant }}
        </label>
    </div>
</template>

<style scoped></style>