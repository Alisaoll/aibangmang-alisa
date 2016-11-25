import '_common'
import {
  openFrame, addEvent, dispatchEvent, closeFrame, request, animation
} from '_methods'
import attributes from '_attributes'
// //import attributes from '_attributes'

document.addEventListener('apiready', () => {
 openFrame('love_content')
  //initEvent()
  // api.openFrame({
  //                      name: 'love_content',
  //                      url: 'html/love_content.html'
  //              })
});
