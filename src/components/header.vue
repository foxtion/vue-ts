<template>
  <div>
    <div class="mobile-header">
      <div class="logo-box" @click="logoAction()">
        <img src="/static/images/header/logo.png" alt />
      </div>
      <div class="slot-box">
        <slot></slot>
      </div>
      <div class="menu" @click="menuClick" v-if="showMenu">
        <van-icon name="wap-nav" />
      </div>
    </div>
    <ul class="menu-pannel">
      <li>
        <router-link :to="{name:'lotteryHall'}">彩票大厅</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'mobileTrend',query:{
              typeCode:'ssc',
              lotteryCode:'cqssc',
              tab:'result'
            }}"
        >开奖走势</router-link>
      </li>
      <li>
        <router-link :to="{name:'mobileSkills'}">玩家圈</router-link>
      </li>
      <li>
        <router-link :to="{name:'mobilePort'}">API</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
  }
})
@Component
export default class Header extends Vue {
  showMenuPannel:false;
  @Prop()
  @Prop({default: true})
  showMenu:Boolean

  @Watch('')

  mounted () {
  }
  logoAction () {
    this.$router.push({ path: '/index/home'})
  }
  menuClick () {
    // this.showMenuPannel = !this.showMenuPannel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/style/header/header.scss'

</style>
