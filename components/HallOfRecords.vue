<template>
  <section>
    <div class="title-box">
    <h2>CURRENT POINT LEADERS</h2>
    </div>
    <div class="pillars">
      <div class="pillar trump">
        <h5 style="color: GOLD;">1st</h5>
        <p>F*** TRUMP</p>
        </div>
      <div class="pillar vader">
        <h5 style="color: SILVER;">2nd</h5>
        <img class="trophy" src="" alt="">
        <p>DARTH HOFF</p>
      </div>
      <div class="pillar dog">
        <h5 style="color: BROWN;">3rd</h5>
         <img class="trophy" src="" alt="">
        <p>DIGGITY</p>
      </div>
    </div>
    <div class="hall-container">
      <h2>HALL OF RECORDS</h2>
        <div class="winners">
          <div class="stud-stat">
            <div>
              <h3>HIGH SEASON: N/A</h3>
              <h4>TBD</h4>
            </div>
            <div>
            <h3>HIGH WEEK: 157.72</h3>
            <h4>Fuck Trump: Wk3 2019</h4>
            </div>
            <div>
              <h3>HIGH PLAYER (NonQb): CMC-37.9</h3>
              <h4>ChristianMingle: Wk1 2019</h4>
            </div>
            <div>
              <h3>HIGH QB: R.WILSON-45.34</h3>
              <h4>Lindsey2K: Wk3 2019</h4>
            </div>
            <div>
              <h3>HIGH RB: CMC-37.9</h3>
              <h4>ChristianMingle: Wk1 2019</h4>
            </div>
            <div>
              <h3>HIGH WR: S.WATKINS-42.3</h3>
              <h4>DiggityDogg: Wk1 2019</h4>
            </div>
            <div>
              <h3>HIGH TE: E.ENGRAM-23.1</h3>
              <h4>DarthHoff: Wk1 2019</h4>
            </div>
            <div>
              <h3>HIGH DEF: NE-35.0</h3>
              <h4>FMT: Wk2 2019</h4>
            </div>
            <div>
              <h3>LOW WEEK: 58.6</h3>
              <h4>Registered Flex Offenders</h4>
            </div>
            <div>
              <h3>LOW SEASON: N/A</h3>
              <h4>TBDW</h4>
            </div>
          </div>
          <div class="stud-pic"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title-box {
  position: relative;
  z-index: 10;
  h2 {
    color: WHITE;
    text-decoration: none;
    margin-top: 80px;
    margin-bottom: 80px;
    letter-spacing: 10px;
    font-size: 24px;
    font-weight: 400;
    text-shadow: 2px 2px 2px #000;
  }
}
.pillars {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 10;
  padding: 80px 10px;
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
  max-width: 320px;
  position: relative;
  p {
    font-size: 24px;
    color: gold;
    background-color: rgba(19, 19, 19, 0.4);
    width: 100%;
    text-align: center;
  }
  h5 {
    position: absolute;
    top: 0;
    left: 5px;
    font-size: 32px;
    font-weight: 700;
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

.trump {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568994438/Aaron/trump7_zd7c6c.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -493px;
}

.hall-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 60px 20px 20px 20px;
  position: relative;
  z-index: 10;
}

h2 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 20px;
  text-decoration: underline;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
}

.winners,
.losers {
  width: 100%;
  height: 1000px;
  display: flex;
  div {
    margin-bottom: 30px;
  }
  h3 {
    font-size: 32px;
  }
  h4 {
    font-weight: 400;
  }
}

.winners {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.stud-pic,
.stud-stat,
.dud-pic,
.dud-stat {
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.stud-pic {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568336806/Aaron/raylewis_lbaiy0.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  outline: 1px solid GOLD;
  display: none;
}

.dud-pic {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568338317/Aaron/buttfumble_pjff2t.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.losers {
  padding: 20px;
  display: flex;
  flex-direction: row;
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
  .trump {
    background-position-x: -393px;
  }
  .stud-pic {
    display: flex;
  }
  .title-box h2 {
    font-size: 52px;
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
