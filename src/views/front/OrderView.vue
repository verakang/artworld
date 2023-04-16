<template>
  <div class="container py-5">
    <nav style="`--bs-breadcrumb-divider: >;`" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">訂單明細</li>
      </ol>
    </nav>
    <div class="mt-5">
      <div class="row">
        <div class="col-lg-7">
          <table class="table align-middle px-6">
            <thead>
              <tr>
                <th>品名</th>
                <th class="text-center" style="width: 100px">數量/單位</th>
                <th class="text-center" style="width: 100px">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="order.products">
                <tr v-for="item in order.products" :key="item.id">
                  <td class="d-flex flex-column flex-xl-row align-items-xl-center">
                    <router-link :to="`/course/${ item.product?.id}`" class="card-title h5" style="min-width: 50%">
                      <img :src="item.product.imageUrl" style="width: 100%; max-height: 150px;">
                    </router-link>
                    <div class="m-3">
                      <p class="mb-1">{{ item.product.title }}</p>
                      <p class="d-none d-sm-block"><i class="bi bi-clock me-2"></i>{{ item.product.datetime }}</p>
                      <div class=" text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    {{ item.qty }} / {{ item.product.unit }}
                  </td>
                  <td class="text-center">
                    NT$ {{ numberComma(item.total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-center">NT$ {{ numberComma(order.total) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-lg-5 ps-lg-7">
          <div class="mb-5 row justify-content-center">
            <h3 class="mt-5 mt-lg-0 mb-4 pb-2 border-bottom">訂單資料</h3>
            <table class="table ms-3">
              <thead>
                <tr>
                  <th>訂單編號</th>
                  <th>{{ order.id }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <td>收件人姓名</td>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <td>收件人電話</td>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <td>收件人地址</td>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <td>留言</td>
                  <td>{{ order.message }}</td>
                </tr>
                <tr>
                  <td>付款狀態</td>
                  <td v-if="order.is_paid" class="text-success">已付款</td>
                  <td v-else class="text-danger">未付款</td>
                </tr>
              </tbody>
            </table>
            <p class="fs-5 mb-1 mt-3"><i class="bi bi-exclamation-square-fill me-2"></i>訂單尚未完成</p>
            <p>請確認訂單明細，點選確認付款即完成訂單：）</p>
            <div class="text-end">
              <RouterLink v-if="order.is_paid" to="/courses" class="btn btn-primary mt-5">繼續選購</RouterLink>
              <button v-else type="button" :class="{ 'disabled': isDone === false }" class="btn btn-danger mt-4" @click="() => payOrder()">確認付款</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart.js'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      order: {
        products: [],
        id: '',
        is_paid: '',
        total: '',
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isDone: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['numberComma']),
    getOrder() {
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${id}`)
        .then((res) => {
          const { order } = res.data;
          this.order = order
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
        })
    },
    payOrder() {
      this.isDone = false
      const { id } = this.$route.params
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${id}`)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: '付款成功',
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
          this.getOrder()
          this.isDone = true
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
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style>
.cartNull {
  min-height: calc(100vh - 638px);
}
</style>