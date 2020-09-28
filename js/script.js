function getData(id) {
  $.ajax(
    {
      "url": "http://157.230.17.132:3005/todos/",
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

// Main Document
$(document).ready(
  function(){
    getData();
  }
);
