import { YBFile, YFile } from "../../YFile.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { pathDecompose, pathGet, pathGetAll } from "../../../../path/path.mjs";
import { directoryGetDir, directoryGetFile } from "../directory.mjs";
import { fileREExpand, fileRELocation, fileREName } from "../../../file.mjs";

/**
 * @typedef TBDirectory
 * @prop {any} _
 * @typedef {DDirectory&TBDirectory&import("../../YFile.mjs").TFile} TDirectory
*/

class SDirectory extends YBFile {



};
class DDirectory extends SDirectory {

    /**
     * Массив путей к фалйам и папкам директории.
     * @type {[string]}
    */
    paths;

};
class FDirectory extends DDirectory {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TDirectory} t
    */
    constructor(t = {}) {

        t = FDirectory.#before(...arguments);

        FDirectory.#deceit(t);

        super(t);

        FDirectory.#create.apply(this, [t]);

    };

    /** @param {TDirectory} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) {

            const name = t.match(fileREName)[1], location = t.match(fileRELocation)?.[0];

            t = {};

            if (location) t.location = location;

            t.name = name;

        };

        if (!t) t = {};

        return t;

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #deceit(t) {

        try {

            FDirectory.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #verify(t) {

        const {



        } = t;

        FDirectory.#handle(t);

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #handle(t) {

        let {



        } = t;

        t.expand = 'dir';

        t = {

            ...t,

        };

    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.paths = pathGetAll(this.getPath() + '/');

    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBDirectory extends FDirectory {

    getDir(fragment) {

        if (!this.deleted) {

            const p = directoryGetDir(this.paths, fragment);

            return new YDirectory({

                name: p.match(fileREName)[1],
                location: p.match(fileRELocation)[1],

            });

        };

    };
    getFile(fragment) {

        if (!this.deleted) {

            const p = directoryGetFile(this.paths, fragment);

            return new YFile({

                name: p.match(fileREName)[1],
                expand: p.match(fileREExpand)[1],
                location: p.match(fileRELocation)[0],

            });

        };

    };
    getPath() {

        const {

            name,
            location,

        } = this;

        if (location) return `${location}/${name}`;
        else return name;

    };

};
/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YDirectory extends YBDirectory {

    getNameFull() {

        const {

            name,
            location,

        } = this;

        return `${this.location}/${this.name}`;

    };

};