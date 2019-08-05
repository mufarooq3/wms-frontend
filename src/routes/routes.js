import DashboardLayout from '@/components/Layout/DashboardLayout.vue'
import login from '@/components/login.vue'
import usertable from '@/components/Dashboard/usersTable.vue'
import createUser from '@/components/Dashboard/createUser.vue'
import create_category from '@/components/Dashboard/CreateCategory.vue'
import list_category from '@/components/Dashboard/listCategory.vue'
import create_item from '@/components/Dashboard/CreateItem.vue'
import list_item from '@/components/Dashboard/listItem.vue'
import wasted_items from '@/components/Dashboard/enterWaste.vue'
import list_wasted_items from '@/components/Dashboard/listWastes.vue'

export const routes = [
  { path: '', component: login },
  {
    path: '/dashboard',
    component: DashboardLayout,
    name: "Dashboard",
    children: [
      {
        path: "usertable",
        name: "Users",
        component: usertable,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "createUser",
        name: "Create User",
        component: createUser,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "CreateCategory",
        name: "Create Category",
        component: create_category,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "listCategory",
        name: "List Category",
        component: list_category,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "CreateItem",
        name: "Create Item",
        component: create_item,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "listItem",
        name: "List Item",
        component: list_item,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "enterWaste",
        name: "Enter Wasted Item",
        component: wasted_items,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "listWastes",
        name: "List Wasted Item",
        component: list_wasted_items,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];
