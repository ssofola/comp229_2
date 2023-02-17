/*****************************************
//    File Name: app.js
// Student Name: Olusegun Sofola
// Description: application's client side java script file
//   Student ID: 301254272
//         Date: February 3, 2023
 *****************************************/
// IIFE - Immediately Invoked Function Expression
(function () {
    function Start(){
        console.log("App started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons){
            button.addEventListener('click',(event) => {
                if(!confirm('Are you sure?')){
                    event.preventDefault();
                    window.location.assign('book-list');
                }
            })
        }
    }
    window.addEventListener("load",Start);
})()