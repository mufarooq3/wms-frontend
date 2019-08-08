<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/createUser">
        <p>Create User</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/usertable">
        <p>List Users</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/CreateCategory">
        <p>Create Category</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/listCategory">
        <p>List Category</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/CreateItem">
        <p>Create Item</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/listItem">
        <p>List Item</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/listWastes">
        <p>List Wasted Items</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
};
</script>
