"use strict";
class Department {
    constructor(id, DPName) {
        this.id = id;
        this.DPName = DPName;
        // private name: string;
        this.employees = [];
        // this.name = DPName;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//  const accounting = new Department('D1','Accounting');
// accounting.addEmployee('Thanh');
// accounting.addEmployee('Quan');
// // accounting.employees[2] = 'Truong';
// accounting.printEmployeeInformation();
// accounting.describe();
//# sourceMappingURL=class.js.map