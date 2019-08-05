<template>
  <div class="viewport" id="divider">
    <div class="md-layout">
      <div class="md-layout-item" id="c1">
        <img src="@/assets/image.jpg" id="image_login" alt="Food" />
        <p>Welcome</p>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30" id="c2">
        <form class="md-small-size-50" id="formlogin">
          <div id="logo">
            <img src="@/assets/mainlogo.png" alt="Food" />
          </div>
          <div>
            <md-field md-clearable>
              <label>username</label>
              <md-input v-model="userName" required></md-input>
            </md-field>
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password" required></md-input>
            </md-field>
          </div>
          <div>
            <md-button
              @click="Login"
              :disabled="!!loading"
              class="md-dense md-raised"
              style="background-color:#C1D72F !important"
            >Login
              <md-progress-spinner v-if="loading" class="md-primary" :md-stroke="3" :md-diameter="25" md-mode="indeterminate"></md-progress-spinner>
            </md-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../repository/Auth";
export default {
  name: "Login",
  data() {
    return {
      userName: null,
      password: null,
      loading: false
    };
  },
  methods: {
    Login() {
      this.loading=true;
      const credentials = {
        userName: this.userName,
        password: this.password
      }
      Auth.authenticate(credentials).then((res) => {
        console.log(res);
        this.loading=false;
         localStorage.setItem("token", res.data.result.token);
         localStorage.setItem("user", JSON.stringify(res.data.result.user));
        this.$router.push("/dashboard");
      }).catch((err)=>{
        this.loading=false;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#c1 {
  padding: 0 !important;
  margin: 0 !important;
}
#image_login {
  height: 100%;
  width: 100%;
  position: fixed;
}
#c2 {
  text-align: center;
  position: absolute;
  right: 0;
  height: 100%;
  background: white;
}
</style>