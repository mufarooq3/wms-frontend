<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form>
          <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
              <h4 class="title">Create Category</h4>
            </md-card-header>
            <md-card-content>
              <div class="content">
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="Name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Upload Image</label>
                      <md-file v-model="Image" accept="image/*" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-right">
                    <md-button v-on:click="createCategory" class="md-raised md-success">
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
                      <span>Category has been added successfully!</span>
                    </md-snackbar>
                  </div>
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
import CategoryRepository from "../../repository/CategoryRepository";
export default {
  name: "create-category",
  data() {
    return {
      dataBackgroundColor: "green",
      Name: null,
      Image: null,
      loading: false,
      success: false
    };
  },
  methods: {
    createCategory() {
      const category = {
        name: this.Name,
        image: this.Image,
      };
      this.loading=true;
      console.log(category);
      
      CategoryRepository.create(category).then((res)=>{
        this.success = true;
        this.Name= null,
        this.Image= null,
        this.loading=false;
        
      }).catch((err)=>{
        this.loading=false;
      });
    }
  }
};
</script>
<style></style>
