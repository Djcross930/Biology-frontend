<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ChromosomeView">Chromosome Explorer</router-link> |
    <router-link to="/seq">Sequence Explorer</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/logout">Logout</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  background: url(https://img.freepik.com/premium-vector/dna-double-helix-model-light-blue-background_158582-1557.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
