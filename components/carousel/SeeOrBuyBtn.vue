<script setup>
import { MainPageAds1, MainPageAds2, modalData } from "~/data/mainpage";

defineProps({
  title: String,
  description: String,
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
    snapAlign: "center",
  },
});
</script>
<!-- use @ MyCarousel.vue -->
<template>
  <!-- //FIXME - color in dark mode -->
  <UButton
    color="gray"
    variant="solid"
    class="w-full justify-center scale-100 sm:scale-90"
    size="xl"
    @click="isOpen = true"
    >ดูเพิ่มเติม</UButton
  >

  <!-- Click action -->
  <UModal v-model="isOpen">
    <Carousel :items-to-show="1" :wrap-around="false" class="dark:text-white">
      <!--  v-for="slide in 2" -->
      <Slide v-for="(i, index) in 1" :key="index">
        <div style="height: 70svh" class="flex">
          <div
            class="p-4 py-10 flex items-center justify-center overflow-y-auto"
          >
            <div class="carousel__item px-10 md:px-20 my-auto items-start">
              <div>
                <h1 class="text-2xl font-LineBD text-center">{{ title }}</h1>
                <UDivider label="รายละเอียด" class="my-4" />
                <p class="text-ellipsis text-left">{{ description }}</p>
                <!-- <UDivider label="test scroll" class="my-4" />
                <p class="text-ellipsis text-left">{{ description }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide v-for="(i, index) in 1" :key="index">
        <div style="height: 70svh" class="flex">
          <div
            class="p-4 py-10 flex items-center justify-center overflow-y-auto w-[19rem] md:w-[30rem]"
          >
            <div
              class="carousel__item px-10 md:px-20 my-auto items-start w-full"
            >
              <div>
                <h1 class="text-2xl font-LineBD text-center">สเปค (spec)</h1>
                <UDivider label="รายละเอียด" class="my-4" />
                <ul v-for="i in 3" class="text-left list-disc">
                  <li>li {{ i }}</li>
                </ul>
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
