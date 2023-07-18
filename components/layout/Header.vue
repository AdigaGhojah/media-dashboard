<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn v-if="drawer" flat @click="toggleDrawer" round dense icon="menu" />
      <q-toolbar-title>Admin Dashboard</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const emit = defineEmits(["menuClicked"]);
const props = defineProps({
  drawer: {
    type: Object,
    required: false,
  },
});
const toggleDrawer = () => {
  props.drawer.isDrawerOpened = !props.drawer.isDrawerOpened;
};
</script>
