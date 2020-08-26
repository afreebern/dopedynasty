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
      <!-- OVERALL BOARD -->
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
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- QUARTERBACK BOARD -->
      <div ref="qbBoard" class="board qb-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player qb"
          >
            Patrick Mahomes QB KC
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
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
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- WIDE RECEIVER BOARD -->
      <div ref="wrBoard" class="board wr-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player wr"
          >
            1. Michael Thomes WR NO
          </div>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <!-- TIGHT END BOARD -->
      <div ref="teBoard" class="board te-board hide">
        <div class="column">
          <div
            @click="e => e.target.classList.toggle('dead')"
            class="player te"
          >
            George Kittle TE SF
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
  border: 1px solid RED;
  height: 96vh;
}

.board {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  .column {
    width: 25%;
    height: 100%;
    border-left: 1px solid BLACK;
    border-right: 1px solid BLACK;
  }
}

.player {
  padding: 7px 0 7px 5px;
  border-top: 1px solid BLAck;
  border-bottom: 1px solid BLACK;
}

.rb {
  background-color: RED;
}
.qb {
  background-color: yellow;
}
.wr {
  background-color: chartreuse;
}
.te {
  background-color: orange;
}

.dead {
  background-color: #666 !important;
  color: #000 !important;
}

.hide {
  display: none;
}
</style>
