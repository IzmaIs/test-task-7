const dateConvert = (date: number) => {
    const newDate = new Date(date)
    return {
        date: newDate.toLocaleDateString(),
        minutes: newDate.getMinutes(),
        hours: newDate.getHours(),
    }
}

export default dateConvert;