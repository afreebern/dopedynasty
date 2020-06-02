<template>
  <div class="body-back">
    <h1>POWER RANKINGS</h1>
    <div class="number-one">
      <form>
        <input
          class="team-name"
          type="text"
          name="team_one"
          :value="form.team_one"
          placeholder="#1 TEAM NAME"
          @input="updateField($event)"
        />
        <textarea
          class="power-reason"
          placeholder="But Why?"
          type="text"
          name="reason_one"
          :value="form.reason_one"
          @input="updateField($event)"
        />
        <button>SUBMIT</button>
      </form>
    </div>
    <div class="results"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('form')
const { mapState } = createNamespacedHelpers('form')
export default {
  computed: {
    ...mapGetters([]),
    ...mapState(['form'])
  },
  methods: {
    updateField(event) {
      console.log('update event')
      const data = {
        fieldname: event.target.name,
        value: event.target.value
      }
      this.$store.commit('form/updateField', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.body-back {
  background-color: #222;
  width: 100%;
  height: 100vh;
  padding: 20px 10px;
}

h1 {
  font-size: 32px;
  color: #ff8000;
  text-align: center;
  margin-bottom: 60px;
  @media only screen and (min-width: 750px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 60px;
  }
}

.team-name {
  width: 90%;
  height: 80px;
  display: block;
  margin: 0 auto;
  background-color: #333;
  border: none;
  color: #18b1f6;
  padding: 5px;
  text-align: center;
  font-size: 30px;
  font-weight: BOLD;
  margin-bottom: 20px;
  &::placeholder {
    color: #999;
    font-size: 24px;
    text-align: center;
    letter-spacing: 5px;
  }
}

.power-reason {
  width: 90%;
  height: 300px;
  display: block;
  margin: 0 auto;
  background-color: #333;
  border: none;
  color: #18b1f6;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: BOLD;
  margin-bottom: 20px;
  &::placeholder {
    color: #999;
    font-size: 24px;
    letter-spacing: 5px;
  }
}

button {
  background-color: #ff8000;
  color: #333;
  border: none;
  padding: 10px 40px;
  font-size: 24px;
  display: block;
  margin: 0 auto;
}
</style>
