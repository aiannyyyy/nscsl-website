// GMAIL
function toggleEmails() {
    let extraEmails = document.getElementById("extra-emails");
    let button = document.getElementById("toggle-email-btn");

    if (extraEmails.style.display === "none" || extraEmails.style.display === "") {
        extraEmails.style.display = "block";
        button.textContent = "-";
    } else {
        extraEmails.style.display = "none";
        button.textContent = "+";
    }
}

// MENU-JS
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

// Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
});
$(document).on("ready", function () {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});

// Disable body scroll when navbar is active
$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    });
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let movetop = document.getElementById("movetop");
    if (window.scrollY > 100) {
        movetop.style.display = "block";
    } else {
        movetop.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize Bootstrap Tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Move top
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
