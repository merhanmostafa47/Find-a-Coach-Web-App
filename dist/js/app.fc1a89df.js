(function(){"use strict";var e={3193:function(e,t,a){var r=a(9242),n=a(2483),s=a(3396);const i={class:"controls"},o={key:0},l={key:1};function c(e,t,a,r,n,c){const d=(0,s.up)("coach-filter"),u=(0,s.up)("base-button"),h=(0,s.up)("coach-item"),p=(0,s.up)("base-card");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",null,[(0,s.Wm)(d,{onChangeFilter:c.setFilters},null,8,["onChangeFilter"])]),(0,s._)("section",null,[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(u,{mode:"outline"},{default:(0,s.w5)((()=>[(0,s.Uk)("Refresh")])),_:1}),c.isCoach?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,link:"",to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register As Coach")])),_:1}))]),c.hasCoaches?((0,s.wg)(),(0,s.iD)("ul",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.filteredCoaches,(e=>((0,s.wg)(),(0,s.j4)(h,{key:e.id,id:e.id,"first-name":e.firstName,"last-name":e.lastName,rate:e.rate,areas:e.areas},null,8,["id","first-name","last-name","rate","areas"])))),128))])):((0,s.wg)(),(0,s.iD)("h3",l,"No coaches found"))])),_:1})])],64)}var d=a(7139);const u={class:"actions"};function h(e,t,a,r,n,i){const o=(0,s.up)("base-badge"),l=(0,s.up)("base-button");return(0,s.wg)(),(0,s.iD)("li",null,[(0,s._)("h3",null,(0,d.zw)(i.fullName),1),(0,s._)("h4",null,"$"+(0,d.zw)(a.rate)+"/hour",1),(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.areas,(e=>((0,s.wg)(),(0,s.j4)(o,{type:e,title:e,key:e},null,8,["type","title"])))),128)),(0,s._)("div",u,[(0,s.Wm)(l,{link:"",mode:"outline",to:i.coachContactLink},{default:(0,s.w5)((()=>[(0,s.Uk)("contact")])),_:1},8,["to"]),(0,s.Wm)(l,{link:"",to:i.coachDetailsLink},{default:(0,s.w5)((()=>[(0,s.Uk)("View Details")])),_:1},8,["to"])])])])}var p={props:["id","firstName","lastName","rate","areas"],computed:{fullName(){return this.firstName+" "+this.lastName},coachContactLink(){return this.$route.path+"/"+this.id+"/contact"},coachDetailsLink(){return this.$route.path+"/"+this.id}}},m=a(89);const f=(0,m.Z)(p,[["render",h],["__scopeId","data-v-aa9d4606"]]);var v=f;const _=e=>((0,s.dD)("data-v-7c0939d9"),e=e(),(0,s.Cn)(),e),b=_((()=>(0,s._)("h2",null,"find your coach",-1))),w={class:"filter-option"},g=_((()=>(0,s._)("label",{for:"frontend"}," Frontend",-1))),k=_((()=>(0,s._)("label",{for:"backend"}," Backend",-1))),y=_((()=>(0,s._)("label",{for:"career"}," Career",-1)));function C(e,t,a,r,n,i){const o=(0,s.up)("base-card");return(0,s.wg)(),(0,s.j4)(o,null,{default:(0,s.w5)((()=>[b,(0,s._)("span",w,[(0,s._)("input",{type:"checkbox",id:"frontend",checked:"",onChange:t[0]||(t[0]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),g,(0,s._)("input",{type:"checkbox",id:"backend",checked:"",onChange:t[1]||(t[1]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),k,(0,s._)("input",{type:"checkbox",id:"career",checked:"",onChange:t[2]||(t[2]=(...e)=>i.setFilter&&i.setFilter(...e))},null,32),y])])),_:1})}var V={emits:["change-filter"],data(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter(e){const t=e.target.id,a=e.target.checked,r={...this.filters,[t]:a};this.filters=r,this.$emit("change-filter",r)}}};const N=(0,m.Z)(V,[["render",C],["__scopeId","data-v-7c0939d9"]]);var D=N,F={components:{CoachItem:v,CoachFilter:D},data(){return{activeFilters:{frontend:!0,backend:!0,career:!0}}},computed:{isCoach(){return this.$store.getters["coaches/isCoach"]},filteredCoaches(){const e=this.$store.getters["coaches/coaches"];return e.filter((e=>!(!this.activeFilters.frontend||!e.areas.includes("frontend"))||(!(!this.activeFilters.backend||!e.areas.includes("backend"))||!(!this.activeFilters.career||!e.areas.includes("career")))))},hasCoaches(){return this.$store.getters["coaches/hasCoaches"]}},methods:{setFilters(e){this.activeFilters=e}}};const I=(0,m.Z)(F,[["render",c],["__scopeId","data-v-dddb0390"]]);var x=I;const W=(0,s._)("h2",null,"Interested? Reach out now!",-1);function U(e,t,a,r,n,i){const o=(0,s.up)("base-card"),l=(0,s.up)("base-button"),c=(0,s.up)("router-view"),u=(0,s.up)("base-badge");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",null,[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("h2",null,(0,d.zw)(i.fullName),1),(0,s._)("h3",null,"$"+(0,d.zw)(i.rate)+"/hour",1)])),_:1})]),(0,s._)("section",null,[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s._)("header",null,[W,(0,s.Wm)(l,{link:"",to:i.contactLink},{default:(0,s.w5)((()=>[(0,s.Uk)(" Contact ")])),_:1},8,["to"])]),(0,s.Wm)(c)])),_:1})]),(0,s._)("section",null,[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.areas,(e=>((0,s.wg)(),(0,s.j4)(u,{key:e.id,type:e,title:e},null,8,["type","title"])))),128)),(0,s._)("p",null,(0,d.zw)(i.description),1)])),_:1})])],64)}var $={props:["id"],data(){return{selectedCoach:null}},computed:{fullName(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},areas(){return this.selectedCoach.areas},rate(){return this.selectedCoach.hourlyRate},description(){return this.selectedCoach.description},contactLink(){return this.$route.path+"/"+this.id+"/contact"}},created(){this.selectedCoach=this.$store.getters["coaches/coaches"].find((e=>e.id===this.id))}};const q=(0,m.Z)($,[["render",U]]);var Z=q;const j=(0,s._)("h2",null,"Register as a coach now !",-1);function O(e,t,a,r,n,i){const o=(0,s.up)("coach-form"),l=(0,s.up)("base-card");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[j,(0,s.Wm)(o,{onSaveData:i.savaData},null,8,["onSaveData"])])),_:1})])}const R=e=>((0,s.dD)("data-v-7bf60b17"),e=e(),(0,s.Cn)(),e),B=R((()=>(0,s._)("label",{for:"firstname"},"First name",-1))),H={key:0},L=R((()=>(0,s._)("label",{for:"lastname"},"Last name",-1))),z={key:0},Y=R((()=>(0,s._)("label",{for:"description"},"Description",-1))),S={key:0},A=R((()=>(0,s._)("label",{for:"rate"},"Hourly rate",-1))),M={key:0},P=R((()=>(0,s._)("h3",null,"Areas of Expertise",-1))),T=R((()=>(0,s._)("label",{for:"frontend"},"Frontend Development",-1))),J=R((()=>(0,s._)("label",{for:"backend"},"Backend Development",-1))),K=R((()=>(0,s._)("label",{for:"career"},"Career Development",-1))),E={key:0},G={key:0};function Q(e,t,a,n,i,o){const l=(0,s.up)("base-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:t[14]||(t[14]=(0,r.iM)(((...e)=>o.submitForm&&o.submitForm(...e)),["prevent"]))},[(0,s._)("div",{class:(0,d.C_)(["form-control",{invalid:!i.firstName.isValid}])},[B,(0,s.wy)((0,s._)("input",{type:"text",id:"firstname","onUpdate:modelValue":t[0]||(t[0]=e=>i.firstName.val=e),onBlur:t[1]||(t[1]=e=>o.clearValidity("firstName"))},null,544),[[r.nr,i.firstName.val,void 0,{trim:!0}]]),i.firstName.isValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",H,"First name must not be empty"))],2),(0,s._)("div",{class:(0,d.C_)(["form-control",{invalid:!i.lastName.isValid}])},[L,(0,s.wy)((0,s._)("input",{type:"text",id:"lastname","onUpdate:modelValue":t[2]||(t[2]=e=>i.lastName.val=e),onBlur:t[3]||(t[3]=e=>o.clearValidity("lastName"))},null,544),[[r.nr,i.lastName.val,void 0,{trim:!0}]]),i.lastName.isValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",z,"Last name must not be empty"))],2),(0,s._)("div",{class:(0,d.C_)(["form-control",{invalid:!i.description.isValid}])},[Y,(0,s.wy)((0,s._)("textarea",{id:"description",rows:"5","onUpdate:modelValue":t[4]||(t[4]=e=>i.description.val=e),onBlur:t[5]||(t[5]=e=>o.clearValidity("description"))},null,544),[[r.nr,i.description.val,void 0,{trim:!0}]]),i.description.isValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",S,"Description must not be empty"))],2),(0,s._)("div",{class:(0,d.C_)(["form-control",{invalid:!i.rate.isValid}])},[A,(0,s.wy)((0,s._)("input",{type:"number",id:"rate","onUpdate:modelValue":t[6]||(t[6]=e=>i.rate.val=e),onBlur:t[7]||(t[7]=e=>o.clearValidity("rate"))},null,544),[[r.nr,i.rate.val,void 0,{number:!0}]]),i.rate.isValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",M,"Rate must be greater than 0"))],2),(0,s._)("div",{class:(0,d.C_)(["form-control",{invalid:!i.areas.isValid}])},[P,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"frontend",value:"frontend","onUpdate:modelValue":t[8]||(t[8]=e=>i.areas.val=e),onBlur:t[9]||(t[9]=e=>o.clearValidity("areas"))},null,544),[[r.e8,i.areas.val]]),T]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"backend",value:"backend","onUpdate:modelValue":t[10]||(t[10]=e=>i.areas.val=e),onBlur:t[11]||(t[11]=e=>o.clearValidity("areas"))},null,544),[[r.e8,i.areas.val]]),J]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"career",value:"career","onUpdate:modelValue":t[12]||(t[12]=e=>i.areas.val=e),onBlur:t[13]||(t[13]=e=>o.clearValidity("areas"))},null,544),[[r.e8,i.areas.val]]),K]),i.areas.isValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",E,"At least one expertise must be selected"))],2),i.formIsValid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",G,"Please Fix the above errors and submit again.")),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})],32)}var X={emits:["save-data"],data(){return{firstName:{val:"",isValid:!0},lastName:{val:"",isValid:!0},description:{val:"",isValid:!0},rate:{val:null,isValid:!0},areas:{val:[""],isValid:!0},formIsValid:!0}},methods:{clearValidity(e){this[e].isValid=!0},validateForm(){this.formIsValid=!0,""===this.firstName.val&&(this.firstName.isValid=!1,this.formIsValid=!1),""===this.lastName.val&&(this.lastName.isValid=!1,this.formIsValid=!1),""===this.description.val&&(this.description.isValid=!1,this.formIsValid=!1),(!this.rate.val||this.rate.val<0)&&(this.rate.isValid=!1,this.formIsValid=!1),0===this.areas.val.length&&(this.areas.isValid=!1,this.formIsValid=!1)},submitForm(){if(this.validateForm(),!this.formIsValid)return;const e={first:this.firstName.val,last:this.lastName.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};this.$emit("save-data",e)}}};const ee=(0,m.Z)(X,[["render",Q],["__scopeId","data-v-7bf60b17"]]);var te=ee,ae={components:{CoachForm:te},methods:{savaData(e){this.$store.dispatch("coaches/registerCoach",e),this.$router.replace("/coaches")}}};const re=(0,m.Z)(ae,[["render",O]]);var ne=re;function se(e,t){return" contact a coach "}const ie={},oe=(0,m.Z)(ie,[["render",se]]);var le=oe;function ce(e,t){return"Requests"}const de={},ue=(0,m.Z)(de,[["render",ce]]);var he=ue;const pe=(0,s._)("section",null,null,-1),me=(0,s._)("section",null,null,-1);function fe(e,t){return(0,s.wg)(),(0,s.iD)(s.HY,null,[pe,me],64)}const ve={},_e=(0,m.Z)(ve,[["render",fe]]);var be=_e;const we=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:x},{path:"/coaches/:id",props:!0,component:Z,children:[{path:"contact",component:le}]},{path:"/register",component:ne},{path:"/requests",component:he},{path:"/:notFound(.*)",component:be}]});var ge=we,ke=a(65),ye=(a(7658),{registerCoach(e,t){e.coaches.push(t)}}),Ce={registerCoach(e,t){const a={id:e.rootGetters.userId,firstName:t.first,lastName:t.last,description:t.desc,hourlyRate:t.rate,areas:t.areas};e.commit("registerCoach",a)}},Ve={coaches(e){return e.coaches},hasCoaches(e){return e.coaches&&e.coaches.length>0},isCoach(e,t,a,r){const n=t.coaches,s=r.userId;return n.some((e=>e.id===s))}},Ne={namespaced:!0,state(){return{coaches:[{id:"c1",firstName:"Maximilian",lastName:"Schwarzmüller",areas:["frontend","backend","career"],description:"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",hourlyRate:30},{id:"c2",firstName:"Julie",lastName:"Jones",areas:["frontend","career"],description:"I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",hourlyRate:30}]}},mutations:ye,actions:Ce,getters:Ve};const De=(0,ke.MT)({modules:{coaches:Ne},state(){return{userId:"c3"}},getters:{userId(e){return e.userId}}});var Fe=De;function Ie(e,t,a,r,n,i){const o=(0,s.up)("the-header"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s.Wm)(l)],64)}function xe(e,t){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",null,[(0,s._)("h1",null,[(0,s.Wm)(a,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Find A Coach")])),_:1})]),(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(a,{to:"/coaches"},{default:(0,s.w5)((()=>[(0,s.Uk)("All Coaches")])),_:1}),(0,s.Wm)(a,{to:"/requests"},{default:(0,s.w5)((()=>[(0,s.Uk)("Requests")])),_:1})])])])])}const We={},Ue=(0,m.Z)(We,[["render",xe],["__scopeId","data-v-be74b03c"]]);var $e=Ue,qe={components:{TheHeader:$e}};const Ze=(0,m.Z)(qe,[["render",Ie]]);var je=Ze;const Oe={class:"card"};function Re(e,t){return(0,s.wg)(),(0,s.iD)("div",Oe,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}const Be={},He=(0,m.Z)(Be,[["render",Re],["__scopeId","data-v-1a7da68e"]]);var Le=He;function ze(e,t,a,r,n,i){const o=(0,s.up)("router-link");return a.link?((0,s.wg)(),(0,s.j4)(o,{key:1,to:a.to,class:(0,d.C_)(a.mode)},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["to","class"])):((0,s.wg)(),(0,s.iD)("button",{key:0,class:(0,d.C_)(a.mode)},[(0,s.WI)(e.$slots,"default",{},void 0,!0)],2))}var Ye={props:{mode:{type:String,required:!1,default:""},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};const Se=(0,m.Z)(Ye,[["render",ze],["__scopeId","data-v-55c0e5c7"]]);var Ae=Se;function Me(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("span",{class:(0,d.C_)(["badge",a.type])},(0,d.zw)(i.text),3)}var Pe={props:["type","title"],computed:{text(){return this.title.toUpperCase()}}};const Te=(0,m.Z)(Pe,[["render",Me],["__scopeId","data-v-d9189d3e"]]);var Je=Te;const Ke=(0,r.ri)(je);Ke.use(ge),Ke.use(Fe),Ke.component("base-card",Le),Ke.component("base-button",Ae),Ke.component("base-badge",Je),Ke.mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var d=l(a)}for(t&&t(r);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=self["webpackChunkvue_third_app"]=self["webpackChunkvue_third_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3193)}));r=a.O(r)})();
//# sourceMappingURL=app.fc1a89df.js.map