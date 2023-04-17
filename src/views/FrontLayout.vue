<template>
  <div class="container-fluid p-0 border-bottom fixed-top">
    <div class="fixed-bottom px-4 mb-9 text-end" :class="{'d-none': !visible}">
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" ref="collapse">
          <ul class="d-flex ms-auto list-unstyled m-0 navbar-nav font-rufina text-center">
            <li><RouterLink to="/about" class="p-3 pb-2 pt-4 py-ms-2" @click="closeNavbar">About</RouterLink></li>
            <li class="ms-lg-3"><RouterLink to="/courses" class="p-3 pb-2 pt-4 py-ms-2" @click="closeNavbar">Courses</RouterLink></li>
            <li class="ms-lg-3">
              <RouterLink to="/cart" class="p-3 pb-2 pt-4 py-ms-2" @click="closeNavbar">
                <i class="h5 bi bi-bag-fill position-relative">
                  <span class="badge rounded-pill bg-danger position-absolute" style="top: -10px; right: -14px; width: 24px; height: 24px; font-size: 14px;">{{ carts.length }}</span>
                </i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="mt-9">
    <RouterView />
  </div>

  <footer class="bg-white mt-0">
    <div class="container py-5 border-top d-flex">
      <div>
        <div>
          <RouterLink to="/" class="fs-3 font-rufina">Art / World.</RouterLink>
        </div>
        <ul class="sns_list d-flex list-unstyled mt-3 mb-0">
          <li><a href="https://line.me/zh-hant/" target="_blank"><i class="bi bi-line fs-4"></i></a></li>
          <li class="mx-3"><a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook fs-4"></i></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram fs-4"></i></a></li>
        </ul>
      </div>
      <div class="connect_list ms-auto text-end">
        <h3 class="fs-4">藝享世界</h3>
        <ul class="list-unstyled fs-7">
          <li>藝術 ｜生活 ｜ 風格</li>
          <li><a href="tel:+886-2-22334567">02-22334567</a></li>
          <li>台北市館前路 120 號 9 樓 909 室</li>
          <li class="font-rufina"><a href="mailto:artworld99@service.com">artworld99@service.com</a></li>
        </ul>
      </div>
    </div>
    <div class="bg-primary p-3">
      <p class="text-white text-center m-0 font-rufina fs-6">Copyright＠2023 Art World ・ <RouterLink to="/login" class="text-white font-noto">後台管理</RouterLink></p>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import cartStore from '../stores/cart.js'
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      visible: false,
      collapse: {}
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
    handleScroll (){
      this.visible = window.scrollY >= 250 ? true : false
    },
    goTop() {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
      })
    },
    closeNavbar() {
      this.collapse.hide()
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.getCarts()
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  }
}
</script>

<style>
.gotop:hover {
  cursor: pointer;
}
.sns_list i:hover {
  color: #919191;
}
</style>
