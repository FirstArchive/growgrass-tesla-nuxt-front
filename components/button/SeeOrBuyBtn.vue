<script setup>
import { MainPageAds1, MainPageAds2 } from "~/data/mainpage";

const isOpen = ref(false);
const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: "center",
  },
});
</script>
<!-- use @ MyCarousel.vue -->
<template>
  <!-- <UContainer> -->
  <div
    class="flex flex-col md:flex-row gap-y-4 md:gap-y-6 justify-center items-center drop-shadow-md"
  >
    <!-- //FIXME - color in dark mode -->

    <UButton
      color="black"
      variant="solid"
      class="w-full justify-center scale-100 sm:scale-90"
      size="xl"
      @click="isOpen = true"
      >ดูเพิ่มเติม</UButton
    >
    <UButton
      color="gray"
      variant="solid"
      class="w-full justify-center scale-100 sm:scale-90"
      size="xl"
      >สั่งซื้อ</UButton
    >
  </div>
  <!-- Click action -->
  <UModal v-model="isOpen">
    <Carousel :items-to-show="1" :wrap-around="false" class="dark:text-white">
      <!--  v-for="slide in 2" -->
      <Slide v-for="i in MainPageAds1" :key="i.title">
        <div style="height: 80svh" class="flex">
          <div class="p-4 flex items-center justify-center overflow-y-auto">
            <div class="carousel__item px-10 md:px-20 my-auto items-start">
              <div>
                <h1 class="text-4xl font-LineBD">{{ i.title }}</h1>
                <UDivider label="รายละเอียด" class="my-3" />
                <p class="text-ellipsis">{{ i.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </UModal>
  <!-- </UContainer> -->
</template>

<style scoped></style>
