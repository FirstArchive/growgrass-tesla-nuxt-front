<script setup>
const role = useCookie("role").value;
const getStatus = () => {
  if (role === "user") {
    return "user";
  } else if (role === "admin") {
    return "admin";
  } else {
    return "unauthenticated";
  }
};
// const roleCheck = () => {
//   if (role === "user") {
//     return true;
//   } else {
//     return false;
//   }
// };
const isOpen = ref(false);

defineProps({
  goto: Object,
});
const darkmode = ref("dark:text-white ");
</script>
<!-- use @ Header.vue -->
<template>
  <div class="flex items-center gap-2 mt-0.5">
    <UButton @click="isOpen = !isOpen" variant="ghost" color="black">
      <UIcon name="i-ph-list-bold" dynamic class="text-xl" />
    </UButton>
    <NuxtLink @click="isOpen = false" to="/login" class="flex">
      <UIcon :name="goto[2].icon" class="text-xl" dynamic />
    </NuxtLink>
  </div>

  <USlideover v-model="isOpen" :class="darkmode">
    <div class="p-4 px-14 flex-1">
      <div class="flex flex-row-reverse">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1 p-0 mt-1"
          @click="isOpen = false"
        />
      </div>
      <div class="h-full flex flex-col gap-10 mt-10">
        <ul
          v-for="menu in goto"
          :key="menu.to"
          class="inline-flex justify-between items-center"
        >
          <NuxtLink
            @click="isOpen = false"
            :to="menu.to"
            class="text-4xl w-full"
            >{{ menu.alt }}</NuxtLink
          >
          <NuxtLink @click="isOpen = false" :to="menu.to" class="text-4xl">
            <UIcon :name="menu.mobileicon" class="text-xl" dynamic
          /></NuxtLink>
        </ul>

        <div class="flex flex-col gap-5">
          <hr />
          <!-- Role status check -->
          <div class="flex justify-end">
            <h1 v-if="getStatus() === 'user'" class="text-right">
              สถานะตอนนี้&nbsp;
              <span class="font-LineBD text-green-500">ผู้ใช้</span>
            </h1>
            <h1 v-else-if="getStatus() === 'admin'" class="text-right">
              สถานะตอนนี้&nbsp;
              <span class="font-LineBD text-blue-700">ผู้ดูแลระบบ</span>
            </h1>
            <h1 v-else="getStatus()" class="text-right">
              สถานะตอนนี้&nbsp;
              <span class="font-LineBD text-blue-700">ยังไม่ได้ล็อกอิน</span>
            </h1>
          </div>
          <!--  -->
          <hr />
          <span class="font-LineBD text-3xl text-right">GO DASHBOARD</span>
          <div class="flex items-center gap-4 ml-auto">
            <NuxtLink
              @click="isOpen = false"
              class="text-lg text-right font-LineBD text-green-500"
              to="/user/dashboard"
              >USER
            </NuxtLink>
            <span class="mb-[0.10rem]">OR</span>
            <NuxtLink
              @click="isOpen = false"
              class="text-lg text-right font-LineBD text-blue-700"
              to="/admin/dashboard"
              >ADMIN
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <LayoutsFooter class="absolute bottom-0" />
  </USlideover>
</template>
