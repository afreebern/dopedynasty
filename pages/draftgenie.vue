<template>
  <section>
    <div class="tab-section">
      <div @click="activateOverall" ref="overall" class="ovr-tab active">
        OVERALL
      </div>
      <div @click="activateQuarterback" ref="quarterback" class="qb-tab">
        QUARTERBACK
      </div>
      <div @click="activateRunning()" ref="runningback" class="rb-tab">
        RUNNING BACK
      </div>
      <div @click="activateWidereceiver" ref="widereceiver" class="wr-tab">
        WIDE RECEIVER
      </div>
      <div @click="activateTightend" ref="tightend" class="te-tab">
        TIGHT END
      </div>
    </div>
    <div class="main-section">
      <!-- OVERALL BOARD ------------------------------------------------------------------------>
      <div ref="overallBoard" class="board ovr-board">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            1. Christian McCaffery RB CAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            2. Saquon Barkley RB NYG
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            3. Alvin Kamara RB NO
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            4. Zeke Elliot RB DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            5. Dalvin Cook RB MIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            6. Edwards-Helaire RB KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            7. Derrick Henry RB TEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            8. Michael Thomas WR NO
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            9. Joe Mixon RB CIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            10. Josh Jacobs RB OAK
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            11. Austin Ekeler RB LAC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            12. Aaron Jones RB GB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            13. Nick Chubb RB CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            14. Davante Adams WR GB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            15. Tyreek Hill WR KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            16. Julio Jones WR ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            17. George Kittle TE SF
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            18. Travis Kelce TE KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            19. DeAndre Hopkins WR HOU
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            20. Kenyan Drake RB ARZ
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            21. Miles Sander RB PHI
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            22. Chris Godwin WR TB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            23. Chris Carson RB SEA
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            24. Mike Evans WR TB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            25. Allen Robinson WR CHI
          </div>
        </div>
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player qb"
          >
            26. Patrick Mahomes QB KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player qb"
          >
            27. Lamar Jackson QB BAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            28. Kenny Galloday WR DET
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            29. Adam Thielen WR MIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            30. Odell Beckham JR. WR CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            31. Robert Woods WR LAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            32. D.J. Moore WR CAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            33. David Johnson RB HOU
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            34. LeVeon Bell RB NYJ
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            35. Amari Cooper WR DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            36. JuJu Smith-Schuster WR PIT
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            37. Melvin Gordon RB DEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            38. Todd Gurley RB ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            39. A.J Brown WR TEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            40. Cooper Kupp WR LAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            41. Terry McLaurin WR WSH
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            42. Tyler Locket WR SEA
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            43. Calvin Ridley WR ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            44. Mark Andrews TE BAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            45. Keenan Allen WR LAC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            46. Kareem Hunt RB CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            47. Zach Etrz TE PHI
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            48. James Conner RB PIT
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            49. Michael Gallup WR DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            50. T.Y Hilton WR IND
          </div>
        </div>
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            51. DJ Chark WR JAX
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            52. Courtland Sutton WR DEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            53. D.K Metcalf WR SEA
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- QUARTERBACK BOARD ------------------------------------------------------------------------------->
      <div ref="qbBoard" class="board qb-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player qb"
          >
            1. Patrick Mahomes QB KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player qb"
          >
            2. Lamar Jackson QB BAL
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- RUNNING BACK BOARTD  ------------------------------------------------------------------------------>
      <div ref="rbBoard" class="board rb-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            1. Christian McCaffery RB CAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            2. Saquon Barkley RB NYG
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            3. Alvin Kamara RB NO
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            4. Zeke Elliot RB DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            5. Dalvin Cook RB MIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            6. Edwards-Helaire RB KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            7. Derrick Henry RB TEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            8. Joe Mixon RB CIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            9. Josh Jacobs RB OAK
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            10. Austin Ekeler RB LAC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            11. Aaron Jones RB GB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            12. Nick Chubb RB CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            13. Kenyan Drake RB ARZ
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            14. Miles Sander RB PHI
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            15. Chris Carson RB SEA
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            16. David Johnson RB HOU
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            17. LeVeon Bell RB NYJ
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            18. Melvin Gordon RB DEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            19. Todd Gurley RB ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            20. Kareem Hunt RB CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player rb"
          >
            21. James Conner RB PIT
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- WIDE RECEIVER BOARD ---------------------------------------------------------------------------------------->
      <div ref="wrBoard" class="board wr-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            1. Michael Thomes WR NO
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            2. Davante Adams WR GB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            3. Tyreek Hill WR KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            4. Julio Jones WR ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            5. DeAndre Hopkins WR HOU
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            6. Chris Godwin WR TB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            7. Mike Evans WR TB
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            8. Allen Robinson WR CHI
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            9. Kenny Galloday WR DET
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            10. Adam Thielen WR MIN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            11. Odell Beckham JR. WR CLE
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            12. Robert Woods. WR LAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            13. D.J. Moore WR CAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            14. Amari Cooper WR DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            15. JuJu Smith-Schuster WR PIT
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            16. A.J Brown WR TEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            17. Cooper Kupp WR LAR
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            18. Terry McLaurin WR WSH
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            19. Tyler Locket WR SEA
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            20. Calvin Ridley WR ATL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            21. Keenan Allen WR LAC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            22. Michael Gallup WR DAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            23. T.Y Hilton WR IND
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            24. DJ Chark WR JAX
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            25. Courtland Sutton WR DEN
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            26. D.K Metcalf WR SEA
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- TIGHT END BOARD  --------------------------------------------------------------------------------------------->
      <div ref="teBoard" class="board te-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            George Kittle TE SF
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            2. Travis Kelce TE KC
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            3. Mark Andrews TE BAL
          </div>
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            4. Zach Etrz TE PHI
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDead: false
    }
  },
  methods: {
    activateOverall() {
      this.$refs.quarterback.classList.remove('active')
      this.$refs.widereceiver.classList.remove('active')
      this.$refs.tightend.classList.remove('active')
      this.$refs.runningback.classList.remove('active')
      this.$refs.overall.classList.add('active')

      this.$refs.overallBoard.classList.remove('hide')
      this.$refs.qbBoard.classList.add('hide')
      this.$refs.rbBoard.classList.add('hide')
      this.$refs.wrBoard.classList.add('hide')
      this.$refs.teBoard.classList.add('hide')
    },
    activateQuarterback() {
      this.$refs.widereceiver.classList.remove('active')
      this.$refs.tightend.classList.remove('active')
      this.$refs.runningback.classList.remove('active')
      this.$refs.overall.classList.remove('active')
      this.$refs.quarterback.classList.add('active')

      this.$refs.qbBoard.classList.remove('hide')
      this.$refs.overallBoard.classList.add('hide')
      this.$refs.rbBoard.classList.add('hide')
      this.$refs.wrBoard.classList.add('hide')
      this.$refs.teBoard.classList.add('hide')
    },
    activateRunning() {
      this.$refs.quarterback.classList.remove('active')
      this.$refs.widereceiver.classList.remove('active')
      this.$refs.tightend.classList.remove('active')
      this.$refs.overall.classList.remove('active')
      this.$refs.runningback.classList.add('active')

      this.$refs.rbBoard.classList.remove('hide')
      this.$refs.qbBoard.classList.add('hide')
      this.$refs.overallBoard.classList.add('hide')
      this.$refs.wrBoard.classList.add('hide')
      this.$refs.teBoard.classList.add('hide')
    },
    activateWidereceiver() {
      this.$refs.quarterback.classList.remove('active')
      this.$refs.tightend.classList.remove('active')
      this.$refs.runningback.classList.remove('active')
      this.$refs.overall.classList.remove('active')
      this.$refs.widereceiver.classList.add('active')

      this.$refs.wrBoard.classList.remove('hide')
      this.$refs.qbBoard.classList.add('hide')
      this.$refs.overallBoard.classList.add('hide')
      this.$refs.rbBoard.classList.add('hide')
      this.$refs.teBoard.classList.add('hide')
    },
    activateTightend() {
      this.$refs.quarterback.classList.remove('active')
      this.$refs.widereceiver.classList.remove('active')
      this.$refs.runningback.classList.remove('active')
      this.$refs.overall.classList.remove('active')
      this.$refs.tightend.classList.add('active')

      this.$refs.teBoard.classList.remove('hide')
      this.$refs.qbBoard.classList.add('hide')
      this.$refs.overallBoard.classList.add('hide')
      this.$refs.rbBoard.classList.add('hide')
      this.$refs.wrBoard.classList.add('hide')
    },
    killShot() {
      this.div.classList.add('dead')
    }
  }
}
</script>


<style lang="scss" scoped>
.tab-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    outline: 2px solid BLACK;
    width: 20%;
    height: 4vh;
    text-align: Center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.active {
  background-color: chartreuse;
}

.main-section {
  height: 96vh;
}

.board {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  .column {
    width: 25%;
    height: 100%;
    border-left: 1px solid BLACK;
    border-right: 1px solid BLACK;
  }
}

.ovr-board .player {
  padding: 5px 0 5px 5px;
  font-size: 14px;
}

.player {
  padding-left: 5px;
  border-top: 1px solid BLAck;
  border-bottom: 1px solid BLACK;
  height: 4%;
}

.rb {
  background-color: darkred;
  color: #fff;
}
.qb {
  background-color: yellow;
}
.wr {
  background-color: chartreuse;
  color: darkslategrey;
}
.te {
  background-color: orange;
  color: #000;
}

.dead {
  background-color: #666 !important;
  color: #000 !important;
}

.hide {
  display: none;
}
</style>
