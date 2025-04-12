type FileSource = { path: string};
const fileSource: FileSource = {
    path: 'C:\path\test.csv'

};

type DBSource = {connectionUrl: String}
const dbSource: DBSource = {
    connectionUrl: 'some-connectionUrl'
};

type Source = FileSource | DBSource;

function loadData(source: Source){
    if('path' in source){
        // doan check nay de biet duoc la neu ma source no co type la FileSource thi se return ve
        // source.path; => dung de mo tap tin
        return
    }

    // Còn nếu mà source no co type la DBSource thì sẽ thực thi các lệnh tiếp theo
    //source.connectionUrl; => dùng để lấy DB tập tin
}
