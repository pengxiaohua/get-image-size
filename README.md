# get-image-size
According to the image link, to get it's file size.
Return a float Number, the unit is `Kb`. 

[![Build Status](https://travis-ci.org/pengxiaohua/get-image-size.svg?branch=master)](https://travis-ci.org/pengxiaohua/get-image-size)
[![codebeat badge](https://codebeat.co/badges/6d3258bc-4b65-4599-ba50-708ca07e2842)](https://codebeat.co/projects/github-com-pengxiaohua-get-image-size-master)
![](https://img.shields.io/badge/license-MIT-brightgreen.svg)
## Usage

```
npm install get-image-size --save
```

##### Promise
```
const getImageSize = require('get-image-size');

const testLink = 'http://f.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d63a4b968316d55fbb2fbd97e.jpg';

getImageSize(testLink).then(imageSize => {
    console.log("imageSize: ", imageSize);
});
```

##### Async/Await
```
const getImageSize = require('get-image-size');

const testLink = 'http://f.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d63a4b968316d55fbb2fbd97e.jpg';

(async () => {
    const size = await getImageSize(testLink);
    console.log("size: ", size);
})();
```
