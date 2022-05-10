const { request, response } = require('express');
const _request = require('request');

const getProxy = async (req = request, res = response) => {
    let url = decodeURIComponent(req.url.replace('/proxy?url=', ''));
    req.pipe(_request(url)).pipe(res);
}

module.exports = {
    getProxy
}
