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
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-autocomplete :md-options="items">
                      <label>Select Item...</label>
                    </md-autocomplete>
                  </div>
                  <div class="md-layout-item md-small-size-50 md-size-100">
                    <md-field>
                      <label>Remaining/wasted</label>
                      <md-textarea v-model="wasted" type="text"></md-textarea>
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
  name: "wasted-item",
  data() {
    return {
      categories: ["Vegetables", "Fruits", "Grains", "Protiens"],
      dataBackgroundColor: "green",
      items: ["potato balls", "Fruit chat", "Rice", "Chicken"],
      wasted: null
    };
  }
};
</script>
<style></style>
