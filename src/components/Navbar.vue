<template>
  <nav class="navbar">
    <div class="navbar-right">
      <router-link to="/home" class="nav-link" active-class="active-link">Me!</router-link>
      <!-- <router-link to="/servicios" class="nav-link" active-class="active-link">Servicios</router-link>
      <router-link to="/estancias" class="nav-link" active-class="active-link">Estancias</router-link>
      <router-link to="/games" class="nav-link" active-class="active-link">Games</router-link> -->
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  color: white;
  padding: 10px;
}
.navbar-right {
  display: flex;
  justify-content: flex-end;
  gap: 17.5px;
}
.nav-link {
  text-decoration: none;
  color: #7d7d7d;
  padding-bottom: 12px;
}
.active-link {
  border-bottom: 2px solid #292929;
  color: #292929;
}
</style>
