$(function() {
// Submit button to add a new word
$("#submit-btn").on("click", function(event){
    // To prevent page from loading
    event.preventDefault();
    // Assigning boolean values
    if($("input[name=optionsRadios]:checked").val() == "learning"){
      category = 0;
    }
    else{
      category = 1;
    }

    //Validation
    if($("#input-word").val().trim()){
    // Grabbing hold of value from user input
    var newWord = {
            word: $("#input-word").val().trim(),
            category: category
            };
            console.log(newWord.word);
            console.log(newWord.category);

    // Post values
    $.ajax("/api/words", {
        type: "POST",
        data: newWord
    }).then(function(){
        console.log("Created new word");
          console.log("inside category");
        console.log($("input[name=optionsRadios]:checked").val());
        // To reload the page
         location.reload();
    })
    }
    else{
      alert("Please enter a word");
    }
})

// View all words
// $("#view-btn").on("click", function(){
// //location.reload();
// console.log("View all button clicked");
// getAllWords();
// })

// Function to get all words
// function getAllWords(){
// $.get("/api/all/words", function(data){
    
//     console.log("Inside get of all words");
//     console.log(data);
    
//     // for(var i=0; i<data.length; i++){
//     //   if(!(data[i].MASTERED)){
//     // createTable(data[i]);
//     //   }
//     //   else{
//     //     createMasteredTable(data[i]);
//     //   }
//     // }
// })
// }

// Function to create table for all words
// function createTable(data){
// $("#wordTable").removeClass("d-none");
// var id = {
//  id: data.ID
// }

// // Create table row and table data for all values
// var tr = $("<tr>");
// tr.append("<th>" + data.ID + "</th>");
// tr.append("<td>" + data.WORD + "</td>");
// // tr.append("<td>" + data.MASTERED + "</td>");
// // TRY RENDERING THIS VALIE TO HANDLEBAR
// tr.append("<td>" +  "<button class='btn btn-danger learning' data-id=" + data.ID + "> MASTERED </button>" + "</td>");
// $("#wordTable").append(tr);
// }

// function createMasteredTable(data){
// console.log("inside master table");
// $("#masteredTable").removeClass("d-none");
// var id = {
//  id: data.ID
// }
// // Create table row and table data for all values
// var tr = $("<tr>");
// tr.append("<th>" + data.ID + "</th>");
// tr.append("<td>" + data.WORD + "</td>");
// // tr.append("<td>" + data.MASTERED + "</td>");
// // TRY RENDERING THIS VALIE TO HANDLEBAR
// tr.append("<td>" +  "<button class='btn btn-success mastered' data-id=" + data.ID + "> LEARN AGAIN </button>" + "</td>");
// $("#masteredTable").append(tr);
// }

// Grabbing hold of value of learning button inside table
// $(document).on("click","#wordTable tbody tr td button.btn", function() { 
  
// console.log("Inside learning..");
// var id = $(this).data("id");
// console.log(id);

// var newCatalog = {
// catalog: 1
// }

// // Send the PUT request to update table
// $.ajax("/api/words/" + id, {
// type: "PUT",
// data: newCatalog
// }).then(
// function(){
// console.log("Updated");
// }
// )
// location.reload();
// });

$(".mastered").on("click", function(event){
  event.preventDefault();
  console.log("Inside button inside table");
  var id = $(this).data("id");
      var category = $(this).data("category");
      console.log("PUT");
      console.log(id);
  
      var newCategory = {
        catalog: category
      };

$.ajax("/api/words/" + id, {
type: "PUT",
data: newCategory
}).then(
function(){
console.log("Updated", category);
}
)
location.reload();
});


  $(".btn-danger").on("click", function(event){
      event.preventDefault();
      console.log("Inside deleete function");
      var id = $(this).data("id");

      $.ajax("/api/delete/" + id, {
        type: "DELETE"
      }).then(
        function(){
          console.log("Deleted ", id);
        }
      )
      location.reload();
  })
})

// Grabbing hold of value of mastered button inside table
// $(document).on("click","#masteredTable tbody tr td button.btn", function() { 
// console.log("Inside mastered..");
// var id = $(this).data("id");
// console.log(id);

// var newCatalog = {
// catalog: false
// }

// // Send the PUT request to update table
// $.ajax("/api/words/" + id, {
// type: "PUT",
// data: newCatalog
// }).then(
// function(){
// console.log("Updated");
// }
// )
// location.reload();
// //getAllWords();
// });
