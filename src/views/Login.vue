<template>
  <div class="login-page d-flex align-items-center justify-content-center">

    <img src="../assets/img/logo.png" alt="">

    <div class="login-section card shadow">
      <div class="card-body">
        <div class="form-group mb-3 text-start">
          <label>Username</label>
          <input name="username" v-model="username" type="text" autofocus placeholder="Username"
            class="form-control shadow-no ne form-input" @keyup.enter="loginAction()" required>
        </div>
        <div class="form-group mb-3 text-start">
          <label class="label d-block m-0">Password
            <!-- <a class="float-end disabled">Forgot password?</a> -->
          </label>
          <input name="username" v-model="password" type="password" autofocus placeholder="Password"
            class="form-control shadow-no ne form-input" @keyup.enter="loginAction()" required>
        </div>
        <div class="d-grid gap-2 mb-2">
          <button type="button" class="btn btn-primary shadow-none" :disabled="isLoading" @click="loginAction()">
            Login
          </button>
        </div>

        <p class="text-center" v-if="errorMessage">
          <small class="text-danger">{{ errorMessage }}</small>
        </p>

        <p class="text-center">
          Don't have an account? <a class="text-primary" @click="gotoRegister()">Register</a>
        </p>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import services from "../services"
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  data() {
    return {
      password: '',
      username: '',
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    gotoRegister() {
      this.$router.push('/register')
    },
    loginAction() {
      if (this.username && this.password) {
        this.isLoading = true
        this.errorMessage = ''
        const data = {
          username: this.username,
          password: this.password
        }
        services.login(data)
          .then(res => {
            this.isLoading = false
            this.store.dispatch('login/login', res.data)
            setTimeout(() => {
              location.replace('/')
            }, 500)
          })
          .catch(err => {
            if (err.response.status === 401)  {
              this.errorMessage = 'Invalid username/password!'
            } else {
              this.errorMessage = err.response.data.message

            }
            this.isLoading = false
          })
      }
    }
  },


})

</script>
