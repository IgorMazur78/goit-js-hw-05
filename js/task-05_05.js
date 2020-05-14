"use strict";
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(car);
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ maxSpeed, speed, isOn, distance, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
  }
  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  set costly(newPrice) {
    this.price = newPrice;
  }
  get costly() {
    return this.price;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn(cod) {
    this.isOn = cod === 111 ? true : false;
  }
  //     if (cod === 111) {
  //       this.isOn = true;
  //     }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff(cod) {
    // this.isOn = cod !== 111 ? false && (this.speed = 0) : true;

    // this.speed = value > this.maxSpeed ? this.maxSpeed : this.speed + value;
    if (cod !== 111) {
      this.isOn = false;
      this.speed = 0;
    }
  }
  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    this.speed = this.speed + value;
    if (this.speed > this.maxSpeed) {
      this.isOn = false;
    }
  }
  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    this.speed > 0 && this.speed > value
      ? (this.speed = this.speed - value)
      : (this.isOn = false);
    // if (this.speed > 0 && this.speed > value) {
    //   this.speed = this.speed - value;
    // } else {
    //   this.isOn = false;
    // }
  }
  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this.isOn === true
      ? (this.distance = this.distance + hours * this.speed)
      : (this.distance = 0);
    // if (this.isOn === true) {
    //   this.distance = this.distance + hours * this.speed;
    // }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn(111);

mustang.accelerate(50);

mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff(123);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// +++++++++++++++++++++++++++++++++++++
