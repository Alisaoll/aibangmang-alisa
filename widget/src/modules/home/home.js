import '_common'
import {
  openFrame, addEvent, dispatchEvent, closeFrame, request, animation
} from '_methods'
import attributes from '_attributes'

document.addEventListener('apiready', () => {
  openFrame('home_home')
  initEvent()

  new Vue({
    el: 'footer',

    methods: {
      onClickSubmit() {
        openFrame('home_mask', {
          bgColor: '',
          animation: {
            type: 'fade',
          },
          rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto',
          }
        })

        const winHeight = attributes('winHeight')
        const modalHeight = 400
        openFrame('home_submit', {
          bgColor: '',
          animation: {
            type: 'movein',
            subType:"from_bottom",
          },
          rect: {
            x: 0,
            y: winHeight - modalHeight,
            w: 'auto',
            h: modalHeight,
          }
        })
      },
      onClickHome() {
        openFrame('home_home')
      },
    },

  })
})

function initEvent() {
  addEvent('closeFrame', e => {
    closeFrame('home_mask')
    animation('home_submit', {
      translation: {
        y: 400,
      },
      duration: 300,
      curve: 'ease_out',
    }, () => closeFrame('home_submit'))
  })
}
