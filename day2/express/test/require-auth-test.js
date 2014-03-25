/*global require:false, describe:false, it:false*/
'use strict';

var assert = require('chai').assert,
    requireAuth = require('../require-auth');

describe('requireAuth', function () {

  before(function (next) {
    next();
  });

  it('should return 401 for no creds', function () {
    var req = {headers:{}};
    var res = {
	headers: {},
	statusCode: 200,
	setHeader: function(key, val){
	    res.headers[key] = val;
	},
	end: function(body){
	    assert.equal(res.statusCode, 401, 'correct value');
	    assert.equal(body, '401: unauthorized', 'correct value');
	    assert.equal(res.headers['WWW-Authenticate'], 'Basic', 'correct value');
	}
    };
    function next() {
	assert.fail();
	assert.fail();
    };
    requireAuth(req, res, next);
  });

  it('should return 401 for bad creds', function () {
    var req = {
	headers:{
	    'authorization': "Basic " + new Buffer("guest:guess?").toString('base64')
	}
    };
    var res = {
	headers: {},
	statusCode: 200,
	setHeader: function(key, val){
	    res.headers[key] = val;
	},
	end: function(body, code){
	    assert.equal(res.statusCode, 401, 'correct value');
	    assert.equal(body, '401: unauthorized', 'correct value');
	    assert.equal(res.headers['WWW-Authenticate'], 'Basic', 'correct value');
	}
    };
    function next() {
	assert.fail();
	assert.fail();
    };
    requireAuth(req, res, next);
  });

  it('should work for valid creds', function () {
    var req = {
        headers: {
	    'authorization': "Basic " + new Buffer("admin:passw0rd").toString('base64')
	}
    };
    var res = {
	end: function(body){
	    assert.fail();
	}
    };
    function next() {
	assert.isTrue(true);
    };
    requireAuth(req, res, next);
  });


});
///