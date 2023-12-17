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
  <div class="snap-y snap-mandatory overflow-scroll overflow-x-hidden">
    <div class="snap-start">
      <Carousel :wrap-around="false" :transition="1300">
        <Slide v-for="i in MainPageAds1" class="h-30">
          <!-- //NOTE - จะเอาวิดีbg ให้ comment section ล่าง -->

          <!-- <video-background src="/video/Moon4k.mp4" style="height: 100vh">
            <div class="h-screen flex flex-col justify-between">
              <div class="text-white">
                <h1
                  class="mb-2 mt-24 font-LineBD text-3xl md:text-4xl tracking-tight px-6"
                >
                  ยินดีต้อนรับสู่ growgrass
                </h1>
                <p>พบกับความงามไร้ที่สิ้นสุด</p>
                <p>ทดสอบ Git branch develop</p>
              </div>
              <ButtonMyButtonGroup
                :MainPageaAds1="MainPageaAds1"
                class="w-full mb-24"
                seemore="ดูเพิ่มเติม"
                buy="สั่งซื้อ"
              />
            </div>
          </video-background> -->
          <!-- //NOTE - จะใช้รูปให้ comment section บน -->
          <NuxtImg
            preload
            loading="lazy"
            class="carousel__item object-cover object-bottom md:object-right"
            :src="i.img"
            style="height: 100svh"
          />

          <div :class="i.textstyle" class="absolute">
            <h1 class="font-LineBD tracking-tight px-6" :class="i.titlesize">
              {{ i.title }}
            </h1>
            <p>{{ i.description }}</p>
          </div>

          <ButtonMyButtonGroup
            :MainPageAds1="MainPageAds1"
            class="absolute w-full bottom-24 md:bottom-40 lg:bottom-36 xl:bottom-20 2xl:bottom-32"
          />
        </Slide>
        <!-- //FIXME - แก้ Navigation ที่ซ้อนตรงกลางเวลา loop -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <!-- //SECTION  - @todo slide ล่างที่เลื่อนลงในหน้าแรก -->
    <div class="snap-start">
      <Carousel :wrap-around="false" :transition="1300">
        <Slide v-for="i in MainPageAds2" class="h-30">
          <!-- //NOTE - จะเอาวิดีbg ให้ comment section ล่าง -->

          <video-background src="/video/Moon4k.mp4" style="height: 100svh">
            <div class="h-screen flex flex-col justify-between">
              <div class="text-white">
                <h1
                  class="mb-2 mt-24 font-LineBD text-3xl md:text-4xl tracking-tight px-6"
                >
                  ยินดีต้อนรับสู่ growgrass
                </h1>
                <p>พบกับความงามไร้ที่สิ้นสุด</p>
              </div>
              <ButtonMyButtonGroup
                :MainPageAds2="MainPageAds2"
                class="w-full mb-28"
              />
            </div>
          </video-background>
          <!-- //NOTE - จะใช้รูปให้ comment section บน -->

          <!-- <ButtonMyButtonGroup
            :MainPageAds2="MainPageAds2"
            class="absolute w-full bottom-24 md:bottom-40 lg:bottom-36 xl:bottom-20 2xl:bottom-32"
            seemore="ดูเพิ่มเติม"
            buy="สั่งซื้อ"
          />
          <NuxtImg
            preload
            loading="lazy"
            class="carousel__item h-screen object-cover object-bottom md:object-right"
            src="/ai-img/aidall1.png"
          /> -->
        </Slide>
        <!-- //FIXME - แก้ Navigation ที่ซ้อนตรงกลางเวลา loop -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
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
