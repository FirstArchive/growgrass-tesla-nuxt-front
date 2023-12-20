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
  <Carousel :wrap-around="false" :transition="1000">
    <Slide v-for="(i, index) in 1" :key="index">
      <video-background src="/video/Moon4k.mp4" style="height: 100dvh">
        <div class="flex justify-center">
          <div
            class="w-96 flex flex-col items-center justify-between py-14 pt-24"
            style="height: 100dvh"
          >
            <div class="text-white">
              <h1 class="font-LineBD text-3xl md:text-4xl tracking-tight px-6">
                ยินดีต้อนรับสู่ growgrass
              </h1>
              <p>พบกับความงามไร้ที่สิ้นสุด</p>
            </div>
            <!-- <UContainer class="w-96"> -->
            <div
              class="flex flex-col gap-y-3 md:flex-row items-center justify-center w-[22rem] md:w-80 lg:w-[25rem] xl:w-full"
            >
              <CarouselSeeOrBuyBtn />
              <!-- :to="i.lineLink" -->
              <UButton
                target="_blank"
                color="black"
                variant="solid"
                class="w-full justify-center scale-100 sm:scale-90"
                size="xl"
                >สั่งซื้อ</UButton
              >
            </div>
            <!-- </UContainer> -->
          </div>
        </div>
      </video-background>
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
