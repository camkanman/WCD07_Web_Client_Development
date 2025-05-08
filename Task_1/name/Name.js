"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameUtils = void 0;
var NameUtils = /** @class */ (function () {
    function NameUtils(inputName) {
        this.inputName = inputName;
    }
    NameUtils.prototype.getInitialNameUppercase = function () {
        var initials = this.inputName.split(" ").map(function (word) { return word.charAt(0).toUpperCase(); }).join("");
        return initials;
    };
    return NameUtils;
}());
exports.NameUtils = NameUtils;
