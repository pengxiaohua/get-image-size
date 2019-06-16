# get-image-size
According to the image link, to get it's file size.
Return a float Number, the unit is `Kb`. 

## Usage

```
npm install get-image-size --save
```

##### Promise
```
const getImageSize = require('./getImageSize.js');

const testLink = 'http://f.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d63a4b968316d55fbb2fbd97e.jpg';

getImageSize(testLink).then(imageSize => {
    console.log("imageSize: ", imageSize);
});
```

##### Async/Await
```
const getImageSize = require('./getImageSize.js');

const testLink = 'http://f.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513d63a4b968316d55fbb2fbd97e.jpg';

(async () => {
    const size = await getImageSize(testLink);
    console.log("size: ", size);
})();
```
