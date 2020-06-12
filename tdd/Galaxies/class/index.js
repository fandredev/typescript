"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGalaxies = void 0;
class BaseGalaxies {
    constructor(name, constelation, image, note) {
        this.name = name;
        this.constelation = constelation;
        this.image = image;
        this.note = note;
    }
    generateGalaxie(galaxies, constelation, image, note, type) {
        let object = {
            name: galaxies,
            constelation,
            image,
            note,
            type
        };
        return object;
    }
    set newImageComa(image) {
        if (image)
            this.image = image;
    }
}
exports.BaseGalaxies = BaseGalaxies;
//# sourceMappingURL=index.js.map