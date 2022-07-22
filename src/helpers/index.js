export const dateFormat = ({ ...date }) => {
    if (date.month < 9) {
        date.month = `0${date.month + 1}`;
    } else {
        date.month = date.month + 1;
    }

    if (date.date < 10) {
        date.date = `0${date.date}`;
    }

    return `${date.date}-${date.month}-${date.year}`;
};
