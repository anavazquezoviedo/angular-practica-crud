export interface PaginatedMetaDto{
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    curretPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}