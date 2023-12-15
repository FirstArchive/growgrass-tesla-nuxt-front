<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const role = useCookie("role");
useHead({
  title: `${role.value} | dashboard`,
  meta: [
    {
      name: "description",
      content: "dashboard หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "dashboard, หญ้าเทียม, แต่งสวน",
    },
  ],
});
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center dark:text-white"
  >
    <div class="font-LineBD text-2xl">ADMIN DASHBOARD</div>
    <div>
      ยินดีต้อนรับคุณ : <span class="font-LineBD text-xl">{{ role }}</span>
    </div>
    <div>
      Role : <span class="font-LineBD text-xl">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped></style>
