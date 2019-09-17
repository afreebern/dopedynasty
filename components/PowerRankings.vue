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
          <div class="team-card adam">
            <h4>HOF</h4>
          </div>
        </div>
        <div class="the-why" ref="whyone">
          <h2>HERES WHY:</h2>
          <img
            src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1568326112/Aaron/vadergif_rvoxsr.gif"
            alt=""
          />
          <p>
            Well this is the world we live in now. Adam scored the hihest in
            week 3. SHOCKER. Dede shit the bed, but other than that across the
            board Adams players scored in double digits. Nobody really went
            bonkers but when your starters are that good across the board who
            has to?
          </p>
        </div>
        <div class="block" @click="opentwo()">
          <div class="rank-number gold">
            <span>#2</span>
          </div>
          <div class="team-card drew">
            <h4>G.O.A.T</h4>
          </div>
        </div>
        <div class="the-why" ref="whytwo">
          <h2>HERES WHY:</h2>
          <p>
            Fuck. Dak. Prescott... he good doh.
          </p>
        </div>
        <div class="block" @click="openthree()">
          <div class="rank-number gold">
            <span>#3</span>
          </div>
          <div class="team-card josh">
            <h4>Diggity Dogg</h4>
          </div>
        </div>
        <div class="the-why" ref="whythree">
          <h2>HERES WHY:</h2>
          <p>
            Welp... that was close. Tommy Terrific and Godwin got you just outta
            reach. Solid across the board with big play potential keeps Diggity
            near the top. What will the loss of Ben do to Juju? We shall see.
          </p>
        </div>
        <div class="block" @click="openFour()">
          <div class="rank-number gold">
            <span>#4</span>
          </div>
          <div class="team-card aaron">
            <h4>Fugly Mountain Trolls</h4>
          </div>
        </div>
        <div class="the-why" ref="whyfour">
          <h2>HERES WHY:</h2>

          <p>
            I'm bad at this. It's a good thing my team is good, because I am
            not. Keeping Kyler or starting LITERALLY anyone not named Ronald
            Jones and I win this matchup. .66 total over two weeks? FUCK. D.K.
            looking like he could be an asset sooner than later. But Ben done
            all year. Hope the kid can keep me afloat.
          </p>
        </div>
        <div class="block" @click="openFive()">
          <div class="rank-number silver">
            <span>#5</span>
          </div>
          <div class="team-card matt">
            <h4>Kamara Sutra</h4>
          </div>
        </div>
        <div class="the-why" ref="whyfive">
          <h2>HERES WHY:</h2>

          <p>
            The Fuck was this last week? This week you played the evil empire.
            Never bodes well.
          </p>
        </div>
        <div class="block" @click="openSix()">
          <div class="rank-number silver">
            <span>#6</span>
          </div>
          <div class="team-card tyler">
            <h4>Registered Flex Offenders</h4>
          </div>
        </div>
        <div class="the-why" ref="whysix">
          <h2>HERES WHY:</h2>
          <p>
            Sun shines on a dogs ass once in a blue moon. Even a blind squirrel
            finds a nut. Broken clock is right twice a day. Did i forget any?
          </p>
        </div>
        <div class="block" @click="openSeven()">
          <div class="rank-number silver">
            <span>#7</span>
          </div>
          <div class="team-card gio">
            <h4>Fuck Trump</h4>
          </div>
        </div>
        <div class="the-why" ref="whyseven">
          <h2>HERES WHY:</h2>

          <p>
            Even Saquon couldnt get you home this week. Bummer. Keenan Allen
            still out here lookin like a stud tho.
          </p>
        </div>
        <div class="block" @click="openEight">
          <div class="rank-number silver">
            <span>#8</span>
          </div>
          <div class="team-card david">
            <h4>Detroit Smash</h4>
          </div>
        </div>
        <div class="the-why" ref="whyeight">
          <h2>HERES WHY:</h2>
          <p>
            You're free fallin' on me homie. I don't understand it and I
            probably never will. This is a really good bad roster.
          </p>
        </div>
        <div class="block" @click="openNine()">
          <div class="rank-number bronze">
            <span>#9</span>
          </div>
          <div class="team-card lindsey">
            <h4>Kung Suh Panda</h4>
          </div>
        </div>
        <div class="the-why" ref="whynine">
          <h2>HERES WHY:</h2>
          <p>
            Thank god. He'd be intolerable if he won. Johnson Bell and Eckler
            out here doin work.
          </p>
        </div>
        <div class="block" @click="openTen()">
          <div class="rank-number bronze">
            <span>#10</span>
          </div>
          <div class="team-card joey">
            <h4>Christian Mingle</h4>
          </div>
        </div>
        <div class="the-why" ref="whyten">
          <h2>HERES WHY:</h2>
          <p>
            Slightly more polished turd defeats the shiniest turd in all the
            land
          </p>
        </div>
        <div class="block" @click="openEleven()">
          <div class="rank-number bronze">
            <span>#11</span>
          </div>
          <div class="team-card john">
            <h4>Mr Papa Giorgio</h4>
          </div>
        </div>
        <div class="the-why" ref="whyeleven">
          <h2>HERES WHY:</h2>
          <p>
            40 point sitting on your bench every week doesnt win football games.
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
