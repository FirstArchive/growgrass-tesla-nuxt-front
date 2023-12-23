<script setup lang="ts">
const user = useStrapiUser();

defineProps({});
useHead({
  title: `${user.value?.username} | dashboard`,
  meta: [
    {
      name: "description",
      content: "dashboard หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "dashboard, หญ้าเทียม, แต่งสวน",
    },
  ],
});
definePageMeta({
  middleware: ["auth"],
  // layout: "user-layout",
});
const date = ref(new Date());

const datePlaceholder = computed(() =>
  date.value.toLocaleDateString("th-TH", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);
const Adisable = ref(true);
const toggleDisable = () => {
  Adisable.value = !Adisable.value;
};
const buttonText = computed(() => (Adisable.value ? "แก้ไข" : "ยืนยัน"));

const users = {
  username: user.value?.username,
  useremail: user.value?.email,
  phone: user.value?.phone,
  product: user.value?.product,
  buydate: user.value?.buydate,
  YearOfWarranty: user.value?.YearOfWarranty,
};
// console.log(users.YearOfWarranty.toString());

// ฟังก์ชันคำนวณวันที่สิ้นสุดการรับประกัน
const calculateWarrantyEndDate = (buyDate, yearsOfWarranty) => {
  const buyDateObj = new Date(buyDate);
  buyDateObj.setFullYear(buyDateObj.getFullYear() + yearsOfWarranty);
  return buyDateObj;
};

// Computed property สำหรับแสดงวันที่สิ้นสุดการรับประกัน
const remainingWarrantyDays = computed(() => {
  if (users.buydate && users.YearOfWarranty) {
    const endDate = calculateWarrantyEndDate(
      users.buydate,
      users.YearOfWarranty
    );
    const today = new Date();
    const differenceInTime = endDate.getTime() - today.getTime();
    if (differenceInTime > 0) {
      // คำนวณเป็นวัน
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      return `${differenceInDays} วัน`;
    }
    return "หมดระยะเวลารับประกัน";
  }
  return "";
});
</script>

<template>
  <div style="height: 100svh">
    <UContainer
      class="flex h-full pt-10 items-center justify-center max-w-md xl:max-w-2xl 2xl:max-w-3xl"
    >
      <div
        class="flex w-full flex-col justify-center items-center dark:text-white"
      >
        <div class="font-LineBD text-2xl">ยินดีต้อนรับ!</div>
        <div>
          <span class="font-LineBD text-xl">คุณ {{ users.username }}</span>
        </div>
        <UDivider label="ข้อมูลของคุณ" class="my-3" />
        <!--  -->
        <section class="grid xl:grid-cols-2 gap-3 w-full lg:flex-row">
          <UFormGroup label="ชื่อ-นามสกุล"
            ><UInput size="lg" disabled :placeholder="users.username"
          /></UFormGroup>
          <UFormGroup label="อีเมลล์"
            ><UInput size="lg" disabled :placeholder="users.useremail"
          /></UFormGroup>
          <UFormGroup label="เบอร์โทรศัพท์"
            ><UInput size="lg" disabled :placeholder="users.phone"
          /></UFormGroup>
          <UFormGroup label="รุ่นที่ซื้อ"
            ><UInput size="lg" disabled :placeholder="users.product"
          /></UFormGroup>
          <UFormGroup label="วันที่ซื้อ/ติดตั้ง">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <!-- color="gray" -->
              <UInput
                size="lg"
                disabled
                icon="i-heroicons-calendar-days-20-solid"
                :placeholder="users.buydate"
                class="w-full"
              />

              <template #panel="{ close }">
                <VDatePicker v-model="date" />
              </template>
            </UPopover>
          </UFormGroup>
          <UFormGroup label="ระยะเวลารับประกัน"
            ><UInput
              size="lg"
              disabled
              :placeholder="users.YearOfWarranty + ' ปี'"
          /></UFormGroup>
          <UFormGroup label="เหลือวันรับประกัน">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <!-- color="gray" -->
              <UInput
                size="lg"
                disabled
                icon="i-heroicons-calendar-days-20-solid"
                :placeholder="remainingWarrantyDays"
                class="w-full"
              />

              <template #panel="{ close }">
                <VDatePicker v-model="date" />
              </template>
            </UPopover>
          </UFormGroup>
        </section>
        <!-- <div>
        Role : <span class="font-LineBD text-xl">{{ role }}</span>
      </div> -->
        <div v-if="Adisable" class="text-center text-sm">
          <h1 class="my-3">Profile is update..</h1>
        </div>
        <div v-else class="text-center text-sm">
          <h1 class="my-3">
            กำลังแก้ไข Profile<br /><span class="font-LineBD"
              >โปรดตรวจสอบข้อมูลให้ถูกต้อง</span
            >
          </h1>
        </div>
        <div class="gap-x-4 flex w-full justify-center">
          <!-- <UButton
            size="lg"
            :color="[Adisable ? 'primary' : 'red']"
            class="w-1/3 justify-center duration-300"
            @click="toggleDisable"
            >{{ buttonText }}</UButton
          > -->
          <FormLogoutBtn class="w-1/3" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
