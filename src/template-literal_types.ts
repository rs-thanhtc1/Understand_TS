type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

/*
Cách viết dưới sẽ giống với `type FilePermissions = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"`
*/
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

// tương đương với type DataFileEventName = "dataChanged" | "permissionsChanged"
type DataFileEventName = `${keyof DataFile}Changed`;

type DataFileEvents = {
    [key in DataFileEventName]: () => void;
}