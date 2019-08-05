<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Items</h4>
          </md-card-header>
          <md-card-content>
            <div>
                <md-table v-model="items" :table-header-color="tableHeaderColor">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                        <md-table-cell md-label="price">{{ item.price }}</md-table-cell>
                        <md-table-cell md-label="category">{{ item.category }}</md-table-cell>
                        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
                        <md-table-cell md-label="Action">
                            <md-button class="md-just-icon md-simple md-primary">
                                <md-icon>edit</md-icon>
                                <md-tooltip md-direction="top">Edit</md-tooltip>
                            </md-button>
                            <md-button v-on:click="deleteItem(item.id)" class="md-just-icon md-simple md-danger">
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
import CategoryRepository from "../../repository/ItemRepository";
export default {
  name: "",
 
  data() {
    return {
        tableHeaderColor: {
        type: String,
        default: "green"
        },
      selected: [],
      items: [
        {
          name: "Potato balls",
          price: "$21",
          category: "vegetable",
          description: "Chef"
        },
        {
          name: "Fruit Chat",
          price: "$21",
          category: "fruits",
          description: "Chef"
        },
        {
          name: "Rice",
          price: "$21",
          category: "Garins",
          description: "Chef"
          
        }
      ]
    };
  },
  created(){
    this.getItems();
  },
  methods: {
    async getItems(){
      const { data } = await ItemRepository.list();
      console.log(data);
      this.items = data.result.data;
    },
    async deleteItem(id){
      console.log(id);
      const { data } = await ItemRepository.delete(id);
      console.log(data);
    }
  }
};
</script>
