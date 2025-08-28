<script setup>
import { ref } from 'vue';

// 양방향 바인딩
const inpText = ref('Initial text')
const important = ref(false)

const shoppingList = ref(
    [
        { name: "Tomatoes", number: 5, important: false }
    ]
)

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)

const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value,
    }
    shoppingList.value.push(item)

    // 목록 init
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}

</script>

<template>
    <div class="bg">
        <div class="b1">
            <input type="text" v-model="inpText">
            <p>{{ inpText }}</p>
        </div>


        <div class="b2">
            <p>중요한가요?
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>
        </div>


        <div class="b3">
            <!-- shoppingList 입력담당 -->
            <form @submit.prevent="addItem">
                <p>구매목록?
                    <input type="text" v-model="itemName" placeholder="목록 이름을 입력하세요">
                </p>
                <p>
                    구매갯수?
                    <input type="number" v-model="itemNumber" placeholder="구매 갯수를 입력하세요">
                </p>
                <p>얼마나 중요한가요?
                    <label>
                        <input type="checkbox" v-model="itemImportant">
                        {{ itemImportant }}
                    </label>
                </p>
                <button type="submit">목록 추가하기</button>
            </form>


            <hr>
            <!-- shoppingList 출력담당 -->
            <p><strong>------- 구매 목록 -------</strong></p>
            <ul>
                <li v-for="list in shoppingList">
                    목록: {{ list.name }} -
                    갯수: {{ list.number }} -
                    중요도: {{ list.important }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.bg {
    margin: 10px;
    height: 100%;
    border-bottom: 3px double purple;
}

.b1 {
    width: 100%;
    height: 100%;
    background-color: rgb(126, 228, 244);
    display: inline-block;
    box-shadow: 5px 5px 15px black;
}

.b2>p {
    text-shadow: 5px 5px 4px rgb(27, 68, 83);
    font-weight: bold;
}

.b3 {
    width: 100%;
    height: 100%;
    background-color: rgb(126, 228, 244);
    display: inline-block;
    box-shadow: 5px 5px 15px black;
}

.b3 li {
    list-style: decimal;
}
</style>