export enum ORDER {
    ASC,
    DESC,
    NONE
}

export interface ColumnFilter {
    column: string,
    filter: string
}

export interface ColumnConfiguration {
    order: ORDER,
    column: string,
    filters: [ColumnFilter]
}