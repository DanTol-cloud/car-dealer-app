export const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2015;
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    return years;
};
