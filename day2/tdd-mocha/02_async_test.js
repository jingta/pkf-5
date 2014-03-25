/*global describe:false, it:false*/
'use strict';

var assert = require('chai').assert,
    fs = require('fs');

describe('Core fs', function () {
  describe('stat()', function () {

    it('should return an error when file does not exist', function (next) {

      fs.stat('/path/to/nonsense/file', function (err, stat) {
        assert.ok(err, 'received an error');
        assert.equal(err.code, 'ENOENT', 'received correct error type');
        assert.notOk(stat, 'did not receive a "stat"');

        //next();
      });

    });

  });
});