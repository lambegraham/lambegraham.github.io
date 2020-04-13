$("#hide").click(function(){
    $("#main > div.homepg").hide();
    console.log("Homepage hidden");
  });
  
  $("#show").click(function(){
    $("p").show();
  });

  $("#homepglink").click(function(){
    $("#main > ").hide();
    $("#main > div.homepg").show();
  });

  $("#projectpglink").click(function(){
    $("#main > ").hide();
    $("#main > div.projectpg").show();
  });

  $("#contactpglink").click(function(){
    $("#main > ").hide();
    $("#main > div.contactpg").show();
  });