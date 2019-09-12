<template>
  <section>
    <div class="hall-container">
      <div class="winners"></div>
      <div class="losers"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hall-container {
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2000px;
  background-color: FFF;
}

.winners,
.losers {
  width: 45%;
  outline: 1px solid ORANGE;
  height: 2000px;
}
</style>
