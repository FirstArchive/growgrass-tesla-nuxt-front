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
  <Carousel :wrap-around="true" :transition="1000">
    <Slide v-for="i in MainPageAds2" class="h-30">
      <video-background src="/video/Moon4k.mp4" style="height: 100dvh">
        <div class="h-screen flex flex-col justify-between">
          <div class="text-white">
            <h1
              class="mb-2 mt-24 font-LineBD text-3xl md:text-4xl tracking-tight px-6"
            >
              ยินดีต้อนรับสู่ growgrass
            </h1>
            <p>พบกับความงามไร้ที่สิ้นสุด</p>
          </div>
          <ButtonSeeOrBuyNtn
            :MainPageAds2="MainPageAds2"
            class="w-full mb-28"
          />
        </div>
      </video-background>
    </Slide>
    <!-- //FIXME - แก้ Navigation ที่ซ้อนตรงกลางเวลา loop -->
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
