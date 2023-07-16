<template>
  <q-drawer
    v-model="isDrawerOpened"
    show-if-above
    :width="300"
    :breakpoint="500"
    bordered
  >
    <q-scroll-area class="fit" style="padding:16px;">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item
            clickable
            :active="menuItem.label === selected"
            v-ripple
            @click="selected=menuItem.label"
            :to="menuItem.path"
            class="text-primary"
            active-class="bg-primary text-white rounded-borders	"
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
const selected = ref('Admin Profile');
const props = defineProps({
  isDrawerOpened: {
    type: Boolean,
    required: true,
  },
  menuList: {
    type: Object,
    required: true,
  },
});
const isDrawerOpened = ref(props.isDrawerOpened);

watch(
  () => props.isDrawerOpened,
  () => {
    isDrawerOpened.value = props.isDrawerOpened;
  }
);

</script>
