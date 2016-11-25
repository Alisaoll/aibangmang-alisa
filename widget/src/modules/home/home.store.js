const image = 'http://ww4.sinaimg.cn/mw690/884f7263jw1f9e2asbnsxj20ck0ckaap.jpg'

export default new Vuex.Store({
  state: {
    isPending: false,
    featureImages: [image, image, image],
    featureTitles: ['平台资质齐全', '民生银行资金监管', '专业审核小组'],
  },

  mutations: {
    setHomeFeatureTitles(state, payload) {
      state.featureTitles = payload.featureTitles
    }
  },

  actions: {
    setHomeFeatureTitles({ state, commit }, payload) {
      commit('setHomeFeatureTitles', payload)
    }
  },
})
