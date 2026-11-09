<template>
  <div>
    <div class="home-page">
      <PagesHomeCarousel id="section-carousel" />
      <PagesHomeAboutLupa id="section-about" />
      <PagesHomeExperience id="section-experience" />
      <PagesHomeAchievement id="section-achievement" />
      <PagesHomeDemolitionRecord id="section-demolition" />
      <PagesHomeStronghold id="section-stronghold" />
      <PagesHomeTimeline id="section-timeline" />
      <PagesHomeContact id="section-contact" />
      <PagesHomeFuture id="section-future" />
      <PagesHomeGallery id="section-gallery" />
      <PagesHomeSpecifications id="section-specifications" />
      <PagesHomeStrategicPartners id="section-partners" />
      <PagesHomeFAQ id="section-faq" />
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
