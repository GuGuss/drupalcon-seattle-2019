<template>
  <div id="app">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">What's the weather at DrupalCon Seattle 2019</h1>
        <p class="lead text-muted">Discover all the possible weathers for today...</p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
