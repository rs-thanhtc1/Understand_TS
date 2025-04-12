"use strict";
// class Department {
//     // private name: string;
//     private employees: string[] = [];
//     constructor(private readonly id: string, private DPName: string){
//         // this.name = DPName;
//     }
// describe(this: Department) {
//     console.log(`Department (${this.id}) : ${this.DPName}`);
// }
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('Department - ID: ' + this.id);
    }
}
ITDepartment.yearNow = 2025;
class Accounting extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Eo tim thay report");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("nhap thi nhap cho dung value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log('Department - ID: ' + this.id);
    }
    addEmployee(employee) {
        if (employee == 'Thanh') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Thanh']);
console.log(ITDepartment.yearNow);
const accounting1 = new Accounting('d2', []);
accounting1.mostRecentReport = 'last report';
accounting1.addReport('Add reports...');
console.log(accounting1.mostRecentReport);
accounting1.printReports();
//# sourceMappingURL=inheritance.js.map