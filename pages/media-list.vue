<template>
  <div class="q-px-md" style="display: flex; justify-content: flex-end">
    <q-btn color="primary" label="Add Media" icon-right="add" />
  </div>
  <Table
    tableTitle="Medias"
    :columns="columns"
    :rows="rows"
    :tableActions="tableActions"
  />
</template>

<script setup>
const columns = ref([
  {
    label: "Title",
    align: "left",
    field: "name",
  },
  {
    name: "thumbnail",
    label: "Thumbnail",
    align: "left",
    field: "img",
  },
  {
    name: "status",
    label: "Status",
    align: "left",
    field: "status",
  },
  { name: "actions", label: "Actions", field: "", align: "center" },
]);

const onEditRow = (row) => {
  console.log("edit ", row.name);
};

const onDeleteRow = (row) => {
  console.log("delete ", row.name);
  // deleteDialogRow.value = row;
  // isDeleteDialogOpen.value = true;
};
const tableActions = ref([
  {
    onClick: (props) => onEditRow(props),
    icon: () => "edit",
    tooltip: () => "Edit",
  },
  {
    onClick: (props) => onDeleteRow(props),
    icon: () => "delete",
    tooltip: () => "Delete",
  },
  {
    onClick: (props) => onTogglePublishState(props),
    icon: (props) =>
      props.status == "published" ? "event_busy" : "event_available",
    tooltip: (props) => (props.status == "published" ? "Unpublish" : "Publish"),
  },
  {
    onClick: (props) => onShowMediaReports(props),
    icon: () => "assessment",
    tooltip: () => "Media Reports",
  },
  {
    onClick: (props) => onPreview(props),
    icon: () => "remove_red_eye",
    tooltip: () => "Preview",
  },
]);

const rows = ref([
  {
    name: "John",
    phone: "9999999999",
    address: "Ajloun Jordan",
    code: "0000",
    email: "JohnDoe@Email.com",
    password: "JohnDoe@Email.com",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    status: "published",
  },
  {
    name: "Doe",
    phone: "8888888888",
    address: "Amman Jordan",
    code: "1111",
    email: "JohnDoe2@Email.com",
    password: "JohnDoe2@Email.com",
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    status: "not published",
  },
  {
    name: "User",
    phone: "7777777777",
    address: "Jarash Jordan",
    code: "2222",
    email: "JohnDoe3@Email.com",
    password: "JohnDoe3@Email.com",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    status: "published",
  },
  {
    name: "Mark",
    phone: "1111111111",
    address: "Aqaba Jordan",
    code: "3333",
    email: "Mark@Email.com",
    password: "Mark@Email.com",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    status: "not published",
  },
  {
    name: "Sara",
    phone: "4567894562",
    address: "Riyad KSA",
    code: "4444",
    email: "sara@email.com",
    password: "sara@email.com",
    img: "https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    status: "published",
  },
]);
</script>
