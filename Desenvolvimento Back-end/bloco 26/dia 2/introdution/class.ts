class Dog {
  _name: string;
  _color: string;
  _age: number;

  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  bark(): void {
    console.log("Au Au");
  }
}

class House {
  _owner: string;
  _address: string;
  _color: string;
  _area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this._owner = owner;
    this._address = address;
    this._color = color;
    this._area = area;
  }
}

class Flight {
  _origin: string;
  _destination: string;
  _departureDate: Date;
  _arrivalDate: Date;
  _passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this._origin = origin;
    this._destination = destination;
    this._departureDate = departureDate;
    this._arrivalDate = arrivalDate;
    this._passengers = passengers;
  }
}