// ==UserScript==
// @name         Hide Github Recommended for you
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Github Recommended for you
// @author       Harisankar P S
// @match        https://github.com
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('testing');
    setInterval(function () {
        [... document.querySelectorAll('h5')].filter(el => el.textContent.includes('Recommended based on people you follow')).forEach(function(i) { i.parentElement.parentElement.remove() });
    }, 1000);

})();
