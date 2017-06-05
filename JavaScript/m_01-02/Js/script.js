"use strict";


alert('sdasf');

var users = [];


function powerAction() {
    // Получаем входные данные и преобразовываем к числу
    var number = +prompt('Введите основание', 0);
    // Если степень дробная - округляет до ближайшего целого
    var exp = prompt('Введите степень', 0);
    var res = pow(number, exp);
    console.log(number + ' в степени ' + exp + ' = ' + res);
}





function pow(number, exp) {
    var result = 1;
    var i = 1;

    if (isNaN(number)) {
        return 'Ошибка в введенном числе';
    }
    if (isNaN(exp)) {
        return 'Ошибка в веденной степени';
    }

    // Если степень == 0, то результат всегда 1
    if (exp == 0) {
        return 1;
    }

    if (number == 0 && exp < 0) {
        return '0 не может быть в отрицательной степени'
    }

    // цикл возведения в степень

        while (i <= Math.abs(exp)) {
            result *= number;
            i++;
    // debugger;
        }

    // Если степень отрицательная,

    if (exp < 0) {
        result = 1 / result;
    }


    return result;
}


function usersInputAction() {
    for (var i = 0; i < 5; i++) {
        users[i] = prompt('Введите имя №'+(i+1))
    }
    console.log(users);
}

function usersCheckAction() {
    var userName = prompt('Введите имя пользователя (учитывая регистр)', '');

    if (userName == '') {
        alert('Нельзя войти с пустым именем');
        return;
    }

    var findResult = false;
    for (var i = 0, max = users.length; i < max; i++) {
        if (users[i] === userName) {
            findResult = true;
            break;
        }
    }

    if (findResult) {
        alert(userName + ', Вы успешно вошли');
    } else {
        alert('Пользователя ' + userName + ' в системе не найдено!');
    }

}