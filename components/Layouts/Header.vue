<script setup lang="ts">
const role = useCookie("role").value;
const roleCheck = () => {
  if (role === "user") {
    return true;
  } else {
    return false;
  }
};
import type { goto } from "../../type/goto";

const goto: goto[] = reactive([
  {
    to: "/products",
    alt: "สินค้า",
    icon: "i-ri-shopping-bag-fill",
    mobileicon: "i-material-symbols-arrow-outward",
  },
  {
    to: "/blogs",
    alt: "บทความ",
    icon: "i-material-symbols-book-2",
    mobileicon: "i-material-symbols-arrow-outward",
  },
  {
    to: "/login",
    alt: "ล็อกอิน",
    icon: "i-material-symbols-account-circle",
    mobileicon: "i-material-symbols-account-circle",
  },
]);
const darkmode = ref(
  "dark:hover:bg-slate-950 dark:hover:text-white dark:text-white"
);
</script>

<template>
  <div
    id="navbar-background"
    :class="darkmode"
    class="drop-shadow-xl w-full py-7 px-10 lg:px-32 justify-around flex lg:justify-between items-center mx-auto backdrop-blur-sm backdrop-opacity-95 hover:bg-white hover:shadow-md duration-500"
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
        v-for="path in goto"
        :key="path.alt"
        class="dark:hover:bg-slate-800 hover:bg-slate-100 hover:cursor-pointer p-1 rounded-md duration-300 relative md:left-4 xl:left-[5.13rem]"
      >
        <NuxtLink :to="path.to">
          <span>{{ path.alt }}</span>
        </NuxtLink>
      </div>
    </div>
    <!-- Profile || Icon position right -->
    <div class="flex gap-5 items-center">
      <ButtonColorMode class="left-7 md:left-0" />
      <div
        v-for="path in goto"
        :key="path.alt"
        class="hidden sm:flex md:hidden lg:hidden xl:flex"
      >
        <NuxtLink :to="path.to">
          <UIcon :name="path.icon" dynamic class="text-xl" />
        </NuxtLink>
      </div>

      <!-- Role status check -->
      <NuxtLink to="/user/dashboard" v-if="roleCheck()" class="hidden lg:flex">
        สถานะ&nbsp;&nbsp;
        <span class="font-LineBD text-green-600">{{ role }}</span>
      </NuxtLink>
      <NuxtLink
        to="/admin/dashboard"
        v-else="roleCheck()"
        class="hidden lg:flex"
      >
        สถานะ&nbsp;&nbsp;
        <span class="font-LineBD text-sky-600">{{ role }}</span>
      </NuxtLink>
      <!-- Mobile menu -->
      <div class="lg:hidden">
        <buttonMobileMenu :goto="goto" />
      </div>
    </div>
  </div>
</template>
