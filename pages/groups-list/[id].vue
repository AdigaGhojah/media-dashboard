<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-md" style="max-width: 400px; width: 100%">
          <h4 class="text-h4 q-mt-none">{{ pageTitle }}</h4>
          <q-form @submit="onSubmit" class="q-gutter-sm">
            <q-input
              outlined
              v-model="name"
              label="Company Name *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'This field is required',
              ]"
            />
            <q-input
              outlined
              v-model="phoneNumber"
              type="tel"
              label="Phone Number *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'This field is required',
              ]"
            />

            <q-input
              outlined
              v-model="address"
              label="Address *"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'This field is required',
              ]"
            />

            <q-input
              outlined
              v-model="refCode"
              label="Ref Code *"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'This field is required',
              ]"
            />

            <div>
              <q-btn :label="submitBtnLabel" type="submit" color="primary" />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
const route = useRoute();
const pageTitle = ref(`Edit ${route.params.id} Company`);
const submitBtnLabel = ref(`update`);
if (route.params.id == "create") {
  pageTitle.value = "Add Company";
  submitBtnLabel.value = "Create";
}
const name = ref(null);
const phoneNumber = ref(null);
const address = ref(null);
const refCode = ref(null);

const onSubmit = async () => {
  console.log(3212);
};
</script>

