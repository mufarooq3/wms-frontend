<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-user data-background-color="green"> </edit-user>
      </div>
    </div>
  </div>
</template>

<script>
import EditUser from "../pages/EditUser.vue";

export default {
  components: {
    EditUser
  }
};
</script>