<template>
  <div class="card">
    <div class="label">
      <slot name="label" />
    </div>
    <CountUp :end-val="amount" class="amount" />
    <div class="unit">
      <slot name="unit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";

const { amount } = defineProps<{ amount: number }>();
</script>

<style scoped>
.card {
  width: 200px;
  height: 250px;
  display: grid;
  border: solid 1px black;
  padding: 20px;
}

.label {
  width: fit-content;
  font-size: 30px;
  font-weight: bold;
}
.amount {
  width: fit-content;
  margin: auto;
  font-size: 60px;
  font-weight: 800;
}
.unit {
  width: fit-content;
  margin: auto;
  margin-right: 0;
  font-size: 30px;
}
</style>
