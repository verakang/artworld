<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container py-4">
    <h3 class="my-4">最新消息頁面</h3>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="() => openModal('create')">
        建立新的文章
      </button>
    </div>
    <div class="table-responsive">
      <table class="admin_table table table-hover mt-4">
        <thead class="table-light">
          <tr>
            <th width="120">
              日期
            </th>
            <th>標題</th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ $moment(new Date(article.create_at * 1000)).format('YYYY-MM-DD') }}</td>
            <td>{{ article.title }} </td>
            <td>
              <span class="text-success" v-if="article.isPublic">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                  @click="() => openModal('edit',article.id)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="() => openModal('delete',article.id)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ArticleModal ref="articleModal" :article="articleTemp" :update-article="updateArticle" :update-title="updateTitle"></ArticleModal>
    <DelArticle ref="delArticle" :article="articleTemp" :remove-article="removeArticle"></DelArticle>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import DelArticle from '@/components/DelArticle.vue'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      articleTemp: {},
      isNew: false,
      updateTitle: '新增文章',
      page: {},
      isLoading: false,
      isDone: true
    }
  },
  components: {
    Pagination, ArticleModal, DelArticle
  },
  methods: {
    getData () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/articles`
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles
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
    getArticle (id) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.articleTemp = res.data.article
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
    openModal (state, id) {
      if (state === 'create') {
        this.updateTitle = '新增文章'
        this.$refs.articleModal.openModal()
        this.isNew = true
        this.articleTemp = {}
        this.articleTemp.isPublic = false
        this.articleTemp.image = "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      } else if (state === 'edit') {
        this.updateTitle = '編輯文章'
        this.$refs.articleModal.openModal()
        this.isNew = false
        this.getArticle (id)
      } else if (state === 'delete') {
        this.$refs.delArticle.openModal()
        this.getArticle (id)
      }
    },
    updateArticle () {
      this.isDone = false
      // url、method 預設為新增資料
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article`
      let method = 'post'
      // 判斷如非新增資料，則改為編輯資料。
      if (!this.isNew) {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${this.articleTemp.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.articleTemp })
        .then((res) => {
          this.isDone = true
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
          this.getData()
          this.$refs.articleModal.hideModal()
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
    removeArticle () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/article/${this.articleTemp.id}`
      this.$http.delete(url)
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
          this.getData()
          this.$refs.delArticle.hideModal()
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
  },
  mounted () {
    this.isLoading = true
    this.getData()
  }
}
</script>
