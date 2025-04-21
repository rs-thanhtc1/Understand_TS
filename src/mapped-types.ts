type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

/*
keyof T sẽ lấy tất cả các khóa của kiểu T (trong trường hợp này là các phương thức add và subtract của kiểu Operations) và tạo ra một kiểu mới có các khóa đó.
Mỗi khóa sẽ được ánh xạ đến một giá trị kiểu number
*/

type Results<T> = {
  readonly  [Key in keyof T]?: number;
};

let mathOperations : Operations = {
    add(a: number, b: number){
       return a + b; 
    },
    subtract(a: number, b: number) {
        return a-b;
    },
};

/* Kết quả là, kiểu Results<Operations> sẽ có cấu trúc như sau: 
    {  
    add: number;  
    subtract: number;  
    }
*/
let mathResults : Results<Operations> = {
    add: mathOperations.add(1,2),
    subtract: mathOperations.subtract(5,2)
}
