$( document ).ready(function() {
let notes;

function getNotes(){
  $.ajax({
        url: "/api/notes",
        method: "GET"
      }).then(function(response) {
        notes = response;
        console.log(notes);
        $("#note-column").empty();
        for (x of notes){
          $(`<h4>${x.title}<h4><button id="delete-button"><i class="fas fa-dumpster"></i></button><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
        };
      });
};

getNotes();

$("#save-note").on("click", function() {
  event.preventDefault();
  
  const noteData = {
      title: $("#title-input").val().trim(),
      body: $("#text-input").val().trim()
      
    };
    console.log(noteData);
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: noteData
    }).then(getNotes());
});

// $("#delete-button").on("click",












});