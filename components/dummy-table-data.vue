<template>
    <div class="q-px-md" style="display:flex; justify-content: flex-end;">

        <q-btn color="primary" label="Create new company" icon-right="add" />
    </div>
    <Table :columns="columns" :rows="rows"/>
</template>

<script setup>

const columns = ref([
  {
    name: "desc",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "left",
    label: "Email",
    field: "calories",
    sortable: true,
  },
  {
    name: "fat",
    label: "Password",
    field: "fat",
    sortable: true,
    align: "left",
    format: (val) => `${new Array(val.length).fill("*").join("")}`,
  },
  { name: "actions", label: "Actions", field: "", align: "center", },
]);

const rows = ref([
  {
    calories: "JohnDoe@Email.com",
    name: "John",
    fat: "JohnDoe@Email.com",
  },
  {
    calories: "JohnDoe2@Email.com",
    name: "Doe",
    fat: "JohnDoe2@Email.com",
  },
  {
    calories: "JohnDoe3@Email.com",
    name: "User",
    fat: "JohnDoe3@Email.com",
  },
  {
    calories: "Mark@Email.com",
    name: "Mark",
    fat: "Mark@Email.com",
  },
  {
    calories: "sara@email.com",
    name: "Sara",
    fat: "sara@email.com",
  },
]);

</script>