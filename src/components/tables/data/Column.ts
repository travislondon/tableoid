export interface Column {
    name: string,
    sort?: boolean,
    filter?: boolean,
    accessor: string | Function
}