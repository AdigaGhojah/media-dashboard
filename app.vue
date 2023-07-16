<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const layout = computed(() => {
  if (route.path == "/" || route.path.includes("/user")) {
    return "default";
  } else {
    return "dashboard";
  }
});
</script>

<style>
:root {
  --q-primary: #0a032d;
}
</style>
