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
          $(`<h4>${x.title}<h4><button class="btn btn-sm btn-outline-dark delete-button" data-title="${x.title}" data-body="${x.body}"><i class="fas fa-dumpster"></i></button><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
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
    }).then(function(){
      getNotes();
    });
});


function deleteListener(){
  // alert("starting");
  $(".delete-button").click(function() {
    // event.preventDefault();
    let deleteData = {
      title: $(this).attr("data-title").trim(),
      body: $(this).attr("data-body").trim(),
    };
    console.log(deleteData);
    alert("Delete button under construction :-/");
  });
};

setTimeout(function(){deleteListener(); console.log("ready");}, 1000);
// $(this).attr("data-name")










});