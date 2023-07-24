'use strict';

var radash = require('radash');
var u = require('pluralize');
var execa = require('execa');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var u__default = /*#__PURE__*/_interopDefault(u);

function a(n){return n[0]}function l(n){return n.slice(1)}function g(n,r){return r!=null&&r.constructor===n||r instanceof n}var c=radash.camel,b=radash.snake,S=radash.dash;function h(n){return n.toUpperCase()}function x(n){return n.toLowerCase()}function d(n){return n.charAt(0).toUpperCase()+n.slice(1)}function w(n){return n.charAt(0).toLowerCase()+n.slice(1)}function C(n,r,e){let i=e??" ".repeat(r);return i+n+i}function E(n,r,e){return (e??" ".repeat(r))+n}function P(n,r,e){let i=e??" ".repeat(r);return n+i}function k(n,r){return n.repeat(r)}function O(n){return n.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function p(n){return n.trim()}function U(n){return n.trimStart()}function G(n){return n.trimEnd()}var t=(n,r,e)=>u__default.default(n,r,e);t.plural=n=>u__default.default.plural(n);t.singular=n=>u__default.default.singular(n);t.addPluralRule=(n,r)=>u__default.default.addPluralRule(n,r);t.addSingularRule=(n,r)=>u__default.default.addSingularRule(n,r);t.addIrregularRule=(n,r)=>u__default.default.addIrregularRule(n,r);t.addUncountableRule=n=>u__default.default.addUncountableRule(n);t.isPlural=n=>u__default.default.isPlural(n);t.isSingular=n=>u__default.default.isSingular(n);function f(n){return !g(String,n)}function A(n){return f(n)||p(n)===""}function I(n){return n}function L(n){return d(c(n))}var N={isNotString:f,isBlank:A,identity:I,pascalCase:L,camelCase:c,kebabCase:S,lowerCase:x,lowerFirst:w,pad:C,padEnd:P,padStart:E,repeat:k,snakeCase:b,startCase:O,trim:p,trimEnd:G,trimStart:U,upperCase:h,upperFirst:d,pluralize:t,plural:t.plural,singular:t.singular,addPluralRule:t.addPluralRule,addSingularRule:t.addSingularRule,addIrregularRule:t.addIrregularRule,addUncountableRule:t.addUncountableRule,isPlural:t.isPlural,isSingular:t.isSingular};async function z(n,r,e){try{let i=await execa.execa(n,r,e);return console.log(i?.command),console.log(i?.stdout),i}catch(i){console.log("error",i);}}async function F(n,r={}){return new Promise((e,i)=>{let o=n.split(" ");execa.execa(a(o),l(o),r).then(s=>e(s.stdout)).catch(s=>i(s));})}function j(){let n=process.uptime();return ()=>Math.floor((process.uptime()-n)*1e3)}var q={exec:F,run:z,startTimer:j};

exports.strings = N;
exports.system = q;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map