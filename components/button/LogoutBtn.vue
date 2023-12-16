<script setup lang="ts">
const darkmode = ref(
  "dark:hover:bg-slate-950 dark:hover:text-white dark:text-slate-900"
);
const cookieEmail = useCookie("email");
const cookiePass = useCookie("pass");
const cookieRole = useCookie("role");
console.log(`ก่อนลบ ${cookieEmail.value}, ${cookiePass.value}`);
const delCookie = () => {
  cookieEmail.value = "";
  cookiePass.value = "";
  cookieRole.value = "";
  window.location.href = "/login";
  //   console.log(`หลังลบ ${cookieEmail.value}, ${cookiePass.value}`);
};
</script>

<template>
  <div>
    <UButton
      @click="delCookie()"
      size="sm"
      color="red"
      variant="soft"
      :class="darkmode"
      class="w-full justify-center duration-200"
      >Log Out!!</UButton
    >
  </div>
</template>

<style scoped></style>
