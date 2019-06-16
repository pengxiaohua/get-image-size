"use strict";

const fs = require("fs");
const request = require("request");
const path = require("path");
const os = require("os");

const getImagesize = (imageLink) => {
    return new Promise((resolve, reject) => {
        // create a temporary image path
        const imgPath = path.join(os.tmpdir(), `${Date.now()} ${Math.random() * 1000000}.tmp.jpg`);
        // create a writeStream
        const writeStream = fs.createWriteStream(imgPath);

        request.get(imageLink)
            .on("error", (err) => {
                reject(err);
            })
            .on("end", () => {
                console.log("image download success");
            })
            .pipe(writeStream);

        writeStream.on("finish", () => {
            console.log("image write success");
            writeStream.end();
            // get image info object
            const imgInfo = fs.statSync(imgPath, "utf8");

            // delete local image
            fs.unlink(imgPath, (err) => {
                if (err) throw err;
                console.log("delete success");
                imgInfo.size = parseFloat((imgInfo.size / 1024).toFixed(2));
                resolve(imgInfo.size);
            })
        })
    })
}

module.exports = getImagesize;
