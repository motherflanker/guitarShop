export type Guitar = {
    id: string
    imageUrl: string
    title: string
    price: number
}

export enum Status{
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export type SearchGuitarParams = {
    sortBy: string
    order: string
    category: string
    search: string
    currentPage: string
}

export interface GuitarSliceState {
    items: Guitar[]
    status: Status
}