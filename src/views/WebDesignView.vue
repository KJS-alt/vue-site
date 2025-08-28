<template>
  <div class="webdesign-view">
    <div class="webdesign-buttons">
      <button class="wd-btn">A1 웹디자인기능사</button>
      <button class="wd-btn">B1 웹디자인기능사</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.webdesign-view {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.webdesign-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.wd-btn {
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

.wd-btn:hover {
  background-color: #7cb342;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}
</style>
