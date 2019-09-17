<template>
  <section>
    <div class="hall-container">
      <h2>HALL OF RECORDS</h2>
      <div class="content-wrap">
        <div class="winners"></div>
        <div class="losers"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hall-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  position: relative;
  z-index: 10;
  margin-top: 400px;
}

h2 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 20px;
}

.content-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
}

.winners,
.losers {
  width: 45%;
  outline: 1px solid ORANGE;
  height: 1000px;
}

.winners {
  background-image: linear-gradient(
      rgba(179, 179, 179, 0.7),
      rgba(114, 114, 114, 0.9)
    ),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568336806/Aaron/raylewis_lbaiy0.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(5px);
  filter: grayscale(100%);
}

.losers {
  background-image: linear-gradient(
      rgba(179, 179, 179, 0.7),
      rgba(114, 114, 114, 0.9)
    ),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568338317/Aaron/buttfumble_pjff2t.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(5px);
  filter: grayscale(100%);
}
</style>
