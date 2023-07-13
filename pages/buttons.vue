<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn style="background: #ff0080; color: white" label="Fuchsia" />
    <q-btn flat style="color: #ff0080" label="Fuchsia Flat" />
    <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
    <q-btn outline style="color: goldenrod" label="Goldenrod" />
    <q-btn
      color="grey-4"
      text-color="purple"
      glossy
      unelevated
      icon="camera_enhance"
      label="Purple text"
    />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn
      color="red"
      icon="mail"
      icon-right="send"
      label="On Left and Right"
    />
    <br />
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn round color="primary" icon="shopping_cart" />
    <q-btn round color="secondary" icon="navigation" />
    <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
    <q-btn round color="brown-5" icon="directions" />
    <q-btn round color="deep-orange" icon="edit_location" />
    <q-btn round color="purple" glossy icon="local_grocery_store" />
    <q-btn round color="black" icon="my_location" />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn square color="primary" icon="shopping_cart" />
    <q-btn square color="secondary" icon="navigation" />
    <q-btn square color="amber" glossy text-color="black" icon="layers_clear" />
    <q-btn square color="brown-5" icon="directions" />
    <q-btn square color="deep-orange" icon="edit_location" />
    <q-btn square color="purple" glossy icon="local_grocery_store" />
    <q-btn square color="black" icon="my_location" />
  </div>
  <div class="q-pa-md q-gutter-md">
    <q-btn color="teal">
      <q-icon left size="3em" name="map" />
      <div>Label</div>
    </q-btn>

    <q-btn round>
      <q-avatar size="42px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
      </q-avatar>
    </q-btn>

    <q-btn color="indigo" no-caps> Multiline<br />Button </q-btn>

    <q-btn color="deep-orange" push>
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">Custom<br />Content</div>
      </div>
    </q-btn>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn flat color="primary" label="Flat" />
    <q-btn flat rounded color="primary" label="Flat Rounded" />
    <q-btn flat round color="primary" icon="card_giftcard" />
    <br />
    <q-btn outline color="primary" label="Outline" />
    <q-btn outline rounded color="primary" label="Outline Rounded" />
    <q-btn outline round color="primary" icon="card_giftcard" />
    <br />
    <q-btn push color="primary" label="Push" />
    <q-btn push color="primary" round icon="card_giftcard" />
    <q-btn push color="white" text-color="primary" label="Push" />
    <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
    <br />
    <q-btn unelevated color="primary" label="Unelevated" />
    <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
    <q-btn unelevated round color="primary" icon="card_giftcard" />
    <br />
    <q-btn no-caps color="primary" label="No caps" />
    <br />
    <q-btn class="glossy" color="teal" label="Glossy" />
    <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
    <q-btn class="glossy" round color="primary" icon="card_giftcard" />
    <q-btn class="glossy" round color="secondary" icon="local_florist" />
    <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="size in sizes"
      :key="`btn_size_sq_${size}`"
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br />
    <q-btn
      v-for="size in sizes"
      :key="`btn_size_rd_${size}`"
      rounded
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br />
    <q-btn
      v-for="(size, i) in sizes"
      :key="`btn_size_round_${size}`"
      round
      color="primary"
      :size="size"
      :icon="icons[i]"
    />

    <br />

    <q-btn
      v-for="size in sizes"
      :key="`btn_size_dense_sq_${size}`"
      dense
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br />
    <q-btn
      v-for="size in sizes"
      :key="`btn_size_dense_rd_${size}`"
      rounded
      dense
      color="primary"
      :size="size"
      :label="`Size ${size}`"
    />
    <br />
    <q-btn
      v-for="(size, i) in sizes"
      :key="`btn_size_dense_round_${size}`"
      round
      dense
      color="primary"
      :size="size"
      :icon="icons[i]"
    />

    <br />

    <q-btn size="10px" color="black" label="Text height: 10px" />
    <q-btn size="22px" class="q-px-xl q-py-xs" color="purple" label="Custom" />
    <q-btn size="35px" round color="teal" icon="map" />
  </div>
</template>

<script setup>
const sizes = ["xs", "sm", "md", "lg", "xl"];
const icons = [
  "navigation",
  "add_a_photo",
  "camera",
  "camera_front",
  "my_location",
];
</script>

<style lang="sass" scoped>
.btn-fixed-width
  width: 200px
</style>
