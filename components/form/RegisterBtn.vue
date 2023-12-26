<script setup>
// defineProps({
//   btntext: String, //สมัครสมาชิก
// });
const darkmode = ref(
  "dark:hover:bg-slate-950 dark:hover:text-white dark:text-slate-900"
);
const isOpen = ref(false);
</script>

<!-- use @ MyForm.vue -->
<template>
  <UButton @click="isOpen = true" color="black" variant="solid" :class="darkmode"
    class="w-full justify-center duration-200" size="lg">สมัครสมาชิก</UButton>
  <UModal v-model="isOpen">
    <div :class="['h-[95dvh]', 'md:h-[70dvh]', 'xl:h-[90dvh]']"
      class="p-4 xl:py-16 grid items-center overflow-scroll overflow-y-auto overflow-x-hidden">
      <!-- style="height: 80svh" -->
      <div class="flex flex-col justify-center items-center">
        <FormRegister />
        <UContainer class="w-full">
          <UButton @click="isOpen = false" color="black" variant="solid" :class="darkmode"
            class="w-full justify-center duration-200" size="lg">มีบัญชีอยู่แล้ว? Login</UButton>
        </UContainer>
      </div>
    </div>
  </UModal>
</template>
