<template>
  <section>
    <div class="pillars">
      <div class="pillar dog">
        <p>DIGGITY</p>
      </div>
      <div class="pillar vader">
        <p>DARTH HOFF</p>
      </div>
      <div class="pillar goat"><p>G.O.A.T</p></div>
    </div>
    <div class="hall-container">
      <h2>HALL OF RECORDS</h2>
      <div class="content-wrap">
        <div class="winners">
          <h2>STUDS</h2>
          <div class="stat">
            <div>
              <h3>HIGHEST WEEK:</h3>
              <h4>155.62</h4>
            </div>
            <div>
              <h3>HIGHEST IND WEEK (non-QB)</h3>
              <h4>42.3: S. Watkins (Diggity)</h4>
            </div>
          </div>
        </div>
        <div class="losers">
          <div class="stat">
            <h2>DUDS</h2>
            <h3>LOWEST WEEK:</h3>
            <h4>58.56</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pillars {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 10;
  background-image: linear-gradient(
      rgba(19, 19, 19, 0.7),
      rgba(26, 26, 26, 0.9)
    ),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568987125/Aaron/field_tnis38.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.pillar {
  width: 30%;
  height: 575px;
  box-shadow: 1px 1px 6px gold;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  p {
    font-size: 24px;
    color: gold;
    background-color: rgba(19, 19, 19, 0.4);
    width: 100%;
    text-align: center;
  }
}

.dog {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568985958/Aaron/daniel-beaulieu-dog-soldier-dog_jqjfza.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -165px;
}
.vader {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568986303/Aaron/vader_p15upx.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -277px;
}
.goat {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568986196/Aaron/goat_fzbw0w.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -291px;
}

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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.stat {
  display: flex;
  flex-direction: COLUMN;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 32px;
    text-align: center;
  }
  h4 {
    font-size: 28px;
  }
}
@media only screen and (min-width: 940px) {
  .dog {
    background-position-x: -103px;
  }
  .vader {
    background-position-x: -234px;
  }
  .goat {
    background-position-x: -176px;
  }
}
@media only screen and (min-width: 1300px) {
  .pillars {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 10;
    background-image: linear-gradient(
        rgba(19, 19, 19, 0.7),
        rgba(26, 26, 26, 0.9)
      ),
      url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568987125/Aaron/field_tnis38.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 400px;
  }
  .pillar {
    width: 20%;
    height: 575px;
    box-shadow: 1px 1px 6px gold;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
