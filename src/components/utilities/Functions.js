
// Round the number
const formatNumberToLocale = number => Math.round(number).toLocaleString('en-US');

// Format the price
const formatDollarPrice = number => {
    let formattedNumber = (Math.floor(number * 100) / 100.0);
    // If the floored number is less or equal to $1.00, round it to 4 decimals, otherwise round it to 2 decimals
    return formattedNumber <= 1
        ? formattedNumber.toFixed(4)
        : formattedNumber.toFixed(2);
};

export { formatNumberToLocale, formatDollarPrice };
