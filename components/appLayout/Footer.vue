<script setup lang="ts">
const footer = reactive([
  {
    to: "#",
    alt: "Privacy & Legal",
    icon: "i-ri-shopping-bag-fill",
  },
  {
    to: "#",
    alt: "ติดต่อ",
    icon: "i-material-symbols-book-2",
  },
  {
    to: "#",
    alt: "เกี่ยวกับเรา",
    icon: "i-material-symbols-account-circle",
  },
]);
</script>

<template>
  <div class="w-full py-2">
    <div class="flex gap-2 justify-center items-baseline">
      <h1
        class="text-center dark:text-slate-600 font-LineBD text-slate-950 text-xs"
      >
        GROWGRASS &copy; 2023
      </h1>
      <ul v-for="i in footer" :key="i.alt">
        <NuxtLink
          :to="i.to"
          class="font-LineBD dark:text-slate-600 text-slate-950 text-xs"
        >
          {{ i.alt }}
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
