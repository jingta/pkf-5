'use strict';

/* Kraken Forge Day 2 Lab */

function getUsername(req){

}
function getPassword(req) {

}
function validCredentials(username, password) {
    if (username == 'admin' && password == 'passw0rd') {
	return true;
    } else {
	return false;
    }
}
function logIn(req, res) {
    var header=req.headers['authorization']||'',        // get the header
	token=header.split(/\s+/).pop()||'',            // and the encoded auth token
	auth=new Buffer(token, 'base64').toString(),    // convert from base64
	parts=auth.split(/:/),                          // split on colon
	username=parts[0],
	password=parts[1];

    if (validCredentials(username, password)) {
	return true;
    } else {
	return false;
    }
}

module.exports = function requireAuth(req, res, next) {
    if (logIn(req, res)) {
	next();
    } else {
	res.statusCode = 401;
	res.setHeader('WWW-Authenticate', 'Basic');
	res.end('401: unauthorized');
    }
};
