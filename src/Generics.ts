 /* Generic types là một tính năng trong TypeScript cho phép bạn viết mã linh hoạt và tái sử dụng, bằng cách cho phép các loại (type) được xác định tại thời điểm sử dụng.
 Điều này giúp hàm, lớp hoặc interface có thể hoạt động với nhiều loại dữ liệu khác nhau mà không cần làm rối mã. */

 // Cách viết Array<number> là kiểu sử dụng tính năng generics
 let names: Array<number> = [1,2,3,4,5]

 // Tạo và sử dụng Generic Type
 // T ở đây là kiểu được giữ chỗ, có thể nhập nhiều kiểu giữ chỗ vd: <T,K,..> 
 type DataStore1<T> = {
    [key: string]: T
 };

 let store1: DataStore1<string | boolean > = {};
 store1.name = 'Thanh'
 store1.isInstructor = true;

// có thể sử dụng kiểu DataStore1 nhiều, tuỳ ý và có thể truyền vào kiểu khác nhau 
 let nameStore: DataStore1<number> = {};

// Generic function & Inference
function merge<T>(a: T, b: T){
    return [a,b];
}
const ids = merge<number>(1,2);

// Làm việc với nhiều tham số của Generic type
function merge1<T, U>(a: T, b: U){
    return [a,b];
}
const ids1 = merge1(1,'max');

// Làm việv với Generic Class và Interface
interface Role<T> {
    role: T;
}

class User<T> {
    constructor(public id: T) {}
}

const user = new User('id1');
user.id;

