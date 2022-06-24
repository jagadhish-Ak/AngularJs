// <reference path="scripts/angular.min.js" />


var myApp = angular.module("MyModule", []).controller("myController", function ($scope) {
    ///Adding message
    $scope.message = "AngularJs Tutorial";

    ///Adding Employee
    var employee = {
        FirstName: "Ajay",
        LastName: "Srinivasan",
        Gender: "Male"
    };
    $scope.employee = employee;



    ///Adding image
    var Player = {
        Name: "Virat Kohli",
        Team: "RCB",
        Jersey: "Red",
        Image: "Images/kohli-200921-01.jpg"

    };
    $scope.Player = Player;
    /* .controller("Control", function ($sample) {
         $sample.message = "Hello ";
     });*/



    ///Adding More Employee details
    var employees = [
        { firstname: "Ajay", lastname:"Srinivasan", gender:"Male", salary:50000 },
        { firstname: "Vinoth", lastname:"Kumar", gender:"Male", salary:50000 },
        { firstname: "Ganesh", lastname:"N", gender:"Male", salary:50000 },
        { firstname: "Naveen", lastname:"L", gender:"Male", salary:50000 }
    ];
    $scope.employees = employees;


    ///Adding countries with cities
    var countries = [
        {
            name: "India",
            cities: [{ name: "Bangalore" }, { name: "Chennai" }, { name: "Delhi" }, { name: "Cuddalore" }]
        },
        {
            name: "USA",
            cities: [{ name: "Los Angeles" }, { name: "Chicago" }, { name: "Houston" }]
        },
        {
            name: "UK",
            cities: [{ name: "London" }, { name: "Manchester" }, { name: "Birmingham" }]
        }

    ];
    $scope.countries = countries;

    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP .Net", likes: 0, dislikes: 0 },
        { name: "SQL Server", likes: 0, dislikes: 0 },
        { name: "Angular JS", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;
    $scope.incrementLikes = function (technology) {
        technology.likes++;
    }
    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    }



    var tblemployee = [
        { name: "Krishna", dateofbirth: new Date("June 10,2001"), gender: "Male", salary: 35000 },
        { name: "Naveen", dateofbirth: new Date("April 11,2001"), gender: "Male", salary: 25000.788 },
        { name: "Vinoth", dateofbirth: new Date("December 04,2000"), gender: "Male", salary: 45000 },
        { name: "Ganesh", dateofbirth: new Date("March 26,2001"), gender: "Male", salary: 55000 },
        { name: "Vijay", dateofbirth: new Date("June 22,1974"), gender: "Male", salary: 65000 }
    ];
    $scope.tblemployee = tblemployee;
    $scope.rowlimit = 3;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn1 == column) ? !$scope.reverseSort : false;
        $scope.sortColumn1 = column;
    }
    $scope.getSortClass = function (column) {

        if ($scope.sortColumn1 == column) {
            return $scope.reverseSort
                ? 'arrow-down'
                : 'arrow-up';
        }
        return '';
    }


    var tblemployees = [
        { name: "Krishna", gender: "Male", salary: 35000, city: "London" },
        { name: "Naveen", gender: "Male", salary: 25000.788, city: "Chennai" },
        { name: "Vinoth", gender: "Male", salary: 45000, city: "London" },
        { name: "Ganesh", gender: "Male", salary: 55000, city: "Chennai" },
        { name: "Vijay", gender: "Male", salary: 65000, city: "London" },
    ];

    $scope.tblemployees = tblemployees;

    

    var student = [
        { name: "Ajay", age: 21, gender: "Male" },
        { name: "Vinoth", age: 21, gender: "Male" },
        { name: "Ganesh", age: 21, gender: "Male" },
        { name: "Naveen", age: 21, gender: "Male" }



    ];
    $scope.student = student;
    $scope.studentview = "StudentsTable.html";


});









