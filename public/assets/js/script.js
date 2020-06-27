$(function () {
  // form class for user to enter new book in input
  $(".new-book").on("submit", function (event) {
    event.preventDefault();

    // creates new book object with input value; wasRead = 0 corresponds to not yet read
    var newBook = {
      book_name: $("#user-book").val().trim(),
      wasRead: 0,
    };

    // Send the POST request.
    $.ajax("/api/books", {
      type: "POST",
      data: newBook,
    }).then(function () {
      location.reload();
    });
  });

  // changing the read status via the "I read it" or "Read Again" buttons
  $(".change-read").on("click", function (event) {
    event.preventDefault();

    // grabs the id of the book associated with the clicked button
    var id = $(this).data("id");

    // grabs the read status of the book associated with the corresponding button
    var newRead = $(this).data("newread");

    // assigns the read state (read vs unread) to the book based on the clicked button
    var newReadState = {
      wasRead: newRead,
    };

    // Send the PUT request to update the read status
    $.ajax("/api/books/" + id, {
      type: "PUT",
      data: newReadState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // uses the delete button associated with each book
  $(".delete-btn").on("click", function (event) {
    // grabs the id corresponding to the selected delete button
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
