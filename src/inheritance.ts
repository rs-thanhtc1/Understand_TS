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
    admins : string[];
    constructor (id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
}

class Accounting extends Department{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;

        }
        throw new Error("Eo tim thay report");
    }

    set mostRecentReport(value: string){
        if (!value){
            throw new Error("nhap thi nhap cho dung value!");
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }

    addEmployee(employee: string): void {
        if( employee == 'Thanh'){
            return;
        }

        this.employees.push(employee);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1', ['Thanh']);

const accounting1 =  new Accounting('d2', []);

accounting1.mostRecentReport = 'last report'

accounting1.addReport('Add reports...');

console.log(accounting1.mostRecentReport);

accounting1.printReports();