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
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Contact</label>
              <md-input v-model="contact" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Description</label>
              <md-input v-model="description" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Role</label>
              <md-input v-model="role" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button v-on:click="createUser" class="md-raised md-success">Create</md-button>
            <md-snackbar
              v-if="saveSuccessful"
              md-position="center"
              md-duration="Infinity : 2000"
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
  name: "create-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      saveSuccessful: false,
      username: null,
      password: null,
      contact: null,
      description: null,
      lastname: null,
      firstname: null,
      city: null,
      country: null,
      role: null
    };
  },

  methods: {
    async createUser() {
      const user = {
        userName: this.username,
        password: this.password,
        firstName: this.firstname,
        lastName: this.lastname,
        contact: this.contact,
        description: this.description,
        role: this.role,
        city: this.city,
        country: this.country,
        saveSuccessful:true
      };

      console.log(user);
      await UserRepository.create(user);
    }
  }
};
</script>
<style></style>
