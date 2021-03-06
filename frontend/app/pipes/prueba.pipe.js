"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PruebasPipe = /** @class */ (function () {
    function PruebasPipe() {
    }
    PruebasPipe.prototype.transform = function (value, por) {
        var porv = parseInt(por);
        var valuev = parseInt(value);
        var result = "La multiplicación: " + value + " x " + por + " = " + (value * por);
        return result;
    };
    PruebasPipe = __decorate([
        core_1.Pipe({ name: "pruebas" })
    ], PruebasPipe);
    return PruebasPipe;
}());
exports.PruebasPipe = PruebasPipe;
// En componente
// import {PruebasPipe} from "./pipes/pruebas.pipe";
//@Component intro
// pipes: [PruebasPipe]
// En HTML
// {{ 4 | pruebas:7 }} 
//# sourceMappingURL=prueba.pipe.js.map