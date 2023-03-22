<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container py-5">
    <nav class="mb-4" style="`--bs-breadcrumb-divider: >;``" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/courses">課程列表</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-xl-8">
        <img class="w-100" :src="product.imageUrl" alt="課程圖片" style="height: 460px;">
      </div>
      <div class="col-xl-4 mt-4 mt-xl-0 px-5 px-xl-3">
        <div class="d-flex align-items-center">
          <h3 class="mb-0 me-4">{{ product.title }}</h3>
          <span class="badge bg-dark p-2">{{ product.category }}</span>
        </div>
        <p class="mt-4 mb-2"><i class="bi bi-clock me-2"></i>{{ product.datetime }}</p>
        <p class="mb-2"><i class="bi bi-people-fill me-2"></i>{{ product.total_quota }}</p>
        <p class="mb-2"><i class="bi bi-card-list me-2"></i>{{ product.description }}</p>
        <p><i class="bi bi-exclamation-square-fill me-2"></i>{{ product.content }}</p>
        <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元
        </div>
        <div v-else class="mb-3">
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h5">現在只要 {{ product.price }} 元</div>
        </div>
        <div class="mt-4 d-flex">
          <button type="button" class="btn btn-dark ms-auto" @click="() => addToCart(product.id)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/cart'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
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
            timerProgressBar: true,
            toast: true
          })
          this.$router.push('/courses')
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    },800)
    this.getProduct()
  }
}
</script>
