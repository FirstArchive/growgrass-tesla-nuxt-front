<script setup>
const MainPageaAds1 = [
  {
    titlecolor: "text-slate-900",
    textstyle: "",
    img: "/ai-img/aidall11.png",
    caption: "ยินดีต้อนรับสู่ growgrass",
    description: "บริการจัดสวนและติดตั้งหญ้าเทียม",
  },
  {
    titlecolor: "text-slate-900 text-9xl",
    textstyle: "text-6xl",
    img: "https://img2.pic.in.th/pic/Z06_8035_23_11zon.webp",
    caption: "1cmAA",
    description: "ตารางเมตรละ 119.-",
  },
  {
    titletextstyle: "text-6xl",
    color: "text-slate-900",
    textstyle: "text-6xl",
    img: "https://img5.pic.in.th/file/secure-sv1/Z06_8005_15_11zon.webp",
    caption: "2cmAA",
    description: "ตารางเมตรละ 169.-",
  },
  // {text:"text-slate-900",textstyle: "text-6xl",
  //   img: "/img/dalle2.png",
  //   caption: "2cmPM",
  //   description: "ตารางเมตรละ 219.-",
  // },
  {
    titlecolor: "text-slate-900",
    textstyle: "text-6xl",
    img: "https://img2.pic.in.th/pic/Z06_7991_10_11zon.webp",
    caption: "3cmPM",
    text: "text-slate-900",
    description: "ตารางเมตรละ 319.-",
  },
  {
    titlecolor: "text-slate-900",
    textstyle: "text-6xl",
    img: "https://img5.pic.in.th/file/secure-sv1/Z06_7979_6_11zon.webp",
    caption: "3.5cmPM",
    description: "ตารางเมตรละ 299.-",
  },
];
const MainPageaAds2 = [
  {
    titlecolor: "text-white",
    textstyle: "",
    img: "/ai-img/aidall4.png",
    caption: "งานติดตั้งหญ้าเทียม",
    description: "เริ่มต้น 200.-",
  },
  {
    titlecolor: "text-slate-900",
    textstyle: "",
    img: "/img/dalle2.png",
    caption: "บริการวัดพื้นที่",
    description: "ค่าเดินทางเริ่มต้น 30.-",
  },
];
</script>

<template>
  <div class="snap-y snap-mandatory overflow-scroll overflow-x-hidden">
    <div class="snap-start">
      <!-- <div
        class="h-screen w-full bg-fixed bg-top"
        style="background-image: url(/img/dalle1.png)"
      ></div> -->

      <carouselMyCarousel :MainPageaAds1="MainPageaAds1" />
    </div>
    <div class="snap-start">
      <carouselMyCarousel :MainPageaAds2="MainPageaAds2" />
    </div>

    <!-- <div class="snap-start h-screen">
      <div
        class="h-screen bg-fixed"
        style="background-image: url(/img/dalle1.png)"
      >
        <div class="flex h-screen place-content-center items-center">
          <span>TEST</span>
          <ButtonMyButtonGroup
            class="absolute w-full bottom-32 md:bottom-40 lg:bottom-24"
            seemore="ดูเพิ่มเติม"
            buy="สั่งซื้อ"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>
