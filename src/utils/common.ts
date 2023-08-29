import format from 'date-fns/format';

export const dateFormatter = (date: string, dateFormat = 'MM/dd/yyyy') => {
    try {
        return format(new Date(date), dateFormat);
    } catch (error) {
        console.log('Date format error', error);
    }
};
