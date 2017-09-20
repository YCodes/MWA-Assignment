class Car {
    constructor(private name: String, private _acceleration: number = 0) {
        this.name = name;
    }
    honk(): void {
        console.log(`${this.name} is saying Tooooooot`);
    }
    setAcceleration(speed: number): void {
        this._acceleration += speed;
    }
    getAcceleration(): number {
        return this._acceleration;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.getAcceleration());
car.setAcceleration(30);
car.setAcceleration(60);
console.log(car.getAcceleration());