<template>
  <div class="study-view">
    <div class="study-buttons">
      <button 
        v-for="(component, key) in pages" 
        :key="key"
        @click="activeComp = key"
        class="study-btn"
      >
        {{ getButtonText(key) }}
      </button>
    </div>

    <div class="component-area" v-if="activeComp">
      <KeepAlive>
        <component :is="pages[activeComp]"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import D1_bind from '../components/comp1/D1_bind.vue'
import D2_if from '../components/comp1/D2_if.vue'
import D3_show from '../components/comp1/D3_show.vue'
import D4_for from '../components/comp1/D4_for.vue'
import D5_event from '../components/comp1/D5_event.vue'
import D6_methods from '../components/comp1/D6_methods.vue'
import D7_model from '../components/comp1/D7_model.vue'
import D8_computed from '../components/comp1/D8_computed.vue'
import D9_watchers from '../components/comp1/D9_watchers.vue'
import D10_form from '../components/comp1/D10_form.vue'

const pages = {D1_bind, D2_if, D3_show, D4_for, D5_event, D6_methods, D7_model, D8_computed, D9_watchers, D10_form}
const activeComp = ref()

const getButtonText = (key) => {
  const textMap = {
    'D1_bind': 'D1_bind',
    'D2_if': 'D2_if', 
    'D3_show': 'D3_show',
    'D4_for': 'D4_for',
    'D5_event': 'D5_event',
    'D6_methods': 'D6_methods',
    'D7_model': 'D7_model',
    'D8_computed': 'D8_computed',
    'D9_watchers': 'D9_watchers',
    'D10_form': 'D10_form'
  }
  return textMap[key] || key
}
</script>

<style scoped>
.study-view {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.study-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.study-btn {
  background-color: #8bc34a;
  color: black;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.study-btn:hover {
  background-color: #7cb342;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

.component-area {
  margin-top: 30px;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
}
</style>
