<template>
  <div class="q-pa-md full-width">
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
            v-for="btn in tableActions"
            :key="btn.tooltip"
            dense
            round
            flat
            color="grey"
            :to="btn.to?btn.to(props.row):''"
            @click="btn.onClick?btn.onClick(props.row):''"
            :icon="btn.icon(props.row)"
          >
            <q-tooltip class="bg-primary">{{btn.tooltip(props.row)}}</q-tooltip>
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


const selected = ref([]);




const getSelectedString = () => {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${props.rows.length}`;
};
</script>
