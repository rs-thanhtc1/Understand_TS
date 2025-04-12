"use strict";
/* Generic types là một tính năng trong TypeScript cho phép bạn viết mã linh hoạt và tái sử dụng, bằng cách cho phép các loại (type) được xác định tại thời điểm sử dụng.
Điều này giúp hàm, lớp hoặc interface có thể hoạt động với nhiều loại dữ liệu khác nhau mà không cần làm rối mã. */
// Cách viết Array<number> là kiểu sử dụng tính năng generics
let names = [1, 2, 3, 4, 5];
let store1 = {};
store1.name = 'Thanh';
store1.isInstructor = true;
// có thể sử dụng kiểu DataStore1 nhiều, tuỳ ý và có thể truyền vào kiểu khác nhau 
let nameStore = {};
// Generic function & Inference
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
// Làm việc với nhiều tham số của Generic type
function merge1(a, b) {
    return [a, b];
}
const ids1 = merge1(1, 'max');
class User {
    constructor(id) {
        this.id = id;
    }
}
const user = new User('id1');
user.id;
//# sourceMappingURL=Generics.js.map