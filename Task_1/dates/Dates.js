"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
var DateUtils = /** @class */ (function () {
    function DateUtils(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
    DateUtils.prototype.getDifferenceBetweenDates = function () {
        var date1 = new Date(this.startDate);
        var date2 = new Date(this.endDate);
        var differenceMs = date2.valueOf() - date1.valueOf();
        var daysDifference = differenceMs / (1000 * 60 * 60 * 24);
        return Math.floor(daysDifference).toString();
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;
