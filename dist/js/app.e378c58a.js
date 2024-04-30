(function(){"use strict";var t={686:function(t,n,e){var r=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main",attrs:{id:"app"}},[e("PadBoard",{attrs:{drinks:t.drinks}}),e("Preview",{attrs:{drinks:t.drinks}})],1)},c=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"padboard d-flex justify-content-center container row text-center"},[e("div",{staticClass:"text-container"},[e("h1",{staticClass:"text-center"},[t._v("Видове (Общ брой: "+t._s(t.totalCounter)+")")]),e("span",{attrs:{id:"version"}},[t._v("v24/04/30")])]),t._l(t.drinks,(function(n,r){return e("div",{key:r,staticClass:"card col-md-2"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title",style:n.counter?"background-color: palegreen; border-radius: 3px":""},[t._v(t._s(n.name))]),e("div",{staticClass:"d-flex button-group justify-content-center"},[e("button",{staticClass:"btn btn-primary btn-sm fw-bold col-3",attrs:{type:"button"},on:{click:function(n){return t.decreaseCounter(r)}}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:n.counter,expression:"drink.counter",modifiers:{number:!0}}],staticClass:"bg-white",attrs:{type:"number",min:"0",max:"4/"},domProps:{value:n.counter},on:{input:[function(e){e.target.composing||t.$set(n,"counter",t._n(e.target.value))},t.inputChange],blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-primary btn-sm fw-bold col-3",attrs:{type:"button"},on:{click:function(n){return t.increaseCounter(r)}}},[t._v("+")])]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.resetCounter(r)}}},[t._v("Нулирай")])])])})),t._m(0)],2)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"info"},[e("h5",[t._v("За да принтираш:")]),e("h3",[t._v("Ctrl + P")])])}],s={name:"PadBoard",props:{drinks:Array},computed:{totalCounter(){let t=0;return this.drinks.forEach((n=>t+=n.counter)),t}},methods:{decreaseCounter(t){this.drinks[t].counter<=0||(this.drinks[t].counter-=1)},increaseCounter(t){this.drinks[t].counter+=1},resetCounter(t){this.drinks[t].counter=0},inputChange(t){}}},u=s,l=e(1),d=(0,l.Z)(u,a,i,!1,null,"1dfdce58",null),f=d.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Fragment",[e("h1",[t._v("A4 - Предварителен преглед")]),e("div",{staticClass:"page"},t._l(t.printableDrinks(t.drinks),(function(n,r){return e("div",{key:r,staticClass:"mycard"},[e("span",{staticClass:"title"},[t._v("КОНЦЕНТРАТ "+t._s(n.name.toUpperCase()))]),e("p",{staticClass:"body"},[t._v(t._s(n.content))])])})),0)])},p=[],v=e(139),b={name:"Preview",components:{Fragment:v.H},props:{drinks:Array},methods:{printableDrinks:function(t){let n=[];return t.forEach((t=>{if(t.counter>0)for(let e=0;e<t.counter;e++)n.push(t)})),n}}},h=b,k=(0,l.Z)(h,m,p,!1,null,null,null),y=k.exports;let C=[{name:"Кола",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е150d, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Бъз",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Грейпфрут",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е102, Е110, Е122, Е133, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Ананас",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Вишна",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е122, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Портокал",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е110, Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Пъпеш",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е110, Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Мандарина",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е110, Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Зелена ябълка",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е133, Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Горски плод",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е122, Е133, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Лимонада",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е102, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Син Екзотик",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е133, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Мента",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е102, Е133, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Виолетка",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е122, Е133, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Малина",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е122, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Сайдер",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Карамел, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Ягода",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители: Е122, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"},{name:"Шоколад",counter:0,content:"Състав: Вода, лим. киселина, Подсладители: захарин, цикламат, *аспартам, ацесулфам К. Аромати: Оцветители:  Е110, Е122, Е102, Е151, Консервант: Натриев бензоат, калиев сорбат, *Може да има неблагоприятни последици върху дейността и фенилаланин. Да се съхранява на сухо и хладно. ТД-02-03 Производител „СЖИ Груп“ ЕООД – гр. Добрич, ул. „Калиакра“ 54 Най-добър до: Виж капачката"}];e(244);var _={name:"App",components:{PadBoard:f,Preview:y,Fragment:v.H},data(){return{drinks:C.sort(((t,n)=>t.name>n.name))}}},g=_,w=(0,l.Z)(g,o,c,!1,null,null,null),x=w.exports;r.Z.config.productionTip=!1,new r.Z({render:t=>t(x)}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={exports:{}};return t[r](c,c.exports,e),c.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,c){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],c=t[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&c||a>=c)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(i=!1,c<a&&(a=c));if(i){t.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}c=c||0;for(var l=t.length;l>0&&t[l-1][2]>c;l--)t[l]=t[l-1];t[l]=[r,o,c]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,c,a=r[0],i=r[1],s=r[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(s)var l=s(e)}for(n&&n(r);u<a.length;u++)c=a[u],e.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return e.O(l)},r=self["webpackChunketiketi_koncentrati"]=self["webpackChunketiketi_koncentrati"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(686)}));r=e.O(r)})();
//# sourceMappingURL=app.e378c58a.js.map