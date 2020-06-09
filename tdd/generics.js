"use strict";
var Courses;
(function (Courses) {
    function myCoursesUsingGenerics(nameCourse) {
        console.log(nameCourse);
    }
    Courses.myCoursesUsingGenerics = myCoursesUsingGenerics;
    function myCoursesUsingInterfaces(props) {
        console.log(props);
    }
    Courses.myCoursesUsingInterfaces = myCoursesUsingInterfaces;
    function allPropsMyCourses(props) {
        console.log(props);
    }
    Courses.allPropsMyCourses = allPropsMyCourses;
    function scriptsNPM(props) {
        return props;
    }
    Courses.scriptsNPM = scriptsNPM;
    let Techs;
    (function (Techs) {
        function techsWeb(name) {
            return name;
        }
        Techs.techsWeb = techsWeb;
        function techsMobile(name) {
            return name;
        }
        Techs.techsMobile = techsMobile;
        function ageWars(name) {
            return name;
        }
        Techs.ageWars = ageWars;
    })(Techs = Courses.Techs || (Courses.Techs = {}));
})(Courses || (Courses = {}));
const api = {
    name: 'Felipe',
    rating: 18,
    progress: 70
};
console.log(Courses.Techs.ageWars([1940, 1941]));
console.log(Courses.Techs.techsMobile(['Flutter', 'Kotlin']));
console.log(Courses.Techs.techsWeb('Javascript'));
Courses.myCoursesUsingInterfaces(api);
Courses.myCoursesUsingGenerics('Curso de Desenvolvimento Web');
Courses.myCoursesUsingGenerics('Curso de Desenvolvimento Web'); // inferencia de tipos
Courses.allPropsMyCourses(['Curso de Typescript', 5, 70]);
console.log(Courses.scriptsNPM(['Dev', 'Run']));
var OtherGenerics;
(function (OtherGenerics) {
    function lorem(props) {
        console.log(props);
    }
    OtherGenerics.lorem = lorem;
    function filitation(a) {
        console.log(a);
    }
    OtherGenerics.filitation = filitation;
    function login(login) {
        console.log(login);
    }
    OtherGenerics.login = login;
    function physics(props) {
        console.log(props);
    }
    OtherGenerics.physics = physics;
})(OtherGenerics || (OtherGenerics = {}));
var ID;
(function (ID) {
    ID[ID["first"] = 1] = "first";
    ID[ID["second"] = 2] = "second";
    ID[ID["third"] = 3] = "third";
    ID[ID["four"] = 4] = "four";
})(ID || (ID = {}));
const objo = {
    id: ID.first,
    name: 'Felipe',
    cpf: 29175210584,
    rg: 294706835,
    signo: 'Escorpião'
};
const objFiliation = Object.assign(Object.assign({}, objo), { mother: 'Malu Adriana', father: 'Iago Anderson Theo Vieira' });
const objLogin = Object.assign(Object.assign(Object.assign({}, objo), objFiliation), { email: 'isabellasarahisisvieira..isabellasarahisisvieira@raffinimobiliario.com.br', password: '9iqJQPZXR5' });
const allPropsAndPhysic = Object.assign(Object.assign(Object.assign(Object.assign({}, objo), objFiliation), objLogin), { weight: 50, blood_type: 'AB+', height: '1.50' });
OtherGenerics.lorem(objo);
OtherGenerics.filitation(objFiliation);
OtherGenerics.login(objLogin);
OtherGenerics.physics(allPropsAndPhysic);
//# sourceMappingURL=generics.js.map