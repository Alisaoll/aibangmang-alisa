import '_common'
document.addEventListener('apiready', () => {
  new Vue({
    el: '#register',
    data: {
      phone: '',
      vericode: '获取验证码',
      passwords: '',
      isTrue: false,
      countdown: 25,
      isget: false,
      istext: true,
      stop: false,
      ifrev: false
    },
    methods: {
      Verification: function(event) {
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
          alert("不是完整的11位手机号或者正确的手机号前七位");
          this.phone = '';
          event.target.focus();
          return false;
        }
      },
      see: function(event) {
        this.istext = !this.istext;
      },
      inter: function() {
        if (this.countdown <= 0) {
          this.vericode = "获取验证码";
          this.ifrev = false;
        } else {
          this.ifrev = true;
          this.vericode = "重新发送(" + this.countdown + ")";
          this.countdown--;
        }
      },
      validate: function(event) {
        if (this.ifrev == false) {
          if (this.countdown <= 0) {
            this.countdown = 25;
            clearInterval(this.Interval);
          }
          this.Interval = setInterval(this.inter, 1000);
        }
      }
    }
  })
})
