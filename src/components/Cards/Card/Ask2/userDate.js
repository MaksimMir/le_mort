const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const years = [];
const days = [];
const createDey = () => {
    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }
}
const createYear = () => {
    for (let i = 1940; i <= 2020; i++) {
        years.push(i)
    }
}

createDey();
createYear();

export { month, days, years }