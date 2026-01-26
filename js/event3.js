// Scroll to Top Button Visibility
window.onscroll = function () {
    let movetop = document.getElementById("movetop");
    movetop.style.display = (window.scrollY > 100) ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle Additional Emails
function toggleEmails() {
    let extraEmails = document.getElementById("extra-emails");
    let button = document.getElementById("toggle-email-btn");

    if (extraEmails.style.display === "none" || extraEmails.style.display === "") {
        extraEmails.style.display = "block";
        button.textContent = "Show Less Emails";
    } else {
        extraEmails.style.display = "none";
        button.textContent = "Show More Emails";
    }
}

// Initialize Bootstrap Tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Sticky Navbar on Scroll
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    $("#site-header").toggleClass("nav-fixed", scroll >= 80);
});

// Navbar Active Toggle
$(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
});

$(document).ready(function () {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});

// Disable Body Scroll when Navbar is Active
$('.navbar-toggler').click(function () {
    $('body').toggleClass('noscroll');
});
