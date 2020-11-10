export interface Column {
    name: string,
    sort?: boolean,
    accessor: string | Function
}