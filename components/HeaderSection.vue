<template>
  <section>
    <div>
      <div class="video-wrapper">
        <!-- <h1>D.O.P.E. DYNASTY</h1> -->
        <img
          src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1568304267/Aaron/dopedrop_lbdpfo.png"
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
            <div class="block">
              <div class="rank-number">
                <span>#2</span>
              </div>
              <div class="team-card drew">
                <h4>G.O.A.T</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#3</span>
              </div>
              <div class="team-card david">
                <h4>Detroit Smash</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#4</span>
              </div>
              <div class="team-card josh">
                <h4>Diggity Dogg</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#5</span>
              </div>
              <div class="team-card aaron">
                <h4>Fugly Mountain Trolls</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#6</span>
              </div>
              <div class="team-card matt">
                <h4>Kamara Sutra</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#7</span>
              </div>
              <div class="team-card tyler">
                <h4>Registered Flex Offenders</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#8</span>
              </div>
              <div class="team-card gio">
                <h4>Fuck Trump</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#9</span>
              </div>
              <div class="team-card lindsey">
                <h4>Kung Suh Panda</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#10</span>
              </div>
              <div class="team-card john">
                <h4>Mr Papa Giorgio</h4>
              </div>
            </div>
            <div class="block">
              <div class="rank-number">
                <span>#11</span>
              </div>
              <div class="team-card joey">
                <h4>Christian Mingle</h4>
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
  text-align: center;
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
  font-size: 28px;
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
    font-size: 15px;
    text-align: center;
    letter-spacing: 7px;
    text-shadow: 2px 2px 2px 4px #000;
  }
}

.adam {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568246217/Aaron/adam-card_xvpiag.jpg');
}

.drew {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568298143/Aaron/drew_y7rlge.jpg');
}

.david {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568298734/Aaron/david_dkcawy.jpg');
}

.josh {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568299393/Aaron/josh_cimn1d.jpg');
}

.aaron {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568300039/Aaron/aaron_kesdwz.jpg');
}

.matt {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568301072/Aaron/matt_ieasog.jpg');
}

.tyler {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568301430/Aaron/tp_m7l9s4.jpg');
}

.gio {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302178/Aaron/gio_qcugum.jpg');
}

.lindsey {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302443/Aaron/lindsey_n23mzp.jpg');
}

.john {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302688/Aaron/john_fvt8ts.jpg');
}

.joey {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568303156/Aaron/joey_s8v8hs.jpg');
}

@media only screen and (min-width: 550px) {
  .team-card {
    h4 {
      font-size: 35px;
    }
  }
  .rank-number {
    span {
      font-size: 40px;
    }
  }
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
  .team-card {
    h4 {
      font-size: 50px;
    }
  }
}
</style>
