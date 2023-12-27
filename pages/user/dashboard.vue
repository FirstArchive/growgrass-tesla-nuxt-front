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
  fname: user.value?.fname,
  lname: user.value?.lname,
  useremail: user.value?.email,
  phone: user.value?.phone,
  product: user.value?.product,
  buydate: user.value?.buydate,
  YearOfWarranty: user.value?.YearOfWarranty,
  statusUser: user.value?.status,
};

const statusInfo = computed(() => {
  if (users.statusUser) {
    return { message: "ข้อมูลอัพเดตเรียบร้อยแล้ว", color: "text-green-500" };
  }
  return { message: "รออัพเดทข้อมูลรับประกัน..", color: "text-red-500" };
});

const formattedPhone = computed(() => {
  if (!users.phone) return "ยังไม่มีข้อมูล";
  return `${users.phone.slice(0, 3)}-${users.phone.slice(
    3,
    6
  )}-${users.phone.slice(6)}`;
});

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
  <div
    style="height: 100dvh"
    class="flex py-7 md:pt-28 xl:pt-20 px-5 items-start justify-center h-screen overflow-y-auto"
  >
    <div
      class="flex md:max-w-xl xl:max-w-4xl mt-12 w-full flex-col justify-start items-center dark:text-white"
    >
      <div class="font-LineBD text-2xl">ยินดีต้อนรับ!</div>
      <div>
        <span class="font-LineBD text-xl"
          >คุณ {{ users.fname }} {{ users.lname }}</span
        >
      </div>
      <UDivider label="ข้อมูลของคุณ" class="my-3" />
      <!--  -->
      <section class="grid xl:grid-cols-2 gap-x-10 gap-3 w-full lg:flex-row">
        <UFormGroup label="ชื่อ-นามสกุล">
          <UInput
            size="lg"
            disabled
            :placeholder="users.fname + ' ' + users.lname || 'ยังไม่มีข้อมูล'"
          />
        </UFormGroup>
        <UFormGroup label="อีเมลล์">
          <UInput
            size="lg"
            disabled
            :placeholder="users.useremail || 'ยังไม่มีข้อมูล'"
          />
        </UFormGroup>
        <UFormGroup label="เบอร์โทรศัพท์">
          <UInput
            size="lg"
            disabled
            :placeholder="formattedPhone || 'ยังไม่มีข้อมูล'"
          />
        </UFormGroup>
        <UFormGroup label="รุ่นที่ซื้อ">
          <UInput
            size="lg"
            disabled
            :placeholder="users.product || 'ยังไม่มีข้อมูล'"
          />
        </UFormGroup>
        <UFormGroup label="วันที่ซื้อ/ติดตั้ง">
          <!-- color="gray" -->
          <UInput
            size="lg"
            disabled
            icon="i-heroicons-calendar-days-20-solid"
            :placeholder="users.buydate || 'ยังไม่มีข้อมูล'"
            class="w-full"
          />
        </UFormGroup>
        <UFormGroup label="ระยะเวลารับประกันทั้งหมด">
          <UInput
            size="lg"
            disabled
            icon="i-heroicons-clock"
            :placeholder="
              users.YearOfWarranty
                ? users.YearOfWarranty + ' ปี'
                : 'ยังไม่มีข้อมูล'
            "
          />
        </UFormGroup>
        <UFormGroup label="ระยะเวลารับประกันที่เหลือ">
          <!-- color="gray" -->
          <UInput
            size="lg"
            disabled
            icon="i-heroicons-calendar-days-20-solid"
            :placeholder="remainingWarrantyDays || 'ยังไม่มีข้อมูล'"
            class="w-full"
          />
        </UFormGroup>
      </section>
      <!-- <div>
          Role : <span class="font-LineBD text-xl">{{ role }}</span>
        </div> -->
      <!-- <div v-if="Adisable" class="text-center text-sm">
            <h1 class="my-3">Profile is update..</h1>
          </div>
          <div v-else class="text-center text-sm">
            <h1 class="my-3">
              กำลังแก้ไข Profile<br /><span class="font-LineBD"
                >โปรดตรวจสอบข้อมูลให้ถูกต้อง</span
              >
            </h1>
          </div> -->

      <div class="py-4">
        <p>
          สถานะ :
          <span :class="statusInfo.color">{{ statusInfo.message }}</span>
        </p>
      </div>
      <div class="gap-x-4 flex w-full justify-center">
        <!-- <UButton
                size="lg"
                :color="[Adisable ? 'primary' : 'red']"
                class="w-1/3 justify-center duration-300"
                @click="toggleDisable"
                >{{ buttonText }}</UButton
              > -->
        <FormLogoutBtn size="xl" class="w-full xl:w-1/4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
