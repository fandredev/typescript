"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
var Robot;
(function (Robot) {
    class RobotAPI extends classes_1.Resources {
        constructor(name, color, weight, think, talk, creators, country, price, techs) {
            super(name, color, weight, think, talk, creators, country, price);
            this.name = name;
            this.techs = techs;
        }
        get setTech() {
            return this.techs;
        }
    }
    Robot.RobotAPI = RobotAPI;
})(Robot || (Robot = {}));
const Ccreated = new Robot.RobotAPI('Robot M.Z', 'Branca', 1.90, true, false, ['Luby S.A', 'Software S.O'], ['Brasil', 'Canadá'], 74.000, ['Javascript', 'C', 'C#']);
console.log(Ccreated);
class Production {
    constructor(y, f, ss, sss, ssss) {
        this.year = y;
        this.finished = f;
        this.site = ss;
        this.store = sss;
        this.success = ssss;
    }
    get getSuccessRobotFinished() { return this.finished; }
    set yearConclusionRobot(finished) { this.finished = finished; }
    implementationsOpenedNewYears(params, params2) {
        return `${params} | ${params2}`;
    }
}
let createdRobot = new Production(2020, true, 'www.robot.io', true, true);
// .implementationsOpenedNewYears('Resolve SGBD implementations', 'Migrate JS to TS files and using Deno')
const createds = {
    createdRobot,
    Ccreated,
    implementations: ['Resolve SGBD implementations', 'Migrate JS to TS files and using Deno']
};
Object.preventExtensions(createds);
console.log(createds);
//# sourceMappingURL=robot.js.map