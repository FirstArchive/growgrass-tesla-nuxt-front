<script setup lang="ts">
import { object, string, type InferType, number } from "yup";
import type { FormSubmitEvent } from "#ui/types";
const { register } = useStrapiAuth();
const router = useRouter();

const schema = object({
  email: string()
    .email("โปรดระบุรูปแบบอีเมลล์ที่ถูกต้อง")
    .required("จำเป็นต้องระบุอีเมลล์"),
  password: string()
    .min(8, "รหัสผ่านต้องมี 8 ตัวอักษรขี้นไป")
    .required("จำเป็นต้องระบุรหัสผ่าน"),
  confirmPassword: string().required("จำเป็นต้องยืนยันรหัสผ่าน"),
  userName: string().required("จำเป็นต้องระบุชื่อ"),
  phoneNumber: string()
    .matches(/^\d{10}$/, "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก")
    .required("จำเป็นต้องระบุเบอร์โทร"),
});

const formattedPhoneNumber = computed({
  get: () => {
    if (state.phoneNumber && state.phoneNumber.length === 10) {
      return `${state.phoneNumber.slice(0, 3)}-${state.phoneNumber.slice(
        3,
        6
      )}-${state.phoneNumber.slice(6)}`;
    }
    return state.phoneNumber;
  },
  set: (val) => {
    state.phoneNumber = val.replace(/\D/g, "").slice(0, 10);
  },
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
  userName: undefined,
  phoneNumber: undefined,
});


const passwordsMatch = computed(() => {
  return state.password === state.confirmPassword;
});
const isFormReady = computed(() => {
  return isValid.value && passwordsMatch.value && checkbox.value;
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const userName = state.userName;
  const email = state.email;
  const password = state.password;
  const confirmPass = state.confirmPassword;
  const phoneNumber = state.phoneNumber.replace(/-/g, "");
  // const isChecked = checkbox.value;
  // console.log(
  //   email,
  //   password,
  //   userName,
  //   phoneNumber,
  //   checkbox.value,
  //   confirmPass
  // );

  try {
    await register({
      username: userName,
      email: email,
      password: password,
      phone: phoneNumber,
      confirmPass: confirmPass,
    });

    router.push("/user/dashboard");
  } catch (e: any) {
    alert(`${e.error.message}: กรุณาตรวจสอบข้อมูลให้ถูกต้อง`);
  }
}
const checkbox = ref(false);

function handleCheckboxUpdate(value) {
  checkbox.value = value;
}
</script>

<template>
  <!-- USE @ MyForm.vue -->
  <UContainer class="w-full">
    <h1 class="text-right text-5xl font-LineBD dark:text-white">Sign In</h1>
    <UDivider label="สมัครสมาชิก growgrass services" class="my-5"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />
    <UForm :schema="schema" :state="state" class="space-y-3" @submit="onSubmit">
      <UFormGroup label="ชื่อ-นามสกุล (ไม่ต้องมีคำนำหน้า)" name="userName">
        <UInput size="lg" v-model="state.userName" type="text" />
      </UFormGroup>
      <UFormGroup label="เบอร์โทรศัพท์" name="phoneNumber">
        <UInput size="lg" v-model="formattedPhoneNumber" type="text" />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput size="lg" v-model="state.email" type="email" autocomplete="on" />
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

      <div class="py-2 md:py-4">
        <FormPrivacyAndTerms @update:checkbox="handleCheckboxUpdate" />
      </div>
      <!-- <UFormGroup label="รุ่นที่ซื้อ" name="product">
        <UInput size="lg" type="text" />
      </UFormGroup>
      <UFormGroup label="วันที่ซื้อ" name="butdate">
        <UInput size="lg" type="text" />
      </UFormGroup> -->

      <UButton type="submit" size="lg" :disabled="!isFormReady" :class="{ 'cursor-not-allowed': !isFormReady }"
        class="font-LineRG w-full justify-center">
        ลงทะเบียน
      </UButton>
      <!-- :MainPageaAds1="MainPageaAds1" -->
    </UForm>
    <UDivider label="OR" class="my-2" :ui="{ border: { size: { horizontal: 'border-t-2' } }, label: 'text-xs' }" />
  </UContainer>
</template>
