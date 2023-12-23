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
// const { find } = useStrapi();

// const response = await find("blogs");
// response.data.forEach((element) => {
//   console.log(element.attributes);
// });
</script>

<template>
  <div class="snap-y snap-mandatory overflow-scroll overflow-x-hidden">
    <div class="snap-start" style="height: 100svh">
      <CarouselPicCarousel />
    </div>
    <div class="snap-start" style="height: 100dvh">
      <CarouselVideoCarousel />
    </div>
  </div>
</template>
