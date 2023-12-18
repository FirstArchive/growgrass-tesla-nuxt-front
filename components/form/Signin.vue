<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string()
    .email("โปรดระบุรูปแบบอีเมลล์ที่ถูกต้อง")
    .required("จำเป็นต้องระบุอีเมลล์"),
  password: string()
    .min(1, "รหัสผ่านต้องมี 8 ตัวอักษรขี้นไป")
    .required("จำเป็นต้องระบุรหัสผ่าน"),
  confirmPassword: string().required("จำเป็นต้องยืนยันรหัสผ่าน"),
});

const isValid = computed(() => {
  try {
    schema.validateSync(state, { abortEarly: false });
    return true;
  } catch (error) {
    return false;
  }
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
});

const passwordsMatch = computed(() => {
  return state.password === state.confirmPassword;
});

// watch(
//   () => [state.password, state.confirmPassword],
//   () => {
//     // console.log(`watch รหัสผ่านไม่ตรง`);
//   }
// );
const router = useRouter();

const cookieEmail = useCookie("email");
const cookiePass = useCookie("pass");
const role = useCookie("role");
// console.log(cookieEmail.value, cookiePass.value);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const inputEmail = event.data.email;
  const inputPass = event.data.password;
  const confirmPassword = event.data.confirmPassword;

  // check cookie in local
  if (inputEmail === cookieEmail.value && inputPass === cookiePass.value) {
    alert(
      `มีข้อมูล ${cookieEmail.value} ในระบบอยู่แล้ว โปรด Login หรือ ลืมรหัสผ่าน?`
    );
  } else if (inputPass === confirmPassword) {
    // Set cookie when confirmPass check
    cookieEmail.value = inputEmail;
    cookiePass.value = inputPass;
    role.value = "user";
    alert(`สมัครสมาชิก ยินดีต้อนรับคุณ ${inputEmail} โปรด Login`);
    router.go(0);
  }
}
</script>

<template>
  <!-- USE @ MyForm.vue -->
  <UContainer class="w-full">
    <h1 class="text-right text-5xl font-LineBD dark:text-white">Sign In</h1>
    <UDivider
      label="growgrass services"
      class="my-3"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }"
    />
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput
          size="lg"
          v-model="state.email"
          type="email"
          autocomplete="on"
        />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput size="lg" v-model="state.password" type="password" />
      </UFormGroup>
      <UFormGroup label="ยืนยัน Password" name="confirmPassword">
        <UInput size="lg" v-model="state.confirmPassword" type="password" />
        <div v-if="!passwordsMatch" class="text-red-500 mt-2 text-sm">
          รหัสผ่านไม่ตรงกัน
        </div>
      </UFormGroup>

      <UButton
        type="submit"
        size="lg"
        :disabled="!isValid || !passwordsMatch"
        :class="{ 'cursor-not-allowed': !isValid }"
        class="font-LineRG w-full justify-center"
      >
        ตกลง
      </UButton>
      <!-- :MainPageaAds1="MainPageaAds1" -->
    </UForm>
    <UDivider
      label="OR"
      class="my-3"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }"
    />
    <!-- <ButtonSigninBtn btntext="มีบัญชีอยู่แล้ว? Login" class="w-full" /> -->
  </UContainer>
</template>
