type FileData = {
    path: string;
    content: string;
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

// AccessedFileData sẽ có 4 thuộc tính của FileData & Status
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;
// Interface cũng có thể kết hợp, với cứ pháp như ví dụ dưới

// -> interface AccessedFileData extends FileData, Status;
