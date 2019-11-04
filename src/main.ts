import Vue from 'vue'
import './assets/style/reset.css'
import App from '@/App.vue'
import router from './router'
import store from './store'
import { Carousel, CarouselItem, Tabs, TabPane, Pagination, DatePicker, Input, Button, Checkbox, Radio, RadioGroup, RadioButton, Message } from 'element-ui'
Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.prototype.$message = Message
export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
