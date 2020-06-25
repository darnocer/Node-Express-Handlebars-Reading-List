$(function () {
  $("#read-btn").on("click", function (event) {
    var id = $(this).data("id");
    var newRead = $(this).data("newread");

    var newReadState = {
      wasRead: true,
    };

    // Send the PUT request.
    $.ajax("/api/books/" + id, {
      type: "PUT",
      data: newReadState,
    }).then(function () {
      console.log("changed sleep to", newRead);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".new-book").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("POST");

    var newBook = {
      book_name: $("#user-book").val().trim(),
      wasRead: 0,
    };

    // Send the POST request.
    $.ajax("/api/books", {
      type: "POST",
      data: newBook,
    }).then(function () {
      console.log("created new book");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-btn").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/books/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted book", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
