<template>
    <q-layout view="hHh LpR fff">
    <layoutHeader @menuClicked="isDrawerOpened=!isDrawerOpened" :isDrawerOpened="isDrawerOpened"/>

    <layoutDrawer :isDrawerOpened="isDrawerOpened" :menuList="menuList" />

    <q-page-container>
      <q-page padding>
        <slot/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>



<script setup>


const isDrawerOpened = ref(true);


const menuList = [
  {
    icon: "manage_accounts",
    label: "Admin Profile",
    path: "admin-profile",
  },{
    icon: "people",
    label: "Employees list",
    path: "employees-list",
  },{
    icon: "business",
    label: "Groups(company) List",
    path: "/groups-list",
    separator: true,
  },{
    icon: "perm_media",
    label: "Media List",
    path: "media-list",
  },
  // {
  //   icon: "send",
  //   label: "Buttons",
  //   separator: false,
  //   path: "buttons",
  // },
  // {
  //   icon: "delete",
  //   label: "Form",
  //   separator: false,
  //   path: "form",
  // },
  // {
  //   icon: "error",
  //   label: "Spam",
  //   separator: true,
  //   path: "employees",
  // },
  // {
  //   icon: "settings",
  //   label: "Settings",
  //   separator: false,
  //   path: "/",
  // },
  // {
  //   icon: "feedback",
  //   label: "Send Feedback",
  //   separator: false,
  //   path: "/",
  // },
  // {
  //   icon: "help",
  //   iconColor: "primary",
  //   label: "Help",
  //   separator: false,
  //   path: "/",
  // },
];
</script>