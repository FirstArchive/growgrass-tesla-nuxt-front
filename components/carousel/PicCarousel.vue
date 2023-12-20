<script setup lang="ts">
import { MainPageAds1, MainPageAds2 } from "~/data/mainpage";

const showArrowText = ref(false);
const textOpacity = ref(1);

const displayArrowText = () => {
  showArrowText.value = true;
  setTimeout(() => {
    textOpacity.value = 0;
    setTimeout(() => {
      showArrowText.value = false;
    }, 1000);
  }, 2000);
};
displayArrowText();
</script>
<!-- //ANCHOR - use@ /index.vue -->
<template>
  <!-- //SECTION  - @todo slide ล่างที่เลื่อนลงในหน้าแรก -->

  <Carousel :wrap-around="true" :transition="1000">
    <Slide v-for="(i, index) in MainPageAds1" :key="index">
      <NuxtImg
        class="carousel__item object-cover object-bottom md:object-right"
        :src="i.img"
        style="height: 100svh"
      />

      <UContainer
        style="height: 100svh"
        class="w-96 sm:w-[28rem] flex justify-between items-center absolute flex-col py-14 pt-20"
      >
        <div :class="i.textstyle" class="flex flex-col gap-y-2 items-center">
          <h1 class="font-LineBD tracking-tight" :class="i.titlesize">
            {{ i.title }}
          </h1>
          <p>{{ i.description }}</p>
        </div>
        <!-- w-full bottom-24 md:bottom-40 lg:bottom-36 xl:bottom-20 2xl:bottom-32 -->
        <div
          class="flex flex-col gap-y-3 md:flex-row items-center justify-center w-full md:w-80 lg:w-[25rem] xl:w-full"
        >
          <CarouselSeeOrBuyBtn
            :title="i.btndetail.title"
            :description="i.btndetail.detail"
          />
          <UButton
            :to="i.lineLink"
            target="_blank"
            color="black"
            variant="solid"
            class="w-full justify-center scale-100 sm:scale-90"
            size="xl"
            >สั่งซื้อ</UButton
          >
        </div>
      </UContainer>
      <!-- </div> -->
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.arrow-text {
  transition: opacity 1s ease-in-out;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  /* padding: 10px; */
}
</style>
