import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

const cartStore = defineStore('cart', {
  state: () =>{
    return {
      carts: [],
      loadingItem: '',
      final_total: '',
      total: '',
      isDone: ''
    }
  },
  actions: {
    getCarts() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
        .catch(err => {
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
    addToCart (productId) {
      this.isDone = productId
      const data = {
        product_id: productId,
        qty: 1
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then(() => {
          this.isDone = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: '已加入購物車！',
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
          this.getCarts()
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
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
        })
    },
    removeItem (item) {
      this.loadingItem = item.id
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(() => {
          this.getCarts()
          this.loadingItem = ''
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            color: 'white',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            title: `已刪除 ${item.product.title}`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
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
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
        })
    },
    deleteCart () {
      Swal.fire({
        position: 'top-end',
        title: '確定清空購物車？',
        text: "此操作無法復原，請再次確認。",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#90ce67',
        cancelButtonColor: '#f74f4f',
        confirmButtonText: '確認刪除',
        cancelButtonText: '取消',
        toast: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
          .then(() => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              color: 'white',
              iconColor: 'white',
              customClass: {
                popup: 'colored-toast'
              },
              title: `已清空購物車！`,
              showConfirmButton: false,
              timer: 800,
              timerProgressBar: true,
              toast: true
            })
            this.getCarts()
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
              timer: 800,
              timerProgressBar: true,
              toast: true
            })
          })
        }
      })
    },
    numberComma(num) {
      let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      return num.toString().replace(comma, ',')
    }
  }
});

export default cartStore;
