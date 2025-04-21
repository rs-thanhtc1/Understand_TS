class ListNode<T> {
    next?: ListNode<T>;

    constructor(public value: T) {}
};

class LinkedList<T> {
    // thêm dấu ? ở root?: để cho biết root chấp nhận giá trị undefined
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    // add (value: T){
    //     // khởi tạo giá trị 1 nút là node
    //     const node = new ListNode(value);
    //     // if link-list đang trống, nghĩa là this.root = undefined
    //     if (!this.root) {
    //         // gán root của list là = node
    //         this.root = node;
    //     } else { // ngược lại nếu link-list không trống
    //         // khởi tạo biến current nhận giá trị nút gốc của link-list
    //         let current = this.root;
    //         // bắt đầu chạy vòng lặp, current.next sẽ bắt đầu chạy từ thằng root
    //         while (current.next) {
    //             // nếu điều kiện đúng, nghĩa là phía sau nút hiện tại có 1 nút khác thì gán tiếp biến current = nút tiếp theo. 
    //             // Vòng lặp này sẽ dừng lại ở nút cuối cùng của link-list
    //             current = current.next;
    //         }
    //         // và giá trị next tiếp theo của thăng cuối cùng sẽ là = node
    //         current.next = node;
    //     }
    //     // tăng số lượng nút
    //     this.length++;  
    // }

    add (value: T){
        // khởi tạo giá trị 1 nút là node
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else { 
            // gán nút mới vào next của nút cuối cùng cũ  
            this.tail.next = node;
            // Cập nhật tail thành nút mới node
            this.tail = node
            
        }
        this.length++;  
    }

    getNumberOfElements(){
        console.log('so phan tu: ' + this.length);
    }

    print(){
        let current = this.root;
        while (current) {
            console.log(current.value)
            console.log('gia tri tiep theo cua nut la: ' + current.next?.value)
            current = current.next;
        }  
    }
}

const numberList = new LinkedList<number>();
numberList.add(1)
numberList.add(2)
numberList.add(3)
numberList.add(4)
numberList.add(5)
numberList.getNumberOfElements();
numberList.print();
const nameList = new LinkedList<string>();

// vì ở trên dùng private thay vì public nên ở đây list.root sẽ báo lỗi