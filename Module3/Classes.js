"use strict";

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    getAnnualSalary() {
        return (this.salary * 12) + this.bonus;
    }
}

const manager1 = new Manager("Alice", 5000, "IT", 10000);
const manager2 = new Manager("Bob", 6000, "HR", 15000);

console.log(`${manager1.name} Annual Salary:`, manager1.getAnnualSalary());
console.log(`${manager2.name} Annual Salary:`, manager2.getAnnualSalary()); 
