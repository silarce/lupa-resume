<template>
  <div class="wrapper">
    <div class="left">
      <div class="text-6xl">標準的哈士奇</div>
      <div class="text-5xl">理所當然的成就</div>
    </div>
    <div class="right">
      <div class="text-6xl mb-5">破壞紀錄</div>

      <div class="container">
        <CardDestroy
          v-for="({ label, amount, unit }, index) in destroy"
          :key="index"
          :amount="amount"
        >
          <template #label>{{ label }}</template>
          <template #unit>{{ unit }}</template>
        </CardDestroy>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type DestroyItem = {
  label: string;
  amount: number;
  unit: string;
};

const destroy: DestroyItem[] = [
  {
    label: "鞋子",
    amount: 2,
    unit: "雙",
  },
  {
    label: "襪子",
    amount: 11,
    unit: "隻",
  },
  {
    label: "書",
    amount: 5,
    unit: "本",
  },
  {
    label: "公仔",
    amount: 1,
    unit: "只",
  },
  {
    label: "被單",
    amount: 3,
    unit: "個",
  },
  {
    label: "浴室掛鏡",
    amount: 1,
    unit: "個",
  },
];
</script>

<style scoped>
.wrapper {
  /* height: 500px; */
  background-color: #999;

  display: grid;
  grid-template-columns: max-content 1000px;
  justify-content: space-between;
  padding: 80px;
}

.left {
  padding: 20px;
  /* border: solid 1px black; */
}

.right {
  border: solid 1px black;
  padding: 20px;
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
}
</style>
