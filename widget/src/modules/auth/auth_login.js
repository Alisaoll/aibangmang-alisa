import '_common'

document.addEventListener('apiready', () => {
  new Vue({
    el: '#login',
    data: {
      phone:'',
      password:'',
    },
    methods: {
      Verification: function (event) {
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){
            alert("不是完整的11位手机号或者正确的手机号前七位");
            this.phone='';
           event.target.focus();
            return false;
        }
     }
   }

  })
})
