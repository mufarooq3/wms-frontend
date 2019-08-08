<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
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
                  <md-table-cell md-label="category">{{ item.category_id }}</md-table-cell>
                  <md-table-cell md-label="Action">
                    <md-button v-on:click="edit(item.id,item.category_id)" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button
                      v-on:click="deleteItem(item.id)"
                      class="md-just-icon md-simple md-danger"
                    >
                      <md-icon>delete</md-icon>
                      <md-tooltip md-direction="top">Delete</md-tooltip>
                      <md-snackbar
                        :md-position="position='center'"
                        :md-duration="4000"
                        :md-active.sync="success"
                        md-persistent
                      >
                        <span v-if="deleted">Item has been deleted successfully!</span>
                        <!-- <span v-if="notdeleted">Item has not deleted successfully!</span> -->
                      </md-snackbar>
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
import ItemRepository from "../../repository/ItemRepository";
export default {
  name: "list-item",

  data() {
    return {
      tableHeaderColor: {
        type: String,
        default: "green"
      },
      success:false,
      deleted:false,
      notdeleted:false,
      selected: [],
      items: [
       
      ]
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const { data } = await ItemRepository.list();
      console.log(data);
      this.items = data.result.data;
    },
     edit(id,id2){
      this.$router.push(`/dashboard/editItem/${id}/${id2}`);
    },
    deleteItem(id) {
      console.log(id);
      ItemRepository.delete(id).then((res)=>{
        this.deleted = true;
        this.success=true;
        this.items.splice(this.items.map(item=>item.id).indexOf(id),1);
      }).catch((err)=>{
        this.notdeleted = true;
      });
    }
  }
};
</script>
