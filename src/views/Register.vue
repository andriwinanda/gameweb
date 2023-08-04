<template>
  <div class="login-page d-flex align-items-center justify-content-center">

    <img src="../assets/img/logo.png" alt="">

    <div class="login-section card shadow">
      <div class="card-body">
        <div :class="`form-group mb-3 text-start ${msg.username? 'needs-validation':'was-validated'}`">
          <label>Username</label>
          <input name="username" v-model="username" type="text" autofocus placeholder="Username"
            class="form-control shadow-no ne form-input"  required>
            <small class="text-danger" v-if="msg.username">{{msg.username}}</small>
        </div>

        <div :class="`form-group mb-3 text-start ${msg.email? 'needs-validation':'was-validated'}`">
          <label>Email</label>
          <input name="email" v-model="email" type="text" autofocus placeholder="Email"
            class="form-control shadow-no ne form-input"  required>
            <small class="text-danger" v-if="msg.email">{{msg.email}}</small>
        </div>
        <div :class="`form-group mb-3 text-start ${msg.password? 'needs-validation':'was-validated'}`">
          <label>Password</label>
          <input name="password" v-model="password" type="password" autofocus placeholder="Password"
            class="form-control shadow-no ne form-input"  required>
            <small class="text-danger" v-if="msg.password">{{msg.password}}</small>

        </div>
        <div :class="`form-group mb-3 text-start ${msg.confirmPass? 'needs-validation':'was-validated'}`">
          <label>Confirm password</label>
          <input name="confirm" v-model="confirmPass" type="password" autofocus placeholder="Confirm password"
            class="form-control shadow-no ne form-input"  required>
          <small class="text-danger" v-if="msg.confirmPass">{{msg.confirmPass}}</small>

        </div>
        <div :class="`form-group mb-3 text-start ${msg.pin? 'needs-validation':'was-validated'}`">
          <label class="label d-block m-0">PIN
          </label>
          <input name="pin" v-model="pin" type="password" autofocus placeholder="PIN"
            class="form-control shadow-no ne form-input"  required>
            <small class="text-danger" v-if="msg.pin">{{msg.pin}}</small>

        </div>
        <div class="d-grid gap-2 mb-2">
          <button type="button" class="btn btn-primary shadow-none" :disabled="disabled.includes(true) || isLoading" @click="register()">
            Register
          </button>
        </div>
        <p class="text-center">
          Have an account? <a class="text-primary" @click="gotoLogin()">Login</a>
        </p>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import services from '@/services'
import { defineComponent } from 'vue'


export default defineComponent({
  data(){
    return {
      username: '',
      password: '',
      email: '',
      confirmPass: '',
      pin: '',
      msg: {
        username: '',
        password: '',
        email: '',
        confirmPass: '',
        pin:""
      },
      disabled: [true, true, true, true, true],
      isLoading: false
    }
  },
  methods:{
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        this.msg['email'] = "";
        this.disabled[0] = false
      } else {
        this.msg['email'] = 'Invalid Email Address';
        this.disabled[0] = true
      }
    },
    validateUsername(value) {
      const regex = /^\w+$/
      if (value.length > 4 && regex.test(value)) {
        this.msg['username'] = '';
        this.disabled[1] = false

      } else {
        this.msg['username'] = 'Min. 4 characters & Alphanumeric!' ;
        this.disabled[1] = true

      }
    },
    validatePassword(value) {
      if (value.length < 6) {
        this.msg['password'] = 'Min. 6 characters!' ;
        this.disabled[2] = true

      } else {
         this.msg['password'] = '';
         this.disabled[2] = false

      }
    },
    validateConfirmPassword(value) {
      if (value !== this.password) {
        this.msg['confirmPass'] = 'Not match with password' ;
        this.disabled[3] = true

      } else {
         this.msg['confirmPass'] = '';
         this.disabled[3] = false

      }
    },
    validatePin(value) {
      const regex = /^\d+$/
      if (value.length === 6 && regex.test(value)) {
        this.msg['pin'] = '';
        this.disabled[4] = false

      } else {
        this.msg['pin'] = 'Must be 6 characters & Numeric!' ;
        this.disabled[4] = true
      }
    },

    register () {
      this.isLoading = true
      const data = {
        id: this.username,
        email: this.email,
        password: this.password,
        pin: this.pin
      }

      services.register(data)
        .then(res => {
          this.isLoading = false

          setTimeout(() => {
            location.replace('/login')
          }, 500)
        })
        .catch(err => {
          this.isLoading = false
        })

    },
    gotoLogin () {
      this.$router.push('/login')
    }
  },


  watch: {
    username(value){
      this.validateUsername(value);
    },
    email(value){
      this.validateEmail(value);
    },
    password(value){
      this.validatePassword(value);
    },
    confirmPass(value){
      this.validateConfirmPassword(value);
    },
    pin(value){
      this.validatePin(value);
    }
  },
})

</script>
