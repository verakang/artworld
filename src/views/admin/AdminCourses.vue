<template>
  <div class="container py-4">
    <h3 class="my-4">課程列表頁面</h3>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('create')">
        建立新的課程
      </button>
    </div>
    <div class="table-responsive">
      <table class="admin_table table table-hover mt-4">
        <thead class="table-light">
          <tr>
            <th width="120">
              分類
            </th>
            <th>課程名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-start">{{ product.origin_price }}</td>
            <td class="text-start">{{ product.price }}</td>
            <td>
              <span class="text-success" v-if="product.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                  @click="() => openModal('edit',product)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="() => openModal('delete',product)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分頁元件/外部引入，資料以 props 傳入、用 emit 觸發外層事件-->
    <pagination class="container mt-5" :pages="page" @change-page="getData"></pagination>
    <!-- Modal -->
    <productModal ref="productModal" :product="productTemp" :update-product="updateProduct" :update-title="updateTitle"></productModal>
    <delModal ref="delModal" :product="productTemp" :remove-product="removeProduct"></delModal>
  </div>
</template>

<script>
import pagination from '../../components/PaginationView.vue'
import productModal from '../../components/ProductModal.vue'
import delModal from '../../components/DelModal.vue'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productTemp: {
        imagesUrl: []
      },
      isNew: false,
      updateTitle: '新增產品',
      page: {}
    }
  },
  components: {
    pagination, productModal, delModal
  },
  methods: {
    getData (page = 1) {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/products/?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          // 將取得的資料存在 data
          this.products = res.data.products
          this.page = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    openModal (state, product) {
      if (state === 'create') {
        this.$refs.productModal.openModal()
        // 如果為新增資料，將狀態改為 true 並初始化欄位為空。
        this.isNew = true
        // 變更 Modal 標題
        this.updateTitle = '新增課程'
        this.productTemp = {
          imagesUrl: []
        }
      } else if (state === 'edit') {
        this.$refs.productModal.openModal()
        // 如果為編輯資料，將狀態改為 false 並將資料帶入欄位。
        this.isNew = false
        // 變更 Modal 標題
        this.updateTitle = '編輯課程'
        // 修改欄位的顯示資料需要用淺拷貝，才不會直接連動到原始資料。
        this.productTemp = { ...product }
        // 判斷 imagesUrl 是否為陣列，如非陣列，則加入空陣列，讓原先沒有圖片的資料可以新增圖片。
        // 重設多圖設置的圖片陣列長度，去掉空白的內容。
        if (!Array.isArray(this.productTemp.imagesUrl)) {
          this.productTemp.imagesUrl = []
        } else {
          const images = []
          this.productTemp.imagesUrl.forEach(item => {
            if (item !== '') {
              images.push(item)
            }
          })
          this.productTemp.imagesUrl = images
        }
      } else if (state === 'delete') {
        this.$refs.delModal.openModal()
        this.productTemp = { ...product }
      }
    },
    updateProduct () {
      // url、method 預設為新增資料
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product`
      let method = 'post'
      // 判斷如非新增資料，則改為編輯資料。
      if (!this.isNew) {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.productTemp.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.productTemp })
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
          this.$refs.productModal.hideModal()
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
    removeProduct () {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.productTemp.id}`
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
          this.$refs.delModal.hideModal()
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
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
  .admin_table {
    white-space: nowrap;
  }
</style>
