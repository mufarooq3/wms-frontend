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
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Name</label>
                      <md-input v-model="username" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Price</label>
                      <md-input v-model="price" type="number"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-field>
                      <label>Description</label>
                      <md-textarea v-model="description" type="text"></md-textarea>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-50">
                    <md-field>
                      <label>Upload Image</label>
                      <md-file v-model="image" accept="image/*" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-size-100 text-right">
                    <md-button class="md-raised md-success">Create</md-button>
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
export default {
  name: "create-item",
  data() {
    return {
      categories: ["Vegetables", "Fruits", "Grains", "Protiens"],
      dataBackgroundColor: "green",
      username: null,
      description: null,
      image: null
    };
  }
};
</script>
<style></style>
