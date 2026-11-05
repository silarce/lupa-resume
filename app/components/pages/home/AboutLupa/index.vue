<template>
  <Container >
    <div class="theContainer">
      <div class="left">
        <img src="/img/aboutLupa/01.webp" >
      </div>
      <div class="right">
        <div>
          <h2>關於Lupa</h2>
          <h3>about Lupa</h3>
        </div>
        <pre>
          Lupa是一隻標準的哈士奇，不用裝可愛就很可愛。
          不破壞家具、但是喜歡趁沒人在家時破壞雜物。
          目前已經啃了好幾本書，肚子裡多少也有點墨水，越來越聰明的樣子。
          喜歡啃樹枝，喜歡偷羽毛球。
          最大的成就是把自己關在浴廁裡然後把鏡子給拆了。
          挑食不吃飼料，
        </pre>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
/*  */
.theContainer {
  display: grid;
  grid-template-columns: 500px auto;
  gap: 20px;
  align-items: center;
}
</style>
