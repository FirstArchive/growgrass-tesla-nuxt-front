<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
const { login } = useStrapiAuth();

const schema = object({
  email: string()
    .email("โปรดระบุรูปแบบอีเมลล์ที่ถูกต้อง")
    .required("จำเป็นต้องระบุอีเมลล์"),
  password: string()
    .min(8, "รหัสผ่านต้องมี 8 ตัวอักษรขี้นไป")
    .required("จำเป็นต้องระบุรหัสผ่าน"),
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
});
const router = useRouter();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const email = state.email;
  const password = state.password;
  try {
    await login({ identifier: email, password: password });
    // window.location.href = "/user/dashboard";
    router.push("/user/dashboard");
  } catch (e: any) {
    alert(`${e.error.message}: กรุณาตรวจสอบอีเมลล์และรหัสผ่าน`);
  }
}
</script>

<template>
  <UContainer class="w-full max-w-md 2xl:max-w-xl px-10">
    <h1 class="text-5xl font-LineBD dark:text-white">Log In</h1>
    <UDivider label="เข้าสู่ระบบ growgrass services" class="my-5"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />
    <UForm :schema="schema" :state="state" class="space-y-2 " @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput size="lg" v-model="state.email" type="email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password" class="pb-2">
        <UInput size="lg" v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit" size="lg" :disabled="!isValid" :class="{ 'cursor-not-allowed': !isValid }"
        class="font-LineRG w-full justify-center">
        เข้าสู่ระบบ
      </UButton>
    </UForm>
    <UDivider label="OR" class="my-2" :ui="{ border: { size: { horizontal: 'border-t-2' } }, label: 'text-xs' }" />
    <!-- btntext="สมัครสมาชิก" -->
    <FormRegisterBtn />
  </UContainer>
</template>

<style scoped></style>
