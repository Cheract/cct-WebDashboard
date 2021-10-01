<template>
  <v-app>
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
div#app {
  height: 100%;
  width: 100%;
  margin: 0px;
  background: transparent;
}
</style>
