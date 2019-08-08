<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Create User</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Name</label>
              <md-input v-model="name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>User Name</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Role</label>
              <md-input v-model="role" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button v-on:click="createUser" class="md-raised md-success">
              Create
              <md-progress-spinner
                v-if="loading"
                style="spinner-border:white"
                :md-stroke="3"
                :md-diameter="25"
                md-mode="indeterminate"
              ></md-progress-spinner>
            </md-button>
            <md-snackbar
              :md-position="position='center'"
              :md-duration="4000"
              :md-active.sync="success"
              md-persistent
            >
              <span>User has been added successfully!</span>
            </md-snackbar>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import UserRepository from "../../repository/UserRepository";
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "green"
    }
  },
  data() {
    return {
      success: false,
      loading: false,
      name: null,
      saveSuccessful: false,
      username: null,
      password: null,
      department: null,
      role: null
    };
  },

  methods: {
    createUser() {
      this.loading=true;
      const user = {
        userName: this.username,
        name: this.name,
        password: this.password,
        role: this.role,
      };
     
      console.log(user);
      UserRepository.create(user).then((res)=>{
        this.success = true;
        this.name= null;
        this.username= null;
        this.password= null;
        this.role= null;
        this.loading=false;
        
      }).catch((err)=>{
        this.loading=false;
      });
    }
  }
};
</script>
<style></style>
