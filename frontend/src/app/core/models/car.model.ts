import { CarBrandSummary } from "./car-brand-summary.model";
import { CarDetailEntity } from "./car-detail-entity.model";
import { CarModelSummary } from "./car-model-summary.model";

export interface Car {
    id: string;
    brand: CarBrandSummary;
    model: CarModelSummary;
    carDetails?: CarDetailEntity [];
    total?: number;
}