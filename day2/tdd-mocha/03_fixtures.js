/*global describe:false, it:false, before:true, after:true, beforeEach:true*/
'use strict';

var assert = require('chai').assert,
    os = require('os'),
    fs = require('fs'),
    path = require('path');

describe('Core fs', function () {
  describe('chmod()', function () {

    var testfile = path.join(os.tmpDir(), 'test_core_fs.' + process.pid);

    before(function (next) {
      fs.writeFile(testfile, 'contents', next); // dummy file with dummy contents
    });

    after(function (next) {
      fs.unlink(testfile, next); // delete
    });

    beforeEach(function (next) {
      fs.chmod(testfile, '644', next); // reset file permissions to 644
    });

    /// fs.chmod() test executor
    function testModeChange (mode, next) {
      fs.stat(testfile, function (err, stat) { // sanity check, original mode
        assert.notOk(err);
        assert.equal('644', stat.mode.toString(8).substring(3), 'correct initial mode');

        fs.chmod(testfile, mode, function (err) { // execute tested method
          assert.notOk(err, 'no error');
        
          fs.stat(testfile, function (err, stat) { // check mode has changed
            assert.notOk(err);
            assert.equal(mode, stat.mode.toString(8).substring(3), 'correct mode');
            next();
          });

        });

      });
    }

    it('should change mode to 755', function (next) {
      testModeChange('755', next);
    });
    it('should change mode to 400', function (next) {
      testModeChange('755', next);
    });
    it('should change mode to 222', function (next) {
      testModeChange('222', next);
    });
    ///
  });
});