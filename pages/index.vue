<template>
  <div>
    <header-section />
    <power-rankings />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import PowerRankings from '~/components/PowerRankings.vue'

export default {
  components: {
    HeaderSection,
    PowerRankings
  }
}
</script>
