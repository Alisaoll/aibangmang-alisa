import '_common'
import { getHomeRanking, getHomeHelp, getHomeService, getHomeNews } from '_api'
import { parallel } from '_utils'
import { setReflash, setReflashDone, openFrame } from '_methods'

Vue.component('newsMulti', {
  template: '#news-multi-template',
  props: ['title', 'pic', 'source', 'time', 'comment'],
})

Vue.component('newsSingle', {
  template: '#news-single-template',
  props: ['title', 'pic', 'source', 'time', 'comment'],
})

document.addEventListener('apiready', () => {
  new Vue({
    el: '#frame',

    data: {
      skillRankings: [],
      helps: [],
      services: [],
      news: [],
    },

    created() {
      getHomeData.call(this)
      setReflash(() => getHomeData.call(this))
    },

  })
})

// 并行请求首页的所有数据，并一并返回
function getHomeData() {
  parallel({
    ranking(cb) {
      getHomeRanking().then(rankings => cb('', rankings)).catch(err => cb(err))
    },
    helps(cb) {
      getHomeHelp().then(helps => cb('', helps)).catch(err => cb(err))
    },
    services(cb) {
      getHomeService().then(services => cb('', services)).catch(err => cb(err))
    },
    news(cb) {
      getHomeNews().then(news => cb('', news)).catch(err => cb(err))
    },
  })
    .then(res => {
      this.skillRankings = res.ranking
      this.helps = res.helps
      this.services = res.services
      this.news = res.news
    })
    .catch(err => alert(err))
    .then(res => setReflashDone())
}
