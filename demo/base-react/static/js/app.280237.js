webpackJsonp([3],{138:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var r=n(74),a=n.n(r),o=n(241),c=a.a.fromJS({footerBar:{selectedTab:"/",hidden:!1},header:{leftBtns:{},title:"",rightBtns:{}}}),i={changeFooterBar:function(e){return{type:"changeFooterBar",footer:e}},changeHeader:function(e){return{type:"changeHeader",header:e}}},u=Object(o.a)(c,{changeFooterBar:function(e,t){return e.update("footerBar",function(e){return a.a.Map(t.footer)})},changeHeader:function(e,t){return e.update("header",function(e){return a.a.Map(t.header)})}})},241:function(e,t,n){"use strict";function r(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments[1];return t.hasOwnProperty(r.type)?t[r.type](n,r):n}}t.a=r},242:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var r=n(56),a=n.n(r),o=n(13),c=n.n(o),i=n(14),u=n.n(i),l=n(16),s=n.n(l),d=n(17),m=n.n(d),f=n(2),p=n.n(f),h=n(138),g=n(135);n.n(g);n.o(g,"immutableRenderDecorator")&&n.d(t,"b",function(){return g.immutableRenderDecorator});var y=function(e,t){return function(n){return function(r){function o(){return c()(this,o),s()(this,(o.__proto__||a()(o)).apply(this,arguments))}return m()(o,r),u()(o,[{key:"componentDidMount",value:function(){e&&("string"==typeof e&&(e={title:e}),window.$store.dispatch(h.a.changeHeader(e))),t&&("string"==typeof t&&(t={selectedTab:t}),window.$store.dispatch(h.a.changeFooterBar(t)))}},{key:"render",value:function(){return p.a.createElement(n,this.props)}}]),o}(f.Component)}}},243:function(e,t,n){"use strict";var r=n(15),a=n.n(r),o=n(2),c=n.n(o),i=n(147),u=function(e){return c.a.createElement(i.c,{exact:e.exact,path:e.path,render:function(t){return e.from?c.a.createElement(i.b,{from:e.from,to:e.to}):c.a.createElement(e.component,a()({},t,{routes:e.routes}))}})};t.a=u},245:function(e,t,n){n(246),e.exports=n(362)},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};n.d(r,"CommonModel",function(){return ge.b});var a,o,c,i=n(2),u=n.n(i),l=n(227),s=n.n(l),d=n(15),m=n.n(d),f=n(56),p=n.n(f),h=n(13),g=n.n(h),y=n(14),b=n.n(y),v=n(16),E=n.n(v),_=n(17),w=n.n(_),C=n(147),k=(n(483),n(484),n(485),n(494)),j=n.n(k),B=(n(98),n(99)),T=n.n(B),x=n(11),L=n.n(x),R=n(135),z=n(146),I=n(216),O=n.n(I),M=O()(),N={push:function(e){M.push(e)},replace:function(e){M.replace(e)},back:function(){M.go(-1)}},$=Object(R.immutableRenderDecorator)((c=o=function(e){function t(){var e,n,r,a;g()(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return 0="==n?"":n,a=e.size,o=void" n="r=E()(this,(e=t.__proto__||p()(t)).call.apply(e,[this].concat(c))),r.search=function(){},a=n,E()(r,a)}return" w()(t,e),b()(t,[{key:"render",value:function(){return="" u.a.createelement("div",{classname:"header"},u.a.createelement(j.a,{mode:"light",onleftclick:function(){return="" n.back()},rightcontent:[u.a.createelement(t.a,{key:"0",type:"search",style:{marginright:"0.32rem"},onclick:this.search}),u.a.createelement(t.a,{key:"1",type:"ellipsis"})]},this.props.data.get("title")),u.a.createelement(z.immutableloadingbar,{showfastactions:!0,classname:"loading"}))}}]),t}(i.component),o.proptypes="{data:L.a.object},a=c))||a,A=(n(504),n(510)),F=n.n(A),H=n(230),P=n.n(H),D=function(e){var" t="e.type,n=e.className,r=void" u.a.createelement("svg",m()({classname:"am-icon="" am-icon-"+t.substr(1)+"="" am-icon-"+o+"="" "+r},c),u.a.createelement("use",{xlinkhref:t}))};d.prototype.proptypes="{type:L.a.string,className:L.a.string,size:L.a.string};var" s,j,q,g,k,q,u="D,V=n(520),W=n.n(V),X=Object(R.immutableRenderDecorator)((q=J=function(e){function" t(){var="" e,n,r,a;g()(this,t);for(var="" o="arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return" w()(t,e),b()(t,[{key:"render",value:function(){var="" e="this,t=this.props.data;return" u.a.createelement("div",null,u.a.createelement(f.a,{unselectedtintcolor:"#949494",tintcolor:"#33a3f4",bartintcolor:"white",hidden:t.get("hidden")},u.a.createelement(f.a.item,{title:"列表",key:"列表",badge:1,"data-seed":"logid",selected:"="" "="==t.get("selectedTab"),onPress:function(){e.changeTab("/")},icon:u.a.createElement(U,{type:W.a,size:"md"}),selectedIcon:u.a.createElement(U,{type:W.a,size:"md"})}),u.a.createElement(F.a.Item,{title:"表单",key:"表单",badge:"new",onPress:function(){e.changeTab("/demo2")},selected:"/demo2"===t.get("selectedTab"),icon:u.a.createElement(T.a,{type:"search",size:"md"}),selectedIcon:u.a.createElement(T.a,{type:"search",size:"md"})}),u.a.createElement(F.a.Item,{title:"朋友",key:"朋友",dot:!0,selected:"/py"===t.get("selectedTab"),icon:u.a.createElement(T.a,{type:"search",size:"md"}),selectedIcon:u.a.createElement(T.a,{type:"search",size:"md"})}),u.a.createElement(F.a.Item,{title:"我的",key:"我的",selected:"/wd"===t.get("selectedTab"),icon:u.a.createElement(T.a,{type:"search",size:"md"}),selectedIcon:u.a.createElement(T.a,{type:"search",size:"md"})})))}}]),t}(i.Component),J.propTypes={data:L.a.object},S=q))||S,Y=n(149),Z=n.n(Y),ee=n(221),te=n.n(ee),ne=te()({loader:function(){return" n.e(0).then(n.bind(null,691))},loading:function(){return="" null}}),re="te()({loader:function(){return" n.e(0).then(n.bind(null,692))},loading:function(){return="" null}}),ae="te.a.Map({loader:{Component:function(){return" n.e(0).then(n.bind(null,693))},model:function(){return="" n.e(0).then(n.bind(null,694)).then(function(e){window.$store.reducerregistry.register(e.reducers),window.$store.runsaga(e.sagas)})}},render:function(e,t){var="" u.a.createelement(n,t)},loading:function(){return="" null}}),oe="[{path:"/todo",component:ae,routes:[{path:"/todo/list",component:re},{path:"",component:ne}]}],ce=oe,ie=te()({loader:function(){return" n.e(1).then(n.bind(null,695))},loading:function(){return="" null}}),ue="te.a.Map({loader:{Component:function(){return" n.e(1).then(n.bind(null,696))},model:function(){return="" n.e(1).then(n.bind(null,697)).then(function(e){window.$store.reducerregistry.register(e.reducers),window.$store.runsaga(e.sagas)})}},render:function(e,t){var="" null}}),le="[{path:"/demo2",component:ue,routes:[{path:"",exact:!0,component:ie}]}],se=le,de=[].concat(Z()(ce),Z()(se),[{from:"/",to:"/todo"}]),me=de,fe=n(73),pe=n(243),he=n(242),ge=n(138),ye=n(75),be=Object(he.b)((Q=K=function(e){function" t(){return="" g()(this,t),e()(this,(t.__proto__||p()(t)).apply(this,arguments))}return="" u.a.createelement("div",{classname:"app","data-flex":"dir:top="" box:justify"},u.a.createelement($,{data:this.props.header}),u.a.createelement(c.a,null,u.a.createelement("div",{classname:"content"},u.a.createelement(c.d,null,me.map(function(e,t){return="" u.a.createelement(pe.a,m()({key:t},e))})))),u.a.createelement(x,{data:this.props.footerbar}))}}]),t}(u.a.component),k.proptypes="{header:L.a.object,footerBar:L.a.object},G=Q))||G,ve=function(e){return{header:e.getIn(["CommonModel","header"]),footerBar:e.getIn(["CommonModel","footerBar"])}},Ee=function(e){return{actions:Object(ye.b)(ge.a,e)}},_e=Object(fe.connect)(ve,Ee)(be),we=n(526),Ce=n(531),ke=n.n(Ce),je=function(){function" e(){var="">0&&void 0!==arguments[0]?arguments[0]:{};g()(this,e),this._reducers=m()({},t),this._emitChange=null}return b()(e,[{key:"register",value:function(e){this._reducers=m()({},this._reducers,e),null!=this._emitChange&&this._emitChange(this.getReducers())}},{key:"getReducers",value:function(){return m()({},this._reducers)}},{key:"setChangeListener",value:function(e){if(null!=this._emitChange)throw new Error("只能设置一次监听");this._emitChange=e}}]),e}(),Be=new je(r),Te=ke()(Be);Te.reducerRegistry=Be,window.$store=Te;var xe=Te,Le=function(e){s.a.render(u.a.createElement(we.AppContainer,null,u.a.createElement(fe.Provider,{store:xe},u.a.createElement(e,null))),document.getElementById("root"))};Le(_e)},483:function(e,t){},484:function(e,t){},486:function(e,t){},487:function(e,t){},492:function(e,t){},493:function(e,t){},506:function(e,t){},507:function(e,t){},509:function(e,t){},520:function(e,t,n){var r=n(521);e.exports=r.add('<symbol viewbox="0 0 1024 1024" id="home" class="icon" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M934.4 492.8c0 6.4-6.4 6.4-12.8 6.4 0 0 0 0 0 0-6.4 0-6.4 0-12.8-6.4L512 166.4 115.2 492.8c-6.4 0-6.4 6.4-12.8 6.4-6.4 0-6.4 0-12.8-6.4L57.6 448c-6.4-6.4-6.4-19.2 0-25.6l409.6-339.2c25.6-19.2 64-19.2 89.6 0l140.8 115.2L697.6 83.2c0-12.8 6.4-19.2 19.2-19.2l108.8 0c12.8 0 19.2 6.4 19.2 19.2L844.8 320l128 102.4c6.4 6.4 6.4 19.2 0 25.6L934.4 492.8zM838.4 761.6c0 19.2-19.2 38.4-38.4 38.4L582.4 800 582.4 576 441.6 576l0 217.6L217.6 793.6c-19.2 0-38.4-19.2-38.4-38.4L179.2 486.4c0 0 0 0 0-6.4L512 211.2l326.4 268.8c0 0 0 0 0 6.4L838.4 761.6z" p-id="1002"></path></symbol>',"home")},531:function(e,t,n){e.exports=n(532)},532:function(e,t,n){"use strict";function r(e){return Object(u.combineReducers)(i()({},e,{loadingBar:l.loadingBarReducer}))}function a(e,t){var n=r(e.getReducers()),a=Object(o.c)(n,t,m);return e.setChangeListener(function(e){a.replaceReducer(r(e))}),a.runSaga=d.run,a}Object.defineProperty(t,"__esModule",{value:!0});var o=n(75),c=n(15),i=n.n(c),u=n(533),l=n(146),s=n(538),d=Object(s.a)(),m=Object(o.a)(d);t.default=a}},[245]);</o;i++)c[i]=arguments[i];return>