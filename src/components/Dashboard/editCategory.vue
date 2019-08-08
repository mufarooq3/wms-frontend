<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
              <h4 class="title">Edit Category</h4>
            </md-card-header>
            <md-card-content>
              <div class="content">
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-50 md-size-50">
                      <md-field>
                        <label>Name</label>
                        <md-input v-model="name" type="text"></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-50 md-size-50">
                      <md-field>
                        <label>Upload Image</label>
                        <md-file v-model="image" accept="image/*" />
                      </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                      <md-button @click="update" class="md-raised md-success">Update</md-button>
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
import CategoryRepository from '../../repository/CategoryRepository';
export default {
  name: "update-category",
  props: ['id'],
  created(){
    this.getCategory(this.id);
  },
  data() {
    return {
      dataBackgroundColor: "green",
      name: null,
      image:null
    };
  },

  methods:{
    getCategory(id){
      CategoryRepository.get(this.id).then((res)=>{
        console.log(res);
        this.name=res.data.result.data.name;
        this.image=res.data.result.data.image;
        console.log(this.name, this.image);
      });
    },

    // update(){
    //   const payload={id:this.id, name:this.name, image:this.image}
    //   CategoryRepository.update(payload)
    // }
  }
};
</script>
<style></style>
