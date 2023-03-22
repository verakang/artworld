<template>

<div ref="modal" id="delModal" class="modal fade" tabindex="-1">
  <div class="modal-dialog">
      <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ productTemp.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="removeProduct">
                確認刪除
              </button>
          </div>
      </div>
  </div>
</div>

</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data () {
    return {
      modal: '',
      productTemp: { }
    }
  },
  mixins: [modalMixin],
  props: {
    product: {
      type: Object,
      default () {
        return { }
      }
    },
    removeProduct: {
      type: Function
    }
  },
  watch: {
    product () {
      this.productTemp = this.product
    }
  }
}
</script>
