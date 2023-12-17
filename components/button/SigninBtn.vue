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
  <UButton
    @click="isOpen = true"
    color="black"
    variant="solid"
    :class="darkmode"
    class="w-full justify-center duration-200"
    size="lg"
    >สมัครสมาชิก</UButton
  >
  <UModal v-model="isOpen">
    <div class="p-4 h-[41rem] md:h-[39rem] grid items-center">
      <div class="">
        <FormSignin />
        <UContainer class="max-w-xs md:max-w-sm">
          <UButton
            @click="isOpen = false"
            color="black"
            variant="solid"
            :class="darkmode"
            class="w-full justify-center duration-200"
            size="lg"
            >มีบัญชีอยู่แล้ว? Login</UButton
          ></UContainer
        >
      </div>
    </div>
  </UModal>
</template>
