import fs from 'fs';
import zlib from 'zlib';

class lab03 {

  syncFileRead(filename) {
    var fs = require("fs");
    console.log("Synchronous File Read");
    var readerStream = fs.createReadStream(filename);
    readerStream.setEncoding('UTF8');
    readerStream.on()
    var data = fs.syncFileRead(filename);
    console.log(data.toString());

    return f;
  }

  asyncFileRead(/* Insert Parameters here */) {
    /* Implement function here */
  }

  compressFileStream(/* Insert Parameters here */) {
    /* Implement function here */
  }

  decompressFileStream(/* Insert Parameters here */) {
    /* Implement function here */
  }

  listDirectoryContents(/* Insert Parameters here */) {
    /* Implement function here */
  }

}

export {lab03};
