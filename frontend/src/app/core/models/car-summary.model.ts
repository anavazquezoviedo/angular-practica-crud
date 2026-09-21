import { CarBrandSummary } from "./car-brand-summary.model";
import { CarModelSummary } from "./car-model-summary.model";

export interface CarSummary {
    id: string;
    brand: CarBrandSummary;
    model: CarModelSummary;
    total: number;
    imageUrl: string;
}