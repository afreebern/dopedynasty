<template>
  <section>
    <div>
      <!-- <div class="nav">
        <a v-smooth-scroll href="#power-rankings">RANKINGS</a>
      </div> -->
      <div class="video-wrapper">
        <img
          src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1568304267/Aaron/dopedrop_lbdpfo.png"
          alt=""
        />
        <video
          ref="video"
          src="https://res.cloudinary.com/dipgyyv6a/video/upload/v1568135123/Aaron/y2mate.com_-_nfl_pump_up_2019_20_colors_z17ykigyH6o_920p_g2xga6.mp4"
          autoplay
          playsinline
          muted
          loop
        ></video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$refs.video.play()
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 100px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  a {
    color: rgb(170, 145, 3);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
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

img {
  position: absolute;
  width: 30%;
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
  img {
    position: absolute;
    top: 180px;
    z-index: 5;
  }
}
</style>
