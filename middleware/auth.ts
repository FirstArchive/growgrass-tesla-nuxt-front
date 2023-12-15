export default defineNuxtRouteMiddleware((to, from) => {
  const cookieEmail = useCookie("email").value;
  const role = useCookie("role").value;

  // หากไม่มีข้อมูล role หรือ email, นำทางไปยังหน้า login
  if (!role || !cookieEmail) {
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
  } else {
    // หาก role เป็น admin และ email ตรงกับ admin@mail
    if (role === "admin" && cookieEmail === "admin@mail") {
      // ตรวจสอบว่าไม่ได้อยู่บนหน้า admin dashboard แล้ว
      if (to.path !== "/admin/dashboard") {
        return navigateTo("/admin/dashboard");
      }
    } else {
      // สำหรับกรณีอื่นๆ นำทางไปยังหน้า user dashboard
      if (to.path !== "/user/dashboard") {
        return navigateTo("/user/dashboard");
      }
    }
  }
});
