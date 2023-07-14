<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Employees"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="editRow(props)"
            icon="edit"
          ></q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="deleteRow(props)"
            icon="delete"
          ></q-btn>
        </q-td>
      </template>
    </q-table>

    <div class="q-mt-md" hidden>Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
  { name: "actions", label: "Actions", field: "", align: "center" },
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

const editRow = (props) => {
  console.log(321);
};

const deleteRow = (props) => {
  console.log(123);
};
const selected = ref([]);
const getSelectedString = () => {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${rows.length}`;
};
</script>
