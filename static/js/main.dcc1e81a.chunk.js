(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),l=(n(14),n(1)),c=n(2),u=n(4),p=n(3),s=n(5),m=(n(15),n(16),function(e){var t=e.state,n=t.items,a=t.bill;return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"Restaurant Menu"),i.a.createElement("h2",null,"Items: ",n),i.a.createElement("h3",null,"Bill: ",a.toFixed(2)," \xa3"))}),d=(n(17),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={quantity:0,operation:""},n.allowUpdate=!1,n.handleAdd=function(){n.setState(function(e){return{quantity:e.quantity+1,operation:"add"}}),n.allowUpdate=!0},n.handleRemove=function(){n.setState(function(e){return{quantity:e.quantity-1,operation:"remove"}}),n.allowUpdate=!0},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.allowUpdate&&(this.allowUpdate=!1,this.props.updateAppComponent(this.props.item.price,this.state.operation))}},{key:"render",value:function(){var e=this.props.item,t=(e.id,e.name),n=e.price;return i.a.createElement("li",{className:"singleItem"},this.state.quantity?i.a.createElement("div",{style:{color:"red",fontWeight:"bold"}},t):i.a.createElement("div",null,t),i.a.createElement("div",null,"Price: ",n),i.a.createElement("div",{className:"actions"},i.a.createElement("button",{onClick:this.handleAdd},"Add"),this.state.quantity?i.a.createElement("button",{onClick:this.handleRemove},"Remove"):i.a.createElement("button",{disabled:!0},"Remove"),i.a.createElement("label",null,this.state.quantity," - "),i.a.createElement("label",null,"\xa3 ",(this.state.quantity*this.props.item.price).toFixed(2))))}}]),t}(i.a.Component)),h=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={allElements:[]},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.menu.map(function(t){return i.a.createElement(d,{key:t.id,item:t,updateAppComponent:e.props.updateAppComponent})});return i.a.createElement("ul",null,t)}}]),t}(i.a.Component)),b=[{id:1,name:"hamburger",price:2.5},{id:2,name:"cheesburger",price:2.8},{id:3,name:"gyros",price:3.2},{id:4,name:"kebab",price:2.6},{id:5,name:"fish and chips",price:3.6},{id:6,name:"coca-cola",price:.5},{id:7,name:"pepsi-cola",price:.6},{id:8,name:"tea",price:.7},{id:9,name:"coffe",price:1.2},{id:10,name:"pizza",price:4.6},{id:11,name:"hot-dog",price:3.6}],f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={items:0,bill:0},n.updateAppComponent=function(e,t){"add"===t?n.setState(function(t){return{items:t.items+1,bill:t.bill+e}}):"remove"===t?n.setState(function(t){return{items:t.items-1,bill:t.bill-e}}):alert("Unknown operation")},n.roundNumber=function(e,t){if((""+e).includes("e")){var n=(""+e).split("e"),a="";return+n[1]+t>0&&(a="+"),+(Math.round(+n[0]+"e"+a+(+n[1]+t))+"e-"+t)}return+(Math.round(e+"e+"+t)+"e-"+t)},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(m,{state:this.state}),i.a.createElement(h,{menu:b,updateAppComponent:this.updateAppComponent}))}}]),t}(i.a.Component);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.dcc1e81a.chunk.js.map