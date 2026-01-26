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

window.onscroll = function() {
    var header = document.getElementById("site-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

$(document).ready(function() {
    $('#menu').css("left", "-250px"); // Hide menu by default
    $('.menu_icon').on('click', function() {
        if ($('#menu').css('left') === '0px') {
            $('#menu').animate({"left": "-250px"});
            $(this).animate({"left": "0px"});
        } else {
            $('#menu').animate({"left": "0px"});
            $(this).animate({"left": "250px"});
        }
    });
});

function redirectToGmail() {
    var emailField = document.querySelector('input[name="email"]');
    var email = emailField.value;
    var subject = encodeURIComponent('Your Subject Here');
    var body = encodeURIComponent('Your email body here.');
    var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.location.href = gmailUrl;
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

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

$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800, 'swing');
});

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

document.getElementById('searchBox').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    document.querySelectorAll('.file-card').forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchQuery) ? '' : 'none';
    });
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        let type = this.getAttribute('data-type');
        document.querySelectorAll('.file-card').forEach(item => {
            item.style.display = (type === 'all' || item.getAttribute('data-type') === type) ? '' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('btn-primary'));
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.add('btn-secondary'));

            this.classList.remove('btn-secondary');
            this.classList.add('btn-primary');

            let type = this.getAttribute('data-type');
            document.querySelectorAll('.file-card').forEach(item => {
                item.style.display = (type === 'all' || item.getAttribute('data-type') === type) ? '' : 'none';
            });
        });
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

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

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

