import { ICar } from './interfaces';

export default class Car implements ICar {
  drive(): void { console.log('Drive  car'); }
}