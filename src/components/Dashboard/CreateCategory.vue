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
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-field>
                      <label>Description</label>
                      <md-textarea v-model="Description" type="text"></md-textarea>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-right">
                    <md-button v-on:click="createCategory" class="md-raised md-success">Create</md-button>
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
      Description: null,
      Image:null
    };
  },
  methods: {
    async createCategory(){
      const category = {

        name: this.Name,
        description: this.Description,
        image: this.Image,
      };
      console.log(category);
      await CategoryRepository.create(category); 
    }
  }

};
</script>
<style></style>
