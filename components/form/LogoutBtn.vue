<script setup lang="ts">
const { logout } = useStrapiAuth();
const router = useRouter();

const islogout = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <UButton @click="islogout()" size="sm" color="red" variant="solid"
    class="w-full justify-center  dark:bg-red-500 dark:text-white">Log
    Out!!
  </UButton>
</template>

<style scoped></style>
