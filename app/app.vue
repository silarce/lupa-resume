<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <UHeader>
        <template #title> Lupa簡史 </template>
        <UNavigationMenu :items="navItem" />
        <template #right>
          <UIcon name="i-lucide-facebook" class="size-5" />
          <UIcon name="i-lucide-instagram" class="size-5" />
        </template>
      </UHeader>

      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
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
