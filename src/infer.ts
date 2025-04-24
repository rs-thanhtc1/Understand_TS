function add1(a: number, b:number){
    return a + b;
}

type AddFn = typeof add1;
// ...args: any[] là cú pháp của Rest parameter , không giới hạn số lượng tham số truyền vào
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;