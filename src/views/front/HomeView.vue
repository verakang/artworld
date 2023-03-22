<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <section class="banner container py-5">
    <div class="container">
      <div class="row g-2">
        <div class="col-12 col-md-4">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[0]?.imageUrl" class="card-img h-100" alt="..." style="border-radius: 80px 20px 20px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 80px 20px 20px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[0]?.category }}</p>
                <router-link :to="`/course/${products[0]?.id}`" class="card-title h5 text-light stretched-link">{{ products[0]?.title }}</router-link>              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[1]?.imageUrl" class="card-img h-100" alt="..." style="border-radius: 20px 80px 20px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 80px 20px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[1]?.category }}</p>
                <router-link :to="`/course/${products[1]?.id}`" class="card-title h5 text-light stretched-link">{{ products[1]?.title }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[2]?.imageUrl" class="card-img h-100" alt="..." style="border-radius: 20px 20px 20px 80px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 20px 20px 80px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[2]?.category }}</p>
                <router-link :to="`/course/${products[2]?.id}`" class="card-title h5 text-light stretched-link">{{ products[2]?.title }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-none d-md-block">
          <div class="card border-0 text-white" style="height: 320px;">
            <img :src="products[3]?.imageUrl" class="card-img h-100" alt="..." style="border-radius: 20px 20px 80px 20px">
            <div class="card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center" style="border-radius: 20px 20px 80px 20px">
              <div class="banner__title">
                <p class="text-center mb-1">＃{{ products[3]?.category }}</p>
                <router-link :to="`/course/${products[3]?.id}`" class="card-title h5 text-light stretched-link">{{ products[3]?.title }}</router-link>
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
          <h2 class="h1 font-rufina pt-4">News /</h2>
          <p class="fs-5">最新消息</p>
          <ul class="list-unstyled news__list pb-4">
            <li class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>2023.01.11</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(0)">限時優惠來囉！！</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
            <li class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>2023.01.07</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(1)">新課預告！--「風景攝影」</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
            <li class="py-4 px-3 d-flex align-items-center position-relative"><span>2023.01.04</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(2)">課程異動通知！「繪畫基礎」</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
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
          <div class="col-3">
          <h2 class="h1 font-rufina">News /</h2>
          <p class="fs-5">最新消息</p>
          </div>
          <div class="col-9">
            <ul class="list-unstyled news__list">
              <li class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>2023.01.11</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(0)">限時優惠來囉！！</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
              <li class="py-4 px-3 border-bottom d-flex align-items-center position-relative"><span>2023.01.07</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(1)">新課預告！--「風景攝影」</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
              <li class="py-4 px-3 d-flex align-items-center position-relative"><span>2023.01.04</span><a href="#" class="ms-3 stretched-link" @click.prevent="() => openNews(2)">課程異動通知！「繪畫基礎」</a><i class="bi bi-dot fs-3 d-inline-block ms-auto"></i></li>
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
          <div class="accordion-body mx-2 mx-md-5 mb-4">學生如在開課前三天提出退費申請，我們將會全額退費。在開課24小時前提出退費申請，我們將會退還50%的學費，24小時內的課程則無法進行退費。另外，本站課程可以轉讓，臨時取消來不及申請退費的學生可 將課程轉讓給他人。</div>
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
    <div id="carouselExampleIndicators" class="carousel carousel-dark slide mt-4 pt-3 pb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block d-flex justify-content-center">
            <div class="card-group w-80">
              <div class="card border-0">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">很喜歡 Lisa 老師的教學風格，老師有問必答，也很接受學生有不同的想法，上起課來沒有壓力，時間一下子就過去了。</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">牙牙</small></p>
                </div>
              </div>
              <div class="card border-0 border-start border-end d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># 琳琳的粉彩世界</h5>
                  <p class="card-text fs-6">第一次接觸粉彩，以前對粉彩的印象就是會把顏色塗得很髒，感覺很不好上手。但看了琳琳老師的作品覺得好美，抱著試試看的心情報名，沒想到就這样入坑了: )</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">小光</small></p>
                </div>
              </div>
              <div class="card border-0  d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">Lisa 老師超級幽默，所有課程裡面最喜歡 Lisa 老師的課了！教學淺顯易懂，沒有學過畫畫也可以完成帶有個人色彩的作品喔！</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">James</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block d-flex justify-content-center">
            <div class="card-group w-80">
              <div class="card border-0">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># 琳琳的粉彩世界</h5>
                  <p class="card-text fs-6">第一次接觸粉彩，以前對粉彩的印象就是會把顏色塗得很髒，感覺很不好上手。但看了琳琳老師的作品覺得好美，抱著試試看的心情報名，沒想到就這样入坑了: )</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">小光</small></p>
                </div>
              </div>
              <div class="card border-0 border-start border-end d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">很喜歡 Lisa 老師的教學風格，老師有問必答，也很接受學生有不同的想法，上起課來沒有壓力，時間一下子就過去了。</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">牙牙</small></p>
                </div>
              </div>
              <div class="card border-0  d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">Lisa 老師超級幽默，所有課程裡面最喜歡 Lisa 老師的課了，教學淺顯易懂，沒有學過畫畫也可以完成帶有個人色彩的作品喔!</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">James</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block d-flex justify-content-center">
            <div class="card-group w-80">
              <div class="card border-0">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">Lisa 老師超級幽默，所有課程裡面最喜歡 Lisa 老師的課了！教學淺顯易懂，沒有學過畫畫也可以完成帶有個人色彩的作品喔！</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">James</small></p>
                </div>
              </div>
              <div class="card border-0 border-start border-end d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># 琳琳的粉彩世界</h5>
                  <p class="card-text fs-6">第一次接觸粉彩，以前對粉彩的印象就是會把顏色塗得很髒，感覺很不好上手。但看了琳琳老師的作品覺得好美，抱著試試看的心情報名，沒想到就這样入坑了: )</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">小光</small></p>
                </div>
              </div>
              <div class="card border-0  d-none d-md-block">
                <div class="card-body d-flex flex-column h-100">
                  <h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5>
                  <p class="card-text fs-6">很喜歡 Lisa 老師的教學風格，老師有問必答，也很接受學生有不同的想法，上起課來沒有壓力，時間一下子就過去了。</p>
                  <p class="card-text text-end mt-auto"><small class="text-muted">牙牙</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
  import { RouterLink } from 'vue-router'
  const { VITE_URL, VITE_PATH } = import.meta.env
  import Swal from 'sweetalert2'

  export default {
    data () {
      return {
        products: [],
        isLoading: false,
        visible: false
      }
    },
    components: {
      RouterLink
    },
    methods: {
      getProducts () {
        this.$http
          .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products
            this.products = this.products.reverse()
            this.products = this.products.slice(0,4)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      handleScroll (e){
        his.visible = window.scrollY != 0 ? true : false
      },
      goTop() {
        window.scrollTo({
          top: 0,
          right: 0,
          behavior: 'smooth'
        })
      },
      openNews(id) {
        const data = [
          {
            'title':'限時優惠來囉！！',
            'content':'ArtWorld 將舉辦一次限時優惠活動，所有新註冊的學生都可以享受10%的折扣優惠。這是一個難得的機會，請趕快註冊參加我們的藝術課程吧！'
          },
          {
            'title':'新課預告！',
            'content':'ArtWorld 即將推出全新的攝影課程，主題為「風景攝影」。這個課程將由業界知名攝影師主講，教授如何捕捉美麗的風景並拍攝出精美的照片。課程將包括理論講解和實踐操作，歡迎所有攝影愛好者報名參加。'
          },
          {
            'title':'課程異動通知！',
            'content':'「繪畫基礎」課程時間調整！原定每週二晚上7點到9點的「繪畫基礎」課程，即日起改為每週三晚上7點到9點上課。我們希望這個時間調整可以更好地配合學生們的行程。如有任何疑問，請聯繫我們的線上客服人員。'
          }
        ]
        Swal.fire({
          title: `${data[id].title}`,
          text: `${data[id].content}`,
          showConfirmButton: false,
        })
      }
    },
    mounted () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      },800)
      this.getProducts()
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
</style>
