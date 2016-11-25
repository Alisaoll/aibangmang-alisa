import '_common'
import { dispatchEvent, addEvent } from '_methods'

document.addEventListener('apiready', () => {
  new Vue({
    el: '#modal',

    data: {
      isModalBottom: false,
    },

    methods: {
      onClickClose() {
        dispatchEvent('closeFrame')
      }
    },

  })

})
