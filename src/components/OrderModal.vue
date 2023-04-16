<template>
  <div ref="modal" id="orderModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>檢視訂單</span>
          </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <div class="col-sm-10">
              <h3 class="h4 mt-3">訂單資料</h3>
              <table class="table mt-3">
                <tbody>
                  <tr>
                    <th width="120px">訂單編號</th>
                    <td class="text-success">[ {{ orderTemp.id }} ]</td>
                  </tr>
                  <tr>
                    <th>訂購日期</th>
                    <td>{{ $moment(new Date(orderTemp.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}</td>
                  </tr>
                  <tr>
                    <th>購買品項</th>
                    <td>
                      <div class="m-2" v-for="(product, i) in orderTemp.products" :key="i">
                        <p class="text-success mb-0">[ {{i}} ]</p>
                        <p class="mb-2">{{ product.product.title }} x {{ product.qty }} / 單價：NT$ {{ numberComma(product.product.price) }}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 class="h4 mt-5">聯絡資訊</h3>
              <table class="table mt-3">
                <tbody v-if="orderTemp.user">
                  <tr>
                    <th width="120px">收件人姓名</th>
                    <td>{{ orderTemp.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ orderTemp.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人信箱</th>
                    <td>{{ orderTemp.user.email }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ orderTemp.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-sm-10">
              <div class="form-check d-flex justify-content-end align-items-baseline">
                <p class="mb-0">訂單金額：NT$ <span class="text-danger fs-4">{{ orderTemp.total }}</span></p>
                <div>
                  <input :id="`{orderTemp.id}`" class="form-check-input ms-4 me-2" type="checkbox" v-model="orderTemp.is_paid">
                  <label class="form-check-label me-3" for="`{orderTemp.id}`">是否付款</label>
                  <span v-if="orderTemp.is_paid" class="badge bg-success">已付款</span>
                  <span v-else class="badge bg-danger">未付款</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="() =>updateOrder(orderTemp)">
            修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart'

export default {
  data () {
    return {
      modal: '',
      orderTemp: { }
    }
  },
  mixins: [modalMixin],
  props: {
    order: {
      type: Object,
      default () {
        return { }
      }
    },
    updateOrder: {
      type: Function
    }
  },
  watch: {
    order () {
      this.orderTemp = this.order
    }
  },
  methods: {
    ...mapActions(cartStore, ['numberComma'])
  }
}
</script>
