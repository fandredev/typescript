"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logRender(component) {
    return class extends component {
        render() {
            console.log('Renderizando');
            const r = super.render();
            console.log('Final');
            return r;
        }
    };
}
exports.default = logRender;
//# sourceMappingURL=logRender.js.map