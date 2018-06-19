// from view.js example in classwork 8 squelize CRUD  
$(document).ready(function () {
  //Materialize Select 
  $('select').material_select();
  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $(document).on("submit", "#form", insertZone);
});

$('#addDataBtn').on('click', function () {
  insertZone();
  location.reload();
  console.log(' i have been clicked', zone);

});

function insertZone() {

  //making inputs work...
  var zone = {
    // building name
    buildingName: $("#building").val().trim(),
    // plant zones
    plant_zones: $("#zone").val().trim(),
    // ELectricity 
    utility1capacity: $("#electricCap").val().trim(),
    utility1load: $("#electricUsed").val().trim(),
    // Water
    utility2capacity: $("#waterCap").val().trim(),
    utility2load: $("#waterUsed").val().trim(),
    //HVAC
    utility3capacity: $("#hvacCap").val().trim(),
    utility3load: $("#hvacUsed").val().trim(),
    // Steam
    utility4capacity: $("#steamCap").val().trim(),
    utility4load: $("#steamUsed").val().trim(),
  }

  console.log('this is the zone var front.js', zone);

  //clear inputs
  $("#building").empty();
  $("#zone").empty();
  $("#electricUsed").empty();
  $("#electricCap").empty();
  $("#waterUsed").empty();
  $("#waterCap").empty();
  $("#hvacUsed").empty();
  $("#hvacCap").empty();
  $("#steamUsed").empty();
  $("#steamCap").empty();


  $.post("/api/data", zone).done(function (data) {
    console.log(data);
  });
}
