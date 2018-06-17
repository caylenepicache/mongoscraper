
//SCRAPE ARTICLES
$(document).on("click", "#scrapeNew", function() {
  $.ajax({
    method: "GET",
    url: "/scrape" 
  })
  .then(function(data) {
    $(".container").empty();
    console.log("New articles scraped");
    location.reload();
  })
});


//SAVE AN ARTICLE
$(".save").on("click", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/save/" + thisId
  }).done(function(data) {
      window.location = "/"
  })
});

//DELETE AN ARTICLE
$(".delete").on("click", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/delete/" + thisId
  }).done(function(data) {
      window.location = "/saved"
  })
});


//SAVE NOTE BUTTON
$(".saveNote").on("click", function() {
  var thisId = $(this).attr("data-id");
  if (!$("#noteText" + thisId).val()) {
      alert("please enter a note to save")
  }else {
    $.ajax({
      method: "POST",
      url: "/notes/save/" + thisId,
      data: {
        body: $("#noteText" + thisId).val()
      }
    }).done(function(data) {
        // Log the response
        console.log("datatxt" + JSON.stringify(data));
        console.log("thisid" + thisId);

        // Empty the notes section
        $("#noteText" + thisId).val("");
        $(".modalNote").modal("hide");
        window.location = "/saved"
    });
  }
});
