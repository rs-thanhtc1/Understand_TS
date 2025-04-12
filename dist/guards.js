"use strict";
const fileSource = {
    path: 'C:\path\test.csv'
};
const dbSource = {
    connectionUrl: 'some-connectionUrl'
};
function loadData(source) {
    if ('path' in source) {
        // doan check nay de biet duoc la neu ma source no co type la FileSource thi se return ve
        // source.path; => dung de mo tap tin
        return;
    }
    // Còn nếu mà source no co type la DBSource thì sẽ thực thi các lệnh tiếp theo
    //source.connectionUrl; => dùng để lấy DB tập tin
}
//# sourceMappingURL=guards.js.map