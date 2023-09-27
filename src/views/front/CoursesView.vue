<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container py-5">
    <div class="d-lg-flex align-items-center justify-content-between">
      <nav class="my-4" style="`--bs-breadcrumb-divider: >;`" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">課程列表</li>
        </ol>
      </nav>
      <ul class="list-unstyled d-flex flex-wrap">
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '全部'}" type="button" @click="() => getProducts()">全部</button></li>
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '美術'}" type="button" @click="() => setCategory('美術')">美術</button></li>
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '花藝'}" type="button" @click="() => setCategory('花藝')">花藝</button></li>
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '生活'}" type="button" @click="() => setCategory('生活')">生活</button></li>
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '攝影'}" type="button" @click="() => setCategory('攝影')">攝影</button></li>
        <li><button class="btn btn-outline-primary btn-sm m-2" :class="{ 'btn-primary text-white': category === '設計'}" type="button" @click="() => setCategory('設計')">設計</button></li>
      </ul>
    </div>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-4 g-4">
      <div class="col position-relative" v-for="product in products" :key="product.id">
        <RouterLink :to="`/course/${product?.id}`" class="card h-100 border-primary">
          <div class="overflow-hidden" style="height: 180px;">
            <div class="card-title h5">
              <img :src="product.imageUrl" class="courses__img card-img-top" alt="課程圖示" style="height: 180px;">
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <RouterLink :to="`/course/${product?.id}`" class="card-title h5 mb-0">{{ product?.title }}</RouterLink>
              <h6 class="badge bg-dark p-2 mb-0"> #{{ product.category }}</h6>
            </div>
            <div>
              <p class="mb-1 h6"><i class="bi bi-clock me-2"></i>{{ product.datetime }}</p>
              <p class="h6"><i class="bi bi-people-fill me-2"></i>{{ product.total_quota }}</p>
            </div>
            <div class="h5 mt-2" v-if="product.price === product.origin_price">NT$ {{ numberComma(product.price) }}</div>
            <div v-else class="my-2">
              <del class="h6">原價 NT$ {{ numberComma(product.origin_price) }}</del>
              <div class="h5">特價 NT$ {{ numberComma(product.price) }}</div>
            </div>
          </div>
        </RouterLink>
        <a :class="{ 'disabled': isDone === product.id }" class="btn btn-outline-primary me-4 mb-3 position-absolute bottom-0 end-0" @click="addToCart(product.id,qty)">加入購物車</a>
      </div>
    </div>
    <Pagination class="container mt-9" :pages="page" @change-page="getData"></Pagination>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Pagination from '@/components/PaginationComponent.vue'
  import { mapState, mapActions } from 'pinia'
  import cartStore from '@/stores/cart'
  const { VITE_URL, VITE_PATH } = import.meta.env
  import Swal from 'sweetalert2'

  export default {
    data () {
      return {
        products: [],
        page: {},
        isLoading: false,
        category: ''
      }
    },
    components: {
      RouterLink, Pagination
    },
    computed: {
    ...mapState(cartStore, ['isDone'])
    },
    methods: {
      getData (page = 1) {
        let url = `${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`
        if(this.category !== '全部'){
          url = `${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}&category=${this.category}`
        }
        this.$http
          .get(url)
          .then((res) => {
            this.products = res.data.products
            this.page = res.data.pagination
            window.scrollTo(0, 0);
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
            title: `${err.response.data.message}，請再次確認。`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            toast: true
            })
          })
      },
      getProducts () {
        this.$http
          .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products
            this.products = this.products.reverse()
            this.isLoading = false
            this.category = '全部'
            this.getData()
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
            title: `${err.response.data.message}，請再次確認。`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            toast: true
            })
          })
      },
      setCategory (category) {
        this.$http
          .get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
          .then((res) => {
            this.products = res.data.products
            this.isLoading = false
            this.category = category
            this.getData()
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
            title: `${err.response.data.message}，請再次確認。`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            toast: true
            })
          })
      },
      ...mapActions(cartStore, ['addToCart','numberComma'])
    },
    mounted () {
      this.isLoading = true
      this.getData()
      this.getProducts()
    }
  }
</script>

<style>
  .courses__img {
    transition: all 0.5s ease
  }
  a:hover {
    cursor: pointer;
    .courses__img {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
</style>
