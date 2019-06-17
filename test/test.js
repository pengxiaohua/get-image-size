const getImageSize = require("../index");
const assert = require('assert');

describe('getImageSize', function () {
    it('should return a number', function () {
        const demoImgSrc = "http://e.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg";
        getImageSize(demoImgSrc).then(size => {
            console.log(`Image size is: ${size} Kb`);
            assert.equal(typeof size, "number");
        })
    });
});