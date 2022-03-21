var DataAvanced = /** @class */ (function () {
    function DataAvanced(day, month, year) {
        var dateStr = "".concat(year, "-").concat(month, "-").concat(day);
        if (!this.validateDate(day, month, year)) {
            day = 1;
            month = 1;
            year = 1900;
        }
        this._day = day;
        this._month = month;
        this._year = year;
    }
    Object.defineProperty(DataAvanced.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            this._day = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAvanced.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAvanced.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAvanced.prototype.getMonthName = function () {
        var months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];
        return months[this.month - 1];
    };
    DataAvanced.prototype.isLeapYear = function () {
        return this._year % 4 === 0;
    };
    DataAvanced.prototype.compare = function (date) {
        var currentDateStr = "".concat(this.year, "-").concat(this.month, "-").concat(this.day);
        var dateStr = "".concat(date.year, "-").concat(date.month, "-").concat(date.day);
        if (new Date(currentDateStr) > new Date(dateStr))
            return 1;
        if (new Date(currentDateStr) < new Date(dateStr))
            return -1;
        return 0;
    };
    DataAvanced.prototype.format = function (formatting) {
        var conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g)) // verifica se tem o dia na formatação
        ];
        if (conditions.every(function (cond) { return cond; })) {
            throw new Error("O formato passado \u00E9 inv\u00E1lido: ".concat(formatting));
        }
        var day = this.day > 9 ? this.day.toString() : "0".concat(this.day.toString());
        var month = this.month > 9 ? this.month.toString() : "0".concat(this.month.toString());
        var year = this.year.toString();
        var dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substr(-2));
        return dateFormatting;
    };
    DataAvanced.prototype.validateDate = function (day, month, year) {
        var dateStr = "".concat(year, "-").concat(month, "-").concat(day);
        if (new Date(dateStr).getDate() !== day)
            return false;
        return true;
    };
    return DataAvanced;
}());
// Para testar!
var testDate = new DataAvanced(29, 1, 1989);
console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));
var otherDate = new DataAvanced(30, 1, 2021);
var compared = testDate.compare(otherDate);
var compareStates = ['anterior', 'igual', 'posterior'];
console.log("A primeira data \u00E9 ".concat(compareStates[compared + 1], " a segunda."));
// data inválida
// const invalidDate = new DataAvanced(31, 2, 2021);
// console.log('Teste data inválida: ', invalidDate)
// // formato inválido
// console.log(invalidDate.format('a m d'));
