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
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1', ['Thanh']);