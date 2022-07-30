const Be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}};Be();function I(){}function ze(t){return t()}function be(){return Object.create(null)}function ht(t){t.forEach(ze)}function Ge(t){return typeof t=="function"}function St(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Xe(t){return Object.keys(t).length===0}function j(t){return t==null?"":t}function c(t,e){t.appendChild(e)}function q(t,e,l){t.insertBefore(e,l||null)}function k(t){t.parentNode.removeChild(t)}function R(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function a(t){return document.createElement(t)}function Ae(t){return document.createTextNode(t)}function h(){return Ae(" ")}function $(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function _(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Re(t){return Array.from(t.childNodes)}function Yt(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function d(t,e,l){t.classList[l?"add":"remove"](e)}let Ut;function yt(t){Ut=t}const kt=[],pe=[],Mt=[],me=[],Ze=Promise.resolve();let Dt=!1;function We(){Dt||(Dt=!0,Ze.then(Pe))}function Kt(t){Mt.push(t)}const Wt=new Set;let Lt=0;function Pe(){const t=Ut;do{for(;Lt<kt.length;){const e=kt[Lt];Lt++,yt(e),Ye(e.$$)}for(yt(null),kt.length=0,Lt=0;pe.length;)pe.pop()();for(let e=0;e<Mt.length;e+=1){const l=Mt[e];Wt.has(l)||(Wt.add(l),l())}Mt.length=0}while(kt.length);for(;me.length;)me.pop()();Dt=!1,Wt.clear(),yt(t)}function Ye(t){if(t.fragment!==null){t.update(),ht(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Kt)}}const Et=new Set;let st;function De(){st={r:0,c:[],p:st}}function Ke(){st.r||ht(st.c),st=st.p}function Ft(t,e){t&&t.i&&(Et.delete(t),t.i(e))}function ve(t,e,l,n){if(t&&t.o){if(Et.has(t))return;Et.add(t),st.c.push(()=>{Et.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function ge(t){t&&t.c()}function Jt(t,e,l,n){const{fragment:o,on_mount:s,on_destroy:f,after_update:i}=t.$$;o&&o.m(e,l),n||Kt(()=>{const m=s.map(ze).filter(Ge);f?f.push(...m):ht(m),t.$$.on_mount=[]}),i.forEach(Kt)}function Qt(t,e){const l=t.$$;l.fragment!==null&&(ht(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(kt.push(t),We(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,l,n,o,s,f,i=[-1]){const m=Ut;yt(t);const v=t.$$={fragment:null,ctx:null,props:s,update:I,not_equal:o,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:be(),dirty:i,skip_bound:!1,root:e.target||m.$$.root};f&&f(v.root);let p=!1;if(v.ctx=l?l(t,e.props||{},(y,C,...N)=>{const g=N.length?N[0]:C;return v.ctx&&o(v.ctx[y],v.ctx[y]=g)&&(!v.skip_bound&&v.bound[y]&&v.bound[y](g),p&&Fe(t,y)),C}):[],v.update(),p=!0,ht(v.before_update),v.fragment=n?n(v.ctx):!1,e.target){if(e.hydrate){const y=Re(e.target);v.fragment&&v.fragment.l(y),y.forEach(k)}else v.fragment&&v.fragment.c();e.intro&&Ft(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),Pe()}yt(m)}class Ot{$destroy(){Qt(this,1),this.$destroy=I}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Je={match(t,e){let l=this._matchAndSetComponent(t);return l||(l=e),l},_matchAndSetComponent(t){for(const e of t){const l=e.path.replace(/<[^/]+>/g,"[^/]+");if(new RegExp(`^${l}/?$`).test(location.pathname)){let o=e;return o.params=this._setParams(e.path),o}}},_setParams(t){let e={};for(const[l,n]of t.split("/").entries())if(n.startsWith("<")){const o=n.replace("<","").replace(">",""),s=location.pathname.split("/")[l];e[o]=s}return e}};function Qe(t){let e,l,n;return{c(){e=a("h1"),e.textContent="404",l=h(),n=a("div"),n.textContent="\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",Yt(n,"margin-top","12px")},m(o,s){q(o,e,s),q(o,l,s),q(o,n,s)},p:I,i:I,o:I,d(o){o&&k(e),o&&k(l),o&&k(n)}}}class Ue extends Ot{constructor(e){super(),Ht(this,e,null,Qe,St,{})}}function Ve(t){let e;return{c(){e=Ae("home")},m(l,n){q(l,e,n)},p:I,i:I,o:I,d(l){l&&k(e)}}}class xe extends Ot{constructor(e){super(),Ht(this,e,null,Ve,St,{})}}function ft(t,e,l,n,o,s){return`<svg xmlns="http://www.w3.org/2000/svg"
                 width="${t||24}px"
                 height="${e||24}px"
                 ${n?'style="'+n+'"':""}
                 ${l?'class="'+l+'"':""}
                 stroke-width="${o||24/(t||24)*2}"
                 viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
            >
                ${s}
            </svg>`}const $t={home:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    `),external_link:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
       <line x1="10" y1="14" x2="20" y2="4"></line>
       <polyline points="15 4 20 4 20 9"></polyline>
    `),arrow_up:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="18" y1="11" x2="12" y2="5"></line>
        <line x1="6" y1="11" x2="12" y2="5"></line>
    `),tie:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z"></path>
<!--   <path d="M10.5 7h3l5 5.5"></path>-->
    `),check:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l5 5l10 -10"></path>
    `),x:({width:t,height:e,cls:l,style:n,stroke:o}={})=>ft(t,e,l,n,o,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    `)};function ke(t,e,l){const n=t.slice();return n[30]=e[l],n}function ye(t,e,l){const n=t.slice();return n[33]=e[l],n}function $e(t,e,l){const n=t.slice();return n[36]=e[l],n}function qe(t,e,l){const n=t.slice();return n[33]=e[l],n}function Ce(t,e,l){const n=t.slice();return n[36]=e[l],n}function we(t,e,l){const n=t.slice();return n[30]=e[l],n}function Le(t,e,l){const n=t.slice();return n[33]=e[l],n}function Me(t,e,l){const n=t.slice();return n[33]=e[l],n}function Ee(t){let e,l;return{c(){e=a("button"),_(e,"class",l=j(`button ${t[33]} ${t[0]} ${t[3]} ${t[4]} ${t[2]} ${t[6]}`)+" svelte-o03ybq"),e.disabled=t[5]},m(n,o){q(n,e,o),e.innerHTML=t[1]},p(n,o){o[0]&2&&(e.innerHTML=n[1]),o[0]&93&&l!==(l=j(`button ${n[33]} ${n[0]} ${n[3]} ${n[4]} ${n[2]} ${n[6]}`)+" svelte-o03ybq")&&_(e,"class",l),o[0]&32&&(e.disabled=n[5])},d(n){n&&k(e)}}}function Se(t){let e,l;return{c(){e=a("button"),_(e,"class",l=j(`button ${t[33]} ${t[0]} ${t[30]} ${t[3]} ${t[4]} ${t[2]} ${t[6]}`)+" svelte-o03ybq"),e.disabled=t[5]},m(n,o){q(n,e,o),e.innerHTML=t[1]},p(n,o){o[0]&2&&(e.innerHTML=n[1]),o[0]&93&&l!==(l=j(`button ${n[33]} ${n[0]} ${n[30]} ${n[3]} ${n[4]} ${n[2]} ${n[6]}`)+" svelte-o03ybq")&&_(e,"class",l),o[0]&32&&(e.disabled=n[5])},d(n){n&&k(e)}}}function He(t){let e,l,n=t[8],o=[];for(let s=0;s<n.length;s+=1)o[s]=Se(Le(t,n,s));return{c(){e=a("div");for(let s=0;s<o.length;s+=1)o[s].c();l=h()},m(s,f){q(s,e,f);for(let i=0;i<o.length;i+=1)o[i].m(e,null);c(e,l)},p(s,f){if(f[0]&383){n=s[8];let i;for(i=0;i<n.length;i+=1){const m=Le(s,n,i);o[i]?o[i].p(m,f):(o[i]=Se(m),o[i].c(),o[i].m(e,l))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(s){s&&k(e),R(o,s)}}}function Oe(t){let e,l;return{c(){e=a("button"),_(e,"class",l=j(`button ${t[33]} ${t[0]} ${t[3]} ${t[4]} ${t[2]} ${t[6]}`)+" svelte-o03ybq"),e.disabled=t[5],d(e,"_current",t[36]===2)},m(n,o){q(n,e,o),e.innerHTML=t[1]},p(n,o){o[0]&2&&(e.innerHTML=n[1]),o[0]&93&&l!==(l=j(`button ${n[33]} ${n[0]} ${n[3]} ${n[4]} ${n[2]} ${n[6]}`)+" svelte-o03ybq")&&_(e,"class",l),o[0]&32&&(e.disabled=n[5]),o[0]&93&&d(e,"_current",n[36]===2)},d(n){n&&k(e)}}}function Ie(t){let e,l,n=[1,2,3],o=[];for(let s=0;s<3;s+=1)o[s]=Oe(Ce(t,n,s));return{c(){e=a("div");for(let s=0;s<3;s+=1)o[s].c();l=h(),_(e,"class","button-group svelte-o03ybq")},m(s,f){q(s,e,f);for(let i=0;i<3;i+=1)o[i].m(e,null);c(e,l)},p(s,f){if(f[0]&255){n=[1,2,3];let i;for(i=0;i<3;i+=1){const m=Ce(s,n,i);o[i]?o[i].p(m,f):(o[i]=Oe(m),o[i].c(),o[i].m(e,l))}for(;i<3;i+=1)o[i].d(1)}},d(s){s&&k(e),R(o,s)}}}function Ne(t){let e,l;return{c(){e=a("button"),_(e,"class",l=j(`button ${t[33]} ${t[0]} ${t[30]} ${t[3]} ${t[4]} ${t[2]} ${t[6]}`)+" svelte-o03ybq"),e.disabled=t[5],d(e,"_current",t[36]===2)},m(n,o){q(n,e,o),e.innerHTML=t[1]},p(n,o){o[0]&2&&(e.innerHTML=n[1]),o[0]&93&&l!==(l=j(`button ${n[33]} ${n[0]} ${n[30]} ${n[3]} ${n[4]} ${n[2]} ${n[6]}`)+" svelte-o03ybq")&&_(e,"class",l),o[0]&32&&(e.disabled=n[5]),o[0]&93&&d(e,"_current",n[36]===2)},d(n){n&&k(e)}}}function Te(t){let e,l=[1,2,3],n=[];for(let o=0;o<3;o+=1)n[o]=Ne($e(t,l,o));return{c(){e=a("div");for(let o=0;o<3;o+=1)n[o].c();_(e,"class","button-group svelte-o03ybq")},m(o,s){q(o,e,s);for(let f=0;f<3;f+=1)n[f].m(e,null)},p(o,s){if(s[0]&383){l=[1,2,3];let f;for(f=0;f<3;f+=1){const i=$e(o,l,f);n[f]?n[f].p(i,s):(n[f]=Ne(i),n[f].c(),n[f].m(e,null))}for(;f<3;f+=1)n[f].d(1)}},d(o){o&&k(e),R(n,o)}}}function je(t){let e,l,n=t[8],o=[];for(let s=0;s<n.length;s+=1)o[s]=Te(ye(t,n,s));return{c(){e=a("div");for(let s=0;s<o.length;s+=1)o[s].c();l=h(),_(e,"class","buttons-group svelte-o03ybq")},m(s,f){q(s,e,f);for(let i=0;i<o.length;i+=1)o[i].m(e,null);c(e,l)},p(s,f){if(f[0]&383){n=s[8];let i;for(i=0;i<n.length;i+=1){const m=ye(s,n,i);o[i]?o[i].p(m,f):(o[i]=Te(m),o[i].c(),o[i].m(e,l))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(s){s&&k(e),R(o,s)}}}function tn(t){let e,l,n,o,s,f,i,m,v,p,y,C,N,g,z,M,It,A,Nt,Z,bt,Tt,W,P,jt,B,zt,Y,pt,At,D,K,Vt,F,xt,rt,qt,te,G,J,ee,Q,ne,U,le,ct,Ct,oe,S,V,se,x,re,tt,ce,et,ie,it,wt,ue,ut,nt,_e,lt,Pt,T,X,Bt,ae,mt,fe,ot,vt,de,Gt,gt,Xt,he,_t=t[7],w=[];for(let r=0;r<_t.length;r+=1)w[r]=Ee(Me(t,_t,r));let Rt=["","_bordered"],H=[];for(let r=0;r<2;r+=1)H[r]=He(we(t,Rt,r));let at=t[7],L=[];for(let r=0;r<at.length;r+=1)L[r]=Ie(qe(t,at,r));let Zt=["","_bordered"],O=[];for(let r=0;r<2;r+=1)O[r]=je(ke(t,Zt,r));return{c(){e=a("div"),l=a("div"),n=a("div"),n.textContent="Sizes",o=h(),s=a("div"),f=a("button"),f.textContent="XS",i=h(),m=a("button"),m.textContent="S",v=h(),p=a("button"),p.textContent="M",y=h(),C=a("button"),C.textContent="L",N=h(),g=a("button"),g.textContent="XL",z=h(),M=a("button"),M.textContent="XXL",It=h(),A=a("button"),A.textContent="XXXL",Nt=h(),Z=a("div"),bt=a("div"),bt.textContent="Loading",Tt=h(),W=a("div"),P=a("button"),P.textContent="Yes",jt=h(),B=a("button"),B.textContent="No",zt=h(),Y=a("div"),pt=a("div"),pt.textContent="Disabled",At=h(),D=a("div"),K=a("button"),K.textContent="Yes",Vt=h(),F=a("button"),F.textContent="No",xt=h(),rt=a("div"),qt=a("div"),qt.textContent="Shape",te=h(),G=a("div"),J=a("button"),J.textContent="Normal",ee=h(),Q=a("button"),Q.textContent="Square",ne=h(),U=a("button"),U.textContent="Round",le=h(),ct=a("div"),Ct=a("div"),Ct.textContent="Icons",oe=h(),S=a("div"),V=a("button"),V.textContent="Only text",se=h(),x=a("button"),x.textContent="Left icon",re=h(),tt=a("button"),tt.textContent="Right icon",ce=h(),et=a("button"),et.textContent="Only icon",ie=h(),it=a("div"),wt=a("div"),wt.textContent="Adjust icon",ue=h(),ut=a("div"),nt=a("button"),nt.textContent="Yes",_e=h(),lt=a("button"),lt.textContent="No",Pt=h(),T=a("div"),X=a("div");for(let r=0;r<w.length;r+=1)w[r].c();Bt=h();for(let r=0;r<2;r+=1)H[r].c();ae=h(),mt=a("div"),mt.textContent="Group",fe=h(),ot=a("div"),vt=a("div");for(let r=0;r<L.length;r+=1)L[r].c();de=h();for(let r=0;r<2;r+=1)O[r].c();Gt=h(),gt=a("div"),gt.innerHTML=`<p>\u2014 Transparent is useful as a link on a dark background</p> 
<p>\u2014 Medium actually does not need &quot;_m&quot; by default</p> 
<p>\u2014 You probably want to control icon size by html, but if you want to adjust icon automatically, use &quot;_adjust-icon&quot;</p>`,_(n,"class","filter-title svelte-o03ybq"),_(f,"class","button _s"),d(f,"_current",t[0]==="_xs"),_(m,"class","button _s"),d(m,"_current",t[0]==="_s"),_(p,"class","button _s"),d(p,"_current",t[0]==="_m"),_(C,"class","button _s"),d(C,"_current",t[0]==="_l"),_(g,"class","button _s"),d(g,"_current",t[0]==="_xl"),_(M,"class","button _s"),d(M,"_current",t[0]==="_xxl"),_(A,"class","button _s"),d(A,"_current",t[0]==="_xxxl"),_(s,"class","button-group"),_(l,"class","filter-block svelte-o03ybq"),_(bt,"class","filter-title svelte-o03ybq"),_(P,"class","button _s"),d(P,"_current",t[3]==="_loading"),_(B,"class","button _s"),d(B,"_current",t[3]===""),_(W,"class","button-group"),_(Z,"class","filter-block svelte-o03ybq"),_(pt,"class","filter-title svelte-o03ybq"),_(K,"class","button _s"),d(K,"_current",t[5]),_(F,"class","button _s"),d(F,"_current",!t[5]),_(D,"class","button-group"),_(Y,"class","filter-block svelte-o03ybq"),_(qt,"class","filter-title svelte-o03ybq"),_(J,"class","button _s"),d(J,"_current",t[4]===""),_(Q,"class","button _s"),d(Q,"_current",t[4]==="_square"),_(U,"class","button _s"),d(U,"_current",t[4]==="_round"),_(G,"class","button-group"),_(rt,"class","filter-block svelte-o03ybq"),_(Ct,"class","filter-title svelte-o03ybq"),_(V,"class","button _s"),d(V,"_current",t[1]==="Go"&&t[2]===""),_(x,"class","button _s"),d(x,"_current",t[2]==="_left-icon"),_(tt,"class","button _s"),d(tt,"_current",t[2]==="_right-icon"),_(et,"class","button _s"),d(et,"_current",t[1]===$t.tie()&&t[2]===""),_(S,"class","button-group"),_(ct,"class","filter-block svelte-o03ybq"),_(wt,"class","filter-title svelte-o03ybq"),_(nt,"class","button _s"),d(nt,"_current",t[6]),_(lt,"class","button _s"),d(lt,"_current",!t[6]),_(ut,"class","button-group"),_(it,"class","filter-block svelte-o03ybq"),_(e,"class","filter svelte-o03ybq"),_(X,"class","buttons-single svelte-o03ybq"),_(mt,"class","filter-title svelte-o03ybq"),Yt(mt,"margin-top","24px"),_(vt,"class","buttons-group svelte-o03ybq"),_(ot,"class","buttons-groups svelte-o03ybq"),_(T,"class","buttons svelte-o03ybq"),Yt(gt,"margin-top","24px")},m(r,b){q(r,e,b),c(e,l),c(l,n),c(l,o),c(l,s),c(s,f),c(s,i),c(s,m),c(s,v),c(s,p),c(s,y),c(s,C),c(s,N),c(s,g),c(s,z),c(s,M),c(s,It),c(s,A),c(e,Nt),c(e,Z),c(Z,bt),c(Z,Tt),c(Z,W),c(W,P),c(W,jt),c(W,B),c(e,zt),c(e,Y),c(Y,pt),c(Y,At),c(Y,D),c(D,K),c(D,Vt),c(D,F),c(e,xt),c(e,rt),c(rt,qt),c(rt,te),c(rt,G),c(G,J),c(G,ee),c(G,Q),c(G,ne),c(G,U),c(e,le),c(e,ct),c(ct,Ct),c(ct,oe),c(ct,S),c(S,V),c(S,se),c(S,x),c(S,re),c(S,tt),c(S,ce),c(S,et),c(e,ie),c(e,it),c(it,wt),c(it,ue),c(it,ut),c(ut,nt),c(ut,_e),c(ut,lt),q(r,Pt,b),q(r,T,b),c(T,X);for(let u=0;u<w.length;u+=1)w[u].m(X,null);c(X,Bt);for(let u=0;u<2;u+=1)H[u].m(X,null);c(T,ae),c(T,mt),c(T,fe),c(T,ot),c(ot,vt);for(let u=0;u<L.length;u+=1)L[u].m(vt,null);c(ot,de);for(let u=0;u<2;u+=1)O[u].m(ot,null);q(r,Gt,b),q(r,gt,b),Xt||(he=[$(f,"click",t[9]),$(m,"click",t[10]),$(p,"click",t[11]),$(C,"click",t[12]),$(g,"click",t[13]),$(M,"click",t[14]),$(A,"click",t[15]),$(P,"click",t[16]),$(B,"click",t[17]),$(K,"click",t[18]),$(F,"click",t[19]),$(J,"click",t[20]),$(Q,"click",t[21]),$(U,"click",t[22]),$(V,"click",t[23]),$(x,"click",t[24]),$(tt,"click",t[25]),$(et,"click",t[26]),$(nt,"click",t[27]),$(lt,"click",t[28])],Xt=!0)},p(r,b){if(b[0]&1&&d(f,"_current",r[0]==="_xs"),b[0]&1&&d(m,"_current",r[0]==="_s"),b[0]&1&&d(p,"_current",r[0]==="_m"),b[0]&1&&d(C,"_current",r[0]==="_l"),b[0]&1&&d(g,"_current",r[0]==="_xl"),b[0]&1&&d(M,"_current",r[0]==="_xxl"),b[0]&1&&d(A,"_current",r[0]==="_xxxl"),b[0]&8&&d(P,"_current",r[3]==="_loading"),b[0]&8&&d(B,"_current",r[3]===""),b[0]&32&&d(K,"_current",r[5]),b[0]&32&&d(F,"_current",!r[5]),b[0]&16&&d(J,"_current",r[4]===""),b[0]&16&&d(Q,"_current",r[4]==="_square"),b[0]&16&&d(U,"_current",r[4]==="_round"),b[0]&6&&d(V,"_current",r[1]==="Go"&&r[2]===""),b[0]&4&&d(x,"_current",r[2]==="_left-icon"),b[0]&4&&d(tt,"_current",r[2]==="_right-icon"),b[0]&6&&d(et,"_current",r[1]===$t.tie()&&r[2]===""),b[0]&64&&d(nt,"_current",r[6]),b[0]&64&&d(lt,"_current",!r[6]),b[0]&255){_t=r[7];let u;for(u=0;u<_t.length;u+=1){const E=Me(r,_t,u);w[u]?w[u].p(E,b):(w[u]=Ee(E),w[u].c(),w[u].m(X,Bt))}for(;u<w.length;u+=1)w[u].d(1);w.length=_t.length}if(b[0]&383){Rt=["","_bordered"];let u;for(u=0;u<2;u+=1){const E=we(r,Rt,u);H[u]?H[u].p(E,b):(H[u]=He(E),H[u].c(),H[u].m(X,null))}for(;u<2;u+=1)H[u].d(1)}if(b[0]&255){at=r[7];let u;for(u=0;u<at.length;u+=1){const E=qe(r,at,u);L[u]?L[u].p(E,b):(L[u]=Ie(E),L[u].c(),L[u].m(vt,null))}for(;u<L.length;u+=1)L[u].d(1);L.length=at.length}if(b[0]&383){Zt=["","_bordered"];let u;for(u=0;u<2;u+=1){const E=ke(r,Zt,u);O[u]?O[u].p(E,b):(O[u]=je(E),O[u].c(),O[u].m(ot,null))}for(;u<2;u+=1)O[u].d(1)}},i:I,o:I,d(r){r&&k(e),r&&k(Pt),r&&k(T),R(w,r),R(H,r),R(L,r),R(O,r),r&&k(Gt),r&&k(gt),Xt=!1,ht(he)}}}function en(t,e,l){const n=["_default","_link","_white","_light","_transparent"],o=["_grey","_dark","_blue","_green","_red"];let s="_m",f="Go",i="",m="",v="",p=!1,y="_adjust-icon";return[s,f,i,m,v,p,y,n,o,()=>l(0,s="_xs"),()=>l(0,s="_s"),()=>l(0,s="_m"),()=>l(0,s="_l"),()=>l(0,s="_xl"),()=>l(0,s="_xxl"),()=>l(0,s="_xxxl"),()=>l(3,m="_loading"),()=>l(3,m=""),()=>l(5,p=!0),()=>l(5,p=!1),()=>l(4,v=""),()=>l(4,v="_square"),()=>l(4,v="_round"),()=>{l(1,f="Go"),l(2,i="")},()=>{l(1,f=$t.tie()+"Go"),l(2,i="_left-icon")},()=>{l(1,f="Go"+$t.tie()),l(2,i="_right-icon")},()=>{l(1,f=$t.tie()),l(2,i="")},()=>l(6,y="_adjust-icon"),()=>l(6,y="")]}class nn extends Ot{constructor(e){super(),Ht(this,e,en,tn,St,{},null,[-1,-1])}}let dt=Je.match([{path:"/",component:xe,title:"Welcome!",shape:"_article"},{path:"/buttons",component:nn,title:"Buttons",shape:"_buttons"}],{component:Ue,shape:"_narrow"});function ln(t){let e,l,n,o,s,f,i,m,v,p,y;var C=dt.component;function N(g){return{}}return C&&(p=new C(N())),{c(){e=a("div"),l=a("a"),l.textContent="modify.css",n=h(),o=a("div"),s=a("a"),s.textContent="Buttons",f=h(),i=a("div"),m=h(),v=a("main"),p&&ge(p.$$.fragment),_(l,"href","/"),_(l,"class","logo svelte-1lqcrs8"),_(s,"class","link svelte-1lqcrs8"),_(s,"href","/buttons"),d(s,"_current",dt.path==="/buttons"),_(o,"class","menu svelte-1lqcrs8"),_(i,"class","menu svelte-1lqcrs8"),_(e,"class","header svelte-1lqcrs8"),_(v,"class",j("shape"+(dt.shape?" "+dt.shape:" _default"))+" svelte-1lqcrs8")},m(g,z){q(g,e,z),c(e,l),c(e,n),c(e,o),c(o,s),c(e,f),c(e,i),q(g,m,z),q(g,v,z),p&&Jt(p,v,null),y=!0},p(g,[z]){if(C!==(C=dt.component)){if(p){De();const M=p;ve(M.$$.fragment,1,0,()=>{Qt(M,1)}),Ke()}C?(p=new C(N()),ge(p.$$.fragment),Ft(p.$$.fragment,1),Jt(p,v,null)):p=null}},i(g){y||(p&&Ft(p.$$.fragment,g),y=!0)},o(g){p&&ve(p.$$.fragment,g),y=!1},d(g){g&&k(e),g&&k(m),g&&k(v),p&&Qt(p)}}}function on(t){return console.log(dt),[]}class sn extends Ot{constructor(e){super(),Ht(this,e,on,ln,St,{})}}new sn({target:document.getElementById("app")});
