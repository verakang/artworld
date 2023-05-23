import{_ as C,h as D,r as L,o as n,c as p,d as a,b as s,t as o,w as r,F as u,i as E,f as M,e as l}from"./index-d38fc3ca.js";import{S as V}from"./sweetalert2.all-558fd36d.js";const{VITE_URL:S,VITE_PATH:Y}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"artworld",BASE_URL:"/artworld/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},N={data(){return{products:[],isLoading:!1,visible:!1,news:[],mewsTemp:[]}},components:{RouterLink:D},methods:{getProducts(){this.$http.get(`${S}/v2/api/${Y}/products/all`).then(c=>{this.products=c.data.products,this.products=this.products.reverse(),this.products=this.products.slice(0,4),this.isLoading=!1}).catch(c=>{V.fire({position:"top-end",icon:"error",color:"white",iconColor:"white",customClass:{popup:"colored-toast"},title:`${c.response.data.message}，請再次確認。`,showConfirmButton:!1,timer:1e3,timerProgressBar:!1,toast:!0})})},getNews(){const c=`${S}/v2/api/${Y}/articles`;this.$http.get(c).then(d=>{this.news=d.data.articles,this.mewsTemp=this.news.slice(0,3)}).catch(d=>{V.fire({position:"top-end",icon:"error",color:"white",iconColor:"white",customClass:{popup:"colored-toast"},title:`${d.response.data.message}`,showConfirmButton:!1,timer:1e3,timerProgressBar:!0,toast:!0})})},handleScroll(){this.visible=window.scrollY!=0},goTop(){window.scrollTo({top:0,right:0,behavior:"smooth"})}},mounted(){this.isLoading=!0,this.getProducts(),this.getNews()}},j={class:"banner container py-5"},B={class:"container"},A={class:"row g-2"},P={class:"col-12 col-md-4"},R={class:"card border-0 text-white",style:{height:"320px"}},U=["src"],F={class:"card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center",style:{"border-radius":"80px 20px 20px 20px"}},O={class:"banner__title"},z={class:"text-center mb-1"},H={class:"col-12 col-md-8"},q={class:"card border-0 text-white",style:{height:"320px"}},J=["src"],W={class:"card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center",style:{"border-radius":"20px 80px 20px 20px"}},K={class:"banner__title"},Q={class:"text-center mb-1"},X={class:"col-12 col-md-8"},G={class:"card border-0 text-white",style:{height:"320px"}},Z=["src"],$={class:"card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center",style:{"border-radius":"20px 20px 20px 80px"}},ss={class:"banner__title"},ts={class:"text-center mb-1"},es={class:"col-12 col-md-4 d-none d-md-block"},os={class:"card border-0 text-white",style:{height:"320px"}},as=["src"],ls={class:"card-img-overlay banner__item overflow-hidden d-flex justify-content-center align-items-center",style:{"border-radius":"20px 20px 80px 20px"}},cs={class:"banner__title"},ds={class:"text-center mb-1"},is={class:"news my-9 d-md-none bg-light"},rs={class:"container"},ns={class:"news__content w-85 mx-auto"},ps={class:"banner__title"},us={class:"position-relative"},hs=s("h2",{class:"h1 font-rufina pt-4"},"News /",-1),ms=s("p",{class:"fs-5"},"最新消息",-1),bs=s("i",{class:"bi bi-arrow-right-short"},null,-1),xs={class:"list-unstyled news__list pb-4"},_s=s("i",{class:"bi bi-dot fs-3 d-inline-block ms-auto"},null,-1),fs={class:"news py-5 my-9 news-bg d-none d-md-block"},vs={class:"container"},gs={class:"news__content w-75"},ws={class:"row"},ys={class:"col-3 position-relative"},ks=s("h2",{class:"h1 font-rufina"},"News /",-1),Ts=s("p",{class:"fs-5"},"最新消息",-1),Ls=s("i",{class:"bi bi-arrow-right-short ps-1"},null,-1),Es={class:"col-9"},Vs={class:"list-unstyled news__list"},Ss=s("i",{class:"bi bi-dot fs-3 d-inline-block ms-auto"},null,-1),Ys=M('<section class="qa container py-9"><h2 class="h1 font-rufina text-center mb-0">Q&amp;A / <span class="fs-5 align-middle">問與答</span></h2><div class="accordion accordion-flush w-85 mx-auto mt-5" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> 請問有哪些付款方式？可以刷卡嗎？ </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body mx-2 mx-md-5 mb-4">目前提供信用卡付款其他行動支付如 Line pay、Apple pay，還在研擬中。等確認後會馬上公告給大家呦！</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> 臨時不能上課，可以退費嗎？？ </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body mx-2 mx-md-5 mb-4">學生如在開課前三天提出退費申請，我們將會全額退費。在開課24小時前提出退費申請，我們將會退還50%的學費，24小時內的課程則無法進行退費。另外，本站課程可以轉讓，臨時取消來不及申請退費的學生可將課程轉讓給他人。</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 課程費用包含材料嗎？我需要自己準備？ </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body mx-2 mx-md-5 mb-4">部分課程我們會提供相關材料，部分課程則需要學生自備。在報名課程之前，請仔細閱讀課程資訊，以確認相關材料的提供情況。此外，我們也提供課程材料的加購服務，學生可以在報名課程時選擇加購相關材料。</div></div></div></div></section><section class="feedback container py-9"><h2 class="h1 font-rufina text-center mb-0">Feedback / <span class="fs-5 align-middle">學員回饋</span></h2><div id="carouselExampleIndicators" class="carousel carousel-dark slide mt-4 pt-3 pb-0 pb-lg-2" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner" style="height:320px;"><div class="carousel-item active"><div class="d-block d-flex justify-content-center align-items-center"><div class="card-group w-80"><div class="card border-0 px-4 px-lg-0"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 大人的水彩課</h5><p class="card-text fs-6">美琪老師的水彩課，簡直讓我愛上了這個媒材！老師很親切，教學風格也非常好，讓我這個初學者也能夠輕鬆上手。這門課程非常適合想要嘗試水彩畫的新手，強烈推薦大家來一起上課！</p><p class="card-text text-end mt-auto"><small class="text-muted">秀雅</small></p></div></div><div class="card border-0 border-start border-end d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 琳琳的粉彩世界</h5><p class="card-text fs-6">第一次接觸粉彩，以前對粉彩的印象就是會把顏色塗得很髒，感覺很不好上手。但看了琳琳老師的作品覺得好美，抱著試試看的心情報名，沒想到就這样入坑了: )</p><p class="card-text text-end mt-auto"><small class="text-muted">小光</small></p></div></div><div class="card border-0 d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 花束製作</h5><p class="card-text fs-6">老師很仔細的教導我們花材的挑選、搭配、編排等技巧，最後每個人都成功做出一束完整的花束，如果你也喜歡花藝或是想嘗試，一定要來上這個課程喔！</p><p class="card-text text-end mt-auto"><small class="text-muted">橘子</small></p></div></div></div></div></div><div class="carousel-item"><div class="d-block d-flex justify-content-center"><div class="card-group w-80"><div class="card border-0 px-4 px-lg-0"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 海報設計</h5><p class="card-text fs-6">因為工作需求參加了小左老師的海報設計課程，老師循序漸進地教導，讓我掌握了基本技巧和設計原則。這些知識和技能在我的工作中派上了用場，讓我有更多發展機會，非常感謝小左老師的用心指導！</p><p class="card-text text-end mt-auto"><small class="text-muted">小櫻</small></p></div></div><div class="card border-0 border-start border-end d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5><p class="card-text fs-6">很喜歡 Lisa 老師的教學風格，老師有問必答，也很接受學生有不同的想法，上起課來沒有壓力，時間一下子就過去了。</p><p class="card-text text-end mt-auto"><small class="text-muted">牙牙</small></p></div></div><div class="card border-0 d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 人物攝影</h5><p class="card-text fs-6">推薦威爾老師的攝影課程！老師教的不只是攝影技巧，還有如何捕捉當下美好的心法。在課堂上，我學到了很多攝影的基礎知識，也學會了怎麼拍出有故事性的照片。收穫很多！</p><p class="card-text text-end mt-auto"><small class="text-muted">Melody</small></p></div></div></div></div></div><div class="carousel-item"><div class="d-block d-flex justify-content-center"><div class="card-group w-80"><div class="card border-0 px-4 px-lg-0"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 藝術鑑賞</h5><p class="card-text fs-6">Benny老師的藝術鑑賞課，真的是開了我的藝術眼界！老師講解的很詳細，也讓我對不同的藝術形式有了更深入的了解。這門課真的讓我覺得非常有收穫，推薦給所有喜歡藝術的朋友！</p><p class="card-text text-end mt-auto"><small class="text-muted">KS</small></p></div></div><div class="card border-0 border-start border-end d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># 大人的水彩課</h5><p class="card-text fs-6">過去是沒有水彩經驗的初學者，參加了美琪老師的水彩課，跟著老師從最基礎的技巧開始學起，一路進步到現在。老師在課堂中總是耐心指導學員，再基礎的問題都會溫柔地回答，如果你也是初學者，推薦給你！</p><p class="card-text text-end mt-auto"><small class="text-muted">Soso</small></p></div></div><div class="card border-0 d-none d-lg-block"><div class="card-body d-flex flex-column h-100"><h5 class="card-title mb-4 h5 text-center fw-bold"># Lisa 的色鉛筆教室</h5><p class="card-text fs-6">Lisa 老師超級幽默，所有課程裡面最喜歡 Lisa 老師的課了！教學淺顯易懂，沒有學過畫畫也可以完成帶有個人色彩的作品喔！</p><p class="card-text text-end mt-auto"><small class="text-muted">James</small></p></div></div></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></section>',2),Is=s("section",{class:"location container-fluid p-5 d-flex flex-column justify-content-center"},[s("h2",{class:"h1 font-rufina text-center mb-0"},[l("Location / "),s("span",{class:"fs-5 align-middle"},"藝享教室")]),s("iframe",{class:"mt-5 mx-auto",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7202156870017!2d121.51481799999999!3d25.0435673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9735add7b29%3A0xb4c91a9cb4b69b18!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6aSo5YmN6LevMTIw6Jmf!5e0!3m2!1szh-TW!2stw!4v1681664593937!5m2!1szh-TW!2stw",width:"600",height:"300",style:{border:"2"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1);function Cs(c,d,Ds,Ms,e,Ns){var h,m,b,x,_,f,v,g,w,y,k,T;const I=L("VueLoading"),i=L("RouterLink");return n(),p(u,null,[a(I,{active:e.isLoading,"onUpdate:active":d[0]||(d[0]=t=>e.isLoading=t)},null,8,["active"]),s("section",j,[s("div",B,[s("div",A,[s("div",P,[s("div",R,[s("img",{src:(h=e.products[0])==null?void 0:h.imageUrl,class:"card-img h-100",alt:"course image",style:{"border-radius":"80px 20px 20px 20px"}},null,8,U),s("div",F,[s("div",O,[s("p",z,"＃"+o((m=e.products[0])==null?void 0:m.category),1),a(i,{to:`/course/${(b=e.products[0])==null?void 0:b.id}`,class:"card-title h5 text-light stretched-link"},{default:r(()=>{var t;return[l(o((t=e.products[0])==null?void 0:t.title),1)]}),_:1},8,["to"])])])])]),s("div",H,[s("div",q,[s("img",{src:(x=e.products[1])==null?void 0:x.imageUrl,class:"card-img h-100",alt:"course image",style:{"border-radius":"20px 80px 20px 20px"}},null,8,J),s("div",W,[s("div",K,[s("p",Q,"＃"+o((_=e.products[1])==null?void 0:_.category),1),a(i,{to:`/course/${(f=e.products[1])==null?void 0:f.id}`,class:"card-title h5 text-light stretched-link"},{default:r(()=>{var t;return[l(o((t=e.products[1])==null?void 0:t.title),1)]}),_:1},8,["to"])])])])]),s("div",X,[s("div",G,[s("img",{src:(v=e.products[2])==null?void 0:v.imageUrl,class:"card-img h-100",alt:"course image",style:{"border-radius":"20px 20px 20px 80px"}},null,8,Z),s("div",$,[s("div",ss,[s("p",ts,"＃"+o((g=e.products[2])==null?void 0:g.category),1),a(i,{to:`/course/${(w=e.products[2])==null?void 0:w.id}`,class:"card-title h5 text-light stretched-link"},{default:r(()=>{var t;return[l(o((t=e.products[2])==null?void 0:t.title),1)]}),_:1},8,["to"])])])])]),s("div",es,[s("div",os,[s("img",{src:(y=e.products[3])==null?void 0:y.imageUrl,class:"card-img h-100",alt:"course image",style:{"border-radius":"20px 20px 80px 20px"}},null,8,as),s("div",ls,[s("div",cs,[s("p",ds,"＃"+o((k=e.products[3])==null?void 0:k.category),1),a(i,{to:`/course/${(T=e.products[3])==null?void 0:T.id}`,class:"card-title h5 text-light stretched-link"},{default:r(()=>{var t;return[l(o((t=e.products[3])==null?void 0:t.title),1)]}),_:1},8,["to"])])])])])])])]),s("section",is,[s("div",rs,[s("div",ns,[s("div",ps,[s("div",us,[hs,ms,a(i,{to:"/newslist",class:"fs-7 position-absolute end-0 top-50 btn btn-outline-primary p-2 rounded"},{default:r(()=>[l("View More"),bs]),_:1})]),s("ul",xs,[(n(!0),p(u,null,E(e.mewsTemp,t=>(n(),p("li",{key:t.id,class:"py-4 px-3 border-bottom d-flex align-items-center position-relative"},[s("span",null,o(c.$moment(new Date(t.create_at*1e3)).format("YYYY-MM-DD")),1),a(i,{to:`/newsitem/${t==null?void 0:t.id}`,class:"ms-3 stretched-link"},{default:r(()=>[l(o(t.title),1)]),_:2},1032,["to"]),_s]))),128))])])])])]),s("section",fs,[s("div",vs,[s("div",gs,[s("div",ws,[s("div",ys,[ks,Ts,a(i,{to:"/newslist",class:"fs-7 position-absolute bottom-0 mb-5 btn btn-outline-primary py-3 rounded",onClick:d[1]||(d[1]=()=>{})},{default:r(()=>[l("View More"),Ls]),_:1})]),s("div",Es,[s("ul",Vs,[(n(!0),p(u,null,E(e.mewsTemp,t=>(n(),p("li",{key:t.id,class:"py-4 px-3 border-bottom d-flex align-items-center position-relative"},[s("span",null,o(c.$moment(new Date(t.create_at*1e3)).format("YYYY-MM-DD")),1),a(i,{to:`/newsitem/${t==null?void 0:t.id}`,class:"ms-3 stretched-link"},{default:r(()=>[l(o(t.title),1)]),_:2},1032,["to"]),Ss]))),128))])])])])])]),Ys,Is],64)}const As=C(N,[["render",Cs]]);export{As as default};
