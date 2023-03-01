
$(function() {
    $(".navbar").on("mouseenter", function() {
       $(".section1").fadeIn(1000);
    });
});


$(function() {
    $(".section3").on("mouseenter", function() {
        $("#container").fadeIn(1000);
    });
});

$(function() {
    $(".fa-hashtag").on("click", function() {
        alert("Veuillez patintez suite à la mainténance.");
    });
})