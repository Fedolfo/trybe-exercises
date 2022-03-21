class SmartTv {
  private _brand: string;
  private _size: number;
  private _connections: string[];
  private _connectTo?: string;

  constructor(b: string, s: number, c: string[]) {
    this._brand = b;
    this._size = s;
    this._connections = c;
  }

  public turnOn() {
    console.log(`
      Marca: ${this._brand},
      Tamanho: ${this._size},
      Conexões: ${this._connections},
      `);
  }

  getConnectd() {
    return this._connectTo;
  }

  setConnectd(value: string) {
    if(this._connections.indexOf(value) !== -1) {
      this._connectTo = value;
      console.log(this._connectTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv = new SmartTv('Phillips', 50, ['HDMI', 'Ethernet']);
tv.turnOn();
tv.setConnectd('Ethernet');