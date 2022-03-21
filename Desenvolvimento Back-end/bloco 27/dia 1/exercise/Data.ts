
class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {

      const dateStr = `${year}-${month}-${day}`;

      if (new Date(dateStr).getDate() !== day) {
          day = 1;
          month = 1;
          year = 1900;
      }

      this._day = day;
      this._month = month;
      this._year = year;
  }

  get day(): number {
      return this._day
  }

  set day(value: number) {
      this._day = value;
  }

  get month(): number {
      return this._month
  }

  set month(value: number) {
      this._month = value;
  }

  get year(): number {
      return this._year
  }

  set year(value: number) {
      this._year = value;
  }

}

const date = new Data(29, 1, 1989);

console.log(testDate);