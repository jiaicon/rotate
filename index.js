!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("antd/lib/message")},function(e,t){e.exports=require("antd/lib/modal")},function(e,t){e.exports=require("antd/lib/tag")},function(e,t){e.exports=require("antd/lib/button")},function(e,t){e.exports=require("react-autobind")},function(e,t){e.exports=require("antd/lib/upload")},function(e,t){e.exports=require("antd/lib/icon")},function(e,t){e.exports=require("react-dnd")},function(e,t){e.exports=require("antd/lib/form")},function(e,t,n){e.exports=n.p+"6b6112c8a2b12949d826e5fd94cb1caa.png"},function(e,t){e.exports=require("antd/lib/message/style/css")},function(e,t){e.exports=require("antd/lib/modal/style/css")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("antd/lib/button/style/css")},function(e,t){e.exports=require("antd/lib/upload/style/css")},function(e,t){e.exports=require("antd/lib/icon/style/css")},function(e,t){e.exports=require("antd/lib/spin")},function(e,t){e.exports=require("antd/lib/table")},function(e,t){e.exports=require("react-dnd-html5-backend")},function(e,t){e.exports=require("antd/lib/input")},function(e,t){e.exports=require("antd/lib/switch")},function(e,t){e.exports=require("antd/lib/spin/style/css")},function(e,t){e.exports=require("antd/lib/table/style/css")},function(e,t){e.exports=require("antd/lib/tag/style/css")},function(e,t){e.exports=require("immutability-helper")},function(e,t){e.exports=require("antd/lib/input/style/css")},function(e,t){e.exports=require("antd/lib/switch/style/css")},function(e,t){e.exports=require("antd/lib/form/style/css")},function(e,t,n){"use strict";n.r(t);n(22);var r=n(17),o=n.n(r),i=(n(23),n(18)),a=n.n(i),c=(n(14),n(4)),u=n.n(c),s=(n(24),n(3)),l=n.n(s),f=(n(11),n(1)),p=n.n(f),d=n(0),h=n.n(d),y=n(5),b=n.n(y),m=n(8),g=n(19),v=n.n(g);n(25);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}({},t);0!==n.indexOf("http")&&(n=window.apiHost||"http://localhost:9527"+n),r.method||(r.method="POST"),!1!==r.loading&&(r.loading=!0),r.mode="cors";var o=r.data||{},i=Object.keys(o),a=[];return i.forEach(function(e){var t,n=o[e];if(null!=n)if(Array.isArray(n))n.forEach(function(t){return a.push("".concat(encodeURIComponent(e),"[]=").concat(encodeURIComponent(t)))});else if("object"==O(t=n)&&t.constructor==Object)for(var r in n)n.hasOwnProperty(r)&&a.push("".concat(encodeURIComponent(e),"[").concat(encodeURIComponent(r),"]=").concat(encodeURIComponent(n[r])));else a.push("".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n)))}),r.headers={},"POST"===r.method?(r.headers["Content-Type"]="application/x-www-form-urlencoded",r.body=a.join("&")):n="".concat(n,"?").concat(a.join("&")),r.credentials||(r.credentials="include"),console.log("开始请求-",n,r),new Promise(function(e,t){fetch(n,r).then(function(e){return e.json()}).then(function(r){"status"in r&&0===r.status?(console.log("请求成功-",n,r),e(r)):(console.log("请求返回失败-",n,r),t(r))}).catch(function(e){console.log("请求失败-",n,e),t(e)})})}n(12);var x=n(2),j=n.n(x),k=(n(26),n(20)),P=n.n(k),E=(n(27),n(21)),C=n.n(E),q=(n(15),n(6)),B=n.n(q),T=(n(16),n(7)),_=n.n(T),R=(n(28),n(9)),D=n.n(R);var I;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=D.a.Item;var N=D.a.create()(I=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=V(t).call(this,e),n=!o||"object"!==U(o)&&"function"!=typeof o?F(r):o,A(F(n),"handleOnSet",function(e){console.log("fileList:::",e);var t={};e&&(t.status=e.status,t.uid=0,t.name="photo",t.url=e.photo),n.setState({jump:!(!e||!e.href),photo:e?[t]:[]},function(){n.props.form.setFieldsValue({photo:e?[t]:[],href:e&&e.href})})}),A(F(n),"onSwitchChange",function(e){n.setState({jump:e})}),A(F(n),"onHandleCancel",function(){var e=n.props,t=e.handleCancel;e.form.resetFields(),t()}),A(F(n),"getFormData",function(){var e;return n.props.form.validateFields(function(t,n){if(t){var r=Object.keys(t);p.a.error(t[r[0]].errors[0].message),n="false"}e=n}),e}),A(F(n),"handleChange",function(e){var t=e.file,r=e.fileList,o=[];r.length>=1&&(o=[{uid:t.uid,name:t.name,status:t.status,url:t.response?t.response.data[0]:""}]),console.log(o),n.setState({photo:o},function(){n.props.form.setFieldsValue({photo:o})})}),A(F(n),"normFile",function(e,t){var r=e.file;if(r.size>3145728)return p.a.error("".concat(e.file.name," 请上传小于3M的图片.")),n.setState({photo:[]}),[];"done"===r.status?0===e.file.response.errno?p.a.success("".concat(e.file.name," 上传成功")):p.a.success("".concat(e.file.name," 删除失败")):"error"===r.status&&p.a.error("".concat(e.file.name," 上传失败"));return t&&e&&e.fileList.length>0?e.fileList.slice(-1):e&&e.fileList}),A(F(n),"handlePreview",function(e){e.url||e.thumbUrl||(e.preview=function(e){return new Promise(function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}})}(e.originFileObj)),n.setState({previewImage:e.url||e.thumbUrl,previewPhoto:!0})}),A(F(n),"closeModal",function(){n.setState({previewPhoto:!1})}),n.state={previewVisible:!1,previewPhoto:!1,previewImage:"",fileList:[]},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,d["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.update,r=t.handleOk,o=t.maskClosable,i=t.form.getFieldDecorator,a=this.state,c=a.photo,u=a.previewPhoto,s=a.previewImage,l={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},f={showUploadList:!0,listType:"picture-card",action:"".concat(window.apiHost||"http://localhost:9527","/api/image"),accept:"image/*",name:"file",beforeUpload:this.handleBeforeUpload,onChange:this.handleChange,onPreview:this.handlePreview},p=h.a.createElement("div",null,h.a.createElement(_.a,{type:"plus"}),h.a.createElement("div",{className:"ant-upload-text"},"Upload"));return h.a.createElement(j.a,{title:"编辑",visible:n,onOk:r,onCancel:this.onHandleCancel,maskClosable:o},h.a.createElement(D.a,null,h.a.createElement(W,H({label:"选择图片"},l),i("photo",{valuePropName:"fileList",getValueFromEvent:function(t){return e.normFile(t,!0)},rules:[{required:!0,message:"请选择图片"}]})(h.a.createElement(B.a,f,c&&c.length>=1?null:p))),h.a.createElement(W,H({label:"是否跳转"},l),h.a.createElement(C.a,{defaultChecked:this.state.jump,checked:this.state.jump,onChange:this.onSwitchChange})),h.a.createElement(W,H({label:"跳转地址"},l,{style:{display:this.state.jump?"block":"none"}}),i("href",{})(h.a.createElement(P.a,null)))),h.a.createElement(j.a,{visible:u,footer:null,onCancel:this.closeModal},h.a.createElement("img",{alt:"example",style:{width:"100%"},src:s})))}}])&&L(n.prototype,r),o&&L(n,o),t}())||I;function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){G(e,t,n[t])})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var J=function(e){S("/api/banner",{method:"GET"}).then(function(t){console.log("请求结果",t),"object"===K(t)&&"status"in t&&0===t.status?e.success&&"function"==typeof e.success&&e.success(t):(e.failed&&"function"==typeof e.failed&&e.failed(),p.a.error("请求失败，请配置url或检查网络"),console.warn("The request failed. Configure the URL or check the network"))})},Q=function(e,t,n){S("/api/banner/".concat(e),{method:"PUT",data:z({},t)}).then(function(e){console.log("请求结果",e),"object"===K(e)&&"status"in e&&0===e.status?n.success&&"function"==typeof n.success&&n.success(e):(n.failed&&"function"==typeof n.failed&&n.failed(e),p.a.error("请求失败，请配置url或检查网络"),console.warn("The request failed. Configure the URL or check the network"))})},X=function(e,t){S("/api/banner",{method:"POST",data:z({},e)}).then(function(e){console.log("请求结果",e),"object"===K(e)&&"status"in e&&0===e.status?t.success&&"function"==typeof t.success&&t.success(e):(t.failed&&"function"==typeof t.failed&&t.failed(),p.a.error("请求失败，请配置url或检查网络"),console.warn("The request failed. Configure the URL or check the network"))})},Y=function(e,t){S("/api/banner/".concat(e),{method:"DELETE"}).then(function(e){console.log("请求结果",e),"object"===K(e)&&"status"in e&&0===e.status?t.success&&"function"==typeof t.success&&t.success(e):(t.failed&&"function"==typeof t.failed&&t.failed(),p.a.error("请求失败，请配置url或检查网络"),console.warn("The request failed. Configure the URL or check the network"))})},Z=n(13),$=n.n(Z),ee=n(10),te=n.n(ee);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=oe(t).call(this,e))||"object"!==ne(o)&&"function"!=typeof o?ie(r):o,b()(ie(n)),n.defaultSrc=te.a,n.state={previewVisible:e.visible,current:0,iserror:!1,src:n.confSrc(e.src)},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,d["PureComponent"]),n=t,(r=[{key:"confSrc",value:function(e){var t=e||this.defaultSrc,n=document.createElement("img");n.src="".concat(t);var r=this;return n.onerror=function(){r.setState({iserror:!0})},n.onload=function(){r.setState({width:n.width,height:n.height,iserror:!1})},t}},{key:"closeModal",value:function(){this.setState({previewVisible:!1,boxWidth:0,boxHeight:0,current:0}),this.imgBox.style.height="100%",this.imgstyle.style.width="100%"}},{key:"confBox",value:function(e){var t=this.imgBox.offsetHeight,n=this.imgBox.offsetWidth;this.setState({boxWidth:n,boxHeight:t},function(){e()})}},{key:"componentDidMount",value:function(){}},{key:"undo",value:function(e){var t=this;e.preventDefault();var n=this.state.current-90;this.confBox(function(){n/90%2==0?(t.imgBox.style.height=t.state.boxHeight+"px",t.imgstyle.style.width=t.state.boxWidth+"px"):(t.imgBox.style.height=t.state.boxHeight+"px",t.imgstyle.style.width=t.state.boxHeight+"px")}),this.setState({current:n})}},{key:"redo",value:function(e){var t=this;e.preventDefault();var n=this.state.current+90;this.confBox(function(){n/90%2==0?(t.imgBox.style.height=t.state.boxHeight+"px",t.imgstyle.style.width=t.state.boxWidth+"px"):(t.imgBox.style.height=t.state.boxHeight+"px",t.imgstyle.style.width=t.state.boxHeight+"px")}),this.setState({current:n})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state;delete t.boxWidth,delete t.boxHeight,this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ce(e,t,n[t])})}return e}({},t,{previewVisible:e.visible,src:this.confSrc(e.src)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.previewVisible,r=t.current,o=t.src,i=t.iserror,a={visible:n,footer:h.a.createElement("div",null,h.a.createElement(u.a,{icon:"undo",onClick:function(t){return e.undo(t)}},"逆时针旋转90°"),h.a.createElement(u.a,{icon:"redo",onClick:function(t){return e.redo(t)}},"正时针旋转90°")),onCancel:this.closeModal,maskClosable:!0,forceRender:!0};return h.a.createElement(j.a,a,h.a.createElement("div",{ref:function(t){return e.imgBox=t},style:{display:"flex",alignItems:"center",justifyContent:"center"}},h.a.createElement("img",{ref:function(t){return e.imgstyle=t},style:{transform:"rotate(".concat(r,"deg)"),width:"100%",objectFit:"cover"},src:i?te.a:o,alt:i?te.a:o})))}}])&&re(n.prototype,r),o&&re(n,o),t}();ce(ue,"propTypes",{visible:$.a.bool,src:$.a.string});var se=ue;function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function he(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t,n){return t&&ye(e.prototype,t),n&&ye(e,n),e}function me(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?ge(e):t}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Se=-1,xe=function(e){function t(){return he(this,t),me(this,ve(t).apply(this,arguments))}return we(t,h.a.Component),be(t,[{key:"render",value:function(){var e=this.props,t=e.isOver,n=e.connectDragSource,r=e.connectDropTarget,o=(e.moveRow,de(e,["isOver","connectDragSource","connectDropTarget","moveRow"])),i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){pe(e,t,n[t])})}return e}({},o.style,{cursor:"move"}),a=o.className;return t&&(o.index>Se&&(a+=" drop-over-downward"),o.index<Se&&(a+=" drop-over-upward")),n(r(h.a.createElement("tr",fe({},o,{className:a,style:i}))))}}]),t}(),je={beginDrag:function(e){return Se=e.index,{index:e.index}}},ke=Object(m.DropTarget)("row",{drop:function(e,t){var n=t.getItem().index,r=e.index;n!==r&&(e.moveRow(n,r),t.getItem().index=r)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})(Object(m.DragSource)("row",je,function(e){return{connectDragSource:e.dragSource()}})(xe));function Pe(e){return function(t,n){var r=t[e],o=n[e];return r<o?-1:r>o?1:0}}var Ee=function(e){function t(e){var n;return he(this,t),pe(ge(n=me(this,ve(t).call(this,e))),"components",{body:{row:ke}}),pe(ge(n),"postBanner",function(e){n.setState({spinning:!0}),X(e,{success:function(e){n.setState({spinning:!1,update:!1,banners:e.data.length?Array.from(e.data).sort(Pe("sort")):[]})},failed:function(){n.setState({update:!1,spinning:!1})}})}),pe(ge(n),"moveRow",function(e,t){var r=n.state.banners,o=r[e],i=r[t];console.log(r),n.sortBanner(o.id,i.sort)}),b()(ge(n)),n.state={banners:[],spinning:!1,update:!1,previewVisible:!1},n}return we(t,h.a.Component),be(t,[{key:"componentDidMount",value:function(){this.getBanner()}},{key:"getBanner",value:function(){var e=this;this.setState({spinning:!0}),J({success:function(t){e.setState({spinning:!1,banners:t.data.length?Array.from(t.data).sort(Pe("sort")):[]})},failed:function(){e.setState({spinning:!1})}})}},{key:"sortBanner",value:function(e,t,n){var r=this;this.setState({spinning:!0}),S("/api/banner/".concat(e),{method:"PUT",data:{sort:t}}).then(function(e){console.log("请求结果",e),"object"===le(e)&&"status"in e&&0===e.status?r.setState({spinning:!1,banners:e.data.length?Array.from(e.data).sort(Pe("sort")):[]}):(r.setState({spinning:!1}),p.a.error("请求失败，请配置url或检查网络"),console.warn("The request failed. Configure the URL or check the network"))})}},{key:"putBanner",value:function(e,t){var n=this;this.setState({spinning:!0}),Q(e,t,{success:function(e){n.setState({spinning:!1,update:!1,banners:e.data.length?Array.from(e.data).sort(Pe("sort")):[]})},failed:function(){n.setState({update:!1,spinning:!1})}})}},{key:"delBanner",value:function(e,t){var n=this;e.preventDefault(),this.setState({spinning:!0}),Y(t,{success:function(e){n.setState({spinning:!1,banners:e.data.length?Array.from(e.data).sort(Pe("sort")):[]})},failed:function(){n.setState({spinning:!1})}})}},{key:"handleOk",value:function(){var e=this.formProValue.getFormData();if(e){console.log(e);var t={photo:e.photo[0].url?e.photo[0].url:e.photo[0].response.data[0],href:e.href};"update"===this.state.type?this.putBanner(this.state.putSource.id,t):this.postBanner(t)}}},{key:"handleCancel",value:function(){this.setState({update:!1})}},{key:"updateThis",value:function(e,t){e.preventDefault(),console.log("record:::",t),this.formProValue.handleOnSet(t),this.setState({putSource:t||{},update:!0,type:"update"})}},{key:"createBanner",value:function(e){e.preventDefault(),this.setState({putSource:{},update:!0,type:"create"})}},{key:"previewImg",value:function(e){this.setState({previewVisible:!0,previewImage:e})}},{key:"closeModal",value:function(){this.setState({previewVisible:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.previewImage,r=t.putSource,i=t.update,c=t.banners,s=t.spinning,f=t.previewVisible,p=[{title:"id",dataIndex:"id",key:"id",align:"center"},{title:"title",dataIndex:"title",key:"title",align:"center",render:function(e){return e?h.a.createElement("a",{href:e},e):"-"}},{title:"图片",dataIndex:"photo",key:"photo",align:"center",render:function(t,n){return h.a.createElement("img",{onClick:function(){return e.previewImg(n.photo)},style:{maxWidth:"200px",maxHeight:"60px"},src:t,alt:""})},width:"20%"},{title:"是否跳转",dataIndex:"href",align:"center",key:"href",render:function(e){return e?h.a.createElement("a",{href:e},e):"-"}},{title:"启用",dataIndex:"status",align:"center",key:"status",render:function(e){return 1==e?h.a.createElement(l.a,{color:"#87d068"},"启用"):h.a.createElement(l.a,{color:"red"},"禁用")}},{title:"操作",align:"center",render:function(t,n){return h.a.createElement("div",null,h.a.createElement(l.a,{style:{cursor:"pointer"},color:"#108ee9",onClick:function(t){return e.updateThis(t,n)}},"编辑"),0==n.status?h.a.createElement(l.a,{onClick:function(t){return e.putBanner(n.id,{status:1})},style:{cursor:"pointer"},color:"#87d068"},"恢复"):h.a.createElement(l.a,{onClick:function(t){return e.putBanner(n.id,{status:0})},style:{cursor:"pointer"},color:"red"},"禁用"),h.a.createElement(l.a,{style:{cursor:"pointer"},color:"red",onClick:function(t){return e.delBanner(t,n.id)}},"删除"))}}];return h.a.createElement("div",null,h.a.createElement(u.a,{onClick:this.createBanner},"新建"),h.a.createElement(o.a,{spinning:s,delay:"50"},h.a.createElement(m.DndProvider,{backend:v.a},h.a.createElement(a.a,{columns:p,dataSource:c,components:this.components,rowKey:"id",onRow:function(t,n){return{index:n,moveRow:e.moveRow}},pagination:!1}),h.a.createElement(N,{maskClosable:!0,update:i,handleOk:this.handleOk,handleCancel:this.handleCancel,putSource:r,wrappedComponentRef:function(t){return e.formProValue=t}}))),h.a.createElement(se,{visible:f,src:n}))}}]),t}();Ee.getBanner=J,Ee.putBanner=Q,Ee.delBanner=Y,Ee.postBanner=X;var Ce=Ee;n.d(t,"Banner",function(){return Ce}),n.d(t,"Rotate",function(){return se})}]);