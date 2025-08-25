<script setup>
import {ref} from 'vue'
import D1_bind from './components/comp1/D1_bind.vue'
import D2_if from './components/comp1/D2_if.vue'
import D3_show from './components/comp1/D3_show.vue'
import D4_for from './components/comp1/D4_for.vue'

const pages = {D1_bind, D2_if, D3_show, D4_for }
const activeComp = ref()

</script>

<template>
  
    <button @click="activeComp = 'D1_bind'">bind_바인드</button>
    <button @click="activeComp = 'D2_if'">if_이프</button>
    <button @click="activeComp = 'D3_show'">show_쇼우</button>
    <button @click="activeComp = 'D4_for'">for_포</button>

    <!-- <keepAlive> : 런타임에 컴포넌트가 변경될 때,
      메모리보존, 설정 내부값이 초기화되지 않도록 -->
      <!-- <component> : 런타임에 컴포넌트를 바꿔준다. -->

    <div id="comp_view">
        <KeepAlive>
            <component :is="pages[activeComp]"></component>
        </KeepAlive>
    </div>
</template>

<style scoped>
button {
    margin: 5px;
    filter: drop-shadow(0 0 1.5px #123 );
}
#comp_view {
    margin-top: 20px;
    border: 1px solid orange;
    border-radius: 10px;
    filter: drop-shadow(1px 1px 1px rgb(118, 187, 255) );
}

</style>
