<template>
  <div>
    <UHeader>
      <template #title> Lupa簡史 </template>
      <UNavigationMenu :items="navItem" />
      <template #right>
        <UIcon name="i-lucide-facebook" class="size-5" />
        <UIcon name="i-lucide-instagram" class="size-5" />
      </template>
    </UHeader>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navItem = ref<NavigationMenuItem[]>([
  { label: "HOME", icon: "i-lucide-paw-print", to: "/" },
  {
    label: "Github",
    icon: "akar-icons:github-fill",
    to: "https://github.com/silarce/lupa-resume",
  },
]);
</script>

<style lang="scss" scoped></style>
