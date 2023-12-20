<script setup lang="ts">
const cookieEmail = useCookie("email").value;
const role = useCookie("role");
defineProps({});
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
definePageMeta({
  middleware: ["auth"],
  layout: "user-layout",
});
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center dark:text-white"
  >
    <div class="font-LineBD text-2xl">USER DASHBOARD</div>
    <div>
      ยินดีต้อนรับคุณ :
      <span class="font-LineBD text-xl">{{ cookieEmail }}</span>
    </div>
    <div>
      Role : <span class="font-LineBD text-xl">{{ role }}</span>
    </div>
    <div class="my-4"><FormLogoutBtn /></div>
  </div>
</template>

<style scoped></style>
