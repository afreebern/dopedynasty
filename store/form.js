export const state = () => ({
  form: {
    team_one: '',
    reason_one: ''
  }
})

export const mutations = {
  updateField(state, data) {
    state.form[data.fieldname] = data.value
  }
}
