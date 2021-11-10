<template>
  <div id="root">
    <Nav/>
  </div>
</template>

<script>

import Nav from "../src/components/Nav.vue";

export default {
  components: {
    Nav  
  }
}
</script>

<style lang="scss">
@import "./vars.scss";

:root {
  color-scheme: dark;
}

body {
  background-color: $s-color;
  //background: linear-gradient(90deg, rgba(50,0,0,1) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(50,0,0,1) 100%); 
  //background: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kai-pilger-Ef6iL87-vOA-unsplash.jpg&w=1920") no-repeat;
  //background: linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(15,82,173,1) 100%);

  background-size: 100% 100%;
}

.root {
  position: absolute;
  width: 100%;
  height: 100%;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
