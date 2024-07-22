//Define the Person Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Static method
    static greet() {
        return "Hello there!";
    }

    // Prototype method
    canSleep() {
        return `${this.name} is sleeping`;
    }
}

// Define the Employee Class (inherits from Person)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this._salary = salary; // Private property with underscore convention
    }

    // Getter and setter for salary
    get salary() {
        return this._salary;
    }

    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        } else {
            console.log("Salary must be a positive number.");
        }
    }

    // Prototype method
    working() {
        return `${this.name} is working`;
    }
}

// Define the Manager Class (inherits from Employee)

class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }

    // Static method
    static getRole() {
        return "Manager";
    }

    // Prototype method
    managing() {
        return `${this.name} is managing`;
    }
}

//Define the Executive Class (extends Manager)

class Executive extends Manager {
    constructor(name, age, salary, bonus) {
        super(name, age, salary);
        this._bonus = bonus; // Private property with underscore convention
    }

    // Getter and setter for bonus
    get bonus() {
        return this._bonus;
    }

    set bonus(newBonus) {
        if (newBonus > 0) {
            this._bonus = newBonus;
        }
    }
}

// Create a Person
let person1 = new Person("Alice", 30);
console.log(Person.greet()); // Output: Hello there!
console.log(person1.canSleep()); // Output: Alice is sleeping

// Create an Employee
let employee1 = new Employee("Bob", 35, 50000);
console.log(employee1.working()); // Output: Bob is working
console.log(employee1.salary); // Output: 50000
employee1.salary = 55000;
console.log(employee1.salary); // Output: 55000
employee1.salary = -1000; // Should print "Salary must be a positive number."
console.log(employee1.salary); // Output: 55000 (unchanged)

// Create a Manager
let manager1 = new Manager("Charlie", 40, 60000);
console.log(manager1.managing()); // Output: Charlie is managing
console.log(Manager.getRole()); // Output: Manager

// Create an Executive
let executive1 = new Executive("David", 45, 70000, 10000);
console.log(executive1.managing()); // Output: David is managing
console.log(Manager.getRole()); // Output: Manager
console.log(executive1.bonus); // Output: 10000
executive1.bonus = 12000;
console.log(executive1.bonus); // Output: 12000
executive1.bonus = -5000; // Should not update bonus because value is negative
console.log(executive1.bonus); // Output: 12000 (unchanged)
