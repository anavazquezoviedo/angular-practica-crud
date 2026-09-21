import { PaginatedMetaDto } from "./paginated-meta-dto.model";

export interface PaginatedResponseDto {
    items: [];
    meta: PaginatedMetaDto;
}