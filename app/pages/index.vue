<template>
  <div class="home-page">
    <PagesHomeCarousel />
    <PagesHomeAboutLupa />
    <PagesHomeExperience />
    <PagesHomeAchievement />
    <PagesHomeDemolitionRecord />
    <PagesHomeStronghold />
    <PagesHomeTimeline />
    <PagesHomeContact />
    <PagesHomeFuture />
    <PagesHomeGallery />
    <PagesHomeSpecifications />
    <PagesHomeStrategicPartners />
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
