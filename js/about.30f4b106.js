(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5af5":function(e,t,s){},"98f3":function(e,t,s){"use strict";var a=s("5af5"),i=s.n(a);i.a},"9b0e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-lists"},[s("h2",[e._v(e._s(e.title))]),s("label",{attrs:{for:"add"}},[e._v("\n    Hero name:\n    "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newHero,expression:"newHero"}],attrs:{type:"text",id:"add"},domProps:{value:e.newHero},on:{input:function(t){t.target.composing||(e.newHero=t.target.value)}}}),s("button",{on:{click:e.addHero}},[e._v("add")])]),s("ul",e._l(e.lists,function(t,a){return s("li",{key:a,staticClass:"lists-detail clearfix",on:{click:function(s){return e.goDetail(t.id)}}},[s("span",{staticClass:"detail-left"},[e._v(e._s(t.id))]),s("span",{staticClass:"detail-right"},[e._v(e._s(t.name))]),s("span",{staticClass:"detail-close",on:{click:function(s){return s.stopPropagation(),e.deleteHero(t.id)}}},[e._v("x")])])}),0),s("Message")],1)},i=[],o=s("d225"),n=s("b0b4"),r=s("308d"),c=s("6bb5"),d=s("4e2b"),l=s("9ab4"),u=s("60a3"),h=s("0f7d"),f=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.lists=[],e.title="My Heroes",e.newHero="",e}return Object(d["a"])(t,e),Object(n["a"])(t,[{key:"goDetail",value:function(e){this.$store.commit("addMessage","fetched hero id=".concat(e)),this.$router.push({name:"Detail",params:{id:e}})}},{key:"addHero",value:function(){this.$store.state.HeroList.push({name:this.newHero,id:this.$store.state.idNum}),this.$store.commit("addMessage","added hero w/ id=".concat(this.$store.state.idNum)),this.$store.state.idNum++}},{key:"deleteHero",value:function(e){this.$store.commit("deleteHero",e),this.$store.commit("addMessage","deleted hero id=".concat(e))}},{key:"created",value:function(){this.lists=this.$store.state.HeroList,this.$store.commit("addMessage","fetched heroes")}}]),t}(u["b"]);f=l["a"]([Object(u["a"])({components:{Message:h["a"]}})],f);var m=f,p=m,v=(s("98f3"),s("2877")),b=Object(v["a"])(p,a,i,!1,null,"482508d6",null);t["default"]=b.exports}}]);
//# sourceMappingURL=about.30f4b106.js.map