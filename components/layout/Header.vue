<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat @click="menuClicked" round dense icon="menu" />
      <q-toolbar-title>Admin Dashboard</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const emit = defineEmits(["menuClicked"]);
const props = defineProps({
  isDrawerOpened: {
    type: Boolean,
    required: true,
  },
});
const menuClicked = () => {
  emit("menuClicked", !props.isDrawerOpened);
};
</script>
