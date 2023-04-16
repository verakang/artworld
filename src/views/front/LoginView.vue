<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container login d-flex justify-content-center align-items-center">
    <div class="row py-5">
      <h3 class="mb-3 my-4 text-center">
        登入會員
      </h3>
      <div>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input type="email" v-model="user.username" class="form-control" id="username"
              placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" v-model="user.password" class="form-control" id="password"
              placeholder="Password" required>
            <label for="password">Password</label>
          </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" :disabled="isProcessing">
              登入
            </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isProcessing: false,
      status: false,
      isLoading: false,
    }
  },
  methods: {
    login () {
      this.isProcessing = true;
      const url = `${VITE_URL}/v2/admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { expired, token } = res.data
          document.cookie = `hexschool=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin/courses')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: '登入成功！',
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
          this.isProcessing = false
          this.user = {}
        })
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}/v2/api/user/check`
      this.$http
        .post(url)
        .then(() => {
          this.status = true
          this.$router.push('/admin/courses')
        })
    }
  },
  mounted() {
    this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      },800)
    this.checkLogin ()
  }
}
</script>

<style>
  .login {
    min-height: calc(100vh - 416px);
  }
</style>
