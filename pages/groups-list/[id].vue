<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-md" style="max-width: 400px;width:100%">
        <h4 class="text-h4 q-mt-none">{{pageTitle}}</h4>
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
              v-model="email"
              label="Email *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'This field is required',
                (val) => val.toLowerCase().match(emailRegex) || 'Invalid email',
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
const pageTitle = ref(`Edit ${route.params.id} Profile`);
const submitBtnLabel = ref(`update`);
  if(route.params.id=='create')
  {
    pageTitle.value='Add Employee';
    submitBtnLabel.value= 'Create'
  }
const emailRegex = ref(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const name = ref(null);
const email = ref(null);
const password = ref(null);

const onSubmit = async () => {
    console.log(3212);
};
</script>
