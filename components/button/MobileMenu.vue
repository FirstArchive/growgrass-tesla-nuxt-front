<script setup>
import { mobileHeader } from "~/data/header";

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

const isOpen = ref(false);

const darkmode = ref("dark:text-white ");

const router = useRouter();
const strapiJwt = useCookie("strapi_jwt");

const handleMobileIconClick = () => {
  if (strapiJwt.value) {
    router.push("/user/dashboard"); // Navigate to user dashboard if JWT exists
  } else {
    alert("กรุณา login ก่อน");
    router.push("/login"); // Navigate to login page if JWT does not exist
  }
};
</script>
<!-- use @ Header.vue -->
<template>
  <div class="flex items-center gap-2 mt-0.5">
    <ButtonColorMode class="left-6 md:left-0" />
    <UButton @click="isOpen = !isOpen" variant="ghost" color="black">
      <UIcon name="i-ph-list-bold" dynamic class="text-xl" />
    </UButton>
    <NuxtLink @click="handleMobileIconClick" class="flex">
      <UIcon :name="mobileHeader[2].icon" class="text-xl" dynamic />
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
          v-for="i in mobileHeader"
          :key="i.to"
          class="inline-flex justify-between items-center"
        >
          <NuxtLink
            @click="isOpen = false"
            :to="i.to"
            class="text-4xl w-full"
            >{{ i.alt }}</NuxtLink
          >
          <NuxtLink @click="isOpen = false" class="text-4xl">
            <UIcon :name="i.mobileicon" class="text-xl" dynamic
          /></NuxtLink>
        </ul>

        <!-- <div class="flex flex-col gap-5">
          <hr />

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
        </div> -->
      </div>
    </div>
    <AppLayoutFooter class="absolute bottom-0" />
  </USlideover>
</template>
