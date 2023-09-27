import{_ as w,m as T,a as E,r as u,o as r,c as i,b as e,d as a,w as h,n as c,F as I,z as S,A as f,t as m,e as d,g as B,B as D}from"./index-edf686f4.js";import{c as x}from"./cart-5cd49c78.js";import{S as y}from"./sweetalert2.all-e9ed28ba.js";const{VITE_URL:U,VITE_PATH:N}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"artworld",BASE_URL:"/artworld/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isDone:!0}},computed:{...T(x,["carts","loadingItem","final_total","total"])},methods:{...E(x,["getCarts","removeItem","deleteCart","numberComma"]),sendOrder(){this.isDone=!1;const s=this.form;this.$http.post(`${U}/v2/api/${N}/order`,{data:s}).then(o=>{this.isDone=!0;const{message:b,orderId:v}=o.data;y.fire({position:"top-end",icon:"success",color:"white",iconColor:"white",customClass:{popup:"colored-toast"},title:`${b}`,showConfirmButton:!1,timer:800,timerProgressBar:!0,toast:!0}),this.$refs.form.resetForm(),this.form.message="",this.$router.push(`/order/${v}`)}).catch(o=>{y.fire({position:"top-end",icon:"error",color:"white",iconColor:"white",customClass:{popup:"colored-toast"},title:`${o.response.data.message}，請再次確認。`,showConfirmButton:!1,timer:1e3,timerProgressBar:!0,toast:!0})})}},mounted(){this.getCarts()}},L={class:"container py-5"},q={style:{"`--bs-breadcrumb-divider":">"},"aria-label":"breadcrumb"},A={class:"breadcrumb"},P={class:"breadcrumb-item"},O=e("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車列表",-1),$={class:"text-end mb-5"},j={key:0},F={class:"container d-flex flex-column justify-content-center align-items-center"},H=e("h3",null,"購物車內沒有課程",-1),z={key:1,class:"row"},M={class:"col-lg-8 col-xxl-7"},G={class:"table align-middle px-6"},J=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{class:"text-center",style:{width:"90px"}},"數量/單位"),e("th",{class:"text-center",style:{width:"85px"}},"單價")])],-1),K=["onClick"],Q={key:1},W=e("i",{class:"bi bi-x-circle"},null,-1),X=[W],Y={class:"d-flex flex-column flex-xl-row align-items-xl-center px-0"},Z=["src"],ee={class:"m-3"},se={class:"mb-1 cart-content"},te={class:"d-none d-sm-block"},oe=e("i",{class:"bi bi-clock me-2"},null,-1),le={key:0,class:"text-success"},ae={class:"text-center cart-content px-0"},ne={class:"text-center cart-content px-0"},re={key:0,class:"text-success"},ie=e("td",{colspan:"3",class:"text-end pe-3"},"總計",-1),ce={class:"text-center cart-content px-0"},de=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),me={class:"text-center text-success"},ue={class:"col-lg-4 col-xxl-5"},_e={class:"mb-5 row justify-content-center"},pe=e("h3",{class:"mt-5 mt-lg-0 mb-4 pb-2 border-bottom"},"訂單資料",-1),he={class:"mb-3"},fe=e("label",{for:"email",class:"form-label"},[d("Email"),e("span",{class:"text-danger"}," *")],-1),be={class:"mb-3"},ve=e("label",{for:"name",class:"form-label"},[d("收件人姓名"),e("span",{class:"text-danger"}," *")],-1),ge={class:"mb-3"},xe=e("label",{for:"tel",class:"form-label"},[d("收件人電話"),e("span",{class:"text-danger"}," *")],-1),ye={class:"mb-3"},Ce=e("label",{for:"address",class:"form-label"},[d("收件人地址"),e("span",{class:"text-danger"}," *")],-1),Ve={class:"mb-3"},ke=e("label",{for:"message",class:"form-label"},"留言",-1),we={class:"text-end"};function Te(s,o,b,v,n,C){const g=u("router-link"),V=u("RouterLink"),_=u("v-field"),p=u("error-message"),k=u("v-form");return r(),i("div",L,[e("nav",q,[e("ol",A,[e("li",P,[a(g,{to:"/"},{default:h(()=>[d("Home")]),_:1})]),O])]),e("div",$,[e("button",{class:c(["btn btn-outline-danger",{disabled:s.carts.length==0}]),type:"button",onClick:o[0]||(o[0]=(...t)=>s.deleteCart&&s.deleteCart(...t))},"清空購物車",2)]),e("div",null,[s.carts.length===0?(r(),i("div",j,[e("div",F,[H,a(V,{to:"/courses",class:"btn btn-primary mt-3"},{default:h(()=>[d("查看課程")]),_:1})])])):(r(),i("div",z,[e("div",M,[e("table",G,[J,e("tbody",null,[s.carts?(r(!0),i(I,{key:0},S(s.carts,t=>{var l;return r(),i("tr",{key:t.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>s.removeItem(t)},[t.id===s.loadingItem?(r(),i("i",{key:0,class:c(["bi",{"bi-emoji-frown":t.id===s.loadingItem}])},null,2)):(r(),i("span",Q,X))],8,K)]),e("td",Y,[a(g,{to:`/course/${(l=t.product)==null?void 0:l.id}`,class:"card-title h5",style:{"min-width":"50%"}},{default:h(()=>[e("img",{src:t.product.imageUrl,style:{width:"100%","max-height":"150px"}},null,8,Z)]),_:2},1032,["to"]),e("div",ee,[e("p",se,m(t.product.title),1),e("p",te,[oe,d(m(t.product.datetime),1)]),t.coupon?(r(),i("div",le," 已套用優惠券 ")):f("",!0)])]),e("td",ae,m(t.qty)+" / "+m(t.product.unit),1),e("td",ne,[s.carts.final_total!==s.carts.total?(r(),i("small",re,"折扣價：")):f("",!0),d(" NT$ "+m(s.numberComma(t.total)),1)])])}),128)):f("",!0)]),e("tfoot",null,[e("tr",null,[ie,e("td",ce,"NT$ "+m(s.numberComma(s.total)),1)]),e("tr",{class:c({"d-none":s.total===s.final_total})},[de,e("td",me,"NT$ "+m(s.numberComma(s.final_total)),1)],2)])])]),e("div",ue,[e("div",_e,[a(k,{ref:"form",class:"col-md-10",onSubmit:C.sendOrder},{default:h(({errors:t})=>[pe,e("div",he,[fe,a(_,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:n.form.user.email,"onUpdate:modelValue":o[1]||(o[1]=l=>n.form.user.email=l)},null,8,["class","modelValue"]),a(p,{name:"email",class:"invalid-feedback"})]),e("div",be,[ve,a(_,{id:"name",name:"姓名",type:"text",class:c(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:n.form.user.name,"onUpdate:modelValue":o[2]||(o[2]=l=>n.form.user.name=l)},null,8,["class","modelValue"]),a(p,{name:"姓名",class:"invalid-feedback"})]),e("div",ge,[xe,a(_,{id:"tel",name:"電話",type:"tel",class:c(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"numeric|min:8|required",modelValue:n.form.user.tel,"onUpdate:modelValue":o[3]||(o[3]=l=>n.form.user.tel=l)},null,8,["class","modelValue"]),a(p,{name:"電話",class:"invalid-feedback"})]),e("div",ye,[Ce,a(_,{id:"address",name:"地址",type:"text",class:c(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:n.form.user.address,"onUpdate:modelValue":o[4]||(o[4]=l=>n.form.user.address=l)},null,8,["class","modelValue"]),a(p,{name:"地址",class:"invalid-feedback"})]),e("div",Ve,[ke,B(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":o[5]||(o[5]=l=>n.form.message=l)},null,512),[[D,n.form.message]])]),e("div",we,[e("button",{type:"submit",class:c([{disabled:n.isDone===!1},"btn btn-danger"])},"送出訂單",2)])]),_:1},8,["onSubmit"])])])]))])])}const Be=w(R,[["render",Te]]);export{Be as default};