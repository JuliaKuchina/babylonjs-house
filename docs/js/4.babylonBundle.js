/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var i=n(228),r=n(229),_=n(230);function o(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return b(this,t)}return c(this,t,e,n)}function c(t,e,n,i){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,i){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,n):new Uint8Array(e,n,i);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=l(t,e);return t}(t,e,n,i):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|u(e,n),r=(t=a(t,i)).write(e,n);r!==i&&(t=t.slice(0,r));return t}(t,e,n):function(t,e){if(s.isBuffer(e)){var n=0|f(e.length);return 0===(t=a(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(i=e.length)!=i?a(t,0):l(t,e);if("Buffer"===e.type&&_(e.data))return l(t,e.data)}var i;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function p(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function b(t,e){if(p(e),t=a(t,e<0?0:0|f(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function l(t,e){var n=e.length<0?0:0|f(e.length);t=a(t,n);for(var i=0;i<n;i+=1)t[i]=255&e[i];return t}function f(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function u(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return H(t).length;default:if(i)return V(t).length;e=(""+e).toLowerCase(),i=!0}}function d(t,e,n){var i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return B(this,e,n);case"utf8":case"utf-8":return D(this,e,n);case"ascii":return j(this,e,n);case"latin1":case"binary":return I(this,e,n);case"base64":return k(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function m(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function A(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=s.from(e,i)),s.isBuffer(e))return 0===e.length?-1:y(t,e,n,i,r);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):y(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function y(t,e,n,i,r){var _,o=1,a=t.length,s=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,s/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){var p=-1;for(_=n;_<a;_++)if(c(t,_)===c(e,-1===p?0:_-p)){if(-1===p&&(p=_),_-p+1===s)return p*o}else-1!==p&&(_-=_-p),p=-1}else for(n+s>a&&(n=a-s),_=n;_>=0;_--){for(var b=!0,l=0;l<s;l++)if(c(t,_+l)!==c(e,l)){b=!1;break}if(b)return _}return-1}function h(t,e,n,i){n=Number(n)||0;var r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;var _=e.length;if(_%2!=0)throw new TypeError("Invalid hex string");i>_/2&&(i=_/2);for(var o=0;o<i;++o){var a=parseInt(e.substr(2*o,2),16);if(isNaN(a))return o;t[n+o]=a}return o}function g(t,e,n,i){return Q(V(e,t.length-n),t,n,i)}function C(t,e,n,i){return Q(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function v(t,e,n,i){return C(t,e,n,i)}function S(t,e,n,i){return Q(H(e),t,n,i)}function R(t,e,n,i){return Q(function(t,e){for(var n,i,r,_=[],o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,_.push(r),_.push(i);return _}(e,t.length-n),t,n,i)}function k(t,e,n){return 0===e&&n===t.length?i.fromByteArray(t):i.fromByteArray(t.slice(e,n))}function D(t,e,n){n=Math.min(t.length,n);for(var i=[],r=e;r<n;){var _,o,a,s,c=t[r],p=null,b=c>239?4:c>223?3:c>191?2:1;if(r+b<=n)switch(b){case 1:c<128&&(p=c);break;case 2:128==(192&(_=t[r+1]))&&(s=(31&c)<<6|63&_)>127&&(p=s);break;case 3:_=t[r+1],o=t[r+2],128==(192&_)&&128==(192&o)&&(s=(15&c)<<12|(63&_)<<6|63&o)>2047&&(s<55296||s>57343)&&(p=s);break;case 4:_=t[r+1],o=t[r+2],a=t[r+3],128==(192&_)&&128==(192&o)&&128==(192&a)&&(s=(15&c)<<18|(63&_)<<12|(63&o)<<6|63&a)>65535&&s<1114112&&(p=s)}null===p?(p=65533,b=1):p>65535&&(p-=65536,i.push(p>>>10&1023|55296),p=56320|1023&p),i.push(p),r+=b}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=o(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return c(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return function(t,e,n,i){return p(e),e<=0?a(t,e):void 0!==n?"string"==typeof i?a(t,e).fill(n,i):a(t,e).fill(n):a(t,e)}(null,t,e,n)},s.allocUnsafe=function(t){return b(null,t)},s.allocUnsafeSlow=function(t){return b(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,i=e.length,r=0,_=Math.min(n,i);r<_;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!_(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var i=s.allocUnsafe(e),r=0;for(n=0;n<t.length;++n){var o=t[n];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(i,r),r+=o.length}return i},s.byteLength=u,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?D(this,0,t):d.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,i,r){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;for(var _=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0),a=Math.min(_,o),c=this.slice(i,r),p=t.slice(e,n),b=0;b<a;++b)if(c[b]!==p[b]){_=c[b],o=p[b];break}return _<o?-1:o<_?1:0},s.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},s.prototype.indexOf=function(t,e,n){return A(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return A(this,t,e,n,!1)},s.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var _=!1;;)switch(i){case"hex":return h(this,t,e,n);case"utf8":case"utf-8":return g(this,t,e,n);case"ascii":return C(this,t,e,n);case"latin1":case"binary":return v(this,t,e,n);case"base64":return S(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,n);default:if(_)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),_=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function j(t,e,n){var i="";n=Math.min(t.length,n);for(var r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function I(t,e,n){var i="";n=Math.min(t.length,n);for(var r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function B(t,e,n){var i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);for(var r="",_=e;_<n;++_)r+=L(t[_]);return r}function W(t,e,n){for(var i=t.slice(e,n),r="",_=0;_<i.length;_+=2)r+=String.fromCharCode(i[_]+256*i[_+1]);return r}function T(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function w(t,e,n,i,r,_){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<_)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function P(t,e,n,i){e<0&&(e=65535+e+1);for(var r=0,_=Math.min(t.length-n,2);r<_;++r)t[n+r]=(e&255<<8*(i?r:1-r))>>>8*(i?r:1-r)}function F(t,e,n,i){e<0&&(e=4294967295+e+1);for(var r=0,_=Math.min(t.length-n,4);r<_;++r)t[n+r]=e>>>8*(i?r:3-r)&255}function O(t,e,n,i,r,_){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function x(t,e,n,i,_){return _||O(t,0,n,4),r.write(t,e,n,i,23,4),n+4}function M(t,e,n,i,_){return _||O(t,0,n,8),r.write(t,e,n,i,52,8),n+8}s.prototype.slice=function(t,e){var n,i=this.length;if((t=~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),(e=void 0===e?i:~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=s.prototype;else{var r=e-t;n=new s(r,void 0);for(var _=0;_<r;++_)n[_]=this[_+t]}return n},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length);for(var i=this[t],r=1,_=0;++_<e&&(r*=256);)i+=this[t+_]*r;return i},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length);for(var i=this[t+--e],r=1;e>0&&(r*=256);)i+=this[t+--e]*r;return i},s.prototype.readUInt8=function(t,e){return e||T(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||T(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||T(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||T(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length);for(var i=this[t],r=1,_=0;++_<e&&(r*=256);)i+=this[t+_]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length);for(var i=e,r=1,_=this[t+--i];i>0&&(r*=256);)_+=this[t+--i]*r;return _>=(r*=128)&&(_-=Math.pow(2,8*e)),_},s.prototype.readInt8=function(t,e){return e||T(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||T(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||T(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||T(t,4,this.length),r.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||T(t,4,this.length),r.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||T(t,8,this.length),r.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||T(t,8,this.length),r.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,i){(t=+t,e|=0,n|=0,i)||w(this,t,e,n,Math.pow(2,8*n)-1,0);var r=1,_=0;for(this[e]=255&t;++_<n&&(r*=256);)this[e+_]=t/r&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,i){(t=+t,e|=0,n|=0,i)||w(this,t,e,n,Math.pow(2,8*n)-1,0);var r=n-1,_=1;for(this[e+r]=255&t;--r>=0&&(_*=256);)this[e+r]=t/_&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e|=0,!i){var r=Math.pow(2,8*n-1);w(this,t,e,n,r-1,-r)}var _=0,o=1,a=0;for(this[e]=255&t;++_<n&&(o*=256);)t<0&&0===a&&0!==this[e+_-1]&&(a=1),this[e+_]=(t/o>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e|=0,!i){var r=Math.pow(2,8*n-1);w(this,t,e,n,r-1,-r)}var _=n-1,o=1,a=0;for(this[e+_]=255&t;--_>=0&&(o*=256);)t<0&&0===a&&0!==this[e+_+1]&&(a=1),this[e+_]=(t/o>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||w(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return x(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return x(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return M(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return M(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,i){if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var r,_=i-n;if(this===t&&n<e&&e<i)for(r=_-1;r>=0;--r)t[r+e]=this[r+n];else if(_<1e3||!s.TYPED_ARRAY_SUPPORT)for(r=0;r<_;++r)t[r+e]=this[r+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+_),e);return _},s.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===t.length){var r=t.charCodeAt(0);r<256&&(t=r)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var _;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(_=e;_<n;++_)this[_]=t;else{var o=s.isBuffer(t)?t:V(new s(t,i).toString()),a=o.length;for(_=0;_<n-e;++_)this[_+e]=o[_%a]}return this};var G=/[^+\/0-9A-Za-z-_]/g;function L(t){return t<16?"0"+t.toString(16):t.toString(16)}function V(t,e){var n;e=e||1/0;for(var i=t.length,r=null,_=[],o=0;o<i;++o){if((n=t.charCodeAt(o))>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&_.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&_.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&_.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&_.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;_.push(n)}else if(n<2048){if((e-=2)<0)break;_.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;_.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;_.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return _}function H(t){return i.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(G,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Q(t,e,n,i){for(var r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}}).call(this,n(169))},228:function(t,e,n){"use strict";e.byteLength=function(t){var e=c(t),n=e[0],i=e[1];return 3*(n+i)/4-i},e.toByteArray=function(t){var e,n,i=c(t),o=i[0],a=i[1],s=new _(function(t,e,n){return 3*(e+n)/4-n}(0,o,a)),p=0,b=a>0?o-4:o;for(n=0;n<b;n+=4)e=r[t.charCodeAt(n)]<<18|r[t.charCodeAt(n+1)]<<12|r[t.charCodeAt(n+2)]<<6|r[t.charCodeAt(n+3)],s[p++]=e>>16&255,s[p++]=e>>8&255,s[p++]=255&e;2===a&&(e=r[t.charCodeAt(n)]<<2|r[t.charCodeAt(n+1)]>>4,s[p++]=255&e);1===a&&(e=r[t.charCodeAt(n)]<<10|r[t.charCodeAt(n+1)]<<4|r[t.charCodeAt(n+2)]>>2,s[p++]=e>>8&255,s[p++]=255&e);return s},e.fromByteArray=function(t){for(var e,n=t.length,r=n%3,_=[],o=0,a=n-r;o<a;o+=16383)_.push(p(t,o,o+16383>a?a:o+16383));1===r?(e=t[n-1],_.push(i[e>>2]+i[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],_.push(i[e>>10]+i[e>>4&63]+i[e<<2&63]+"="));return _.join("")};for(var i=[],r=[],_="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)i[a]=o[a],r[o.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function p(t,e,n){for(var r,_,o=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(i[(_=r)>>18&63]+i[_>>12&63]+i[_>>6&63]+i[63&_]);return o.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},229:function(t,e){e.read=function(t,e,n,i,r){var _,o,a=8*r-i-1,s=(1<<a)-1,c=s>>1,p=-7,b=n?r-1:0,l=n?-1:1,f=t[e+b];for(b+=l,_=f&(1<<-p)-1,f>>=-p,p+=a;p>0;_=256*_+t[e+b],b+=l,p-=8);for(o=_&(1<<-p)-1,_>>=-p,p+=i;p>0;o=256*o+t[e+b],b+=l,p-=8);if(0===_)_=1-c;else{if(_===s)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),_-=c}return(f?-1:1)*o*Math.pow(2,_-i)},e.write=function(t,e,n,i,r,_){var o,a,s,c=8*_-r-1,p=(1<<c)-1,b=p>>1,l=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:_-1,u=i?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-o))<1&&(o--,s*=2),(e+=o+b>=1?l/s:l*Math.pow(2,1-b))*s>=2&&(o++,s/=2),o+b>=p?(a=0,o=p):o+b>=1?(a=(e*s-1)*Math.pow(2,r),o+=b):(a=e*Math.pow(2,b-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=u,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;t[n+f]=255&o,f+=u,o/=256,c-=8);t[n+f-u]|=128*d}},230:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},231:function(t,e){}}]);
//# sourceMappingURL=4.babylonBundle.js.map