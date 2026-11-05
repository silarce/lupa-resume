<template>
  <div class="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
}

.content {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
