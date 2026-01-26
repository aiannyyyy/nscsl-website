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

let captchaAnswer = 0;

// Generate a random CAPTCHA question
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let question = '';
    
    switch(operation) {
        case '+':
            captchaAnswer = num1 + num2;
            question = `What is ${num1} + ${num2}?`;
            break;
        case '-':
            // Ensure positive result
            const larger = Math.max(num1, num2);
            const smaller = Math.min(num1, num2);
            captchaAnswer = larger - smaller;
            question = `What is ${larger} - ${smaller}?`;
            break;
        case '×':
            captchaAnswer = num1 * num2;
            question = `What is ${num1} × ${num2}?`;
            break;
    }
    
    document.getElementById('captchaQuestion').textContent = question;
    document.getElementById('captchaInput').value = '';
    document.getElementById('captchaError').classList.remove('show');
}

// Verify CAPTCHA
function verifyCaptcha() {
    const userAnswer = parseInt(document.getElementById('captchaInput').value);
    return userAnswer === captchaAnswer;
}

// EMAIL SENDING FUNCTION
function sendEmail(event) {
    event.preventDefault();
    
    // Show the CAPTCHA modal instead of submitting immediately
    openModal();
    
    return false;
}

// Open modal
function openModal() {
    generateCaptcha();
    document.getElementById('captchaModal').classList.add('active');
    document.getElementById('captchaInput').focus();
}

// Close modal
function closeModal() {
    document.getElementById('captchaModal').classList.remove('active');
    document.getElementById('captchaError').classList.remove('show');
    document.getElementById('captchaInput').value = '';
}

// Verify and send email
function verifyAndSend() {
    if (!verifyCaptcha()) {
        document.getElementById('captchaError').classList.add('show');
        document.getElementById('captchaInput').focus();
        return false;
    }
    
    // Get form values
    const name = document.getElementById('w3lName').value;
    const email = document.getElementById('w3lSender').value;
    const subject = document.getElementById('w3lSubject').value;
    const message = document.getElementById('w3lMessage').value;
    
    // Create mailto link
    const mailtoLink = 'mailto:admin@nscsl.com.ph' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Close modal and reset form
    closeModal();
    setTimeout(() => {
        document.querySelector('form').reset();
    }, 1000);
    
    return false;
}

// Generate initial CAPTCHA when page loads
window.onload = function() {
    // Modal is hidden initially, captcha will generate when opened
};
// MENU-JS
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

// Main navigation Active Class Add/Remove
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

// Scroll to top functionality
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

// Toggle Emails (Duplicate fixed)
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

// Scroll to top button visibility
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

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.department-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the clicked header
            this.classList.toggle('active');
            
            // Toggle active class on the content
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});