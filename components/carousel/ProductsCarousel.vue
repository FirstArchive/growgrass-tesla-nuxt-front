<script setup lang="ts">
/**
 * //NOTE - ยังไม่ได้ใช้
 */

type products = {
  id: number;
  img: string;
  caption: string;
  description: string;
};
const products: products[] = reactive([
  {
    id: 1,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
    caption: "item1",
    description: "หญ้าเทียมแห่งอนาคต",
  },
  {
    id: 2,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692971740452",
    caption: "item2",
    description: "เพื่อครอบครัวของคุณ",
  },
  {
    id: 3,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
    caption: "item3",
    description: "เพื่อครอบครัวของคุณ",
  },
  {
    id: 4,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_TH_LANG_TH?wid=200&hei=130&fmt=png-alpha&.v=1693703820595",
    caption: "item4",
    description: "เพื่อครอบครัวของคุณ",
  },
]);
</script>

<template>
  <Carousel :itemsToShow="6" :wrapAround="true" :transition="500">
    <Slide v-for="product in products" :key="product.caption">
      <NuxtImg
        loading="lazy"
        :src="product.img"
        :key="product.id"
        class="carousel__item rounded-lg h-24 sm:h-48 w-auto object-contain"
        ><h4>{{ product.caption }}</h4></NuxtImg
      >
    </Slide>
    <template #addons>
      <!-- <Pagination /> -->
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
