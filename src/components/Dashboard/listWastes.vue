<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">List wasted items</h4>
          </md-card-header>
          <md-card-content>
            <div>
                <md-table v-model="users" :table-header-color="tableHeaderColor">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Item">{{ item.name }}</md-table-cell>
                        <md-table-cell md-label="Category">{{ item.category }}</md-table-cell>
                        <md-table-cell md-label="Remaining/Wasted">{{ item.remain }}</md-table-cell>
                        <md-table-cell md-label="Action">
                            <md-button class="md-just-icon md-simple md-primary">
                                <md-icon>edit</md-icon>
                                <md-tooltip md-direction="top">Edit</md-tooltip>
                            </md-button>
                            <md-button class="md-just-icon md-simple md-danger">
                                <md-icon>delete</md-icon>
                                <md-tooltip md-direction="top">Delete</md-tooltip>
                            </md-button>
                        </md-table-cell>
                    </md-table-row>
                </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: "list_wastes",
 
  data() {
    return {
        tableHeaderColor: {
        type: String,
        default: "green"
        },
      selected: [],
      users: [
        {
          name: "Grains",
          category: "Rice",
          remain: "2 bowles wasted"
        },
        {
          name: "Grains",
          category: "Rice",
          remain: "2 bowles wasted"
        },
        {
          name: "Grains",
          category: "Rice",
          remain: "2 bowles wasted"
        }
      ]
    };
  }
};
</script>
