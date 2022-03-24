"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[834],{2947:(e,t,s)=>{s.d(t,{H:()=>l}),salla.event.setMaxListeners(20);class i extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,t){var s;return null===(s=this.getElement(e))||void 0===s?void 0:s.getAttribute(t)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const l=new i},4834:(e,t,s)=>{s.r(t),s.d(t,{salla_verify_modal:()=>a});var i=s(9785),l=s(2947);const a=class{constructor(e){(0,i.r)(this,e),this.verified=(0,i.c)(this,"verified",7),this.initiated=!1,this.by="sms",this.autoReload=!0,this.withoutModal?this.modal={show:()=>"",hide:()=>""}:salla.event.on("profile::verify.mobile",(e=>{this.url="profile/verify-mobile",this.show(e)})),salla.event.on("languages::translations.loaded",(()=>{var e;this.title=salla.lang.get("pages.profile.verify_title"),null===(e=this.btn)||void 0===e||e.setText(salla.lang.get("pages.profile.verify"))}))}async getCode(){return this.code.value}async show(e){var t;this.data=e,this.resendTimer(),this.otpInputs=this.host.querySelectorAll(".s-verify-modal-input"),this.initiated||(l.H.on("input",".s-verify-modal-input",(e=>salla.helpers.inputDigitsOnly(e.target))),l.H.onKeyUp(".s-verify-modal-input",(e=>{var t,s,i,l;let a=e.keyCode||e.charCode;e.target.value?(null===(t=e.target.nextElementSibling)||void 0===t||t.focus(),null===(s=e.target.nextElementSibling)||void 0===s||s.select()):[8,46].includes(a)&&(null===(i=e.target.previousElementSibling)||void 0===i||i.focus(),null===(l=e.target.previousElementSibling)||void 0===l||l.select()),this.toggleOTPSubmit()})),l.H.on("paste",".s-verify-modal-input",(e=>{let t=salla.helpers.number(e.clipboardData.getData("text")).replace(/[^0-9.]/g,"").replace("..",".");this.otpInputs.forEach(((e,s)=>e.value=t[s]||"")),this.toggleOTPSubmit(),setTimeout((()=>this.otpInputs[3].focus()),100)})),this.initiated=!0),this.reset(),!this.withoutModal&&(null===(t=this.modal)||void 0===t||t.setTitle(this.title)),this.modal.show()}toggleOTPSubmit(){let e=[];if(this.otpInputs.forEach((t=>t.value&&e.push(t.value))),this.code.value=e.join(""),4===e.length)return this.btn.removeAttribute("disabled"),void this.btn.click();this.btn.setAttribute("disabled","")}reset(){this.otpInputs.forEach((e=>e.value="")),this.code.value="",this.otpInputs[0].focus()}resendTimer(){l.H.showElement(this.resendMessage).hideElement(this.resend);let e=30,t=setInterval((()=>{-1===e?(clearTimeout(t),l.H.hideElement(this.resendMessage).showElement(this.resend)):(this.timer.innerHTML=`${e>=10?e:"0"+e} : 00`,e--)}),1e3)}resendCode(){return this.btn.stop().then((()=>this.btn.disable())).then((()=>{this.otpInputs.forEach((e=>e.value="")),this.otpInputs[0].focus()})).then((()=>salla.api.auth.resend(Object.assign({resend_by:this.by},this.data)))).then((()=>this.resendTimer())).catch((()=>this.resendTimer()))}submit(){let e=Object.assign({code:this.code.value},this.data);return this.btn.load().then((()=>this.btn.disable())).then((()=>this.url?salla.api.auth.request(this.url,e):salla.api.auth.verify("sms"==this.by?"mobile":this.by,e))).then((e=>this.verified.emit(e))).then((()=>this.btn.stop()&&this.btn.disable())).then((()=>this.modal.hide())).then((()=>this.autoReload&&window.location.reload())).catch((()=>this.btn.stop()&&this.btn.enable()&&this.reset()))}render(){return this.withoutModal?(0,i.h)(i.H,null,this.myBody()):(0,i.h)("salla-modal",{icon:"sicon-android-phone",width:"xs",id:"s-verify-modal",ref:e=>this.modal=e,title:this.title},this.myBody())}myBody(){return(0,i.h)("div",{id:"s-verify-modal"},(0,i.h)("div",{class:"s-verify-modal-message",innerHTML:salla.lang.get("pages.profile.verify_message")}),(0,i.h)("input",{type:"hidden",name:"code",maxlength:"4",required:!0,ref:e=>this.code=e}),(0,i.h)("div",{class:"s-verify-modal-codes",dir:"ltr"},[1,2,3,4].map((()=>(0,i.h)("input",{type:"text",maxlength:"1",class:"s-verify-modal-input",required:!0})))),(0,i.h)("div",{slot:"footer",class:"s-verify-modal-footer"},(0,i.h)("salla-button",{class:"s-verify-modal-submit","loader-position":"center",disabled:!0,onClick:()=>this.submit(),ref:e=>this.btn=e},salla.lang.get("pages.profile.verify")),(0,i.h)("p",{class:"s-verify-modal-resend-message",ref:e=>this.resendMessage=e},salla.lang.get("blocks.header.resend_after"),(0,i.h)("b",{class:"s-verify-modal-timer",ref:e=>this.timer=e})),(0,i.h)("a",{href:"#",class:"s-verify-modal-resend",onClick:()=>this.resendCode(),ref:e=>this.resend=e},salla.lang.get("blocks.comments.submit"))),(0,i.h)("slot",{name:"after-footer"}))}get host(){return(0,i.g)(this)}};a.style="salla-verify-modal{display:block}[dir=ltr] #s-verify-modal .s-verify-modal-back{transform:scale(-1)}"}}]);