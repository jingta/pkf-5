var i18n = require('makara'),
    provider = i18n.create({
      contentPath: __dirname,
      fallback: 'en_US'
    });

function printIndex (locale, callback) {
  provider.getBundle('index', locale, function (err, bundle) {
    if (err) return callback(err);

    'title greeting ccList states'.split(' ').forEach(function (key) {
      console.log(locale, key, '=', bundle.get('index.' + key));
    })

    callback();
  });
}

var locales = 'en_US en_AU'.split(' '); // what happens if we add more?
var i = 0;

(function next () {
  printIndex(locales[i], function (err) {
    if (err) throw err;
    if (++i < locales.length)
      next(); // loop again with next locale
  });
}()); // immediately invoked function