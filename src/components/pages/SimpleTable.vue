<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.firstName }}</md-table-cell>
        <md-table-cell md-label="Username">{{ item.userName }}</md-table-cell>
        <md-table-cell md-label="Contact">{{ item.contact }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Role">{{ item.role }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger" v-on:click="deleteUser(item.id)">
            <md-icon>delete</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
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
  props: {
    tableHeaderColor: {
      type: String,
      default: "green"
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          role: "Chef",
          country: "Niger",
          city: "Oud-Turnhout"
        }
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

    async deleteUser(id){
      console.log(id);
      const { data } = await UserRepository.delete(id);
      console.log(data);
    }
  }
};
</script>
