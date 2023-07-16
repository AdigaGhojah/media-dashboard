<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :title="tableTitle"
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
            @click="onEditRow(props.row)"
            icon="edit"
            v-if="tableActions.showEdit"
          >
            <q-tooltip class="bg-primary">Edit</q-tooltip>
          </q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onShowUsers(props.row)"
            icon="people"
            v-if="tableActions.showUserList"
          >
            <q-tooltip class="bg-primary">Show Users List</q-tooltip>
          </q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onTogglePublishState(props.row)"
            :icon="
              props.row.status == 'published' ? 'event_busy' : 'event_available'
            "
            v-if="tableActions.showTogglePublish"
          >
            <q-tooltip class="bg-primary">{{
              props.row.status == "published" ? "Unpublish" : "Publish"
            }}</q-tooltip>
          </q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onShowMediaReports(props.row)"
            icon="assessment"
            v-if="tableActions.showMediaReports"
          >
            <q-tooltip class="bg-primary">Media Reports</q-tooltip>
          </q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onPreview(props.row)"
            icon="remove_red_eye"
            v-if="tableActions.showPreview"
          >
            <q-tooltip class="bg-primary">Preview</q-tooltip>
          </q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onDeleteRow(props.row)"
            icon="delete"
            v-if="tableActions.showDelete"
          >
            <q-tooltip class="bg-primary">Delete</q-tooltip>
          </q-btn>
        </q-td>
      </template>
      <template v-slot:body-cell-thumbnail="props">
        <q-td :props="props">
          <img :src="props.value" :alt="props.row.name" />
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-badge
              :color="props.value == 'published' ? 'green' : 'red'"
              :label="props.value"
            />
          </div>
        </q-td>
      </template>
    </q-table>

    <div class="q-mt-md" hidden>Selected: {{ JSON.stringify(selected) }}</div>
  </div>
  <q-dialog v-model="isDeleteDialogOpen">
    <q-card style="width: 400px">
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >you are about to delete {{ deleteDialogRow.name }}?</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" dense color="primary" v-close-popup />
        <q-btn label="Confirm" dense color="negative" @click="deleteRow" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tableTitle: {
    type: String,
    required: false,
  },
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  tableActions: {
    type: Object,
    required: false,
  },
});

const onEditRow = (row) => {
  console.log("edit ", row.name);
};

const onDeleteRow = (row) => {
  console.log("delete ", row.name);
  deleteDialogRow.value = row;
  isDeleteDialogOpen.value = true;
};
const selected = ref([]);
const isDeleteDialogOpen = ref(false);
const deleteDialogRow = ref({});

const deleteRow = async () => {
  // Fetch code to delete the row
  isDeleteDialogOpen.value = false;
};

const getSelectedString = () => {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${props.rows.length}`;
};
</script>
