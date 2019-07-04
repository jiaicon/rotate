// const _banner = require("./antd");
const _uploadPhoto = require("./upload");
const _rotate = require("./rotate");

Object.defineProperty(exports, "Rotate", {
    enumerable: true,
    get: function get() {
        return _rotate["default"];
    }
});

// Object.defineProperty(exports, "Banner", {
//     enumerable: true,
//     get: function get() {
//         return _banner["default"];
//     }
// });

Object.defineProperty(exports, "UploadPhoto", {
    enumerable: true,
    get: function get() {
        return _uploadPhoto["default"];
    }
});





// module.exports = {
//     Banner: _banner['default'],
//     UploadPhoto: _uploadPhoto['default'],
//     Rotate: _rotate['default']
// };