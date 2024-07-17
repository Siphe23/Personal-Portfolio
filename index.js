document.addEventListener("DOMContentLoaded", function() {
    const hireMeButtons = document.querySelectorAll(".hire-me");

    hireMeButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Thank you for your interest! Please contact me at Siphesihlemzamane@gmail.com.");
        });
    });
});

