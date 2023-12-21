<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

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

const cookieEmail = useCookie("email");
const cookiePass = useCookie("pass").value;
const role = useCookie("role");

// const testRoleCheck = () => {
//   if (cookieEmail != undefined || cookiePass != undefined) {
//     console.log(cookieEmail.value);
//     if (!cookiePass) {
//       console.log("ไม่มี password");
//     } else {
//       console.log(cookiePass);
//     }
//   } else {
//     console.log(`cookieEmail not value , cookiePass not value`);
//   }
// };
// testRoleCheck();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const inputEmail = event.data.email;
  const inputPassword = event.data.password;

  // user verify เช็คจาก Cookie ด้วย
  if (inputEmail === cookieEmail.value && inputPassword === cookiePass) {
    alert(`ยินดีต้อนรับคุณ ${cookieEmail.value} กำลังพาไปหน้า dashboard`);
    window.location.href = "/user/dashboard";
    // router.push({ path: "/user/dashboard" });
    return;
  }
  // admin verify ต้อง user&pass นี้เท่านั้น
  if (inputEmail === "admin@mail" && inputPassword === "a") {
    cookieEmail.value = "admin@mail";
    role.value = "admin";
    window.location.href = "/admin/dashboard";
    // router.push({ path: "/admin/dashboard" });
    return;
  }
  // No user || admin verify
  alert(`ไม่พบข้อมูล ${inputEmail} ในระบบ โปรดสมัครสมาชิก`);
}
</script>

<template>
  <UContainer class="w-full max-w-md 2xl:max-w-xl px-10">
    <h1 class="text-5xl font-LineBD dark:text-white">Log In</h1>
    <UDivider
      label="เข้าสู่ระบบ growgrass services"
      class="my-3"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }"
    />
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput size="lg" v-model="state.email" type="email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput size="lg" v-model="state.password" type="password" />
      </UFormGroup>

      <UButton
        type="submit"
        size="lg"
        :disabled="!isValid"
        :class="{ 'cursor-not-allowed': !isValid }"
        class="font-LineRG w-full justify-center"
      >
        ตกลง
      </UButton>
    </UForm>
    <UDivider
      label="OR"
      class="my-3"
      :ui="{ border: { size: { horizontal: 'border-t-2' } } }"
    />
    <!-- btntext="สมัครสมาชิก" -->
    <FormSigninBtn />
  </UContainer>
</template>

<style scoped></style>
