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
    var Techs;
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
var api = {
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
//# sourceMappingURL=generics.js.map