$( document ).ready(function() {
let notes;
$.ajax({
      url: "/api/notes",
      method: "GET"
    }).then(function(response) {
      notes = response;
      console.log(notes);
      $("note-column").empty();
      for (x of notes){
        $(`<h4>${x.title}<h4><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
      };
    });

// $("#save-note").on("click", 












});