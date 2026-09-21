import { PaginatedMetaDto } from "./paginated-meta-dto.model";

export interface PaginatedResponseDto<T> {
    items: T[];
    meta: PaginatedMetaDto;
}