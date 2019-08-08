<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Username">{{ item.userName }}</md-table-cell>
        <!-- <md-table-cell md-label="Password">{{ item.password }}</md-table-cell> -->
        <!-- <md-table-cell md-label="Department">{{ item.department }}</md-table-cell>
        <md-table-cell md-label="Branch">{{ item.branch }}</md-table-cell> -->
        <md-table-cell md-label="Role">{{ item.role }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button v-on:click="edit(item.id)" class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger" v-on:click="deleteUser(item.id)">
            <md-icon>delete</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
            <md-snackbar
              :md-position="position='center'"
              :md-duration="4000"
              :md-active.sync="success"
            >
              <span v-if="deleted"> User has been deleted successfully!</span>
              <span v-if="notdeleted"> User has not deleted successfully!</span>
            </md-snackbar>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import UserRepository from "../../repository/UserRepository";
export default {
  name: "simple-table",
  
  data() {
    return {
      tableHeaderColor: "green",
      success:false,
      deleted:false,
      notdeleted:false,
      selected: [],
      users: [
        
      ]
    };
  },

  created() {
    this.getUsersList();
  },

  methods: {
    async getUsersList() {
      const { data } = await UserRepository.list();
      console.log(data);
      this.users = data.result.data;
    },
    edit(id){
      this.$router.push(`/dashboard/EditUser/${id}`);
    },
    deleteUser(id){
      console.log(id);
      UserRepository.delete(id).then((res)=>{
        this.deleted = true;
        this.success=true;
        this.users.splice(this.users.map(item=>item.id).indexOf(id),1);
      }).catch((err)=>{
        this.notdeleted = true;
      });
      console.log(data);
    }
  }
};
</script>
