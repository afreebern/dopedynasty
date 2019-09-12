<template>
  <div>
    <header-section />
    <power-rankings />
    <hall-of-records />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import PowerRankings from '~/components/PowerRankings.vue'
import HallOfRecords from '~/components/HallOfRecords.vue'

export default {
  components: {
    HeaderSection,
    PowerRankings,
    HallOfRecords
  }
}
</script>
