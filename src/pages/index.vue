<template>
  <div>
    <div class="container">
      <Header></Header>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'
import Header from '@/components/header.vue'
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
    Header
  }
})
export default class header extends Vue {
  @Watch('')

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//@import '@/assets/style/header/header.scss'

</style>
