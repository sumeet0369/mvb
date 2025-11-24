function showPopup() {
    $("#popup").removeClass("hidden");
    // setTimeout(hidePopup, 1000);	
}

// Function to hide the popup
function hidePopup() {
    $("#popup").addClass("hidden");
}

// Show the popup after 50 seconds
// setTimeout(showPopup, 50000);

// Add a click event to the header button
$(".open-popup").click(showPopup);

// Add a click event to the close button
$(".form-qo5 .close-btn").click(hidePopup);

// Form submit
// $("#popup").submit(function (event) {
//     event.preventDefault();
//     hidePopup();
// });

$(document).ready(function() {
    $("#submitBtn").click(function() {
        var name = $("#name").val();
        var phone = $("#phone").val();

        $.ajax({
            type: "POST",
            url: "assets/php/popup.php",
            data: { name: name, phone: phone },
            success: function(response) {
                $("#msgSubmit").text(response);
            }
        });
        hidePopup();
    });
});
 