<template>123</template>

<script setup>
const route = useRoute();
const pageTitle = ref(`Edit ${route.params.id}`);
const submitBtnLabel = ref(`update`);
if (route.params.id == "create") {
  pageTitle.value = "Add Media";
  submitBtnLabel.value = "Create";
} else if (route.params.id == "preview") {
  pageTitle.value = `Preview ${route.params.id}`;
  submitBtnLabel.value = "";
}
</script>
