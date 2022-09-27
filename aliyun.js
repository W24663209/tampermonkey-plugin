// ==UserScript==
// @name         阿里云
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.aliyun.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliyun.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var accessor = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'responseText');
    Object.defineProperty(XMLHttpRequest.prototype, 'responseText', {
        get: function () {
            var result = accessor.get.call(this)
            if (this.responseURL == 'https://buy-api.aliyun.com/price/getPrice.json') {
                let parse = JSON.parse(result);
                parse['success'] = true
                result = JSON.stringify(parse)
            }
            console.log('get responseText', result)
            return result;
        },
        set: function (str) {
            console.log('set responseText: %s', str);
            //return accessor.set.call(this, str);
        },
        configurable: true
    });
    // Your code here...
})();