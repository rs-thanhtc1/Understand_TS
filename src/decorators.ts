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
    console.log(target)
    console.log(ctx)
}

@logger
class Person {
    name = 'Thanh';

    @autobind
    greet() {
        console.log('Hi, I am ' + this.name)
    } 
}

const thanh = new Person();
const quan = new Person();