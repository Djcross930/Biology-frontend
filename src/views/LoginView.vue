<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div>
    <br />
  </div>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <div class="mx-auto" style="width: 1250px;">
        <div class="card">
          <div class="card-header">
            <h1>Login</h1>
          </div>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label><b>Email:</b></label>
            <input type="email" v-model="newSessionParams.email" />
          </div>
          <div>
            <label><b>Password:</b></label>
            <input type="password" v-model="newSessionParams.password" />
            <br />
            <br />
          </div>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  </div>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>