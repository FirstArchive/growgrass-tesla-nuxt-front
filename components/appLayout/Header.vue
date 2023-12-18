<script setup lang="ts">
import { desktopHeader } from "~/data/header";

const role = useCookie("role").value;
// console.log(role);

const getStatus = () => {
  if (role === "user") {
    return "user";
  } else if (role === "admin") {
    return "admin";
  } else {
    return "unauthenticated";
  }
};

const darkmode = ref(
  "dark:hover:bg-slate-950 dark:hover:text-white dark:text-white"
);
</script>

<template>
  <div
    id="navbar-background"
    :class="darkmode"
    class="flex drop-shadow-xl w-full py-7 px-10 lg:px-32 justify-around lg:justify-between items-center mx-auto backdrop-blur-sm backdrop-opacity-95 hover:bg-white hover:shadow-md duration-500"
  >
    <!-- Logo -->
    <div>
      <NuxtLink to="/" class="text-center font-LineBD"
        >Growgrassth.com</NuxtLink
      >
    </div>
    <!-- Desktop menu -->
    <div class="md:gap-3 xl:gap-10 hidden md:flex mt-[0.15rem]">
      <div
        v-for="i in desktopHeader"
        :key="i.alt"
        class="dark:hover:bg-slate-800 hover:bg-slate-100 hover:cursor-pointer p-1 rounded-md duration-300 relative md:left-[1.8rem] xl:left-[7rem] 2xl:left-[7rem]"
      >
        <NuxtLink :to="i.to">
          <span>{{ i.alt }}</span>
        </NuxtLink>
      </div>
    </div>
    <!-- Profile || Icon position right -->
    <div class="flex gap-5 items-center">
      <ButtonColorMode class="left-7 md:left-0" />
      <div
        v-for="i in desktopHeader"
        :key="i.alt"
        class="hidden sm:flex md:hidden lg:hidden xl:flex"
      >
        <NuxtLink :to="i.to">
          <UIcon :name="i.icon" dynamic class="text-xl" />
        </NuxtLink>
      </div>

      <!-- ตรวจสอบสถานะของ role -->
      <div>
        <NuxtLink
          to="/user/dashboard"
          v-if="getStatus() === 'user'"
          class="hidden lg:flex text-sm items-center"
        >
          สถานะ&nbsp;&nbsp;
          <span class="font-LineBD text-sm text-green-600">ผู้ใช้</span>
        </NuxtLink>
        <NuxtLink
          to="/admin/dashboard"
          v-else-if="getStatus() === 'admin'"
          class="hidden lg:flex text-sm items-center"
        >
          สถานะ&nbsp;&nbsp;
          <span class="font-LineBD text-sm text-sky-600">ผู้ดูแลระบบ</span>
        </NuxtLink>
        <NuxtLink
          to="/login"
          v-else
          class="hidden lg:flex text-sm items-center"
        >
          สถานะ&nbsp;&nbsp;
          <span class="font-LineBD text-sm text-green-600"
            >ยังไม่ได้ล็อกอิน</span
          >
        </NuxtLink>
      </div>
      <!-- Mobile menu -->
      <div class="lg:hidden">
        <buttonMobileMenu />
      </div>
    </div>
  </div>
</template>
