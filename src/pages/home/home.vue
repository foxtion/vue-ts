<template>
  <div class="home">
    <Header></Header>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TestMixin from '../../mixins/test-mixin'
import { Getter } from 'vuex-class'
import Header from '@/components/header.vue'
@Component({
  components: {
    Header
  },
  mixins: [TestMixin]
})
export default class HelloWorld extends Vue<TestMixin> {
  @Getter info

  msg: string = 'Welcome to Your Vue-Typescript App'

  mounted () {

  }
}
</script>
<style scoped lang='scss'>
 @import '@/assets/style/home/home.scss'
</style>
