<template>
  <USelectMenu
    variant="none"
    v-model="selected"
    :options="mode"
    placeholder="เลือกโหมด"
    value-attribute="name"
    option-attribute="name"
  />
</template>

<script setup>
const mode = [
  {
    id: 1,
    name: "system",
    value: "system",
  },
  {
    id: 2,
    name: "light",
    value: "light",
  },
  {
    id: 3,
    name: "dark",
    value: "dark",
  },
  {
    id: 4,
    name: "sepia",
    value: "sepia",
  },
];
const selected = ref(mode[0].value);
watch(selected, (newValue) => {
  colorMode.preference = newValue;
  // console.log("ค่าที่เลือก: ", newValue);
});

const colorMode = useColorMode();
// console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
