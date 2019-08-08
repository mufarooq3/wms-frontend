<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
              <h4 class="title">Edit Item</h4>
            </md-card-header>
            <md-card-content>
              <div class="content">
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-autocomplete v-model="categories" :md-options="categories">
                      <label>Select Category...</label>
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
                    <md-button class="md-raised md-success">Update</md-button>
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
import ItemRepository from '../../repository/ItemRepository';
export default {
  name: "edit-item",
  props:['id','id2'],
  created(){
    this.getIds(this.id,this.id2);
  },
  data() {
    return {
      categories: [],
      dataBackgroundColor: "green",
      name: null,
      image: null,
      price:null
    };
  },
  methods:{
     getIds(id,id2){
      ItemRepository.get(this.id,this.id2).then((res)=>{
        console.log(res);
        this.name=res.data.result.data.name;
        this.image=res.data.result.data.image;
        this.price=res.data.result.data.price;
        this.categories=res.data.result.data.category_id;
        console.log(this.name, this.categories);
      });
  }
  }
 
};
</script>
<style></style>
