<template>
  <Teleport to="body">
    <q-dialog v-model="dialogObj.isOpened">
    <q-card :style="{'maxWidth': dialogObj.dialogWidth,'width':'100%'}">
      <q-card-section class="row items-center">
        <span v-if="dialogObj.title" class="q-ml-sm"
          >{{dialogObj.title}}</span
        >
        <template v-if="dialogObj.contentTable">
            <Table
             :tableTitle="dialogObj.contentTable.title"
             :columns="dialogObj.contentTable.columns"
             :rows="dialogObj.contentTable.rows"
             :tableActions="dialogObj.contentTable.tableActions"/>
        </template>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" dense color="primary" v-close-popup />
        <q-btn label="Confirm" dense color="negative" @click="dialogObj.onConfirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  </Teleport>
</template>

<script setup>


const props = defineProps({
  dialogObj: {
    type: Object,
    required: true,
  },
});
</script>