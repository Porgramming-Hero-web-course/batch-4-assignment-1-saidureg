{
  //
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge = (): string => {
      const currentYear: number = new Date().getFullYear();
      const carAge: number = currentYear - this.year;
      return `${carAge} (assuming current year is ${currentYear})`;
    };
  }

  const car = new Car("Honda", "Civic", 2018);

  console.log(car.getCarAge());

  //
}
