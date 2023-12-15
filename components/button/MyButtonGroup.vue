<script setup>
defineProps({
  seemore: String, //ดูเพิ่ม
  buy: String, //สั่งซื้อ

  MainPageaAds1: Object,
  MainPageaAds2: Object,
});
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
    snapAlign: "start",
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
        >{{ seemore }}</UButton
      >
      <UButton
        color="black"
        variant="soft"
        class="w-10/12 md:w-2/5 xl:w-1/5 justify-center bg-slate-200 hover:bg-slate-100 duration-200"
        size="lg"
        >{{ buy }}</UButton
      >
    </div>
    <!-- Click action -->
    <UModal v-model="isOpen">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        class="h-[40rem] dark:text-white"
      >
        <Slide v-for="slide in 2" :key="slide">
          <div
            class="py-8 md:py-4 flex items-center justify-center overflow-y-auto h-[40rem]"
          >
            <div class="carousel__item px-10 md:px-20 my-auto items-start">
              <!-- {{ slide }} -->
              <div v-for="title in MainPageaAds1">
                <h1 class="text-4xl font-LineBD">{{ title.caption }}</h1>
                <UDivider label="รายละเอียด" class="my-3" />
                <p class="text-ellipsis">
                  <!-- {{ title.description }} -->
                </p>
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
