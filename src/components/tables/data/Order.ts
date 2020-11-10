export enum ORDER {
    ASC,
    DESC,
    NONE
}

export interface ColumnOrder {
    order: ORDER,
    column: string
}