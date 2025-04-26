function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator')
    console.log(target)
    console.log(ctx)

    return class extends target {
        constructor(...args: any[]){
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
    ctx.addInitializer(function(this: any){
        this[ctx.name] = this[ctx.name].bind(this);
    });

    // Đây là một hàm mới tạo ra để thay thế cho phương thức gốc
    return function (this: any) {
        console.log('Executing original function');
        target.apply(this);
    }
}

function fieldLogger (target: undefined, ctx: ClassFieldDecoratorContext){
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
        console.log(initialValue);
        return initialValue.toUpperCase();
    }
}

@logger
class Person {
    @fieldLogger
    name = 'Thanh';

    @autobind
    greet() {
        console.log('Hi, I am ' + this.name)
    } 
}

const thanh = new Person();
const greet = thanh.greet;

// Khi gọi greet như một function độc lập, `this` sẽ không tự động là `thanh`  
// Nếu không bind, sẽ có thể dẫn đến lỗi: `Cannot read property 'name' of undefined` 
 // In ra thông báo: "Executing original function" và "Hi, I am Thanh"
greet();

// Tuy nhiên, với decorator autobind, `greet` sẽ giữ được ngữ cảnh  
 // In ra thông báo: "Executing original function" và "Hi, I am Thanh"
thanh.greet()