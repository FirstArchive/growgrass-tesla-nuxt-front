<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const role = useCookie("role");
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center dark:text-white"
  >
    <div class="font-LineBD text-2xl">ADMIN DASHBOARD</div>
    <div>ยินดีต้อนรับคุณ : {{ role }}</div>
    <div>Role : {{ role }}</div>
  </div>
</template>

<style scoped></style>
