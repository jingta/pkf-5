var finder = require('findatag'),
    fs = require('fs');

/// Entity handler
var entityHandler = {
  tagHandlers: {
     'needle': {
        exec: function (def, callback) {
          // callback sends the data we want to send out of the stream in place of this tag
          callback(null, '\nneedle: ' + JSON.stringify(def, null, 2) + '\n');
        }
      },
      'squid': {
        exec: function (def, callback) {
          callback(null, '\nsquid: ' + JSON.stringify(def, null, 2) + '\n');
        }
      }
  },

  get tags () { // list of tags we want to know about
    return Object.keys(this.tagHandlers);
  },

  onTag: function (def, callback) { // when a tag is found in a stream
    this.tagHandlers[def.name].exec(def, callback);
  },

  onText: function (chunk, callback) { // when everything else is found
    callback(null, ''); // return an empty string, no output here
  }
}
///

var finderStream = finder.createParseStream(entityHandler);
fs.createReadStream('tags_in_a_haystack.dust').pipe(finderStream).pipe(process.stdout);
