abstract class Department {
    
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, private DPName: string){
        // this.name = DPName;
    }

    abstract describe(this: Department) : void;

    addEmployee(employee: string) {
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




