<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit User</h4>
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
              <md-input v-model="userName" type="text"></md-input>
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
            <md-button class="md-raised md-success">Update User</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
      </div>
    </div>
  </div>
  
</template>
<script>
import UserRepository from '../../repository/UserRepository';
export default {
  
  name: "edit-user",
  props: ['id'],
  created() {
    this.getUser(this.id);
  },
  data() {
    return {
      dataBackgroundColor: "green",
      userName: null,
      contact: null,
      password: null,
      role: null,
      name: null
    };
  },
  
methods:{
  getUser(id) {
    console.log(id);
    UserRepository.get(this.id).then(res => {
      console.log(res);
      this.name = res.data.result.data.name;
      this.userName = res.data.result.data.userName;
      this.password = res.data.result.data.password;
      this.role = res.data.result.data.role;
    });
  }
}
  
};
</script>
<style></style>
