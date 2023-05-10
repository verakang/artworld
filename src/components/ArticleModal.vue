<template>
  <div ref="modal" id="articleModal" class="modal fade" tabindex="-1">
    <v-form class="modal-dialog modal-xl" v-slot="{ errors }" @submit="updateArticle">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="articleModalLabel" class="modal-title">
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
                    <v-field type="text" name="圖片網址" class="form-control" placeholder="請輸入圖片連結"
                    :class="{ 'is-invalid': errors['圖片網址'] }" rules="url"
                      v-model="articleTemp.image"></v-field>
                    <error-message name="圖片網址" class="invalid-feedback"></error-message>
                  </div>
                  <img class="img-fluid" :src="articleTemp.image" alt="文章圖片">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題<span class="text-danger"> *</span></label>
                  <v-field id="title" name="標題" type="text" class="form-control" placeholder="請輸入標題"
                    :class="{ 'is-invalid': errors['標題'] }" rules="required"
                    v-model="articleTemp.title"></v-field>
                  <error-message name="標題" class="invalid-feedback"></error-message>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="description" class="form-label">文章分類</label>
                    <input id="description" type="text" class="form-control" placeholder="請輸入文章分類"
                      v-model="articleTemp.description">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="author" class="form-label">作者<span class="text-danger"> *</span></label>
                    <v-field id="author" name="作者" type="text" class="form-control" placeholder="請輸入單位"
                      :class="{ 'is-invalid': errors['作者'] }" rules="required"
                      v-model="articleTemp.author"></v-field>
                    <error-message name="作者" class="invalid-feedback"></error-message>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">文章內容<span class="text-danger"> *</span></label>
                  <v-field as="textarea" id="content" name="文章內容" type="text" class="form-control" style="min-height:120px"
                    placeholder="請輸入文章內容"
                    :class="{ 'is-invalid': errors['文章內容'] }" rules="required"
                    v-model="articleTemp.content"></v-field>
                    <error-message name="文章內容" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                      <input id="isPublic" class="form-check-input" type="checkbox" :true-value="true"
                        :false-value="false" v-model="articleTemp.isPublic">
                      <label class="form-check-label me-3" for="isPublic">是否啟用</label>
                      <span v-if="articleTemp.isPublic" class="badge bg-success">已啟用</span>
                      <span v-else class="badge bg-danger">未啟用</span>
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
      articleTemp: {},
    }
  },
  mixins: [modalMixin],
  props: {
    article: {
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
    updateArticle: {
      type: Function
    }
  },
  watch: {
    article () {
      this.articleTemp = this.article
      this.articleTemp.create_at = Math.floor(Date.now() / 1000);
    }
  }
}
</script>