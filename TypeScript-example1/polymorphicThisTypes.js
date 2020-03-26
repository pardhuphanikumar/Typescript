"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var StringBuilder = /** @class */ (function () {
    function StringBuilder(value) {
        if (value === void 0) { value = ""; }
        this.value = value;
    }
    StringBuilder.prototype.append = function (text) {
        this.value += text;
        return this;
    };
    StringBuilder.prototype.appendLine = function (line) {
        this.value += line + '\n';
        return this;
    };
    StringBuilder.prototype.result = function () {
        return this.value;
    };
    return StringBuilder;
}());
exports.StringBuilder = StringBuilder;
var builder = new StringBuilder;
var res = builder.appendLine('Header').append('Label:').appendLine('i am label').result();
console.log(res);
//output is
// Header
// Label:i am label
///scenorio -2
var ObjectStringBulder = /** @class */ (function (_super) {
    __extends(ObjectStringBulder, _super);
    function ObjectStringBulder(value) {
        if (value === void 0) { value = ""; }
        return _super.call(this, value) || this;
    }
    ObjectStringBulder.prototype.appendObject = function (obj) {
        this.value = JSON.stringify(obj);
        return this;
    };
    return ObjectStringBulder;
}(StringBuilder));
exports.ObjectStringBulder = ObjectStringBulder;
var builder1 = new ObjectStringBulder;
var res1 = builder1
    .appendObject({ a: 1 })
    .appendLine('Header')
    .append('Label:')
    .appendObject({ b: 1 })
    .appendLine('i am label')
    .result();
console.log(res1);
