import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

const cartStore = defineStore('cart', {
  state: () =>{
    return {
      carts: [],
      loadingItem: ''
    }
  },
  actions: {
    getCarts() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
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
      const data = {
        product_id: productId,
        qty: 1
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then(() => {
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
  },
  getters: {

  }
});

export default cartStore;
