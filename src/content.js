//DetailDropDown
document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");
    var content = document.querySelector(".content");
    var footer = document.querySelector("footer");

    // Check if the content height is less than the viewport height
    function checkContentHeight() {
        if (content.clientHeight <= window.innerHeight) {
            footer.style.display = "block"; // Show the footer
        } else {
            footer.style.display = "none"; // Hide the footer
        }
    }

    checkContentHeight(); // Call the function initially

    // Recalculate on window resize
    window.addEventListener("resize", function() {
        checkContentHeight();
    });
});

//FooterJS
function toggleDetails(id) {
    // Get all details elements
    var detailsList = document.querySelectorAll('.details');
    
    // Loop through each details element and hide it
    detailsList.forEach(function(details) {
        details.style.display = 'none';
    });
    
    // Show the details of the clicked topic
    var clickedDetails = document.getElementById(id);
    clickedDetails.style.display = 'block';
}
