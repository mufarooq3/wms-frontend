<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <form>
          <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
              <h4 class="title">Enter wasted Item</h4>
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
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-autocomplete :md-options="Items">
                      <label>Select Item...</label>
                      <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.name }}</template>
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-autocomplete :md-options="users">
                      <label>Select user...</label>
                      <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.name }}</template>
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-field>
                      <label>Remaining/wasted</label>
                      <md-textarea v-model="wasted" type="text"></md-textarea>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-right">
                    <md-button v-on:click="getWastes" class="md-raised md-success">Create</md-button>
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
import UserRepository from "../../repository/UserRepository";
export default {
  name: "wasted-item",
  data() {
    return {
      categories: ["Vegetables", "Fruits", "Grains", "Protiens"],
      dataBackgroundColor: "green",
      Items: ["potato balls", "Fruit chat", "Rice", "Chicken"],
      users: [null],
      wasted: null
    };
  },
  created(){
    this.getCategory();
    this.getItem();
    this.getUser();
  },
  methods: {
      async getCategory(){
      const { data } = await CategoryRepository.list();
      console.log(data);
      this.categories = data.result.data;
    },
    async getItem(){
      const { data } = await ItemRepository.list();
      console.log(data);
      this.Items = data.result.data;
    },
    async getUser(){
      const { data } = await UserRepository.list();
      console.log(data);
      this.users = data.result.data;
    },
    getWastes(){
      
    }
  }
};
</script>
<style></style>
