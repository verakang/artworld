<script>

</script>

<template>
  <div class="container py-5 mb-5">
    <nav class="mb-4" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">關於 ArtWorld</li>
      </ol>
    </nav>
    <div class="about w-85 mx-auto shadow p-0 pb-5 bg-body">
      <img src="@/assets/img/about.png" alt="about banner" class="about__img">
      <div class="w-85 px-xl-10 mx-auto d-flex flex-column mt-5">
        <p class="fw-normal">
          歡迎來到 ArtWorld 藝享世界！我們致力於為學習者提供高品質、具有啟發性的藝術課程體驗。我們的課程包括花藝、繪畫、攝影、手作等多種藝術形式，適合不同程度的學習者參與。
        </p>
        <p class="fw-normal">
          我們的教學團隊由專業的藝術家和教育工作者組成，他們擁有豐富的教學經驗和藝術實踐經驗。課程充滿創意和互動性，旨在啟發學習者的創造力和想像力。
        </p>
        <p class="fw-normal">
          在課程中，您將獲得專業的藝術技能培訓和豐富的藝術體驗，同時也會認識到來自不同背景和文化的學習者，擴展您的視野和交流能力。
        </p>
        <p class="fw-normal">
          我們的使命是為學習者提供最好的藝術課程體驗，讓他們在藝術領域中獲得成功和滿足感。感謝您選擇 ArtWorld 藝享世界，讓我們一起探索藝術的奧秘和美好！
        </p>
        <p class="fw-normal">
          ArtWorld 藝享世界成立的緣由是基於我們對藝術教育的熱情和對藝術教育的信念。我們認為藝術是一種非常重要的學習領域，它可以啟發人們的創造力和想像力，同時也能夠提高人們的視野和文化素養。
        </p>
        <p class="fw-normal">
          在過去的幾年中，我們看到越來越多的學習者希望在藝術領域中獲得更專業和更有效的培訓和指導。然而，很多人因為各種原因無法進入傳統的教育機構學習藝術，因此我們決定建立這個平台，讓更多的人可以方便地參與高品質的藝術課程學習。
        </p>
        <p class="fw-normal">
          我們深信，通過這個平台，我們可以為更多的學習者提供一個優質的藝術教育環境，讓他們可以實現自己的藝術夢想。
        </p>
      </div>
    </div>
  </div>
  <div class="container-fluid py-5 room">
    <h3 class="text-center mb-3">環境介紹</h3>
    <div class="container row w-85 mx-auto">
      <div class="p-2 col-12 col-md-6 col-lg-4">
        <img src="https://images.unsplash.com/photo-1594125674965-70d796b6693f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        alt="教室圖片" class="m-2" style="max-width: 100%;">
      </div>
      <div class="p-2 col-12 col-md-6 col-lg-4">
        <img src="https://images.unsplash.com/photo-1594125675324-a5370a65778d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        alt="教室圖片" class="m-2" style="max-width: 100%;">
      </div>
      <div class="p-2 col-12 col-md-6 col-lg-4">
        <img src="https://images.unsplash.com/photo-1594125675297-a8dee22b0350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        alt="教室圖片" class="m-2" style="max-width: 100%;">
      </div>
    </div>
  </div>
</template>

<style>
.about {
  background-image: url(https://images.unsplash.com/photo-1615800098779-1be32e60cca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}
.about__img {
  width: 100%;
  height: 200px;
}
p {
  text-align: justify;
  font-size: 18px;
}
.room {
  background-image: url(https://images.unsplash.com/photo-1600172454520-134a542a2255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
