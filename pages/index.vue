<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "Home, หญ้าเทียม, แต่งสวน",
    },
  ],
});
useSeoMeta({
  title: "Home",
  ogTitle: "หญ้าเทียม GrowGrassTH | ผู้นำด้านหญ้าเทียมคุณภาพสูง",
  description:
    "หญ้าเทียม GrowGrassTH ผู้นำด้านหญ้าเทียมคุณภาพสูง ให้บริการออกแบบ ติดตั้ง และจำหน่ายหญ้าเทียมทุกประเภท รับประกันคุณภาพ 10 ปี",
  ogDescription:
    "หญ้าเทียม GrowGrassTH ผู้นำด้านหญ้าเทียมคุณภาพสูง ให้บริการออกแบบ ติดตั้ง และจำหน่ายหญ้าเทียมทุกประเภท รับประกันคุณภาพ 10 ปี",
  ogImage: "/ai-img/aidall9.png",
  twitterCard: "summary_large_image",
});
import { MainPageAds1, MainPageAds2 } from "~/data/mainpage";
</script>

<template>
  <carouselMyCarousel
    :MainPageAds1="MainPageAds1"
    :MainPageAds2="MainPageAds2"
  />
</template>
