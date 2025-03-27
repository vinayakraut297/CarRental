export interface Booking {
    id?: number;
    userId: number;
    carId: number;
    startDate: string;
    endDate: string;
    totalCost?: number;
}
