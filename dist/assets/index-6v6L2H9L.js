import{a as $,_ as j,w as Te,b as q,c as A,d as oe,r as pe,h as Je,T as Ke,e as ge,t as ie,f as Ue,g as Ze,i as Me,j as te,k as ke,m as _e,n as Qe,o as Xe,p as we,q as Ye,s as et,v as tt,x as me,E as nt}from"./el-button-5cKxnlm6.js";import{E as Oe,f as st,C as ot}from"./el-popper-uzo-tpd9.js";import{d as I,o as T,f as ye,w as g,g as w,m as Ne,t as at,b as M,T as Pe,h as lt,i as f,c as z,n as L,j as xe,k as re,r as O,l as Ie,p as ae,q as be,s as Ce,v as Be,x as E,y as X,z as Ae,A as ut,F as Ee,B as Se,C as it,D as rt,E as ct,G as dt,H as ze,I as V,e as Q,J as pt,u as mt,a as _,K as ft,L as vt,_ as ht}from"./index-4WrMr5M0.js";import{t as le}from"./aria-0Hc00wBd.js";const _t=I({name:"ElCollapseTransition"}),bt=I({..._t,setup(e){const s=$("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},a={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(T(),ye(Pe,Ne({name:M(s).b()},at(a)),{default:g(()=>[w(t.$slots,"default")]),_:3},16,["name"]))}});var ue=j(bt,[["__file","collapse-transition.vue"]]);ue.install=e=>{e.component(ue.name,ue)};const gt=ue,Mt=I({name:"ElContainer"}),yt=I({...Mt,props:{direction:{type:String}},setup(e){const s=e,n=lt(),a=$("container"),t=f(()=>s.direction==="vertical"?!0:s.direction==="horizontal"?!1:n&&n.default?n.default().some(c=>{const h=c.type.name;return h==="ElHeader"||h==="ElFooter"}):!1);return(d,c)=>(T(),z("section",{class:L([M(a).b(),M(a).is("vertical",M(t))])},[w(d.$slots,"default")],2))}});var xt=j(yt,[["__file","container.vue"]]);const It=I({name:"ElAside"}),Ct=I({...It,props:{width:{type:String,default:null}},setup(e){const s=e,n=$("aside"),a=f(()=>s.width?n.cssVarBlock({width:s.width}):{});return(t,d)=>(T(),z("aside",{class:L(M(n).b()),style:xe(M(a))},[w(t.$slots,"default")],6))}});var He=j(Ct,[["__file","aside.vue"]]);const Et=I({name:"ElFooter"}),St=I({...Et,props:{height:{type:String,default:null}},setup(e){const s=e,n=$("footer"),a=f(()=>s.height?n.cssVarBlock({height:s.height}):{});return(t,d)=>(T(),z("footer",{class:L(M(n).b()),style:xe(M(a))},[w(t.$slots,"default")],6))}});var Le=j(St,[["__file","footer.vue"]]);const $t=I({name:"ElHeader"}),kt=I({...$t,props:{height:{type:String,default:null}},setup(e){const s=e,n=$("header"),a=f(()=>s.height?n.cssVarBlock({height:s.height}):{});return(t,d)=>(T(),z("header",{class:L(M(n).b()),style:xe(M(a))},[w(t.$slots,"default")],6))}});var je=j(kt,[["__file","header.vue"]]);const wt=I({name:"ElMain"}),Tt=I({...wt,setup(e){const s=$("main");return(n,a)=>(T(),z("main",{class:L(M(s).b())},[w(n.$slots,"default")],2))}});var Re=j(Tt,[["__file","main.vue"]]);const Ot=Te(xt,{Aside:He,Footer:Le,Header:je,Main:Re}),Nt=q(He);q(Le);const Pt=q(je),Bt=q(Re);let At=class{constructor(s,n){this.parent=s,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(s){s===this.subMenuItems.length?s=0:s<0&&(s=this.subMenuItems.length-1),this.subMenuItems[s].focus(),this.subIndex=s}addListeners(){const s=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",a=>{let t=!1;switch(a.code){case A.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case A.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case A.tab:{le(s,"mouseleave");break}case A.enter:case A.space:{t=!0,a.currentTarget.click();break}}return t&&(a.preventDefault(),a.stopPropagation()),!1})})}},zt=class{constructor(s,n){this.domNode=s,this.submenu=null,this.submenu=null,this.init(n)}init(s){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${s}-menu`);n&&(this.submenu=new At(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",s=>{let n=!1;switch(s.code){case A.down:{le(s.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case A.up:{le(s.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case A.tab:{le(s.currentTarget,"mouseleave");break}case A.enter:case A.space:{n=!0,s.currentTarget.click();break}}n&&s.preventDefault()})}},Ht=class{constructor(s,n){this.domNode=s,this.init(n)}init(s){const n=this.domNode.childNodes;Array.from(n).forEach(a=>{a.nodeType===1&&new zt(a,s)})}};const Lt=I({name:"ElMenuCollapseTransition",setup(){const e=$("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,a){oe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",a()},onAfterEnter(n){pe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Je(n,e.m("collapse"))?(pe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),oe(n,e.m("collapse"))):(oe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),pe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){oe(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function jt(e,s,n,a,t,d){return T(),ye(Pe,Ne({mode:"out-in"},e.listeners),{default:g(()=>[w(e.$slots,"default")]),_:3},16)}var Rt=j(Lt,[["render",jt],["__file","menu-collapse-transition.vue"]]);function We(e,s){const n=f(()=>{let t=e.parent;const d=[s.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:f(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Wt(e){return f(()=>{const n=e.backgroundColor;return n?new Ke(n).shade(20).toString():""})}const De=(e,s)=>{const n=$("menu");return f(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Wt(e).value||"","active-color":e.activeTextColor||"",level:`${s}`}))},Dt=ge({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:te},expandOpenIcon:{type:te},collapseCloseIcon:{type:te},collapseOpenIcon:{type:te}}),fe="ElSubMenu";var $e=I({name:fe,props:Dt,setup(e,{slots:s,expose:n}){const a=Se(),{indexPath:t,parentMenu:d}=We(a,f(()=>e.index)),c=$("menu"),h=$("sub-menu"),u=re("rootMenu");u||ie(fe,"can not inject root menu");const p=re(`subMenu:${d.value.uid}`);p||ie(fe,"can not inject sub menu");const v=O({}),y=O({});let S;const N=O(!1),G=O(),R=O(null),W=f(()=>F.value==="horizontal"&&D.value?"bottom-start":"right-start"),J=f(()=>F.value==="horizontal"&&D.value||F.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?P.value?e.expandOpenIcon:e.expandCloseIcon:Ue:e.collapseCloseIcon&&e.collapseOpenIcon?P.value?e.collapseOpenIcon:e.collapseCloseIcon:Ze),D=f(()=>p.level===0),Y=f(()=>{const i=e.teleported;return i===void 0?D.value:i}),ce=f(()=>u.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),de=f(()=>F.value==="horizontal"&&D.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),P=f(()=>u.openedMenus.includes(e.index)),K=f(()=>{let i=!1;return Object.values(v.value).forEach(m=>{m.active&&(i=!0)}),Object.values(y.value).forEach(m=>{m.active&&(i=!0)}),i}),F=f(()=>u.props.mode),U=Ie({index:e.index,indexPath:t,active:K}),ee=De(u.props,p.level+1),ne=f(()=>{var i;return(i=e.popperOffset)!=null?i:u.props.popperOffset}),Z=f(()=>{var i;return(i=e.popperClass)!=null?i:u.props.popperClass}),se=f(()=>{var i;return(i=e.showTimeout)!=null?i:u.props.showTimeout}),o=f(()=>{var i;return(i=e.hideTimeout)!=null?i:u.props.hideTimeout}),l=()=>{var i,m,C;return(C=(m=(i=R.value)==null?void 0:i.popperRef)==null?void 0:m.popperInstanceRef)==null?void 0:C.destroy()},r=i=>{i||l()},x=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:K.value})},b=(i,m=se.value)=>{var C;if(i.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,S==null||S(),{stop:S}=ke(()=>{u.openMenu(e.index,t.value)},m),Y.value&&((C=d.value.vnode.el)==null||C.dispatchEvent(new MouseEvent("mouseenter")))}},B=(i=!1)=>{var m;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){p.mouseInChild.value=!1;return}S==null||S(),p.mouseInChild.value=!1,{stop:S}=ke(()=>!N.value&&u.closeMenu(e.index,t.value),o.value),Y.value&&i&&((m=p.handleMouseleave)==null||m.call(p,!0))};ae(()=>u.props.collapse,i=>r(!!i));{const i=C=>{y.value[C.index]=C},m=C=>{delete y.value[C.index]};be(`subMenu:${a.uid}`,{addSubMenu:i,removeSubMenu:m,handleMouseleave:B,mouseInChild:N,level:p.level+1})}return n({opened:P}),Ce(()=>{u.addSubMenu(U),p.addSubMenu(U)}),Be(()=>{p.removeSubMenu(U),u.removeSubMenu(U)}),()=>{var i;const m=[(i=s.title)==null?void 0:i.call(s),E(Me,{class:h.e("icon-arrow"),style:{transform:P.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>X(J.value)?E(a.appContext.components[J.value]):E(J.value)})],C=u.isMenuPopup?E(Oe,{ref:R,visible:P.value,effect:"light",pure:!0,offset:ne.value,showArrow:!1,persistent:!0,popperClass:Z.value,placement:W.value,teleported:Y.value,fallbackPlacements:de.value,transition:ce.value,gpuAcceleration:!1},{content:()=>{var k;return E("div",{class:[c.m(F.value),c.m("popup-container"),Z.value],onMouseenter:H=>b(H,100),onMouseleave:()=>B(!0),onFocus:H=>b(H,100)},[E("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${W.value}`)],style:ee.value},[(k=s.default)==null?void 0:k.call(s)])])},default:()=>E("div",{class:h.e("title"),onClick:x},m)}):E(Ee,{},[E("div",{class:h.e("title"),ref:G,onClick:x},m),E(gt,{},{default:()=>{var k;return Ae(E("ul",{role:"menu",class:[c.b(),c.m("inline")],style:ee.value},[(k=s.default)==null?void 0:k.call(s)]),[[ut,P.value]])}})]);return E("li",{class:[h.b(),h.is("active",K.value),h.is("opened",P.value),h.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:P.value,onMouseenter:b,onMouseleave:()=>B(),onFocus:b},[C])}}});const Ft=ge({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:_e(Array),default:()=>Qe([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:te,default:()=>Xe},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),ve=e=>Array.isArray(e)&&e.every(s=>X(s)),Vt={close:(e,s)=>X(e)&&ve(s),open:(e,s)=>X(e)&&ve(s),select:(e,s,n,a)=>X(e)&&ve(s)&&rt(n)&&(a===void 0||a instanceof Promise)};var qt=I({name:"ElMenu",props:Ft,emits:Vt,setup(e,{emit:s,slots:n,expose:a}){const t=Se(),d=t.appContext.config.globalProperties.$router,c=O(),h=$("menu"),u=$("sub-menu"),p=O(-1),v=O(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),y=O(e.defaultActive),S=O({}),N=O({}),G=f(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),R=()=>{const o=y.value&&S.value[y.value];if(!o||e.mode==="horizontal"||e.collapse)return;o.indexPath.forEach(r=>{const x=N.value[r];x&&W(r,x.indexPath)})},W=(o,l)=>{v.value.includes(o)||(e.uniqueOpened&&(v.value=v.value.filter(r=>l.includes(r))),v.value.push(o),s("open",o,l))},J=o=>{const l=v.value.indexOf(o);l!==-1&&v.value.splice(l,1)},D=(o,l)=>{J(o),s("close",o,l)},Y=({index:o,indexPath:l})=>{v.value.includes(o)?D(o,l):W(o,l)},ce=o=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:l,indexPath:r}=o;if(!(we(l)||we(r)))if(e.router&&d){const x=o.route||l,b=d.push(x).then(B=>(B||(y.value=l),B));s("select",l,r,{index:l,indexPath:r,route:x},b)}else y.value=l,s("select",l,r,{index:l,indexPath:r})},de=o=>{const l=S.value,r=l[o]||y.value&&l[y.value]||l[e.defaultActive];r?y.value=r.index:y.value=o},P=o=>{const l=getComputedStyle(o),r=Number.parseInt(l.marginLeft,10),x=Number.parseInt(l.marginRight,10);return o.offsetWidth+r+x||0},K=()=>{var o,l;if(!c.value)return-1;const r=Array.from((l=(o=c.value)==null?void 0:o.childNodes)!=null?l:[]).filter(H=>H.nodeName!=="#comment"&&(H.nodeName!=="#text"||H.nodeValue)),x=64,b=getComputedStyle(c.value),B=Number.parseInt(b.paddingLeft,10),i=Number.parseInt(b.paddingRight,10),m=c.value.clientWidth-B-i;let C=0,k=0;return r.forEach((H,Ge)=>{C+=P(H),C<=m-x&&(k=Ge+1)}),k===r.length?-1:k},F=o=>N.value[o].indexPath,U=(o,l=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{o()},l)}};let ee=!0;const ne=()=>{if(p.value===K())return;const o=()=>{p.value=-1,ct(()=>{p.value=K()})};ee?o():U(o)(),ee=!1};ae(()=>e.defaultActive,o=>{S.value[o]||(y.value=""),de(o)}),ae(()=>e.collapse,o=>{o&&(v.value=[])}),ae(S.value,R);let Z;it(()=>{e.mode==="horizontal"&&e.ellipsis?Z=Ye(c,ne).stop:Z==null||Z()});const se=O(!1);{const o=b=>{N.value[b.index]=b},l=b=>{delete N.value[b.index]};be("rootMenu",Ie({props:e,openedMenus:v,items:S,subMenus:N,activeIndex:y,isMenuPopup:G,addMenuItem:b=>{S.value[b.index]=b},removeMenuItem:b=>{delete S.value[b.index]},addSubMenu:o,removeSubMenu:l,openMenu:W,closeMenu:D,handleMenuItemClick:ce,handleSubMenuClick:Y})),be(`subMenu:${t.uid}`,{addSubMenu:o,removeSubMenu:l,mouseInChild:se,level:0})}return Ce(()=>{e.mode==="horizontal"&&new Ht(t.vnode.el,h.namespace.value)}),a({open:l=>{const{indexPath:r}=N.value[l];r.forEach(x=>W(x,r))},close:J,handleResize:ne}),()=>{var o,l;let r=(l=(o=n.default)==null?void 0:o.call(n))!=null?l:[];const x=[];if(e.mode==="horizontal"&&c.value){const m=st(r),C=p.value===-1?m:m.slice(0,p.value),k=p.value===-1?[]:m.slice(p.value);k!=null&&k.length&&e.ellipsis&&(r=C,x.push(E($e,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>E(Me,{class:u.e("icon-more")},{default:()=>E(e.ellipsisIcon)}),default:()=>k})))}const b=De(e,0),B=e.closeOnClickOutside?[[ot,()=>{v.value.length&&(se.value||(v.value.forEach(m=>s("close",m,F(m))),v.value=[]))}]]:[],i=Ae(E("ul",{key:String(e.collapse),role:"menubar",ref:c,style:b.value,class:{[h.b()]:!0,[h.m(e.mode)]:!0,[h.m("collapse")]:e.collapse}},[...r,...x]),B);return e.collapseTransition&&e.mode==="vertical"?E(Rt,()=>i):i}}});const Gt=ge({index:{type:_e([String,null]),default:null},route:{type:_e([String,Object])},disabled:Boolean}),Jt={click:e=>X(e.index)&&Array.isArray(e.indexPath)},he="ElMenuItem",Kt=I({name:he,components:{ElTooltip:Oe},props:Gt,emits:Jt,setup(e,{emit:s}){const n=Se(),a=re("rootMenu"),t=$("menu"),d=$("menu-item");a||ie(he,"can not inject root menu");const{parentMenu:c,indexPath:h}=We(n,dt(e,"index")),u=re(`subMenu:${c.value.uid}`);u||ie(he,"can not inject sub menu");const p=f(()=>e.index===a.activeIndex),v=Ie({index:e.index,indexPath:h,active:p}),y=()=>{e.disabled||(a.handleMenuItemClick({index:e.index,indexPath:h.value,route:e.route}),s("click",v))};return Ce(()=>{u.addSubMenu(v),a.addMenuItem(v)}),Be(()=>{u.removeSubMenu(v),a.removeMenuItem(v)}),{parentMenu:c,rootMenu:a,active:p,nsMenu:t,nsMenuItem:d,handleClick:y}}});function Ut(e,s,n,a,t,d){const c=ze("el-tooltip");return T(),z("li",{class:L([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:s[0]||(s[0]=(...h)=>e.handleClick&&e.handleClick(...h))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(T(),ye(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:g(()=>[w(e.$slots,"title")]),default:g(()=>[V("div",{class:L(e.nsMenu.be("tooltip","trigger"))},[w(e.$slots,"default")],2)]),_:3},8,["effect"])):(T(),z(Ee,{key:1},[w(e.$slots,"default"),w(e.$slots,"title")],64))],2)}var Fe=j(Kt,[["render",Ut],["__file","menu-item.vue"]]);const Zt={title:String},Qt="ElMenuItemGroup",Xt=I({name:Qt,props:Zt,setup(){return{ns:$("menu-item-group")}}});function Yt(e,s,n,a,t,d){return T(),z("li",{class:L(e.ns.b())},[V("div",{class:L(e.ns.e("title"))},[e.$slots.title?w(e.$slots,"title",{key:1}):(T(),z(Ee,{key:0},[Q(pt(e.title),1)],64))],2),V("ul",null,[w(e.$slots,"default")])],2)}var Ve=j(Xt,[["render",Yt],["__file","menu-item-group.vue"]]);const en=Te(qt,{MenuItem:Fe,MenuItemGroup:Ve,SubMenu:$e}),tn=q(Fe);q(Ve);const nn=q($e),qe=e=>(ft("data-v-b8f5730f"),e=e(),vt(),e),sn={class:"common-layout"},on={class:"flex items-center"},an=qe(()=>V("h2",{class:"text-2xl text-slate-300 tracking-widest"},"吃货联盟管理系统",-1)),ln={class:"flex items-center"},un=qe(()=>V("span",{class:"text-slate-300 tracking-widest"},"admin 欢迎您！",-1)),rn=I({__name:"index",setup(e){const s=mt(),n=()=>{localStorage.removeItem("userId"),s.push("/admin/login")};return(a,t)=>{const d=Me,c=nt,h=Pt,u=tn,p=nn,v=en,y=Nt,S=ze("router-view"),N=Bt,G=Ot;return T(),z("div",sn,[_(G,null,{default:g(()=>[_(h,{class:"flex justify-between items-center bg-slate-800"},{default:g(()=>[V("div",on,[an,_(d,null,{default:g(()=>[_(M(et),{class:"text-slate-100 mt-1 ml-1"})]),_:1})]),V("div",ln,[un,_(c,{type:"primary",size:"small",onClick:n},{default:g(()=>[Q("退出")]),_:1})])]),_:1}),_(G,null,{default:g(()=>[_(y,{width:"200px",class:"h-[calc(100vh-60px)] bg-slate-800"},{default:g(()=>[_(v,{"default-openeds":["1-1"],"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","text-color":"#fff"},{default:g(()=>[_(p,{index:"1-1"},{title:g(()=>[_(d,null,{default:g(()=>[_(M(tt),{class:"text-slate-100 mt-1"})]),_:1}),Q(" 订单管理")]),default:g(()=>[_(u,{index:"1-4-1",onClick:t[0]||(t[0]=R=>M(s).push("/admin/dish"))},{default:g(()=>[_(d,null,{default:g(()=>[_(M(me),{class:"text-slate-100"})]),_:1}),Q(" 菜品详情 ")]),_:1}),_(u,{index:"1-4-2",onClick:t[1]||(t[1]=R=>M(s).push("/admin/order"))},{default:g(()=>[_(d,null,{default:g(()=>[_(M(me),{class:"text-slate-100"})]),_:1}),Q(" 订单详情 ")]),_:1}),_(u,{index:"1-4-3",onClick:t[2]||(t[2]=R=>M(s).push("/admin/dishType"))},{default:g(()=>[_(d,null,{default:g(()=>[_(M(me),{class:"text-slate-100"})]),_:1}),Q(" 菜品类型 ")]),_:1})]),_:1})]),_:1})]),_:1}),_(N,{class:"h-[calc(100vh-60px)]"},{default:g(()=>[_(S)]),_:1})]),_:1})]),_:1})])}}}),_n=ht(rn,[["__scopeId","data-v-b8f5730f"]]);export{_n as default};
