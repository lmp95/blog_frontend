export interface ResponseInterface {
    data?: any[];
    page: number;
    perPage: number;
    total: number;
}

export type Response = ResponseInterface;
