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
        $(`<h4>${x.title}<h4><button id="delete-button"><i class="fas fa-dumpster"></i>

</button><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
      };
    });

// $("#save-note").on("click", 
// $("#delete-button").on("click",












});