let userInput = prompt('Введите число:');


function numberReader() {
    //Проверка чтобы юзер не забыл ввести данные:
    if (userInput === null || userInput.trim() === '') {
        console.log('Упс... Вы ошиблись.');
    } 

    //Основная провекра на тип данных:
    else {
        let userNum = +userInput;

        if (isNaN(userNum)) {
            console.log('Упс... Вы ошиблись.');
        } else {
            let evenodd = userNum % 2 === 0 ? "четное" : "нечетное";
            console.log('Ваше число: ' + userNum + ' ' + evenodd);
        }
    }
}

numberReader();