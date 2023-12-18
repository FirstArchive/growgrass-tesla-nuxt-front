<template>
  <NuxtLayout>
    <NuxtPage class="dark:bg-slate-900" style="height: 100lvh" />
  </NuxtLayout>
</template>

<style>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 0.6s;
}

.slide-top-enter-from {
  opacity: 0;
  transform: translate(0px, -50px);
}
.slide-top-leave-to {
  opacity: 0;
  transform: translate(0px, 50px);
}
</style>
