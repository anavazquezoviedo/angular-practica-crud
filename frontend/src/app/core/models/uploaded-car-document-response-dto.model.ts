export interface UploadedCarDocumentResponseDto {
    id: string;
    carId: string;
    originalName: string;
    mimeType: string;
    size: number;
    documentType: string;
    title?: string;
    description?: string;
    uploadedAt: string;
    persisted: boolean;
    downloadUrl: string;
    message: string;
}