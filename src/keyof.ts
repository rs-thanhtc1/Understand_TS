
// T extends object để TS hiểu là T chỉ nhận type object thay vì nhận kiểu num, string,..
// U extends keyof T là U sẽ nhận kiểu của các key có trong Object T
function getProp<T extends object, U extends keyof T>(obj: T, key: U){
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error("Error");
        
    }
    return val;
}

const data = {id: 1, isStored: true, value: [1, 3, 5]}

const isStored = getProp(data, 'value')

console.log(isStored)