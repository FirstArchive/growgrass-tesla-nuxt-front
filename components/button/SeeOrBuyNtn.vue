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
  <UContainer>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center drop-shadow-md"
    >
      <UButton
        color="black"
        variant="solid"
        class="w-10/12 md:w-2/5 xl:w-1/5 justify-center dark:text-white dark:bg-slate-900 dark:hover:bg-slate-800 duration-200"
        size="lg"
        @click="isOpen = true"
        >ดูเพิ่มเติม</UButton
      >
      <UButton
        color="black"
        variant="soft"
        class="w-10/12 md:w-2/5 xl:w-1/5 justify-center bg-slate-200 hover:bg-slate-100 duration-200"
        size="lg"
        >สั่งซื้อ</UButton
      >
    </div>
    <!-- Click action -->
    <UModal v-model="isOpen">
      <Carousel
        :items-to-show="1"
        :wrap-around="false"
        class="py-10 dark:text-white"
      >
        <!--  v-for="slide in 2" -->
        <Slide v-for="i in MainPageAds1" :key="i.title">
          <div
            class="py-8 md:py-4 flex items-center justify-center overflow-y-auto"
          >
            <div class="carousel__item px-10 md:px-20 my-auto items-start">
              <div>
                <h1 class="text-4xl font-LineBD">{{ i.title }}</h1>
                <UDivider label="รายละเอียด" class="my-3" />
                <p class="text-ellipsis">{{ i.description }}</p>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </UModal>
  </UContainer>
</template>

<style scoped></style>
