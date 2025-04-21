type AppUser = {
    name: string;
    age: string;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
};

/*
Thay vì viết kiểu 
type Perms = {
    id: string;
    title: string;
    description: string;
}[]
   
=> thì có thể viết như ví dụ dưới
*/
type Perms = AppUser['permissions'];

// Perm sẽ có các thuộc tính của Perms nhưng không phải là 1 mảng nên không có dấu []
type Perm = Perms[number];