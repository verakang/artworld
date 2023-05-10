<template>
  <div ref="modal" id="productModal" class="modal fade" tabindex="-1">
    <v-form class="modal-dialog modal-xl" v-slot="{ errors }" @submit="updateProduct">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ updateTitle }}</span>
          </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">輸入圖片網址</label>
                    <input type="text" class="form-control" placeholder="請輸入圖片連結"
                      v-model="productTemp.imageUrl">
                  </div>
                  <img class="img-fluid" :src="productTemp.imageUrl" alt="">
                </div>
                <div>
                  <h5>多圖設置</h5>
                  <!-- 是否為陣列驗證，為了不要因為資料問題讓畫面渲染有出錯的可能。 但 js 端有另外加上空陣列的設計，這段應可以不驗證。-->
                  <div v-if="Array.isArray(productTemp.imagesUrl)">
                    <template v-for="(img, key) in productTemp.imagesUrl" :key="key">
                      <!-- for 迴圈如需修改陣列內容要帶入 key 值，從位址修改，否則改不到原始資料。 -->
                        <input type="text" v-model="productTemp.imagesUrl[key]"
                          class="form-control">
                        <img :src="productTemp.imagesUrl[key]" alt="" class="img-fluid mb-3">
                    </template>
                      <!-- 如沒有欄位 or 最後欄位不是空白，可按新增圖片增加欄位。 -->
                      <button type="button" class="btn btn-outline-primary btn-sm d-block w-100"
                        v-if="!productTemp.imagesUrl.length || productTemp.imagesUrl[productTemp.imagesUrl.length - 1]"
                        @click="() => productTemp.imagesUrl.push('')">
                        新增圖片
                      </button>
                      <!-- 有欄位 and 最後欄位不是空白，可按刪除圖片按鈕。-->
                      <button type="button" class="btn btn-outline-danger btn-sm d-block w-100" v-else
                        @click="() => productTemp.imagesUrl.pop()">
                        刪除圖片
                      </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題<span class="text-danger"> *</span></label>
                  <v-field id="title" name="標題" type="text" class="form-control" placeholder="請輸入標題"
                    :class="{ 'is-invalid': errors['標題'] }" rules="required"
                    v-model="productTemp.title"></v-field>
                  <error-message name="標題" class="invalid-feedback"></error-message>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類<span class="text-danger"> *</span></label>
                    <v-field id="category" name="分類" type="text" class="form-control" placeholder="請輸入分類"
                      :class="{ 'is-invalid': errors['分類'] }" rules="required"
                      v-model="productTemp.category"></v-field>
                    <error-message name="分類" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位<span class="text-danger"> *</span></label>
                    <v-field id="unit" name="單位" type="text" class="form-control" placeholder="請輸入單位"
                      :class="{ 'is-invalid': errors['單位'] }" rules="required"
                      v-model="productTemp.unit"></v-field>
                    <error-message name="單位" class="invalid-feedback"></error-message>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價<span class="text-danger"> *</span></label>
                    <v-field id="origin_price" name="原價" type="number" class="form-control" placeholder="請輸入原價"
                    :class="{ 'is-invalid': errors['原價'] }" rules="numeric|required"
                    v-model.number="productTemp.origin_price"></v-field>
                    <error-message name="原價" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價<span class="text-danger"> *</span></label>                    
                    <v-field id="price" name="售價" type="number" class="form-control" placeholder="請輸入售價"
                      :class="{ 'is-invalid': errors['售價'] }" rules="numeric|required"
                      v-model.number="productTemp.price"></v-field>
                    <error-message name="售價" class="invalid-feedback"></error-message>
                  </div>
                </div>
                <hr>

                <div class="mb-3">
                  <label for="description" class="form-label">課程描述</label>
                  <textarea id="description" type="text" class="form-control" placeholder="請輸入課程描述"
                    v-model="productTemp.description">
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">課程說明</label>
                  <textarea id="content" type="text" class="form-control" placeholder="請輸入課程說明"
                    v-model="productTemp.content">
                  </textarea>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                      <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1"
                        :false-value="0" v-model="productTemp.is_enabled">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="submit" class="btn btn-primary" :class="{ 'disabled': isDone === false }">
            確認
          </button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data () {
    return {
      modal: '',
      productTemp: { },
    }
  },
  mixins: [modalMixin],
  props: {
    product: {
      type: Object,
      default () {
        return { }
      },
      isNew: {
        type: Boolean,
        default: false
      }
    },
    isDone: {
      type: Boolean,
      default: true
    },
    updateTitle: {
      type: String
    },
    updateProduct: {
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
