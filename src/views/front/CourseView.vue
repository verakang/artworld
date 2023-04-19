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
        <img class="w-100" :src="tempUrl" alt="課程圖片" style="height: 460px;">
        <template v-for="img in product.imagesUrl" :key="img">
          <img :src="img" alt="" class="images mt-3 m-2 d-none d-md-inline-block" style="width: 200px;height: 140px;cursor: pointer" @click="() => tempUrl = img">
        </template>
      </div>
      <div class="col-xl-4 mt-4 mt-xl-0 px-5 px-xl-3">
        <div class="d-flex align-items-center">
          <h3 class="mb-0 me-4">{{ product.title }}</h3>
          <span class="badge bg-dark p-2">{{ product.category }}</span>
        </div>
        <table class="table table-borderless mt-4">
          <tbody>
            <tr>
              <td><i class="bi bi-clock me-2"></i></td>
              <td>{{ product.datetime }}</td>
            </tr>
            <tr>
              <td><i class="bi bi-people-fill me-2"></i></td>
              <td>{{ product.total_quota }}</td>
            </tr>
            <tr>
              <td><i class="bi bi-card-list me-2"></i></td>
              <td>{{ product.description }}</td>
            </tr>
            <tr>
              <td><i class="bi bi-exclamation-square-fill me-2"></i></td>
              <td>{{ product.content }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <div class="h5" v-if="product.price === product.origin_price">NT$ {{ product.price }}</div>
                <div v-else class="mb-3">
                  <del class="h6">原價 NT$ {{ numberComma(product.origin_price) }}</del>
                  <div class="h5">現在只要 NT$ {{ numberComma(product.price) }}</div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="mt-4 d-flex">
          <button type="button" :class="{ 'disabled': isDone === product.id }" class="btn btn-dark ms-auto" @click="() => addToCart(product.id)">加入購物車</button>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block">
      <h4 class="fs-5 mt-5 pt-5 mb-4 border-top" v-if="moreProduct.length != 0">相關課程</h4>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        <div class="col position-relative" v-for="item in moreProduct" :key="item.id">
          <RouterLink :to="`${item?.id}`" class="card h-100 border-primary">
            <div class="overflow-hidden" style="height: 180px;">
              <div class="card-title h5">
                <img :src="item.imageUrl" class="courses__img card-img-top" alt="課程圖示" style="height: 180px;">
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <RouterLink :to="`${item?.id}`" class="card-title h5 mb-0">{{ item?.title }}</RouterLink>
                <h6 class="badge bg-dark p-2 mb-0"> #{{ item.category }}</h6>
              </div>
              <div>
                <p class="mb-1 h6"><i class="bi bi-clock me-2"></i>{{ item.datetime }}</p>
                <p class="h6"><i class="bi bi-people-fill me-2"></i>{{ item.total_quota }}</p>
              </div>
              <div class="h5 mt-2" v-if="item.price === item.origin_price">NT$ {{ numberComma(item.price) }}</div>
              <div v-else class="my-2">
                <del class="h6">原價 NT$ {{ numberComma(item.origin_price) }}</del>
                <div class="h5">特價 NT$ {{ numberComma(item.price) }}</div>
              </div>
            </div>
          </RouterLink>
          <a :class="{ 'disabled': isDone === item.id }" class="btn btn-outline-primary me-4 mb-3 position-absolute bottom-0 end-0" @click="() => addToCart(product.id,qty)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      tempUrl: '',
      category: '',
      moreProduct: []
    }
  },
  computed: {
    ...mapState(cartStore, ['isDone'])
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
          this.tempUrl = res.data.product.imageUrl
          this.isLoading = false
          this.category = this.product.category
          this.getCategory ()
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
    getCategory () {
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${this.category}`)
        .then((res) => {
          let tempProduct = ''
          tempProduct = res.data.products
          tempProduct = tempProduct.reverse()
          tempProduct.forEach(item => {
            if(item.id !== this.product.id){
              this.moreProduct.push(item)
            }
          })
          this.moreProduct = this.moreProduct.splice(0,3)
          this.isLoading = false
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
    this.getProduct()
  }
}
</script>
