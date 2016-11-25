import '_common'
import { dispatchEvent, addEvent } from '_methods'

document.addEventListener('apiready', () => {
  const vm = new Vue({
    el: '#dialog',

    data: {
      isModalBottom: false,
    },

    methods: {
      onClickMask() {
        dispatchEvent('closeFrame')
      }
    },

  })

})
