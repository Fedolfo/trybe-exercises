var Data = /** @class */ (function () {
    function Data(day, month, year) {
        var dateStr = "".concat(year, "-").concat(month, "-").concat(day);
        if (new Date(dateStr).getDate() !== day) {
            day = 1;
            month = 1;
            year = 1900;
        }
        this._day = day;
        this._month = month;
        this._year = year;
    }
    Object.defineProperty(Data.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            this._day = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
var testDate = new Data(29, 1, 1989);
console.log(testDate);
