export class DateUtils {
    constructor(public startDate: string, public endDate: string) {}

    getDifferenceBetweenDates(): string {
        const date1 = new Date(this.startDate);
        const date2 = new Date(this.endDate);
    
        const differenceMs = date2.valueOf() - date1.valueOf();
    
        const daysDifference = differenceMs / (1000 * 60 * 60 * 24);
    
        return Math.floor(daysDifference).toString();
    }
}