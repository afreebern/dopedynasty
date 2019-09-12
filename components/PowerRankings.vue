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
        <div class="block" id="power-rankings">
          <div class="rank-number gold">
            <span>#1</span>
          </div>
          <div class="team-card adam">
            <h4>HOF</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number gold">
            <span>#2</span>
          </div>
          <div class="team-card drew">
            <h4>G.O.A.T</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number gold">
            <span>#3</span>
          </div>
          <div class="team-card david">
            <h4>Detroit Smash</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number gold">
            <span>#4</span>
          </div>
          <div class="team-card josh">
            <h4>Diggity Dogg</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number silver">
            <span>#5</span>
          </div>
          <div class="team-card aaron">
            <h4>Fugly Mountain Trolls</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number silver">
            <span>#6</span>
          </div>
          <div class="team-card matt">
            <h4>Kamara Sutra</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number silver">
            <span>#7</span>
          </div>
          <div class="team-card tyler">
            <h4>Registered Flex Offenders</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number silver">
            <span>#8</span>
          </div>
          <div class="team-card gio">
            <h4>Fuck Trump</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number bronze">
            <span>#9</span>
          </div>
          <div class="team-card lindsey">
            <h4>Kung Suh Panda</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number bronze">
            <span>#10</span>
          </div>
          <div class="team-card john">
            <h4>Mr Papa Giorgio</h4>
          </div>
        </div>
        <div class="block">
          <div class="rank-number bronze">
            <span>#11</span>
          </div>
          <div class="team-card joey">
            <h4>Christian Mingle</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
  border: 1px solid darkslategrey;
}

.block {
  display: flex;
  flex-direction: row;
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
  span {
  }
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
    margin-top: -200px;
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
