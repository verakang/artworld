<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container py-5">
    <nav class="my-4" style="`--bs-breadcrumb-divider: >;`" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">課程列表</li>
      </ol>
    </nav>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100 border-primary">
          <div class="overflow-hidden" style="height: 180px;">
            <router-link :to="`/course/${product?.id}`" class="card-title h5">
              <img :src="product.imageUrl" class="courses__img card-img-top" alt="課程圖示" style="height: 180px;">
            </router-link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <router-link :to="`/course/${product?.id}`" class="card-title h5 mb-0">{{ product?.title }}</router-link>
              <h6 class="badge bg-dark p-2 mb-0"> #{{ product.category }}</h6>
            </div>
            <div>
              <p class="mb-1 h6"><i class="bi bi-clock me-2"></i>{{ product.datetime }}</p>
              <p class="h6"><i class="bi bi-people-fill me-2"></i>{{ product.total_quota }}</p>
            </div>
            <div class="h5 mt-2" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
            <div v-else class="my-2">
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">特價 {{ product.price }} 元</div>
            </div>
          </div>
          <a class="btn btn-outline-primary ms-auto me-3 mb-3" @click="addToCart(product.id,qty)">加入購物車</a>
        </div>
      </div>
    </div>
    <pagination class="container mt-9" :pages="page" @change-page="getData"></pagination>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import pagination from '../../components/PaginationView.vue'
  import { mapActions } from 'pinia'
  import cartStore from '../../stores/cart'
  const { VITE_URL, VITE_PATH } = import.meta.env

  export default {
    data () {
      return {
        products: [],
        page: {},
        isLoading: false,
      }
    },
    components: {
      RouterLink, pagination
    },
    methods: {
      getData (page = 1) {
        const url = `${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`
        this.$http
          .get(url)
          .then((res) => {
            this.products = res.data.products
            this.page = res.data.pagination
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      },
      getProducts () {
        this.$http
          .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products
            this.products = this.products.reverse()
          })
      },
      ...mapActions(cartStore, ['addToCart'])
    },
    mounted () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      },800)
      this.getData()
      this.getProducts()
    }
  }
</script>

<style>
  a:hover {
    cursor: pointer;
  }
  .courses__img {
    transition: all 0.5s ease
  }
  .courses__img:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
</style>