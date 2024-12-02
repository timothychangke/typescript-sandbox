type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection types can also be implemented via interfaces and inheritance
// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// this is an example of a typeguard where the type would determine the result
const addFnTypeguard = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  // in this case, typeof only can check if the variable is an object or not and can't check type Employee or Admin. this checks if the property is in the type
  if ('privilege' in emp) {
    console.log(emp.privilege);
  }
};

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo of ' + amount + 'amount');
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
  // the more elegant way is to use instance of in this case. however, for interfaces, we cannot use it as interfaces are not compiled in runtime 
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};


// Disciminated Union
interface Bird {
    // this is a literal type assignement and not a property
    type: 'Bird'
    flyingSpeed: number
}

interface Horse {
    type: 'Horse'
    runningSpeed: number
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
    // interfaces cannot be used here as interfaces are used here. The solution is a discriminated union
    let speed
    switch (animal.type) {
        // typescript can understand the different types an animal can be
        case 'Bird':
            speed = animal.flyingSpeed
            break
        case 'Horse':
            speed = animal.runningSpeed
            break

    }
    console.log('Moving with speed:' + speed)
}

// typescript can tell if the property is invalid so as to ensure type safety
moveAnimal({type: 'Bird', flyingSpeed: 1000})

