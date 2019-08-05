<template>
<div class="viewport" id="divider">
  <div class="md-layout">
    <div class="md-layout-item" id="c1">
      <img src="@/assets/image.jpg" id="image_login" alt="Food">
      <p>Welcome</p>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30" id="c2">
        <v-layout row wrap align-center>
          <form class="md-small-size-50" id="formlogin">
              <div id="logo">
                <img src="@/assets/mainlogo.png" alt="Food">
              </div>
              <div>
                <md-field md-clearable>
                  <label>username</label>
                  <md-input required></md-input>
                </md-field>
                <md-field>
                  <label>Password</label>
                  <md-input  type="password" required></md-input>
                </md-field>
              </div>
              <div>
                <md-button @click="Login" class="md-dense md-raised md-primary" style="background-color:#C1D72F !important" >Login</md-button>
              </div>
          </form>
        </v-layout>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'viewport',
    data () {
      return{
        
      }
    },
    methods: {
      Login(){
        this.$router.push('/dashboard');
      }
    }
  }
</script>

<style lang="scss" scoped>

  #c1{
    padding: 0 !important;
    margin: 0 !important;
  }
  #image_login{
    height: 100%;
    width: 100%;
    position: fixed;
  }
  #c2{
   text-align: center;
   position: absolute;
   right: 0;
   height: 100%;
   background: white;
  }
</style>