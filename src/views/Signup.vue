<template>
  <v-col cols="12" sm="8" md="4">
    <v-flex xs12>
      <v-img :src="require('../assets/app_icon.svg')" class="my-3" contain height="60"></v-img>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar color="purple darken-3" dark flat>
        <v-toolbar-title>Signup</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="User" name="user" prepend-icon="person" type="text"></v-text-field>
          <v-text-field label="Email" name="email" prepend-icon="email" type="text"></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="purple darken-3" dark large>sign up</v-btn>
        <div class="flex-grow-1"></div>
      </v-card-actions>
    </v-card>
    <p align="center">
      Have already account ?
      <a href="/login">Login</a>
    </p>
  </v-col>
</template>

<script>
import LoginOrSignupLayout from "../layouts/LoginOrSignupLayout";
export default {
  created() {
    this.$emit(`update:layout`, LoginOrSignupLayout);
  }
};
</script>