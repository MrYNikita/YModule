//#region YI

import { YBasic } from '../ject/YBasic/YBasic.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YErrorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Основной параметр модуля `YError`.
 *
 * @typedef {YErrorTE&YErrorTU} YErrorT
 *
*/
/** ### YErrorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Параметр наследования `YError`.
 *
 * @typedef {{[p in Exclude<keyof DError,keyof SError>|Exclude<keyof SError,keyof DError>]:(DError[p]&SError[p])}} YErrorTE
 *
*/
/** ### YErrorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `error`
 *
 * Уникальные параметры `YError`.
 *
 * @typedef YErrorTU
 * @prop {any} _
 *
*/

//#endregion

class SError extends YBasic {



};
class DError extends SError {

    /**
     * ### id
     *
     * Идентификатор.
     *
     * Определяет идентификатор ошибки.
     *
     * ***
     * @type {number}
     * @public
    */
    id;
    /**
     * ### cause
     *
     * Причина.
     *
     * Описание потенциально возможно совершенной ошибки.
     *
     * ***
     * @type {string}
     * @public
    */
    cause;
    /**
     * ### advice
     *
     * Совет.
     *
     * Рекомендация по устранению ошибки.
     *
     * ***
     * @type {string}
     * @public
    */
    advice;
    /**
     * ### transmits
     *
     * Передача.
     *
     * ***
     * @type {any[]}
     * @public
    */
    transmits;
    /**
     * ### description
     *
     * Фактическая причина ошибки.
     *
     * ***
     * @type {string}
     * @public
    */
    description;
    /**
     * ### clarification
     *
     * Уточнение.
     *
     * ***
     * @type {(function(...):string)?}
     * @public
    */
    clarification;

};
class IError extends DError {

    /**
     * ### date
     *
     * Дата.
     *
     * ***
     * @type {Date}
     * @public
    */
    date = new Date();
    /**
     * ### stack
     *
     * Стэк.
     *
     * ***
     * @type {string?}
     * @public
    */
    stack;

};
class MError extends IError {



};
class FError extends MError {

    /**
     * ### YError.constructor
     *
     *
     *
     * ***
     *  @arg {...YErrorT} t
    */
    constructor(...t) {

        super(Object.assign(t = FError.#before(t), {}));

        FError.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YErrorT} */
        let r = {};

        if (t?.length === 1 && [Object, YError].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 4: r.cause = t[3];
                case 3: r.advice = t[2];
                case 2: r.description = t[1];
                case 1: r.id = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YErrorT} t @this {YError} */
    static #deceit(t) {

        try {

            FError.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YErrorT} t @this {YError} */
    static #verify(t) {

        const {



        } = t;

        FError.#handle.apply(this, [t]);

    };
    /** @arg {YErrorT} t @this {YError} */
    static #handle(t) {

        t.stack = new Error().stack;

        FError.#create.apply(this, [t]);

    };
    /** @arg {YErrorT} t @this {YError} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YError
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `error`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YError extends FError {

    /**
     * ### throw
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод перехватат ошибки.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    throw(...tranmsits) {

        throw this.setTransmits(...tranmsits);

    };

    /**
     * ### castString
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод получения строкового представления.
     *
     * ***
     *
     * @public
    */
    castString() {

        const format = (str) => str ? str[0].toUpperCase() + str.slice(1) + '.' : 'Отсутствует.';

        return [

            `Ошибка #${(this.id + '').padStart(4, 0)}`,
            `------`,
            (`Описание: ${format(this.description)}`),
            (`Подсказка: ${format(this.advice)}`),
            (`Уточнение: ${format(this.clarification && this.clarification(...this.transmits))}`),
            `------`,

        ].join('\n');

    };

    /**
     * ### setTransmits
     * - Версия `0.0.0`
     * - Модуль `error`
     * ***
     *
     * Метод установки аргументов.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    setTransmits(...transmits) {

        this.transmits = transmits;

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/