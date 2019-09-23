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
            src="https://res.cloudinary.com/dipgyyv6a/image/upload/v1569262806/Aaron/jimh_utvk6q.gif"
            alt=""
          />
          <p>
            ^ thats adam while I yell at him after all of him and dipshits
            trades. "Aww shucks guys im just trying to do right by everybody".
            Darth remains locked into the top of the power ranking. And I dont
            see him going anywhere any time soon. P.S. Greg Olsen is an asshole.
          </p>
        </div>
        <div class="block" @click="opentwo()">
          <div class="rank-number gold">
            <span>#2</span>
          </div>
          <div class="team-card gio">
            <h4>Fuck Trump</h4>
          </div>
        </div>
        <div class="the-why" ref="whytwo">
          <h2>HERES WHY:</h2>
          <p>
            Well ladies and Gentleman the numbers don't lie. Gio is a force.
            Ingram and Allen damn near ourscored a couple of us all by their
            lonesome. The loss of Saquon could prove devastating, as some
            reports indicate a return as late as week 12. But until given a
            reason to change, Gio rockets to the 2 spot.
          </p>
        </div>
        <div class="block" @click="openthree()">
          <div class="rank-number gold">
            <span>#3</span>
          </div>
          <div class="team-card drew">
            <h4>G.O.A.T</h4>
          </div>
        </div>
        <div class="the-why" ref="whythree">
          <h2>HERES WHY:</h2>
          <p>
            As of Monday when I'm writing this Drew is winning. It might not go
            that way. But not for lack of trying. Even if he does take a loss
            Dreww still maintains the 3 spot after scoring right in line with
            the rest of the league, but shit happens.
          </p>
        </div>
        <div class="block" @click="openFour()">
          <div class="rank-number gold">
            <span>#4</span>
          </div>
          <div class="team-card josh">
            <h4>Diggity Dogg</h4>
          </div>
        </div>
        <div class="the-why" ref="whyfour">
          <h2>HERES WHY:</h2>

          <p>
            With youth comes a little inconsistancy. Tampa bay remembered that
            big fella they got...mike something? And the Vikings found a way to
            limit Cousins mistakes, only let him throw the ball 4 times a game
            and only if Theilen is wide open. conservative, but if it aint broke
            dont fix it. Josh is the low man this week... even though I tried
            real hard to be. Diggity will bounce back.
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
            Kamara Sutra can rank anywhere from here to the big boss at #1. Hes
            going to pass me in total points this week. Moving to 4th highest
            overall. And if I had to guess will move to a total points podium
            and higher in the rankings next week. Kamara and Cooks combo is not
            to be fucked with, I'm glad I already got my first matchup with him
            out of the way.
          </p>
        </div>
        <div class="block" @click="openSix()">
          <div class="rank-number silver">
            <span>#6</span>
          </div>
          <div class="team-card john">
            <h4>Papa GioGio</h4>
          </div>
        </div>
        <div class="the-why" ref="whysix">
          <h2>HERES WHY:</h2>
          <p>
            Apparently 40 points on your bench every week does win you games. I
            stand fucking corrected. John gets another fuckin cake walk of a
            matchup, but also puts up some big numbers. the fuck do I know,
            apparently Johns gonna ride thsi cake walk right into the playoffs.
          </p>
        </div>
        <div class="block" @click="openSeven()">
          <div class="rank-number silver">
            <span>#7</span>
          </div>
          <div class="team-card lindsey">
            <h4>Kung Suh Panda</h4>
          </div>
        </div>
        <div class="the-why" ref="whyseven">
          <h2>HERES WHY:</h2>

          <p>
            RUSSELL THE MUSCLE. The only thing Lindsey does is put up solid
            numbers every week and have me underestimate her teams overall
            standing. Play tyler helps...
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
            HES GONNA GET A WIN. And if he doesnt its because i won the trade.
            This is fun for me. Amari and Cupp showe up big and probably get
            Detroit in the winners column. It'll be a long climb back to where I
            had him, but W's are a start.
          </p>
        </div>
        <div class="block" @click="openNine()">
          <div class="rank-number bronze">
            <span>#9</span>
          </div>
          <div class="team-card aaron">
            <h4>Fugly Mountain Trolls</h4>
          </div>
        </div>
        <div class="the-why" ref="whynine">
          <h2>HERES WHY:</h2>
          <p>
            Mediocrity is fun aint it? Combine that with bad decision making by
            yours truly and you free fall in your own rankings, despite your
            clear biased for your team. If anybody needs me I'll be walking
            slowy down the street with a tiny storm cloud over my head listening
            to Adele. HELLO FROM THE OTHER SIIIIIIIIIDE.
          </p>
        </div>
        <div class="block" @click="openTen()">
          <div class="rank-number bronze">
            <span>#10</span>
          </div>
          <div class="team-card tyler">
            <h4>Registered Flex Offenders</h4>
          </div>
        </div>
        <div class="the-why" ref="whyten">
          <h2>HERES WHY:</h2>
          <p>
            Wanna share my tiny storm cloud? you can talk to me about Cam and
            Tyreek and I'll listen and pretend I'm not glad you're down here
            with me. Rough times for Tyler.
          </p>
        </div>
        <div class="block" @click="openEleven()">
          <div class="rank-number bronze">
            <span>#11</span>
          </div>
          <div class="team-card joey">
            <h4>Christian Mingle</h4>
          </div>
        </div>
        <div class="the-why" ref="whyeleven">
          <h2>HERES WHY:</h2>
          <p>
            Well, I tried to give you the benefit of the doubt and took you out
            of the bottom spot last. Partly because i saw a glimmer of hope,
            partly because I was mad at john for calling me names during trade
            offers. But... yeesh. Will Antonio Browns stats at a divion II
            college count?
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
