<template>
  <div
    class="q-pa-md formContainer shadow-5"
    style="max-width: 400px; width: 100%"
  >
    <h4 class="q-my-none q-pb-md">Login</h4>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    >
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
          (val) => (val !== null && val !== '') || 'This field is required',
        ]"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
  <div class="particles" id="particles-js"></div>
</template>
<script setup>
const emailRegex = ref(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const email = ref(null);
const password = ref(null);
const onSubmit = async () => {
  if (email.value == "admin@admin.com" && password.value == "admin") {
    localStorage.setItem("role", "admin");
    await navigateTo("/admin-profile");
  } else if (
    email.value == "employe@employe.com" &&
    password.value == "employe"
  ) {
    localStorage.setItem("role", "employe");
    await navigateTo("/employ-profile");
  } else if (email.value == "user@user.com" && password.value == "user") {
    localStorage.setItem("role", "user");
    await navigateTo("/user");
  }
};

onMounted(() => {
  particlesJS.load("particles-js", "/assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
</script>
<style scoped>
.particles {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 10px);
  overflow: hidden;
}
.formContainer {
  z-index: 10;
  background-color: #fff;
  border-radius: 10px;
}
</style>
