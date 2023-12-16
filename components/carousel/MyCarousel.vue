<script setup lang="ts">
defineProps({
  MainPageaAds1: Object,
  MainPageaAds2: Object,
});
const showArrowText = ref(false);
const textOpacity = ref(1);

const displayArrowText = () => {
  showArrowText.value = true;
  textOpacity.value = 1;

  setTimeout(() => {
    textOpacity.value = 0; // เริ่ม fade ออก
  }, 2000);

  setTimeout(() => {
    showArrowText.value = false; // ซ่อนข้อความหลังจาก fade ออกสมบูรณ์
  }, 3000); // เวลาทั้งหมดหลังจากเริ่ม fade
};
displayArrowText();
</script>
<!-- use @ / index.vue -->
<template>
  <!-- @todo Section 1 -->
  <Carousel :wrap-around="false" :transition="1300">
    <!-- <Slide v-for="slide in MainPageaAds1" :key="slide.caption" class="h-30">
      <div
        :class="slide.titlecolor"
        class="absolute top-28 md:top-44 lg:top-36 xl:top-24 2xl:top-44"
      >
        <h1
          :class="slide.textstyle"
          class="font-LineBD text-4xl md:text-5xl tracking-tight px-6"
        >
          {{ slide.caption }}
        </h1>

        <h1
          class="font-LineRG text-xl md:text-2xl xl:text-lg tracking-wide mt-1 md:mt-3"
        >
          {{ slide.description }}
        </h1>
      </div>

      <ButtonMyButtonGroup
        :MainPageaAds1="MainPageaAds1"
        class="absolute w-full bottom-24 md:bottom-40 lg:bottom-36 xl:bottom-20 2xl:bottom-32"
        seemore="ดูเพิ่มเติม"
        buy="สั่งซื้อ"
      />
      <NuxtImg
        preload
        loading="lazy"
        class="carousel__item h-screen object-cover object-bottom md:object-right"
        :src="slide.img"
      />
    </Slide> -->
    <!-- @audit-ok บนคืออันเก่าที่เป็นรูป ข้างล่างนี้คือเทส video background -->
    <Slide class="h-30">
      <video-background src="/video/Moon4k.mp4" style="height: 100vh">
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
      </video-background>
    </Slide>
    <!-- <template #addons>
      <Navigation />
    </template> -->
  </Carousel>
  <!-- @todo Section 2 -->
  <!-- <div class="carousel__item h-screen w-full bg-scroll bg-top"> div จบอยู่ใต้/div ต่อจาก /h1 description -->
  <!-- <Carousel :wrap-around="true" :transition="1300">
    <Slide v-for="slide in MainPageaAds2" :key="slide.caption" class="h-screen">
      <div
        :class="slide.titlecolor"
        class="absolute top-28 md:top-44 lg:top-36 xl:top-24 2xl:top-44"
      >
        <h1
          class="font-LineBD text-4xl md:text-5xl tracking-tight drop-shadow-md"
        >
          {{ slide.caption }}
        </h1>
        <h1 class="font-LineRG text-xl md:text-2xl xl:text-lg tracking-wide">
          {{ slide.description }}
        </h1>
      </div>

      <ButtonMyButtonGroup
        class="absolute w-full bottom-14 md:bottom-40 lg:bottom-36 xl:bottom-20 2xl:bottom-32"
        seemore="ดูเพิ่มเติม"
        buy="สั่งซื้อ"
      />
      <NuxtImg
        loading="lazy"
        class="carousel__item h-screen object-cover"
        :src="slide.img"
      />
    </Slide>
  </Carousel> -->
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
