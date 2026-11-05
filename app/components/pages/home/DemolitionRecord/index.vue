<template>
  <Container>
    <div>
      <div class="up">
        <h2>哈士奇的驕傲!!</h2>
        <h3>拆家紀錄</h3>
      </div>

      <div class="down">
        <div
          v-for="({ date, items, img }, index) in demolitionRecords"
          :key="index"
        >
          <UModal>
            <img :src="img" >

            <p>日期:{{ date }}</p>
            <ul>
              <li v-for="(item, i) in items" :key="i">
                {{ item }}
              </li>
            </ul>
            <template #body>
              <img :src="img" >
            </template>
          </UModal>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
type DemolitionRecord = {
  date: string;
  items: string[];
  img: string;
};

const demolitionRecords: DemolitionRecord[] = [
  {
    date: "20260209",
    items: ["兩包奇亞籽", "涼拖鞋", "衛生紙", "襪子"],
    img: "/img/demolitionRecord/20260209.webp",
  },
  {
    date: "20260427",
    items: ["公仔", "發泡地墊", "布鞋"],
    img: "/img/demolitionRecord/20260427.webp",
  },
  {
    date: "20260505",
    items: ["清潔海綿", "衛生紙", "涼拖鞋", "棉繩"],
    img: "/img/demolitionRecord/20260505.webp",
  },
  {
    date: "20260513",
    items: ["未開封的監視器", "書", "筆記本", "包包", "布鞋", "襪子"],
    img: "/img/demolitionRecord/20260513.webp",
  },
];
</script>

<style scoped>
.down {
  display: flex;
  gap: 16px;
}
</style>
