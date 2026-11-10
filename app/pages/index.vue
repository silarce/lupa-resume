<template>
  <div>
    <div class="home-page">
      <PagesHomeCarousel id="section-carousel" />
      <PagesHomeAboutLupa id="section-about" />
      <PagesHomeSpecifications id="section-specifications" />
      <PagesHomeExperience id="section-experience" />
      <PagesHomeAchievement id="section-achievement" />
      <PagesHomeDemolitionRecord id="section-demolition" />
      <PagesHomeStronghold id="section-stronghold" />
      <PagesHomeTimeline id="section-timeline" />
      <PagesHomeGallery id="section-gallery" />
      <PagesHomeStrategicPartners id="section-partners" />
      <PagesHomeFuture id="section-future" />
      <PagesHomeFAQ id="section-faq" />
      <PagesHomeContact id="section-contact" />
    </div>
    <PagesHomeSideMenu />
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

.home-page > * {
  scroll-margin-top: 64px;
}
</style>
