<template>
        <div class="q-pa-md" style="max-width: 400px;width:100%">
          <q-form @submit="onSubmit" class="q-gutter-md" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
            <q-input
              outlined 
              v-model="email"
              label="Email *"
              hint="admin@admin.com"
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
              hint="admin"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'This field is required',
              ]"
            />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
            </div>
          </q-form>
        </div>
</template>
<script setup>
const emailRegex = ref(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const email = ref(null);
const password = ref(null);
const onSubmit = async () => {
  if (email.value == "admin@admin.com" && password.value == "admin") {
      localStorage.setItem('role','admin');
    await navigateTo("/admin-profile");
  } else if (
    email.value == "employe@employe.com" &&
    password.value == "employe"
  ) {
    localStorage.setItem('role','employe');
    await navigateTo("/employ-profile");
  } else if (email.value == "user@user.com" && password.value == "user") {
    localStorage.setItem('role','user');
    await navigateTo("/user");
  }
};
</script>
