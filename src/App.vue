<script setup>
</script>

<template>
  <div class="app-container">
    <nav class="main-nav">
      <div class="nav-header">
        <h1>경로: <span>{{ $route.path }}</span></h1>
      </div>
      <div class="nav-buttons">
        <router-link to="/" class="nav-btn">Home</router-link>
        <router-link to="/about" class="nav-btn">About</router-link>
        <router-link to="/study" class="nav-btn">Study</router-link>
        <router-link to="/wd" class="nav-btn">WebDesign</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.main-nav {
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.nav-header {
  text-align: center;
  margin-bottom: 20px;
}

.nav-header h1 {
  color: #2c3e50;
  font-size: 1.5em;
  margin: 0;
}

.nav-header span {
  color: #3498db;
  font-weight: normal;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  background: linear-gradient(135deg, #6dd5e0 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  display: inline-block;
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.nav-btn.router-link-active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.4);
}

.main-content {
  padding: 0 20px 40px;
}

@media (max-width: 768px) {
  .nav-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-btn {
    width: 200px;
    text-align: center;
  }
}
</style>
