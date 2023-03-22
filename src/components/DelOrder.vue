<template>
  <div ref="modal" id="delOrder" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除訂單</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除訂單：
              <strong class="text-danger"> {{ orderTemp.id }}</strong><br>(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="removeOrder(orderTemp)">
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
    removeOrder: {
      type: Function
    }
  },
  watch: {
    order () {
      this.orderTemp = this.order
    }
  }
}
</script>
