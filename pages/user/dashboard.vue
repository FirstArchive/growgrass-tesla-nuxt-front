import { UDivider } from '../../.nuxt/components'; import { _disabled } from
'../../.nuxt/tailwind.config';
<script setup lang="ts">
const cookieEmail = useCookie("email").value;
const role = useCookie("role");
defineProps({});
useHead({
  title: `${role.value} | dashboard`,
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

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);

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
</script>

<template>
  <UContainer class="w-full max-w-md xl:max-w-2xl 2xl:max-w-3xl px-10">
    <div
      class="p-4 h-screen flex flex-col justify-center items-center dark:text-white"
    >
      <div class="font-LineBD text-2xl">ยินดีต้อนรับ!</div>
      <div>
        <span class="font-LineBD text-xl">K.{{ cookieEmail }}</span>
      </div>
      <UDivider label="ข้อมูลของคุณ" class="my-3" />
      <!--  -->
      <section class="grid xl:grid-cols-2 gap-3 w-full lg:flex-row">
        <UFormGroup label="ชื่อ-นามสกุล"
          ><UInput size="lg" :disabled="Adisable" placeholder="ชื่อ นามสกุล"
        /></UFormGroup>
        <UFormGroup label="อีเมลล์"
          ><UInput size="lg" :disabled="Adisable" :placeholder="cookieEmail"
        /></UFormGroup>
        <UFormGroup label="เบอร์โทรศัพท์"
          ><UInput size="lg" :disabled="Adisable" placeholder="095-484-2976"
        /></UFormGroup>
        <UFormGroup label="รุ่นที่ซื้อ"
          ><UInput size="lg" :disabled="Adisable" placeholder="3cmPM"
        /></UFormGroup>
        <UFormGroup label="วันที่ซื้อ">
          <UPopover :popper="{ placement: 'bottom-start' }">
            <!-- color="gray" -->
            <UInput
              size="lg"
              :disabled="Adisable"
              icon="i-heroicons-calendar-days-20-solid"
              :placeholder="datePlaceholder"
              class="w-full"
            />

            <template #panel="{ close }">
              <VDatePicker v-model="date" />
            </template>
          </UPopover>
        </UFormGroup>
        <UFormGroup label="ระยะเวลารับประกันที่เหลือ"
          ><UInput size="lg" disabled placeholder="3ปี"
        /></UFormGroup>
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
        <UButton
          size="lg"
          :color="[Adisable ? 'primary' : 'red']"
          class="w-1/3 justify-center duration-300"
          @click="toggleDisable"
          >{{ buttonText }}</UButton
        ><FormLogoutBtn class="w-1/3" />
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
