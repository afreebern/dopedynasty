<template>
  <section>
    <div>
      <div class="video-wrapper">
        <!-- <h1>D.O.P.E. DYNASTY</h1> -->
        <img
          src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1568147890/Aaron/DOPE_3_1_rjfvvi.png"
          alt=""
        />
        <video
          src="https://res.cloudinary.com/dipgyyv6a/video/upload/v1568135123/Aaron/y2mate.com_-_nfl_pump_up_2019_20_colors_z17ykigyH6o_920p_g2xga6.mp4"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="content">
        <div class="rankings-box">
          <h2>D.O.P.E.</h2>
          <h3>POWER RANKINGS</h3>
          <div class="listy-box">
            <div class="block">
              <div class="rank-number">
                <span>#1</span>
              </div>
              <div class="team-card adam">
                <h4>HOF</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
video {
  left: 0;
  top: 0;
  width: 100%;
}

h1 {
  position: absolute;
  color: #fff;
}

h2,
h3 {
  color: #fff;
}

h2 {
  text-align: center;
  font-size: 60px;
  letter-spacing: 10px;
}
h3 {
  font-size: 50px;
  margin-bottom: 40px;
}

img {
  position: absolute;
  width: 30%;
}

.content {
  width: 100%;
  background-color: BLACK;
  position: relative;
  z-index: 5;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rankings-box {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.listy-box {
  width: 100%;
  border: 1px solid darkslategrey;
}

.block {
  display: flex;
  flex-direction: row;
}

.rank-number {
  width: 20%;
  height: 100px;
  outline: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  span {
    color: #fff;
  }
}

.team-card {
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    color: #fff;
    font-size: 50px;
    letter-spacing: 7px;
    text-shadow: 2px 2px 2px 4px #000;
  }
}

.adam {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568246217/Aaron/adam-card_xvpiag.jpg');
}

@media only screen and (min-width: 1100px) {
  video {
    position: fixed;
    width: unset;
    min-width: 100%;
    min-height: 100%;
  }
  .content {
    margin-top: 100vh;
  }
  img {
    position: absolute;
    top: 180px;
    z-index: 5;
  }
}
</style>
