<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container py-5 mb-5">
    <nav class="mb-4" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/newslist">最新消息</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ news.title }}</li>
      </ol>
    </nav>
    <div>
      <div class="row mx-auto px-md-8">
        <img :src="news.image" alt="最新消息圖片" style="max-height: 320px;">
        <p class="mt-4 w-90 mx-auto">{{ news.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  const { VITE_URL, VITE_PATH } = import.meta.env
  export default {
    data () {
      return {
        isLoading: false,
        visible: false,
        news: [],
      }
    },
    components: {
      RouterLink
    },
    methods: {
      getNewsItem () {
        const { id } = this.$route.params
        const url = `${VITE_URL}/v2/api/${VITE_PATH}/article/${id}`
        this.$http
          .get(url)
          .then((res) => {
            this.news = res.data.article
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
      handleScroll (){
        this.visible = window.scrollY != 0 ? true : false
      },
      goTop() {
        window.scrollTo({
          top: 0,
          right: 0,
          behavior: 'smooth'
        })
      }
    },
    mounted () {
      this.isLoading = true
      this.getNewsItem ()
    }
  }
</script>