"use strict";
const MyForm = (function () {

    let formElement = document.querySelector('#myForm');

    let fioValidator = value => {
        return value.trim().replace(/ +/g, ' ').split(' ').length === 3;
    };

    let emailValidator = value => {
        let emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@((ya\.ru)|(yandex\.(ru|ua|by|kz|com)))/;
        return emailRegExp.test(value.trim());
    };

    let phoneFormatValidator = value => {
        let phoneFormatRegExp = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        return phoneFormatRegExp.test(value.trim());
    };

    let phoneNumberSum = value => {
        return value.split('').reduce((prev, char) => prev + (+char || 0), 0) <= 30;
    };

    class InputRestrict {
        constructor(input, restricts) {
            this.input = input;
            this.restricts = restricts || [];
        }

        validate() {
            return this.restricts.reduce((previous, current) => {
                return previous && current(this.input.value)
            }, true);
        }
    }

    let inputsRestricts = [
        new InputRestrict(formElement.querySelector('input[name=fio]'), [fioValidator]),
        new InputRestrict(formElement.querySelector('input[name=email]'), [emailValidator]),
        new InputRestrict(formElement.querySelector('input[name=phone]'), [phoneFormatValidator, phoneNumberSum])
    ];

    // validate() => { isValid: Boolean, errorFields: String[] }
    let validate = () => {
        inputsRestricts.forEach(restrict => {
            console.log(restrict.validate());
        })
    };

    // getData() => Object

    let getData = () => {

    };

    // setData(Object) => undefined

    let setData = () => {

    };

    // submit() => undefined

    let submit = () => {

    };

    return {
        validate,
        getData,
        setData,
        submit
    }
})();