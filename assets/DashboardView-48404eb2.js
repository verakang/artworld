import{_ as m,R as b,r as p,o as u,c as h,b as t,n as f,d as e,w as n,D as v,A as g,e as a,F as w}from"./index-edf686f4.js";import{S as x}from"./sweetalert2.all-e9ed28ba.js";import{C as k}from"./collapse-4110a537.js";import"./base-component-3c9297a5.js";const{VITE_URL:C}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"artworld",BASE_URL:"/artworld/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},y={data(){return{visible:!1,status:!1,collapse:{}}},components:{RouterView:b},methods:{handleScroll(){this.visible=window.scrollY>=250},goTop(){window.scrollTo({top:0,right:0,behavior:"smooth"})},checkLogin(){const c=document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=c;const s=`${C}/v2/api/user/check`;this.$http.post(s).then(i=>{this.status=!0}).catch(i=>{x.fire({position:"top-end",icon:"error",color:"white",iconColor:"white",customClass:{popup:"colored-toast"},title:`${i.response.data.message}`,showConfirmButton:!0,toast:!0}),this.$router.push("/login")})},logout(){document.cookie=`hexschool=; expires=${new Date}`,this.$router.push("/")},closeNavbar(){this.collapse.hide()}},created(){window.addEventListener("scroll",this.handleScroll)},mounted(){this.checkLogin(),this.collapse=new k(this.$refs.collapse,{toggle:!1})}},N={class:"container-fluid p-0 border-bottom fixed-top"},V={class:"navbar navbar-expand-lg bg-white py-2 text-primary"},R={class:"container"},T={class:"py-3"},A=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),E={class:"collapse navbar-collapse",id:"navbarNavAltMarkup",ref:"collapse"},L={class:"d-flex ms-auto list-unstyled m-0 navbar-nav font-rufina text-center font-noto"},D={class:"ms-lg-3"},S={class:"ms-lg-3"},B={class:"ms-lg-3"},M={key:0,class:"mt-9 admin"},$={class:"bg-white mt-5"},I={class:"bg-primary p-3"},U={class:"text-white text-center m-0 font-rufina fs-6"};function z(c,s,i,F,d,o){const l=p("RouterLink"),_=p("RouterView");return u(),h(w,null,[t("div",N,[t("div",{class:f(["fixed-bottom p-4 mb-9 text-end",{"d-none":!d.visible}])},[t("i",{class:"text-center bi bi-arrow-up-short h2 gotop shadow px-2 bg-body rounded rounded-circle",onClick:s[0]||(s[0]=(...r)=>o.goTop&&o.goTop(...r))})],2),t("nav",V,[t("div",R,[t("div",T,[e(l,{to:"/",class:"h3 font-rufina py-3 pe-3"},{default:n(()=>[a("Art / World.")]),_:1})]),A,t("div",E,[t("ul",L,[t("li",null,[e(l,{to:"/admin/news",class:"p-3 pb-2 pt-4 py-ms-2",onClick:o.closeNavbar},{default:n(()=>[a("最新消息")]),_:1},8,["onClick"])]),t("li",D,[e(l,{to:"/admin/courses",class:"p-3 pb-2 pt-4 py-ms-2",onClick:o.closeNavbar},{default:n(()=>[a("產品列表")]),_:1},8,["onClick"])]),t("li",S,[e(l,{to:"/admin/orders",class:"p-3 pb-2 pt-4 py-ms-2",onClick:o.closeNavbar},{default:n(()=>[a("訂單列表")]),_:1},8,["onClick"])]),t("li",B,[t("a",{class:"p-3 pb-2 pt-4 py-ms-2",onClick:[s[1]||(s[1]=v((...r)=>o.logout&&o.logout(...r),["prevent"])),s[2]||(s[2]=(...r)=>o.closeNavbar&&o.closeNavbar(...r))]},"登出")])])],512)])])]),d.status?(u(),h("div",M,[e(_)])):g("",!0),t("footer",$,[t("div",I,[t("p",U,[a("Copyright＠2023 Art World ・ "),e(l,{to:"/",class:"text-white font-noto"},{default:n(()=>[a("返回首頁")]),_:1})])])])],64)}const Y=m(y,[["render",z]]);export{Y as default};