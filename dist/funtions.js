"use strict";
function getLength(val) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numberOfWords = getLength('does this work?');
numberOfWords.length;
const numItems = getLength(['Sport', 'Cookies']);
// Khi val là một chuỗi và bạn sử dụng return ${numberOfWords} words, bạn đã đảm bảo rằng giá trị trả về trong trường hợp này sẽ là một chuỗi (string)
// , phù hợp với chữ ký quá tải function getLength(val: string): string;`.
//Tuy nhiên, trong trường hợp val là mảng, bạn vẫn trả về val.length, kiểu trả về sẽ là number, phù hợp với chữ ký quá tải function getLength(val: any[]): number;
//# sourceMappingURL=funtions.js.map