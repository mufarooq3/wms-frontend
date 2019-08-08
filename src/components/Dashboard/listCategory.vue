<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Categories</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="categories" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>

                  <md-table-cell md-label="Action">
                    <md-button v-on:click="edit(item.id)" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>

                    </md-button>
                    <md-button
                      v-on:click="deleteCategory(item.id)"
                      class="md-just-icon md-simple md-danger"
                    >
                      <md-icon>delete</md-icon>
                      <md-tooltip md-direction="top">Delete</md-tooltip>
                      <md-snackbar
                        :md-position="position='center'"
                        :md-duration="4000"
                        :md-active.sync="success"
                      >
                        <span v-if="deleted">Category has been deleted successfully!</span>
                        <span v-if="notdeleted">Category has not deleted successfully!</span>
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
import CategoryRepository from "../../repository/CategoryRepository";
export default {
  name: "",

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
      categories: [
        
      ]
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const { data } = await CategoryRepository.list();
      console.log(data);
      this.categories = data.result.data;
    },
    edit(id){
      this.$router.push(`/dashboard/editCategory/${id}`);
    },
    deleteCategory(id) {
      console.log(id);
      CategoryRepository.delete(id).then((res)=>{
        this.deleted = true;
        this.success=true;
        this.categories.splice(this.categories.map(item=>item.id).indexOf(id),1);
      }).catch((err)=>{
        this.notdeleted = true;
      });
    }
  }
};
</script>
