<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const layout = "dashboard";
</script>


<style>
:root{
  --q-primary: #0A032D;
}

</style>