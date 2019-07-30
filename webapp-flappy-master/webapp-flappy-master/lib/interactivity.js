jQuery("#credits").on("click", function() {
 var message = "Game created by Bob!";
 jQuery("#credits").append(
 "<p>" + message + "</p>"
 );
});
<div>
 <button type="button" class="btn btn-default" id="scoresbtn">Scores</button>
 <button type="button" class="btn btn-default" id="creditsbtn">Credits</button>
 <button type="button" class="btn btn-default" id="helpbtn">Help</button>
</div>
<div>
 <div id="content">
 </div>
</div>
jQuery("#scoresbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>" +
 "<li>" + "Me" + "</li>" +
 "<li>" + "Also me" + "</li>" +
 "<li>" + "Me again" + "</li>" +
 "</ul>"
 );
});
jQuery("#creditsbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<div>" + "Game created by Bob!" + "</div>"
 );
});
jQuery("#helpbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>"
 + "<li>" + "Press SPACE to flap your wings" + "</li>"
 + "<li>" + "Avoid the incoming pipes" + "</li>"
 + "</ul>"
 );
});
jQuery("#greeting-form").on("submit", function(event_details) {
 var greeting = "Hello ";
 var name = jQuery("#fullName").val();
 var greeting_message = greeting + name;
 jQuery("#greeting-form").hide();
 jQuery("#greeting").append("<p>" + greeting_message + " (" +
 jQuery("#email").val() + "): " + jQuery("#score").val() + "</p>");
 event_details.preventDefault();
})；
