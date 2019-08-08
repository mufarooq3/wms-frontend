<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form>
          <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
              <h4 class="title">Create Item</h4>
            </md-card-header>
            <md-card-content>
              <div class="content">
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-autocomplete :md-options="categories">
                      <label>Select Category...</label>
                      <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.name }}</template>
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Price</label>
                      <md-input v-model="price" type="number"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Upload Image</label>
                      <md-file v-model="image" accept="image/*" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-right">
                    <md-button v-on:click="getItem" class="md-raised md-success">
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
                      <span>Item has been added successfully!</span>
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
import ItemRepository from "../../repository/ItemRepository";
import { async } from 'q';
export default {
  name: "create-item",
  data() {
    return {
      categories: ["Vegetables", "Fruits", "Grains", "Protiens"],
      dataBackgroundColor: "green",
      name: null,
      price: null,
      image: null,
      loading: false,
      success: false
    };
  },
  created(){
    this.getCategory();
  },
  methods: {
    async getCategory(){
      const { data } = await CategoryRepository.list();
      console.log(data);
      this.categories = data.result.data;
    },
    getItem(){
      const Item = {

        name: this.name,
        image: this.image,
        price: this.price,
      };
      this.loading=true;
      console.log(Item);
      
      ItemRepository.create(Item).then((res)=>{
        this.success = true;
        this.name= null,
        this.price= null,
        this.image= null,
        this.loading=false;
        
      }).catch((err)=>{
        this.loading=false;
      });
    }
  }
};
</script>
<style></style>
