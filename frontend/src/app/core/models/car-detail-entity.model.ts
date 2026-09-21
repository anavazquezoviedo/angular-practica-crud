export interface CarDetailEntity {
    registrationDate: string;
    mileage: number;
    currency?: string; // Enum de monedas (wip)
    price: number;
    manufactureYear: number;
    availability?: boolean;
    color?: string;
    description?: string;
    licensePlate: string;
    imageUrl: string;
}