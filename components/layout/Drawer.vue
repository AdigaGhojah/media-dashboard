<template>
  <q-drawer
    v-model="drawer.isDrawerOpened"
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
            :active="menuItem.path === selected"
            v-ripple
            @click="selected=menuItem.path"
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
const route = useRoute();
const selected = ref(route.path.replace('/',''));
const props = defineProps({
  drawer: {
    type: Object,
    required: true,
  },
  menuList: {
    type: Object,
    required: true,
  },
});

</script>
