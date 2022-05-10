const { request, response } = require('express');
const path = require('path');

const userViewForm = async (req = request, res = response) => {
    res.sendFile(path.join(__dirname, '../views/index.html')); 
}

const getMyIp = async (req = request, res = response) => {
    res.sendFile(path.join(__dirname, '../views/ip.html')); 
}

module.exports = {
    userViewForm,
    getMyIp
}
