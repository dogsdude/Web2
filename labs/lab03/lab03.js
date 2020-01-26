import fs from 'fs';
import zlib from 'zlib';

class lab03 {

  syncFileRead(filename) {
    var data = fs.readFileSync(filename);
    return data.toString();
  }

  asyncFileRead(filename, callback)
  {
    fs.readFile(filename, function (err, data) {
      if (err) return console.error(err);
      callback(data.toString());
    });

  }

  compressFileStream(input_f, output_f) {
    var stream = fs.createReadStream(input_f)
                  .pipe(zlib.createGzip())
                  .pipe(fs.createWriteStream(output_f));

    return stream;
  }

  decompressFileStream(input_f, output_f) {
    var stream = fs.createReadStream(input_f)
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream(output_f));

    return stream;
  }


  listDirectoryContents(directory, callback) {
    var files = fs.readdir(directory, function (err, files) {
      if (err) return console.error(err);
      return callback(files);
    });
  }

}

export {lab03};
