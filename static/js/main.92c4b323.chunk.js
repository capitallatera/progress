(this.webpackJsonpprogress=this.webpackJsonpprogress||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},220:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(26),r=n.n(i),s=(n(148),n(138)),o=n(46),l=n(74),j=(n(149),n(229)),b=n(34),u=n(232),d=n(231),f=n(230),O=n(22),h={labelCol:{span:2},wrapperCol:{span:22}},g={wrapperCol:{offset:12,span:12}},m=function(e){var t=e.form,n=e.setIsVisible,c=e.finish;return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,Object(o.a)(Object(o.a)({},h),{},{form:t,onFinish:function(){c(),n(!1),t.resetFields()},children:[Object(O.jsx)(j.a.Item,{name:"task",label:"Task",children:Object(O.jsx)(f.a,{})}),Object(O.jsx)(j.a.Item,Object(o.a)(Object(o.a)({},g),{},{children:Object(O.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})},p=function(e){var t=e.isVisible,n=e.setIsVisible,c=e.form,a=e.finish;return Object(O.jsx)(d.a,{visible:t,footer:!1,closable:!1,children:Object(O.jsx)(m,{form:c,setIsVisible:n,finish:a})})},k=n(81),x=n(228),v=(n(220),function(e){var t=e.dataSource,n=e.onChange,a=e.check,i=e.setId,r=e.id,s=e.setDataSource,l=e.removeItem;Object(c.useEffect)((function(){var e=t.map((function(e){return e.key===r?Object(o.a)(Object(o.a)({},e),{},{action:a}):e}));s(e)}),[r,a]);var j=[{title:"Action",key:"action",width:100,render:function(e){return Object(O.jsx)("div",{onClick:function(){i(e.key)},children:Object(O.jsx)(k.a,{checked:e.action,onChange:n})})}},{title:"Task",dataIndex:"task",key:"task",render:function(e){return Object(O.jsx)("p",{children:e})}},{key:"delete",width:100,render:function(e){return Object(O.jsx)("div",{onClick:function(){l(e.key)},children:Object(O.jsx)("a",{children:"Delete"})})}}];return Object(O.jsx)("div",{className:"table-container",children:Object(O.jsx)(x.a,{dataSource:t,columns:j,pagination:!1})})}),S=n(142);var I=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=j.a.useForm(),r=Object(l.a)(i,1)[0],d=Object(c.useState)(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[]),f=Object(l.a)(d,2),h=f[0],g=f[1],m=Object(c.useState)(!1),k=Object(l.a)(m,2),x=k[0],I=k[1],y=Object(c.useState)(0),C=Object(l.a)(y,2),F=C[0],V=C[1];Object(c.useEffect)((function(){localStorage.setItem("data",JSON.stringify(h))}),[h]);var w=h.filter((function(e){return e.action}));return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{children:"Progress"}),Object(O.jsx)(b.a,{type:"primary",onClick:function(){return a(!0)},children:"Add Task"}),Object(O.jsx)(p,{isVisible:n,setIsVisible:a,form:r,finish:function(e){if(r.getFieldsValue()){var t=Object(o.a)({key:Object(S.a)(),action:!1},r.getFieldsValue());g([].concat(Object(s.a)(h),[t]))}}}),Object(O.jsx)(v,{dataSource:h,onChange:function(e){I(e.target.checked)},check:x,setId:V,id:F,setDataSource:g,removeItem:function(e){console.log("Working",e),g(h.filter((function(t){return t.key!==e})))}}),Object(O.jsx)(u.a,{className:"avatar-progress",children:Math.floor(w.length/h.length*100)?Math.floor(w.length/h.length*100):0})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),y()}},[[226,1,2]]]);
//# sourceMappingURL=main.92c4b323.chunk.js.map