var SmartTv = /** @class */ (function () {
    function SmartTv(b, s, c) {
        this._brand = b;
        this._size = s;
        this._connections = c;
    }
    SmartTv.prototype.turnOn = function () {
        console.log("\n      Marca: ".concat(this._brand, ",\n      Tamanho: ").concat(this._size, ",\n      Conex\u00F5es: ").concat(this._connections, ",\n      "));
    };
    SmartTv.prototype.getConnectd = function () {
        return this._connectTo;
    };
    SmartTv.prototype.setConnectd = function (value) {
        if (this._connections.indexOf(value) !== -1) {
            this._connectTo = value;
            console.log(this._connectTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    };
    return SmartTv;
}());
var tv = new SmartTv('Phillips', 50, ['HDMI', 'Ethernet']);
tv.turnOn();
tv.setConnectd('Ethernet');
