// funzione lettura dati
function getData() {
  $.ajax(
    {
      "url": "http://157.230.17.132:3005/todos",
      "method": "GET",
      "success": function(data) {
        renderData(data);
      },
      "error": function(err) {
        alert("Errore");
      }
    }
  );
}
// funzione render dati
function renderData(ele){
  for(var i=0; i<ele.length; i++){
    var source = $("#todo-template").html();
    var template = Handlebars.compile(source);

    var context = {
      "text": ele[i].text,
      "id": ele[i].id };

    var html = template(context);
    $(".todo_list").append(html);
  }
}

// funzione cancella dati
function deleteData(id){

}

// Main Document
$(document).ready(
  function(){

    getData();

    $(".todo_list").on("click",".delete",
    function(){
        var getId = $(this).data("id");
        console.log(getId);
        var target = $(".delete");
        $.ajax(
          {
            "url": "http://157.230.17.132:3005/todos/"+getId,
            "method": "DELETE",
            "success": function(data) {
              target.parent().remove();
            },
            "error": function(err) {
              alert("Errore");
            }
          }
        );
      }
    );
  }
);
