<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const cookieEmail = useCookie("email").value;
const role = useCookie("role");
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center dark:text-white"
  >
    <div class="font-LineBD text-2xl">USER DASHBOARD</div>
    <div>ยินดีต้อนรับคุณ : {{ cookieEmail }}</div>
    <div>Role : {{ role }}</div>
  </div>
</template>

<style scoped></style>
