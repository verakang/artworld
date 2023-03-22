<template>
  <div class="container-fluid p-0 border-bottom fixed-top">
    <div class="fixed-bottom p-4 mb-9 text-end" :class="{'d-none': !visible}">
        <i class="text-center bi bi-arrow-up-short h2 gotop shadow px-2 bg-body rounded rounded-circle" @click="goTop"></i>
    </div>
    <nav class="navbar navbar-expand-lg bg-white py-2 text-primary">
      <div class="container">
        <div class="py-3">
          <RouterLink to="/" class="h3 font-rufina py-3 pe-3">Art / World.</RouterLink>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="d-flex ms-auto list-unstyled m-0 navbar-nav font-rufina text-center font-noto">
            <li><RouterLink to="/admin/courses" class="p-3 pb-2 pt-4 py-ms-2">產品列表</RouterLink></li>
            <li class="ms-lg-3"><RouterLink to="/admin/orders" class="p-3 pb-2 pt-4 py-ms-2">訂單列表</RouterLink></li>
            <li class="ms-lg-3 "><a class="p-3 pb-2 pt-4 py-ms-2" @click.prevent="logout">登出</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="mt-9 admin" v-if="status">
    <RouterView />
  </div>

  <footer class="bg-white mt-5">
    <div class="bg-primary p-3">
      <p class="text-white text-center m-0 font-rufina fs-6">Copyright＠2023 Art World ・ <RouterLink to="/" class="text-white font-noto">返回首頁</RouterLink></p>
    </div>
  </footer>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_URL } = import.meta.env
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      visible: false,
      status: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    handleScroll (e){
      this.visible = window.scrollY >= 250 ? true : false
    },
    goTop() {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
      })
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}/v2/api/user/check`
      this.$http
        .post(url)
        .then((res) => {
          this.status = true
        })
        .catch((err) => {
          // alert(err.response.data.message)
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: `${err.response.data.message}`,
            showConfirmButton: true,
            toast: true
          })
          // 未登入則跳轉回登入頁
          this.$router.push('/login')
        })
    },
    logout () {
      document.cookie = `hexschool=; expires=${new Date()}`
      this.$router.push('/')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.checkLogin()
  }
}
</script>

<style>
  .gotop:hover {
    cursor: pointer;
  }
  .admin {
    min-height: calc(100vh - 185px);
  }
</style>
