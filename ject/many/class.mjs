//#region YI

import { numberGetSequence } from '../../number/module.mjs';
import { YJect } from '../class.mjs';
import { YCursor } from './cursor/class.mjs';

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

/** ### YManyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Основной параметр модуля `YMany`.
 *
 * ***
 *
 * @typedef {YManyTE&YManyTU} YManyT
 * @template T
 *
*/
/** ### YManyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Параметр наследования `YMany`.
 *
 * @typedef {{[p in Exclude<keyof DMany,keyof SMany>|Exclude<keyof SMany,keyof DMany>]:(DMany[p]&SMany[p])}} YManyTE
 *
*/
/** ### YManyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Уникальные параметры `YMany`.
 *
 * @typedef YManyTU
 * @prop {any} _
 *
*/

//#endregion

/**
 * @template T
*/
class SMany extends YJect {



};
/**
 * @extends {SMany<T>}
 * @template T
*/
class DMany extends SMany {

    /**
     * ### values
     *
     * Значения.
     *
     * ***
     * @type {T}
     * @public
    */
    values;
    /**
     * ### cursors
     *
     * Курсоры.
     *
     * ***
     * @type {YCursor[]}
     * @protected
    */
    cursors;
    /**
     * ### dimension
     *
     * Измерения.
     *
     * ***
     * @type {number}
     * @protected
    */
    dimension;

};
/**
 * @extends {DMany<T>}
 * @template T
*/
class IMany extends DMany {

    /**
     * ### cursor
     *
     * Основной курсор.
     *
     * ***
     * @type {YCursor}
     * @protected
    */
    cursor;

};
/**
 * @extends {IMany<T>}
 * @template T
*/
class MMany extends IMany {



};
/**
 * @extends {MMany<T>}
 * @template T
*/
class FMany extends MMany {

    /**
     * ### YMany.constructor
     *
     *
     *
     * ***
     * @arg {...YManyT<T>} t
    */
    constructor(...t) {

        super(Object.assign(t = FMany.#before(t), {}));

        FMany.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YManyT} */
        let r = {};

        if (t?.length === 1 && [Object, YMany].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.values = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YManyT} t @this {YMany} */
    static #deceit(t) {

        try {

            FMany.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YManyT} t @this {YMany} */
    static #verify(t) {

        const {



        } = t;

        FMany.#handle.apply(this, [t]);

    };
    /** @arg {YManyT} t @this {YMany} */
    static #handle(t) {

        if (!t.cursors) {

            t.cursors = [new YCursor(...numberGetSequence(t.dimension ?? config.defaultDimension, 0, 0))];
            t.cursor = t.cursors[0];

        };

        FMany.#create.apply(this, [t]);

    };
    /** @arg {YManyT} t @this {YMany} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YMany
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс для работы с множествами.
 *
 * Включает в себя курсоры и методы, необходимые для работы с ними.
 *
 * ***
 * @extends {FMany<T>}
 * @template T
*/
export class YMany extends FMany {

    /**
     * ### moveCursors
     * - Версия `0.0.0`
     * - Модуль `ject\many`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    moveCursors(...bias) {

        this.cursors.forEach(c => {

            c.move(...bias).indexs.forEach((index, i) => {

                if (index < 0) {

                    if (c.indexs[i - 1]) {



                    } else {



                    };

                    c.indexs[i] = 0;

                };

            });

        });

        return this;

    };

};