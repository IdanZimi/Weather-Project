$("#playa").click(function () {
    debugger;
    $("#audio")[0].src = $("#audio")[0].src.replace('https://www.youtube.com/embed/'+ result+'?autoplay=1', '') + "?autoplay=1";
 
 });
 
 $("#stopa").click(function () {
    debugger;
    $("#audio")[0].src = $("#audio")[0].src.replace('?autoplay=1', '') + "?autoplay=0";
 
 });