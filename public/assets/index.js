$( document ).ready(function() {
let notes;
$.ajax({
      url: "/api/notes",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      notes = response;
      console.log(notes);
    });














});