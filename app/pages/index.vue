<template>
  <div class="home-page">
    <PagesHomeCarousel />
    <PagesHomeAchievement />
    <PagesHomeStronghold />
    <PagesHomeAboutLupa />
    <PagesHomeDemolitionRecord />
    <PagesHomeTimeline />
    <PagesHomeExperience />
    <PagesHomeContact />
  </div>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
.home-page > :nth-child(even) {
  background-color: var(--ui-bg-elevated);
  border-top: 1px solid var(--ui-border);
  border-bottom: 1px solid var(--ui-border);
}
</style>
