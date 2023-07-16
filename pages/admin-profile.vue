<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-md" style="max-width: 400px;width:100%">
        <h4 class="text-h4 q-mt-none">Admin Profile</h4>
          <q-form @submit="onSubmit" class="q-gutter-sm">
            <q-input
            outlined 
              v-model="name"
              label="Name *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'This field is required',
              ]"
            />

            <q-input
            outlined 
              type="password"
              v-model="password"
              label="Password *"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'This field is required',
                  (val) => (val < 6) || 'The password length should be more than 6 character',
              ]"
            />

            <div>
              <q-btn label="Update" type="submit" color="primary" />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
const name = ref(null);
const password = ref(null);
const onSubmit = async () => {
    console.log(3212);
};
</script>
