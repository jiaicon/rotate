module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("antd/lib/modal")},function(e,t,n){e.exports=n.p+"6b6112c8a2b12949d826e5fd94cb1caa.png"},function(e,t){e.exports=require("antd/lib/button")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("antd/lib/modal/style/css")},function(e,t){e.exports=require("antd/lib/upload")},function(e,t){e.exports=require("antd/lib/icon")},function(e,t){e.exports=require("react-autobind")},function(e,t,n){var r=n(10),o=n(13);Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"UploadPhoto",{enumerable:!0,get:function(){return r.default}})},function(e,t,n){"use strict";n.r(t);n(11);var r=n(6),o=n.n(r),i=(n(12),n(7)),a=n.n(i),l=(n(5),n(1)),c=n.n(l),u=n(0),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=h(t).call(this,e),n=!o||"object"!==f(o)&&"function"!=typeof o?b(r):o,d(b(n),"handleCancel",function(){n.setState({previewVisible:!1})}),d(b(n),"handlePreview",function(e){e.url||e.thumbUrl||(e.preview=function(e){return new Promise(function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}})}(e.originFileObj)),n.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),d(b(n),"handleBeforeUpload",function(e){var t="image/jpeg"===e.type,r="image/jpeg"===e.type,o="image/gif"===e.type,i="image/png"===e.type;if(t||r||o||i){var a=e.size/1024/1024<2;if(a)return(t||r||o||i)&&a&&n.checkImageWH(e);c.a.error({title:"超过2M限制，不允许上传~"})}else c.a.error({title:"只能上传JPG 、JPEG 、GIF、 PNG格式的图片~"})}),d(b(n),"handleChange",function(e){e.file;var t=e.fileList;console.log("fileList::::sdas:::",t),t.length&&(t[0].status=1),n.setState({fileList:t})});var i={};return e.photo&&(i=e.photo),n.state={previewVisible:!1,previewImage:"",fileList:i},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,u["PureComponent"]),n=t,(r=[{key:"componentWillReceiveProps",value:function(e){var t=[];e.photo&&(t=e.photo),this.setState({fileList:t})}},{key:"checkImageWH",value:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(r){var o=r.target.result,i=new Image;i.onload=function(){console.log("file width :"+this.width),console.log("file height :"+this.height),e.width=this.width,e.height=this.height,t()},i.onerror=n,i.src=o},r.readAsDataURL(e)})}},{key:"render",value:function(){var e=this.state,t=e.previewVisible,n=e.previewImage,r=e.fileList;console.log("fileList",r);var i=s.a.createElement("div",null,s.a.createElement(a.a,{type:"plus"}),s.a.createElement("div",{className:"ant-upload-text"},"Upload")),l={showUploadList:!0,listType:"picture-card",action:"".concat(window.apiHost||"http://localhost:9527","/api/image"),accept:"image/*",name:"file",multiple:!1,beforeUpload:this.handleBeforeUpload,onChange:this.handleChange,onPreview:this.handlePreview,fileList:r||[]};return s.a.createElement("div",null,s.a.createElement(o.a,l,r&&r.length>=1?null:i),s.a.createElement(c.a,{visible:t,footer:null,onCancel:this.handleCancel},s.a.createElement("img",{alt:"example",style:{width:"100%"},src:n})))}}])&&p(n.prototype,r),i&&p(n,i),t}();t.default=m},function(e,t){e.exports=require("antd/lib/upload/style/css")},function(e,t){e.exports=require("antd/lib/icon/style/css")},function(e,t,n){"use strict";n.r(t);n(5);var r=n(1),o=n.n(r),i=(n(14),n(3)),a=n.n(i),l=n(0),c=n.n(l),u=n(4),s=n.n(u),f=n(8),p=n.n(f),h=n(2),b=n.n(h);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=m(t).call(this,e))||"object"!==y(o)&&"function"!=typeof o?g(r):o,p()(g(n)),n.defaultSrc=b.a,n.state={previewVisible:e.visible,current:0,iserror:!1,src:n.confSrc(e.src)},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,l["PureComponent"]),n=t,(r=[{key:"confSrc",value:function(e){var t=e||this.defaultSrc,n=document.createElement("img");n.src="".concat(t);var r=this;return n.onerror=function(){r.setState({iserror:!0})},n.onload=function(){r.setState({width:n.width,height:n.height})},t}},{key:"closeModal",value:function(){this.setState({previewVisible:!1,boxWidth:0,boxHeight:0,current:0}),this.refs.imgBox.style.height="100%",this.refs.imgstyle.style.width="100%"}},{key:"confBox",value:function(e){var t=this.refs.imgBox.offsetHeight,n=this.refs.imgBox.offsetWidth;this.setState({boxWidth:n,boxHeight:t},function(){e()})}},{key:"componentDidMount",value:function(){}},{key:"undo",value:function(e){var t=this;e.preventDefault();var n=this.state.current-90;this.confBox(function(){n/90%2==0?(t.refs.imgBox.style.height=t.state.boxHeight+"px",t.refs.imgstyle.style.width=t.state.boxWidth+"px"):(t.refs.imgBox.style.height=t.state.boxHeight+"px",t.refs.imgstyle.style.width=t.state.boxHeight+"px")}),this.setState({current:n})}},{key:"redo",value:function(e){var t=this;e.preventDefault();var n=this.state.current+90;this.confBox(function(){n/90%2==0?(t.refs.imgBox.style.height=t.state.boxHeight+"px",t.refs.imgstyle.style.width=t.state.boxWidth+"px"):(t.refs.imgBox.style.height=t.state.boxHeight+"px",t.refs.imgstyle.style.width=t.state.boxHeight+"px")}),this.setState({current:n})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state;delete t.boxWidth,delete t.boxHeight,this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}({},t,{previewVisible:e.visible,src:this.confSrc(e.src)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.previewVisible,r=t.current,i=t.src,l=t.iserror,u=(t.width,t.height,{visible:n,footer:c.a.createElement("div",null,c.a.createElement(a.a,{icon:"undo",onClick:function(t){return e.undo(t)}},"逆时针旋转90°"),c.a.createElement(a.a,{icon:"redo",onClick:function(t){return e.redo(t)}},"正时针旋转90°")),onCancel:this.closeModal,maskClosable:!0,forceRender:!0});c.a.createElement("div",{ref:"imgBox",style:{display:"flex",alignItems:"center",justifyContent:"center"}},c.a.createElement("img",{ref:"imgstyle",style:{transform:"rotate(".concat(r,"deg)"),width:"100%",objectFit:"cover"},src:l?b.a:i,alt:l?b.a:i}));return c.a.createElement(o.a,u,c.a.createElement("div",{ref:"imgBox",style:{display:"flex",alignItems:"center",justifyContent:"center"}}),c.a.createElement("img",{ref:"imgstyle",style:{transform:"rotate(".concat(r,"deg)"),width:"100%",objectFit:"cover"},src:l?b.a:i,alt:l?b.a:i}))}}])&&d(n.prototype,r),i&&d(n,i),t}();w(x,"propTypes",{visible:s.a.bool,src:s.a.string}),t.default=x},function(e,t){e.exports=require("antd/lib/button/style/css")}]);