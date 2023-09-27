<template>
  <VueLoading v-model:active="isLoading" />
  <section class="banner container py-5">
    <div class="container">
      <div class="row g-2">
        <div class="col-12 col-md-4">
          <div class="card border-0 text-whit h-100e" style="height: 320px;">
            <img :src="products[0]?.imageUrl" class="card-img h-100" alt="course image" style="border-radius: 80px 20px 20px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 80px 20px 20px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[0]?.category }}</p>
                <RouterLink :to="`/course/${products[0]?.id}`" class="card-title h5 text-light stretched-link">{{ products[0]?.title }}</RouterLink>              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[1]?.imageUrl" class="card-img h-100" alt="course image" style="border-radius: 20px 80px 20px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 80px 20px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[1]?.category }}</p>
                <RouterLink :to="`/course/${products[1]?.id}`" class="card-title h5 text-light stretched-link">{{ products[1]?.title }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[2]?.imageUrl" class="card-img h-100" alt="course image" style="border-radius: 20px 20px 20px 80px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 20px 20px 80px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[2]?.category }}</p>
                <RouterLink :to="`/course/${products[2]?.id}`" class="card-title h5 text-light stretched-link">{{ products[2]?.title }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-none d-md-block">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[3]?.imageUrl" class="card-img h-100" alt="course image" style="border-radius: 20px 20px 80px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 20px 80px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[3]?.category }}</p>
                <RouterLink :to="`/course/${products[3]?.id}`" class="card-title h5 text-light stretched-link">{{ products[3]?.title }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- news / phone -->
  <section class="news my-9 d-md-none bg-light">
    <div class="container">
      <div class="news__content w-85 mx-auto">
        <div class="banner__title">
          <div class="position-relative">
            <h2 class="h1 font-rufina pt-4">News /</h2>
            <p class="fs-5">最新消息</p>
            <RouterLink :to="`/newslist`" class="fs-7 position-absolute end-0 top-50 btn btn-outline-primary p-2 rounded">View More<i class="bi bi-arrow-right-short"></i></RouterLink>
          </div>
          <ul class="list-unstyled news__list pb-4">
            <li v-for="item in mewsTemp" :key="item.id" class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>{{ $moment(new Date(item.create_at * 1000)).format('YYYY-MM-DD') }}</span><RouterLink :to="`/newsitem/${item?.id}`" class="ms-3 stretched-link">{{ item.title }}</RouterLink><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- news / pc -->
  <section class="news py-5 my-9 news-bg d-none d-md-block">
    <div class="container">
      <div class="news__content w-75">
        <div class="row">
          <div class="col-3 position-relative">
            <h2 class="h1 font-rufina">News /</h2>
            <p class="fs-5">最新消息</p>
            <RouterLink :to="`/newslist`" class="fs-7 position-absolute bottom-0 mb-5 btn btn-outline-primary py-3 rounded" @click="">View More<i class="bi bi-arrow-right-short ps-1"></i></RouterLink>
          </div>
          <div class="col-9">
            <ul class="list-unstyled news__list">
              <li v-for="item in mewsTemp" :key="item.id" class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>{{ $moment(new Date(item.create_at * 1000)).format('YYYY-MM-DD') }}</span><RouterLink :to="`/newsitem/${item?.id}`" class="ms-3 stretched-link">{{ item.title }}</RouterLink><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="qa container py-9">
    <h2 class="h1 font-rufina text-center mb-0">Q&A / <span class="fs-5 align-middle">問與答</span></h2>
    <div class="accordion accordion-flush w-85 mx-auto mt-5" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            請問有哪些付款方式？可以刷卡嗎？
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body mx-2 mx-md-5 mb-4">目前提供信用卡付款其他行動支付如 Line pay、Apple pay，還在研擬中。等確認後會馬上公告給大家呦！</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            臨時不能上課，可以退費嗎？？
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body mx-2 mx-md-5 mb-4">學生如在開課前三天提出退費申請，我們將會全額退費。在開課24小時前提出退費申請，我們將會退還50%的學費，24小時內的課程則無法進行退費。另外，本站課程可以轉讓，臨時取消來不及申請退費的學生可將課程轉讓給他人。</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            課程費用包含材料嗎？我需要自己準備？
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body mx-2 mx-md-5 mb-4">部分課程我們會提供相關材料，部分課程則需要學生自備。在報名課程之前，請仔細閱讀課程資訊，以確認相關材料的提供情況。此外，我們也提供課程材料的加購服務，學生可以在報名課程時選擇加購相關材料。</div>
        </div>
      </div>
    </div>
  </section>
  <section class="feedback container py-9">
    <h2 class="h1 font-rufina text-center mb-0">Feedback / <span class="fs-5 align-middle">學員回饋</span></h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1440': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 大人的水彩課</h5>
            <p class="card-text fs-6">美琪老師的水彩課，簡直讓我愛上了這個媒材！老師很親切，教學風格也非常好，讓我這個初學者也能夠輕鬆上手。這門課程非常適合想要嘗試水彩畫的新手，強烈推薦大家來一起上課！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">秀雅</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 琳琳的粉彩世界</h5>
            <p class="card-text fs-6">第一次接觸粉彩，以前對粉彩的印象就是會把顏色塗得很髒，感覺很不好上手。但看了琳琳老師的作品覺得好美，抱著試試看的心情報名，沒想到就這样入坑了: )</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">小光</small></p>
        </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 花束製作</h5>
            <p class="card-text fs-6">老師很仔細的教導我們花材的挑選、搭配、編排等技巧，最後每個人都成功做出一束完整的花束，如果你也喜歡花藝或是想嘗試，一定要來上這個課程喔！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">橘子</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 海報設計</h5>
            <p class="card-text fs-6">因為工作需求參加了小左老師的海報設計課程，老師循序漸進地教導，讓我掌握了基本技巧和設計原則。這些知識和技能在我的工作中派上了用場，讓我有更多發展機會，非常感謝小左老師的用心指導！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">小櫻</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
            <p class="card-text fs-6">很喜歡 Lisa 老師的教學風格，老師有問必答，也很接受學生有不同的想法，上起課來沒有壓力，時間一下子就過去了。</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">牙牙</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 人物攝影</h5>
            <p class="card-text fs-6">推薦威爾老師的攝影課程！老師教的不只是攝影技巧，還有如何捕捉當下美好的心法。在課堂上，我學到了很多攝影的基礎知識，也學會了怎麼拍出有故事性的照片。收穫很多！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">Melody</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 藝術鑑賞</h5>
            <p class="card-text fs-6">Benny老師的藝術鑑賞課，真的是開了我的藝術眼界！老師講解的很詳細，也讓我對不同的藝術形式有了更深入的了解。這門課真的讓我覺得非常有收穫，推薦給所有喜歡藝術的朋友！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">KS</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># 大人的水彩課</h5>
            <p class="card-text fs-6">過去是沒有水彩經驗的初學者，參加了美琪老師的水彩課，跟著老師從最基礎的技巧開始學起，一路進步到現在。老師在課堂中總是耐心指導學員，再基礎的問題都會溫柔地回答，如果你也是初學者，推薦給你！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">Soso</small></p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card border-0 rounded-0 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
            <p class="card-text fs-6">Lisa 老師超級幽默，所有課程裡面最喜歡 Lisa 老師的課了！教學淺顯易懂，沒有學過畫畫也可以完成帶有個人色彩的作品喔！</p>
            <p class="card-text text-end mt-auto"><small class="text-muted">James</small></p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="location container-fluid p-5 d-flex flex-column justify-content-center">
    <h2 class="h1 font-rufina text-center mb-0">Location / <span class="fs-5 align-middle">藝享教室</span></h2>
    <iframe class="mt-5 mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7202156870017!2d121.51481799999999!3d25.0435673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9735add7b29%3A0xb4c91a9cb4b69b18!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6aSo5YmN6LevMTIw6Jmf!5e0!3m2!1szh-TW!2stw!4v1681664593937!5m2!1szh-TW!2stw" width="600" height="300" style="border:2;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  const { VITE_URL, VITE_PATH } = import.meta.env
  import Swal from 'sweetalert2'

  export default {
    data () {
      return {
        modules: [Pagination],
        products: [],
        isLoading: false,
        visible: false,
        news: [],
        mewsTemp: []
      }
    },
    components: {
      RouterLink, Swiper, SwiperSlide
    },
    methods: {
      getProducts () {
        this.$http
          .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products
            this.products = this.products.reverse()
            this.products = this.products.slice(0,4)
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
            title: `${err.response.data.message}，請再次確認。`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            toast: true
            })
          })
      },
      getNews () {
        const url = `${VITE_URL}/v2/api/${VITE_PATH}/articles`
        this.$http
          .get(url)
          .then((res) => {
            this.news = res.data.articles
            this.mewsTemp = this.news.slice(0,3)
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
      this.getProducts()
      this.getNews ()
    }
  }
</script>

<style>
.news-bg {
  background-image: linear-gradient(90deg, #F2F2F2 0% 75%, #fff 0%)
}
.banner__item::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.4);
  z-index: 1;
}
.banner__item:hover::after {
  cursor: pointer;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.2);
  z-index: 1;
}

.banner__title {
  z-index: 2;
}

.news__list li:hover{
  background: #fafafa;
  cursor: pointer;
}
.news__list li span {
  font-size: 14px;
}

.location {
  background-image: url(https://images.unsplash.com/photo-1588345921586-7408ea1b2c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

iframe {
  max-width: 100%;
}

.mySwiper{
  height: 300px;
  margin-top: 50px;
}

.card-body {
  margin-bottom: 50px;
}
</style>
