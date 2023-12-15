<script setup>
const role = useCookie("role").value;
const roleCheck = () => {
  if (role === "user") {
    return true;
  } else {
    return false;
  }
};
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
          <h1 v-if="roleCheck()" class="text-right">
            สถานะตอนนี้&nbsp;
            <span class="font-LineBD text-green-500">{{ role }}</span>
          </h1>
          <!-- v-if="roleCheck()" || v-else="roleCheck()" -->
          <h1 v-else="roleCheck()" class="text-right">
            สถานะตอนนี้&nbsp;
            <span class="font-LineBD text-blue-700">{{ role }}</span>
          </h1>
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
