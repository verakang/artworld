<template>
  <div class="container-fluid p-0 border-bottom fixed-top">
    <div class="fixed-bottom p-4 mb-9 text-end" :class="{'d-none': !visible}">
        <i class="text-center bi bi-arrow-up-short h2 gotop shadow px-2 bg-body rounded rounded-circle" @click="goTop"></i>
    </div>
    <nav class="navbar navbar-expand-lg bg-white py-2 text-primary">
      <div class="container">
        <div class="py-3">
          <router-link to="/" class="h3 font-rufina py-3 pe-3">Art / World.</router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="d-flex ms-auto list-unstyled m-0 navbar-nav font-rufina text-center">
            <li><router-link to="/about" class="p-3 pb-2 pt-4 py-ms-2">About</router-link></li>
            <li class="ms-lg-3"><router-link to="/courses" class="p-3 pb-2 pt-4 py-ms-2">Courses</router-link></li>
            <li class="ms-lg-3 ">
              <router-link to="/cart" class="p-3 pb-2 pt-4 py-ms-2">
                <i class="h5 bi bi-bag-fill position-relative">
                  <span class="badge rounded-pill bg-danger position-absolute" style="top: -10px; right: -14px; width: 24px; height: 24px; font-size: 14px;">{{ carts.length }}</span>
                </i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="mt-9">
    <RouterView />
  </div>

  <footer class="bg-white mt-5">
    <div class="container py-5 border-top d-flex">
      <div>
        <div>
          <router-link to="/" class="fs-3 font-rufina">Art / World.</router-link>
        </div>
        <ul class="d-flex list-unstyled mt-3 mb-0">
          <li><a href="https://line.me/zh-hant/" target="_blank"><i class="bi bi-line fs-4"></i></a></li>
          <li class="mx-3"><a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook fs-4"></i></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram fs-4"></i></a></li>
        </ul>
      </div>
      <div class="ms-auto text-end">
        <h3 class="fs-4 font-rufina">藝享世界</h3>
        <ul class="list-unstyled">
          <li>藝術 ｜生活 ｜ 風格</li>
          <li>02-22334567</li>
          <li>台北市館前路 120 號 9 樓 909 室</li>
          <li class="font-rufina">artworld99@service.com</li>
        </ul>
      </div>
    </div>
    <div class="bg-primary p-3">
      <p class="text-white text-center m-0 font-rufina fs-7">Copyright＠2023 Art World</p>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import cartStore from '../stores/cart.js'

export default {
  data() {
    return {
      visible: false
    }
  },
  components: {
    RouterView
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    handleScroll (e){
      this.visible = window.scrollY >= 250 ? true : false
    },
    goTop() {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
      })
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.getCarts()
  }
}
</script>

<style>
.gotop:hover {
  cursor: pointer;
}
</style>
