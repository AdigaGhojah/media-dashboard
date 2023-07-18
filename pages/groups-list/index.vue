<template>
  <div class="q-px-md" style="display: flex; justify-content: flex-end">
    <q-btn
      color="primary"
      label="Create new company"
      to="groups-list/create"
      icon-right="add"
    />
  </div>
  <Table
    tableTitle="Companies"
    :columns="columns"
    :rows="rows"
    :tableActions="getTableActions()"
  />
  <Dialog
    v-for="dialogData in dialogsData"
    :key="dialogData.name"
    :dialogObj="dialogData"
  />
</template>

<script setup>
const dialogsData = ref([]);
const toggleDialog = (dialog) => {
  dialog.value.isOpened = !dialog.value.isOpened;
};

const onConfirmDelete = async (dialog) => {
  console.log("delete ", dialog.value.selectedRows[0].name);
  toggleDialog(dialog);
};
const onDeleteRow = (row) => {
  const newDialog = ref({
    isOpened: true,
    title: `are you sure you want to delete ${row.name}?`,
    onConfirm: () => onConfirmDelete(newDialog),
    selectedRows: [row],
    dialogWidth: "350px",
  });
  dialogsData.value.push(newDialog.value);
};
const onShowUsers = (row) => {
  const newDialog = ref({
    isOpened: true,
    onConfirm: () => toggleDialog(newDialog),
    selectedRows: [row],
    dialogWidth: "800px",
    contentTable: {
      title: `${row.name}`,
      columns,
      tableActions: getTableActions(),
      rows,
    },
  });
  dialogsData.value.push(newDialog.value);
};
const columns = ref([
  {
    label: "Company Name",
    align: "left",
    field: "name",
  },
  {
    label: "Phone Number",
    align: "left",
    field: "phone",
  },
  {
    label: "Address",
    align: "left",
    field: "address",
  },
  {
    label: "Co. Key-ref code",
    align: "left",
    field: "code",
  },
  { name: "actions", label: "Actions", field: "", align: "center" },
]);
// const tableActions = ref([
//   {
//     to: (props) => `groups-list/${props.name}`,
//     icon: () => "edit",
//     tooltip: () => "Edit",
//   },
//   {
//     onClick: (props) => onDeleteRow(props),
//     icon: () => "delete",
//     tooltip: () => "Delete",
//   },
//   {
//     onClick: (props) => onShowUsers(props),
//     icon: () => "people",
//     tooltip: () => "Show Users List",
//   },
// ]);
const getTableActions = () => {
  return [
    {
      to: (props) => `groups-list/${props.name}`,
      icon: () => "edit",
      tooltip: () => "Edit",
    },
    {
      onClick: (props) => onDeleteRow(props),
      icon: () => "delete",
      tooltip: () => "Delete",
    },
    {
      onClick: (props) => onShowUsers(props),
      icon: () => "people",
      tooltip: () => "Show Users List",
    },
  ];
};
const rows = ref([
  {
    name: "John",
    phone: "9999999999",
    address: "Ajloun Jordan",
    code: "0000",
    email: "JohnDoe@Email.com",
    password: "JohnDoe@Email.com",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    status: "published",
  },
  {
    name: "Doe",
    phone: "8888888888",
    address: "Amman Jordan",
    code: "1111",
    email: "JohnDoe2@Email.com",
    password: "JohnDoe2@Email.com",
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    status: "published",
  },
  {
    name: "User",
    phone: "7777777777",
    address: "Jarash Jordan",
    code: "2222",
    email: "JohnDoe3@Email.com",
    password: "JohnDoe3@Email.com",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    status: "published",
  },
  {
    name: "Mark",
    phone: "1111111111",
    address: "Aqaba Jordan",
    code: "3333",
    email: "Mark@Email.com",
    password: "Mark@Email.com",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    status: "published",
  },
  {
    name: "Sara",
    phone: "4567894562",
    address: "Riyad KSA",
    code: "4444",
    email: "sara@email.com",
    password: "sara@email.com",
    img: "https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    status: "published",
  },
]);
</script>
 