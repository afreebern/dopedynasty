<template>
  <div class="content">
    <div class="nav-tiles">
      <div class="tile left">
        <a v-smooth-scroll href="#power-rankings">
          <div>
            <h3>POWER RANKINGS</h3>
          </div>
        </a>
      </div>
      <div class="tile middle"><h3>PREDICTIONS</h3></div>
      <div class="tile right">
        <h3>RECAP</h3>
      </div>
    </div>
    <div class="rankings-box">
      <h2>D.O.P.E.</h2>
      <h3>POWER RANKINGS</h3>
      <div class="listy-box">
        <div class="block" id="power-rankings" @click="openOne()">
          <div class="rank-number gold">
            <span>#1</span>
          </div>
          <div class="team-card matt">
            <h4>Kamara Sutra</h4>
          </div>
        </div>
        <div class="the-why" ref="whyone">
          <h2>HERES WHY:</h2>
          All Hail Dalvin Cook...and Marvin Jones apparently?
          <p></p>
        </div>
        <div class="block" @click="opentwo()">
          <div class="rank-number gold">
            <span>#2</span>
          </div>
          <div class="team-card adam">
            <h4>Darth HOFF</h4>
          </div>
        </div>
        <div class="the-why" ref="whytwo">
          <h2>HERES WHY:</h2>
          <p>
            Thanks Will...
          </p>
        </div>
        <div class="block" @click="openthree()">
          <div class="rank-number gold">
            <span>#3</span>
          </div>
          <div class="team-card john">
            <h4>PapaGioGio</h4>
          </div>
        </div>
        <div class="the-why" ref="whythree">
          <h2>HERES WHY:</h2>
          <p>
            FUCKING HOW
          </p>
        </div>
        <div class="block" @click="openFour()">
          <div class="rank-number gold">
            <span>#4</span>
          </div>
          <div class="team-card lindsey">
            <h4>Kung Suh Pands</h4>
          </div>
        </div>
        <div class="the-why" ref="whyfour">
          <h2>HERES WHY:</h2>
          <p>
            Only lost to me because my team wents bananas. Still put a up a shit
            load of points.
          </p>
        </div>
        <div class="block" @click="openFive()">
          <div class="rank-number silver">
            <span>#5</span>
          </div>
          <div class="team-card josh">
            <h4>Diggity Dogg</h4>
          </div>
        </div>
        <div class="the-why" ref="whyfive">
          <h2>HERES WHY:</h2>

          <p>
            Doesnt move down for any real reason. Lindsey just that good. Trade
            Juju. he Dudu.
          </p>
        </div>
        <div class="block" @click="openSix()">
          <div class="rank-number silver">
            <span>#6</span>
          </div>
          <div class="team-card gio">
            <h4>Fuck Trump</h4>
          </div>
        </div>
        <div class="the-why" ref="whysix">
          <h2>HERES WHY:</h2>
          <p>
            I dont see it. but the fantasy gods do. bravo sir
          </p>
        </div>
        <div class="block" @click="openSeven()">
          <div class="rank-number silver">
            <span>#7</span>
          </div>
          <div class="team-card david">
            <h4>Detroit Smash</h4>
          </div>
        </div>
        <div class="the-why" ref="whyseven">
          <h2>HERES WHY:</h2>

          <p>
            Here he comes. we warned you guys
          </p>
        </div>
        <div class="block" @click="openEight">
          <div class="rank-number silver">
            <span>#8</span>
          </div>
          <div class="team-card drew">
            <h4>G.O.A.T</h4>
          </div>
        </div>
        <div class="the-why" ref="whyeight">
          <h2>HERES WHY:</h2>
          <p>
            all the points. none of the wins. he'll take the 6 seed by points
          </p>
        </div>
        <div class="block" @click="openNine()">
          <div class="rank-number bronze">
            <span>#9</span>
          </div>
          <div class="team-card joey">
            <h4>CMC</h4>
          </div>
        </div>
        <div class="the-why" ref="whynine">
          <h2>HERES WHY:</h2>
          <p>if it wasnt for CMC youd be ranked 26th</p>
        </div>
        <div class="block" @click="openTen()">
          <div class="rank-number bronze">
            <span>#10</span>
          </div>
          <div class="team-card tyler">
            <h4>Flex Offenders</h4>
          </div>
        </div>
        <div class="the-why" ref="whyten">
          <h2>HERES WHY:</h2>
          <p>
            its our own personal fishTANK. hes already throwing in the towel
          </p>
        </div>
        <div class="block" @click="openEleven()">
          <div class="rank-number bronze">
            <span>#11</span>
          </div>
          <div class="team-card aaron">
            <h4>Fugly Mountain Trolls</h4>
          </div>
        </div>
        <div class="the-why" ref="whyeleven">
          <h2>HERES WHY:</h2>
          <p>
            because if im anywhere else you whiny twits throw a fit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggled: false
    }
  },

  methods: {
    openOne() {
      console.log('trigger1')
      if (this.toggled === false) {
        this.$refs.whyone.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyone.classList.remove('expand')
        this.toggled = false
      }
    },

    opentwo() {
      console.log('trigger2')
      if (this.toggled === false) {
        this.$refs.whytwo.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whytwo.classList.remove('expand')
        this.toggled = false
      }
    },

    openthree() {
      console.log('trigger3')
      if (this.toggled === false) {
        this.$refs.whythree.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whythree.classList.remove('expand')
        this.toggled = false
      }
    },

    openFour() {
      console.log('trigger4')
      if (this.toggled === false) {
        this.$refs.whyfour.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyfour.classList.remove('expand')
        this.toggled = false
      }
    },

    openFive() {
      console.log('trigger5')
      if (this.toggled === false) {
        this.$refs.whyfive.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyfive.classList.remove('expand')
        this.toggled = false
      }
    },

    openSix() {
      console.log('trigger6')
      if (this.toggled === false) {
        this.$refs.whysix.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whysix.classList.remove('expand')
        this.toggled = false
      }
    },

    openSeven() {
      console.log('trigger7')
      if (this.toggled === false) {
        this.$refs.whyseven.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyseven.classList.remove('expand')
        this.toggled = false
      }
    },

    openEight() {
      console.log('trigger8')
      if (this.toggled === false) {
        this.$refs.whyeight.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyeight.classList.remove('expand')
        this.toggled = false
      }
    },

    openNine() {
      console.log('trigger9')
      if (this.toggled === false) {
        this.$refs.whynine.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whynine.classList.remove('expand')
        this.toggled = false
      }
    },

    openTen() {
      console.log('trigger10')
      if (this.toggled === false) {
        this.$refs.whyten.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyten.classList.remove('expand')
        this.toggled = false
      }
    },

    openEleven() {
      console.log('trigger11')
      if (this.toggled === false) {
        this.$refs.whyeleven.classList.add('expand')
        this.toggled = true
      } else {
        this.$refs.whyeleven.classList.remove('expand')
        this.toggled = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-tiles {
  width: 100%;
  max-width: 1400px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
}

.tile {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    transition: 0.5s;
    color: #fff;
    margin-bottom: 0;
    font-size: 15px;
  }
}

.tile:hover h3 {
  color: #fff;
  text-shadow: 2px 2px 2px #000;
}

.left {
  background-image: linear-gradient(
      rgba(20, 20, 20, 0.5),
      rgba(3, 28, 248, 0.5)
    ),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568312582/Aaron/saquon_ipbnir.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.middle {
  background-image: linear-gradient(
      rgba(20, 20, 20, 0.5),
      rgba(248, 113, 3, 0.5)
    ),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568314910/Aaron/odell_pomsm8.jpg');
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
}

.right {
  background-image: linear-gradient(rgba(20, 20, 20, 0.5), rgba(248, 3, 3, 0.5)),
    url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568315226/Aaron/jluio_ac493a.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  flex-direction: column;
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
}

.block {
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    outline: 3px solid #fff;
    box-shadow: 2px 2px 3px #000;
  }
}

.rank-number {
  width: 20%;
  height: 100px;
  outline: 1px solid #746a34;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
}

.gold {
  color: rgb(255, 251, 0);
}
.silver {
  color: rgb(216, 216, 216);
}
.bronze {
  color: rgb(117, 80, 1);
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
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.drew {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568298143/Aaron/drew_y7rlge.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.david {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568298734/Aaron/david_dkcawy.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.josh {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568299393/Aaron/josh_cimn1d.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.aaron {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568300039/Aaron/aaron_kesdwz.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 150%;
  //   transition: 0.5s;
  // }
}

.matt {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568301072/Aaron/matt_ieasog.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   transform: scale(-1);
  // }
}

.tyler {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568301430/Aaron/tp_m7l9s4.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 110%;
  //   text-shadow: 2px 2px 5px RED;
  //   h4 {
  //     color: YELLOW;
  //   }
  // }
}

.gio {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302178/Aaron/gio_qcugum.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 110%;
  //   h4 {
  //     transform: rotate(5deg);
  //   }
  // }
}

.lindsey {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302443/Aaron/lindsey_n23mzp.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.john {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568302688/Aaron/john_fvt8ts.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 110%;
  //   h4 {
  //     transform: rotate(-5deg);
  //   }
  // }
}

.joey {
  background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568303156/Aaron/joey_s8v8hs.jpg');
  background-repeat: no-repeat;
  // &:hover {
  //   background-size: 125%;
  //   transition: 0.5s;
  // }
}

.the-why {
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  height: 0px;
  text-align: center;
  font-weight: 600;
  display: none;
  h2 {
    color: #000;
    font-size: 28px;
    margin-bottom: 5px;
  }
  p {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  img {
    position: inherit;
    max-width: 250px;
  }
}

.expand {
  display: inline-table;
  transition: 05s;
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
@media only screen and (min-width: 850px) {
}

@media only screen and (min-width: 1000px) {
  .nav-tiles {
    width: 100%;
    max-width: 1400px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -100px;
    margin-bottom: 100px;
  }

  .tile {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    a {
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h3 {
      transition: 0.5s;
      font-size: 46px;
      color: #999;
      margin-bottom: 0;
    }
  }

  .tile:hover h3 {
    color: #fff;
    text-shadow: 2px 2px 2px #000;
  }

  .left {
    background-image: linear-gradient(
        rgba(20, 20, 20, 0.5),
        rgba(3, 28, 248, 0.5)
      ),
      url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568312582/Aaron/saquon_ipbnir.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
      transition: 0.5s;
      background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568312582/Aaron/saquon_ipbnir.jpg');
      cursor: pointer;
    }
  }

  .middle {
    background-image: linear-gradient(
        rgba(20, 20, 20, 0.5),
        rgba(248, 113, 3, 0.5)
      ),
      url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568314910/Aaron/odell_pomsm8.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
      transition: 0.5s;
      background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568314910/Aaron/odell_pomsm8.jpg');
      cursor: pointer;
    }
  }

  .right {
    background-image: linear-gradient(
        rgba(20, 20, 20, 0.5),
        rgba(248, 3, 3, 0.5)
      ),
      url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568315226/Aaron/jluio_ac493a.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
      transition: 0.5s;
      background-image: url('https://res.cloudinary.com/dipgyyv6a/image/upload/v1568315226/Aaron/jluio_ac493a.jpg');
      cursor: pointer;
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
