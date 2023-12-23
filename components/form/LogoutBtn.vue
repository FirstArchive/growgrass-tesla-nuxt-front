<script setup lang="ts">
const { logout } = useStrapiAuth();
const router = useRouter();

const darkmode = ref(
  "dark:hover:bg-slate-950 dark:hover:text-white dark:text-slate-900"
);
const islogout = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <UButton
    @click="islogout()"
    size="sm"
    color="red"
    variant="soft"
    :class="darkmode"
    class="w-full justify-center duration-200 dark:text-gray-400"
    >Log Out!!</UButton
  >
</template>

<style scoped></style>
