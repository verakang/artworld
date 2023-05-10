<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container py-5 mb-5">
    <nav class="mb-4" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">最新消息</li>
      </ol>
    </nav>
    <div>
      <div class="row mx-auto px-md-8">
        <div class="col-md-6 my-2" v-for="item in news" :key="item.id">
          <div class="card">
            <img :src="item.image" class="card-img" alt="最新消息圖片" style="max-height: 180px;">
            <div class="card-img-overlay newsimgs">
              <div class="card-body position-relative pb-6 h-100">
                <p class="card-title">＃{{ item.description }}</p>
                <h5>{{ item.title }}</h5>
                <RouterLink :to="`/newsitem/${item?.id}`" class="btn btn-primary btn-sm position-absolute end-0 bottom-0 m-2">更多詳情</RouterLink>
              </div>
            </div>
          </div>
        </div>
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
      getNews () {
        const url = `${VITE_URL}/v2/api/${VITE_PATH}/articles`
        this.$http
          .get(url)
          .then((res) => {
            this.news = res.data.articles
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
      this.getNews ()
    }
  }
</script>

<style>
.newsimgs::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(250,250,250,0.7);
  z-index: 1;
}
.newsimgs:hover {
  cursor: pointer;
  background-color:rgba(250,250,250,0.7);
}
.newsimgs > .card-body {
  z-index: 2;
}
</style>