/* eslint-disable no-console */
const axios = require('axios');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

let httpsProxyAgent = require('https-proxy-agent');
const agent = new httpsProxyAgent('http://proxyout.reform.hmcts.net:8080');

const httpAxios = axios.create({
  withCredentials: true,
  jar: new tough.CookieJar()

});

axiosCookieJarSupport(httpAxios);

httpAxios.interceptors.request.use(function (config) {
  config.httpsAgent = agent;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// // Add a response interceptor
httpAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

exports.default = httpAxios;