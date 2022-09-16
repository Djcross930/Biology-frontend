<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <!-- <div class="signup"> -->
  <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
  <!-- </div> -->
  <form>
    <br />
    <div class="mx-auto" style="width: 1250px;">
      <div class="card">
        <div class="card-header">
          <h1>Sign-Up</h1>
        </div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label for="formGroupExampleInput"><b>Name:</b></label>
          <input type="text" class="col-xs-3" id="formGroupExampleInput" v-model="newUserParams.name">
        </div>
        <br />
        <div class="form-group">
          <label for="formGroupExampleInput2"><b>Email:</b></label>
          <input type="text" class="col-xs-3" id="formGroupExampleInput2" v-model="newUserParams.email">
        </div>
        <br />
        <div class="form-group">
          <label for="formGroupExampleInput3"><b>Password:</b></label>
          <input type="password" class="col-xs-3" id="formGroupExampleInput3" v-model="newUserParams.password">
        </div>
        <br />
        <div class="form-group">
          <label for="formGroupExampleInput4"><b>Confirm Password:</b></label>
          <input type="password" class="col-xs-3" id="formGroupExampleInput4"
            v-model="newUserParams.password_confirmation">
        </div>
        <br />
      </div>
    </div>
  </form>
  <button class="btn btn-primary" v-on:click="submit()">Create Account!</button>
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
  </div>


</template>