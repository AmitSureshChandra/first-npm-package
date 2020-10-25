/*!
 * mybutton_test v1.0.0
 * (c) akumar00029
 * Released under the ISC License.
 */
'use strict';

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("mybutton", MyButton);
  }
};

module.exports = index;
