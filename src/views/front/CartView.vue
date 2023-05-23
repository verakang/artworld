<template>
  <div class="container py-5">
    <nav style="`--bs-breadcrumb-divider: >;`" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">購物車列表</li>
      </ol>
    </nav>
    <div class="text-end mb-5">
      <button class="btn btn-outline-danger" :class="{'disabled': carts.length == 0}" type="button" @click="deleteCart">清空購物車</button>
    </div>
    <div>
      <div v-if="carts.length === 0">
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <h3>購物車內沒有課程</h3>
          <RouterLink to="/courses" class="btn btn-primary mt-3">查看課程</RouterLink>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-lg-7">
          <table class="table align-middle px-6">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th class="text-center" style="width: 90px">數量/單位</th>
                <th class="text-center" style="width: 85px">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts">
                <tr v-for="item in carts" :key="item.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="() => removeItem(item)">
                      <i class="bi" :class="{ 'bi-emoji-frown': item.id === loadingItem }" v-if="item.id === loadingItem"></i>
                      <span v-else><i class="bi bi-x-circle"></i></span>
                    </button>
                    </td>
                  <td class="d-flex flex-column flex-xl-row align-items-xl-center px-0">
                    <router-link :to="`/course/${ item.product?.id}`" class="card-title h5" style="min-width: 50%">
                      <img :src="item.product.imageUrl" style="width: 100%; max-height: 150px;">
                    </router-link>
                    <div class="m-3">
                      <p class="mb-1 cart-content">{{ item.product.title }}</p>
                      <p class="d-none d-sm-block"><i class="bi bi-clock me-2"></i>{{ item.product.datetime }}</p>
                      <div class=" text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </div>
                  </td>
                  <td class="text-center cart-content px-0">
                    {{ item.qty }} / {{ item.product.unit }}
                  </td>
                  <td class="text-center cart-content px-0">
                    <small v-if="carts.final_total !== carts.total" class="text-success">折扣價：</small>
                    NT$ {{ numberComma(item.total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end pe-3">總計</td>
                <td class="text-center cart-content px-0">NT$ {{ numberComma(total) }}</td>
              </tr>
              <tr :class="{'d-none': total === final_total}">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-center text-success">NT$ {{ numberComma(final_total) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-lg-5">
          <div class="mb-5 row justify-content-center">
            <v-form ref="form" class="col-md-10" v-slot="{ errors }" @submit="sendOrder">
              <h3 class="mt-5 mt-lg-0 mb-4 pb-2 border-bottom">訂單資料</h3>
              <div class="mb-3">
                <label for="email" class="form-label">Email<span class="text-danger"> *</span></label>
                <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名<span class="text-danger"> *</span></label>
                <v-field id="name" name="姓名" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"
                  v-model="form.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話<span class="text-danger"> *</span></label>
                <v-field id="tel" name="電話" type="tel" class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="numeric|min:8|required"
                  v-model="form.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">收件人地址<span class="text-danger"> *</span></label>
                <v-field id="address" name="地址" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
                  v-model="form.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea id="message" class="form-control" cols="30" rows="10"
                  v-model="form.message"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" :class="{ 'disabled': isDone === false }" class="btn btn-danger">送出訂單</button>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cart.js'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      form: {
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
  computed: {
    ...mapState(cartStore, ['carts','loadingItem', 'final_total', 'total'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'removeItem', 'deleteCart','numberComma']),
    sendOrder() {
      this.isDone = false
      const data = this.form;
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
          .then((res) => {
            this.isDone = true
            const { message, orderId } = res.data;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              color: 'white',
              iconColor: 'white',
              customClass: {
                popup: 'colored-toast'
              },
              title: `${message}`,
              showConfirmButton: false,
              timer: 800,
              timerProgressBar: true,
              toast: true
            })
            this.$refs.form.resetForm();
            this.form.message = '';
            this.$router.push(`/order/${orderId}`);
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
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style>
@media(max-width: 414px) {
  .cart-content {
    font-size: 12px;
  }
}
</style>
