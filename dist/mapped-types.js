"use strict";
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
/* Kết quả là, kiểu Results<Operations> sẽ có cấu trúc như sau:
    {
    add: number;
    subtract: number;
    }
*/
let mathResults = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 2)
};
//# sourceMappingURL=mapped-types.js.map