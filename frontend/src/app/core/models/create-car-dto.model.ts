import { CarDetailsDto } from "./car-details-dto.model";

export interface CreateCarDto {
    brandId: string;
    modelId: string;
    carDetails: CarDetailsDto;
}