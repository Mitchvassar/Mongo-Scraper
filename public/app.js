$.getJSON("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#articles").append("<div class='panel-body'><p data-id='" + data[i]._id + "'>" + data[i].title + "</p> <a href='" + data[i].link + "'>Read more...</a> </div> <br />");
  }
});
  
  
  $(document).on("click", "p", function() {
    $("#Kotakus").empty();
    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      .then(function(data) {
        console.log(data);
        $("#Kotakus").append("<h2>" + data.title + "</h2>");
        $("#Kotakus").append("<input id='titleinput' name='title' >");
        $("#Kotakus").append("<textarea id='bodyinput' name='body'></textarea>");
        $("#Kotakus").append("<button data-id='" + data._id + "' id='saveKotaku'>Save Kotaku</button>");
  
        if (data.Kotaku) {
          $("#titleinput").val(data.Kotaku.title);
          $("#bodyinput").val(data.Kotaku.body);
        }
      });
  });
  
  $(document).on("click", "#saveKotaku", function() {
    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        title: $("#titleinput").val(),
        body: $("#bodyinput").val()
      }
    })
      .then(function(data) {
        console.log(data);
        $("#Kotakus").empty();
      });
      
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });
  