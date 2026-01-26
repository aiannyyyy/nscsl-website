// Move to Top Button
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

// Toggle Emails
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

// Initialize Bootstrap Tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Sticky Header on Scroll
window.onscroll = function () {
    var header = document.getElementById("site-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

// Sidebar Menu Toggle
$(document).ready(function () {
    $('#menu').css("left", "-250px"); // Hide menu by default
    $('.menu_icon').on('click', function () {
        if ($('#menu').css('left') === '0px') {
            $('#menu').animate({ "left": "-250px" });
            $(this).animate({ "left": "0px" });
        } else {
            $('#menu').animate({ "left": "0px" });
            $(this).animate({ "left": "250px" });
        }
    });
});

// Preloader Timeout
setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-content').style.filter = 'none';
}, 3000);

// Redirect to Gmail
function redirectToGmail() {
    var emailField = document.querySelector('input[name="email"]');
    var email = emailField.value;
    var subject = encodeURIComponent('Your Subject Here');
    var body = encodeURIComponent('Your email body here.');
    var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.location.href = gmailUrl;
}

// FAQ Accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    items.forEach(item => item.setAttribute('aria-expanded', 'false'));

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// Sticky Navbar
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

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

// Disable Body Scroll when Navbar is Active
$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    });
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800, 'swing');
});

// Partners Carousel
$(document).ready(function () {
    $('#partnersCarousel').carousel({ interval: 4000 });

    $('#partnersCarousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 1;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
});

// Move top //
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