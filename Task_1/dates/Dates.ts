type DateUtils = {
    startDate: string;
    endDate: string;
    getDifferenceBetweenDates: () => string;
};

export const createDateUtils = (startDate: string, endDate: string): DateUtils => {
    return {
        startDate,
        endDate,
        getDifferenceBetweenDates: () => {
            const date1 = new Date(startDate);
            const date2 = new Date(endDate);
        
            const differenceMs = date2.valueOf() - date1.valueOf();
        
            const daysDifference = differenceMs / (1000 * 60 * 60 * 24);
        
            return Math.floor(daysDifference).toString();
        }
    };
};