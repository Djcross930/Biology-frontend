<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ChromosomeView">Chromosome Explorer</router-link> |
    <router-link to="/seq">Sequence Explorer</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/logout">Logout</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">geneViewer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/ChromosomeView"><b>Chromosome Explorer</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/seq"><b>Sequence Explorer</b></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <b>Authentication</b>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li v-if="!isLoggedIn"><a class="dropdown-item" href="/signup">Signup</a></li>
        <li v-if="!isLoggedIn"><a class="dropdown-item" href="/login">Login</a></li>
        <div class="dropdown-divider"></div>
        <li v-if="isLoggedIn"><a class="dropdown-item" href="/logout">Logout</a></li>
    </div>
    </li>
    </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt
    }
  }
}
</script>

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

label {
  display: inline-block;
  width: 150px;
  text-align: right;
}
</style>
