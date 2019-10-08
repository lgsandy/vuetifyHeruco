<template>
  <div>
    <v-app-bar app color="purple darken-3" dark>
      <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>

      <v-toolbar-title>Sandy.io</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/signup">ShignUp</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <slot />
    </v-content>

    <v-footer color="purple darken-3" dark fixed>
      <div class="flex-grow-1"></div>
      <div>&copy; {{ new Date().getFullYear() }}</div>
      <div class="flex-grow-1"></div>
    </v-footer>
  </div>
</template>