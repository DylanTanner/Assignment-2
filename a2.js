/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _Rosco Tanner_____________________ Student ID: 126154236______________ Date: _02/02/2024_______________
*
********************************************************************************/ 

const collegeData = require('./modules/collegeData');

collegeData.initialize()
    .then(() => {
        console.log("Initialization successful.");
        // Test functions after successful initialization
        return collegeData.getAllStudents();
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
        return collegeData.getCourses();
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
        return collegeData.getTAs();
    })
    .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
    })
    .catch(error => {
        console.error("Initialization failed:", error);
    });
