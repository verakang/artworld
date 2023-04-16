<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container py-4">
    <h3 class="my-4">訂單列表頁面</h3>
    <div class="table-responsive-xxl">
      <table class="admin_table table table-hover mt-4">
        <thead class="table-light">
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買品項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ $moment(new Date(order.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}</td>
            <td>
              <p class="mb-0 fs-6" v-if="order.user">{{ order.user.email }}</p>
              <p class="text-success" style="font-size: 14px;">{{ order.id }}</p>
            </td>
            <td class="text-start">
              <ul class="list-unstyled">
              <li v-for="(product, i) in order.products" :key="i">
                <p class="text-success mb-0 fs-6">{{ product.product.title }} <span class="text-dark">x {{ product.qty }}</span></p>
                <p class="mb-2 fs-7">單價：NT$ {{ numberComma(product.product.price) }}</p>
              </li>
            </ul>
            </td>
            <td class="text-start">NT$ {{ numberComma(order.total) }}</td>
            <td>
              <span class="text-success" v-if="order.is_paid">已付款</span>
              <span v-else>未付款</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit',order)">
                  檢視
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete',order)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="container mt-5" :pages="page" @change-page="getOrder"></Pagination>
    <OrderModal ref="orderModal" :order="orderTemp" :update-order="updateOrder"></OrderModal>
    <DelOrder ref="delOrder" :order="orderTemp" :remove-order="removeOrder"></DelOrder>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import Pagination from '@/components/PaginationComponent.vue'
import OrderModal from '@/components/OrderModal.vue'
import DelOrder from '@/components/DelOrder.vue'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: [],
      orderTemp: {
        imagesUrl: []
      },
      page: {},
      isLoading: false,
    }
  },
  components: {
    Pagination, OrderModal, DelOrder
  },
  methods: {
    getOrder (page = 1) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/orders/?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          // 將取得的資料存在 data
          this.orders = res.data.orders
          this.page = res.data.pagination
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
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
        })
    },
    openModal (state, order) {
      if (state === 'edit') {
        this.$refs.orderModal.openModal()
        // 修改欄位的顯示資料需要用淺拷貝，才不會直接連動到原始資料。
        this.orderTemp = { ...order }
      } else if (state === 'delete') {
        this.$refs.delOrder.openModal()
        this.orderTemp = { ...order }
      }
    },
    updateOrder (item) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
          this.getOrder()
          this.$refs.orderModal.hideModal()
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
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
        })
    },
    removeOrder (item) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${item.id}`
      this.$http
        .delete(url)
        .then((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
          this.getOrder()
          this.$refs.delOrder.hideModal()
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
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
        })
    },
    ...mapActions(cartStore, ['numberComma'])
  },
  mounted () {
    this.isLoading = true
    this.getOrder()
  }
}

</script>
