<template>
  <div>
    <div id="nav">
      <div class="logo"><i>El7ashom.com</i></div>
      <router-link :class= "{active: $route.name === 'Home'}" to="/">Home</router-link> 
      <router-link :class= "{active: $route.name === 'Card'}" to="/card">Card</router-link>
      <router-link :class= "{active: $route.name === 'Moh'}" to="/moh">Mohammed</router-link>
    </div>
    <router-view/>
    
   </div>
</template>
<script>
  export default {
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    },
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: #2c3e50;
  line-height: 30px;
  margin-bottom: 15px;
  .logo{
    float: left;
    color: white;
    font-weight: bold;
    font-size: 1.90rem;
    margin-left: 15px;
  }
  a{
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.50rem;
    color: white;
    &.active{
      color:rgb(63, 166, 207);
    }
  }
}
.fixed-menu{
    position: fixed;
    width: 200px;
    height: 100%;
    top: 0;
    left: -220px;
    background-color: rgb(45, 161, 255);
    color: #fff;
    padding: 10px;
    z-index: 999;
}
.fixed-menu h3{
    color: #fff;
    padding: 5px 0;
}
.fixed-menu .fa-gear{
    position: absolute;
    background-color: rgb(212, 41, 41);
    padding: 5px;
    border-radius: 2px;
    right: -40px;
    top: 80px;
    cursor: pointer;
    line-height: 18px;
    width: 30px;
    height: 30px;
    text-align: center;
    transition: all 1s linear;
    &:hover{
    transform: rotate(360deg);
}
}

</style>
