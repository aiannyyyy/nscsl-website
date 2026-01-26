$(document).ready(function() {
    $('#menu').css("left", "-250px"); // Hide menu by default
    $('.menu_icon').on('click', function() {
        // Toggle menu visibility
        if ($('#menu').css('left') === '0px') {
            $('#menu').animate({"left": "-250px"}); // Close menu
            $(this).animate({"left": "0px"}); // Move icon back
        } else {
            $('#menu').animate({"left": "0px"}); // Open menu
            $(this).animate({"left": "250px"}); // Move icon out
        }
    });
});

// Plug-in Initialisation
$(document).ready(function () {
    // Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// Menu JS
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

// Move to top
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

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/*

document.addEventListener('DOMContentLoaded', function() {
    // Base Map URLs for each province
    const provinceBaseUrls = {
        'CAVITE': "https://www.google.com/maps/d/embed?mid=1kITO78pW1qtDDyEYNwWb1EETRlTSLHI&ehbc=2E312F",
        'LAGUNA': "https://www.google.com/maps/d/embed?mid=1Ox3pTc2A_tXpLHBiOw7bwUxcAABiv_o&ehbc=2E312F",
        'BATANGAS': "https://www.google.com/maps/d/embed?mid=1Wt_nXSCZyZrOixoJXshXgibJVxLFsxM&ehbc=2E312F",
        'RIZAL': "https://www.google.com/maps/d/embed?mid=1FlONhb-CA0KjhikrMFAD-QXC8hUXPa0&ehbc=2E312F",
        'QUEZON': "https://www.google.com/maps/d/embed?mid=12l8Meu3rTgy1kLpHSpJj-ASQEmIQjRA&ehbc=2E312F"
    };
    
    // Province center coordinates (approximate)
    const provinceCenters = {
        'CAVITE': { lat: 14.4791, lng: 120.8970 },
        'LAGUNA': { lat: 14.2691, lng: 121.4113 },
        'BATANGAS': { lat: 13.7565, lng: 121.0583 },
        'RIZAL': { lat: 14.6042, lng: 121.3084 },
        'QUEZON': { lat: 14.0417, lng: 121.6234 }
    };
    
    // Get references to elements
    const buttons = document.querySelectorAll('.province-btn');
    const mapIframe = document.getElementById('calabarzon-map');
    const loadingOverlay = document.querySelector('.loading-overlay');
    const searchInput = document.getElementById('search-location');
    const searchButton = document.getElementById('search-button');
    
    // Track current selected province
    let currentProvince = 'CAVITE';
    
    // Add click event to each province button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get province data attribute
            currentProvince = this.getAttribute('data-province');
            
            // Show loading overlay
            loadingOverlay.classList.add('active');
            
            // Fade out current map
            mapIframe.style.opacity = 0.2;
            
            // Log for debugging
            console.log(`Changing map to ${currentProvince}: ${provinceBaseUrls[currentProvince]}`);
            
            // Update map iframe source after a short delay for smooth transition
            setTimeout(() => {
                mapIframe.src = provinceBaseUrls[currentProvince];
                
                // Clear search input when changing province
                searchInput.value = '';
                
                // When the map loads, fade it back in
                mapIframe.onload = function() {
                    mapIframe.style.opacity = 1;
                    loadingOverlay.classList.remove('active');
                };
            }, 300);
        });
    });
    
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('Please enter a location to search');
            return;
        }
        
        // Show loading overlay
        loadingOverlay.classList.add('active');
        mapIframe.style.opacity = 0.2;
        
        // Create a Google Maps search URL that doesn't require API key
        // This uses the regular Google Maps with search term + province in a new window
        const searchQuery = `${searchTerm} in ${currentProvince}, Philippines`;
        
        // Approach 1: Open in the same iframe - simpler but less integrated with your custom maps
        const embedUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d123715.12795449815!2d${provinceCenters[currentProvince].lng}!3d${provinceCenters[currentProvince].lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${encodeURIComponent(searchTerm)}!5e0!3m2!1sen!2sph!4v1716316544549!5m2!1sen!2sph`;
        
        // Update iframe src with the search URL
        mapIframe.src = embedUrl;
        
        // When the map loads, fade it back in
        mapIframe.onload = function() {
            mapIframe.style.opacity = 1;
            loadingOverlay.classList.remove('active');
        };
        
        // Display notice below search bar
        let noticeElement = document.getElementById('search-notice');
        if (!noticeElement) {
            noticeElement = document.createElement('div');
            noticeElement.id = 'search-notice';
            noticeElement.className = 'search-notice';
            noticeElement.innerHTML = `
                <button id="back-to-province-map" class="btn btn-sm btn-secondary mt-2">
                    <i class="fas fa-arrow-left"></i> Back to ${currentProvince} Map
                </button>
            `;
            document.querySelector('.search-container').appendChild(noticeElement);
            
            // Add event listener to the back button
            document.getElementById('back-to-province-map').addEventListener('click', function() {
                // Clear the search input field
                searchInput.value = '';
                
                // Return to the original province map
                mapIframe.src = provinceBaseUrls[currentProvince];
                
                // Remove the notice/back button
                noticeElement.remove();
            });
        }
    }
    
    // Set initial map on page load
    function initializeMap() {
        // Default to CAVITE
        const defaultProvince = 'CAVITE';
        const defaultButton = document.querySelector(`.province-btn[data-province="${defaultProvince}"]`);
        
        if (defaultButton) {
            // Make sure default button is active
            buttons.forEach(btn => btn.classList.remove('active'));
            defaultButton.classList.add('active');
            currentProvince = defaultProvince;
            
            // Set initial map source
            mapIframe.src = provinceBaseUrls[defaultProvince];
            
            // Log for debugging
            console.log(`Initialized map with ${defaultProvince}: ${provinceBaseUrls[defaultProvince]}`);
        }
    }
    
    // Initialize map
    initializeMap();
});

*/
document.addEventListener('DOMContentLoaded', function() {
    // Base Map URLs for each province
    const provinceBaseUrls = {
        'CAVITE': "https://www.google.com/maps/d/embed?mid=1kITO78pW1qtDDyEYNwWb1EETRlTSLHI&ehbc=2E312F",
        'LAGUNA': "https://www.google.com/maps/d/embed?mid=1Ox3pTc2A_tXpLHBiOw7bwUxcAABiv_o&ehbc=2E312F",
        'BATANGAS': "https://www.google.com/maps/d/embed?mid=1Wt_nXSCZyZrOixoJXshXgibJVxLFsxM&ehbc=2E312F",
        'RIZAL': "https://www.google.com/maps/d/embed?mid=1FlONhb-CA0KjhikrMFAD-QXC8hUXPa0&ehbc=2E312F",
        'QUEZON': "https://www.google.com/maps/d/embed?mid=12l8Meu3rTgy1kLpHSpJj-ASQEmIQjRA&ehbc=2E312F"
    };
    
    // Province center coordinates (approximate)
    const provinceCenters = {
        'CAVITE': { lat: 14.4791, lng: 120.8970 },
        'LAGUNA': { lat: 14.2691, lng: 121.4113 },
        'BATANGAS': { lat: 13.7565, lng: 121.0583 },
        'RIZAL': { lat: 14.6042, lng: 121.3084 },
        'QUEZON': { lat: 14.0417, lng: 121.6234 }
    };
    
    // Get references to elements
    const buttons = document.querySelectorAll('.province-btn');
    const mapIframe = document.getElementById('calabarzon-map');
    const loadingOverlay = document.querySelector('.loading-overlay');
    const searchInput = document.getElementById('search-location');
    const searchButton = document.getElementById('search-button');
    
    // Track current selected province
    let currentProvince = 'CAVITE';
    let isSearchMode = false;
    
    // Add click event to each province button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get province data attribute
            currentProvince = this.getAttribute('data-province');
            
            // Show loading overlay
            loadingOverlay.classList.add('active');
            
            // Fade out current map
            mapIframe.style.opacity = 0.2;
            
            // Clear search input and reset to province map
            searchInput.value = '';
            isSearchMode = false;
            removeSearchNotice();
            
            // Log for debugging
            console.log(`Changing map to ${currentProvince}: ${provinceBaseUrls[currentProvince]}`);
            
            // Update map iframe source after a short delay for smooth transition
            setTimeout(() => {
                mapIframe.src = provinceBaseUrls[currentProvince];
                
                // When the map loads, fade it back in
                mapIframe.onload = function() {
                    mapIframe.style.opacity = 1;
                    loadingOverlay.classList.remove('active');
                };
            }, 300);
        });
    });
    
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('Please enter a location to search');
            return;
        }
        
        // Show loading overlay
        loadingOverlay.classList.add('active');
        mapIframe.style.opacity = 0.2;
        
        // Create search query with specific location and province
        const searchQuery = encodeURIComponent(`${searchTerm}, ${currentProvince}, Philippines`);
        
        // Create a more specific Google Maps embed URL for location search
        // This approach uses Google Maps Place search within the province bounds
        const provinceBounds = getProvinceBounds(currentProvince);
        const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${searchQuery}&center=${provinceCenters[currentProvince].lat},${provinceCenters[currentProvince].lng}&zoom=12`;
        
        // Alternative approach without API key - uses direct search
        const searchEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15565.524!2d${provinceCenters[currentProvince].lng}!3d${provinceCenters[currentProvince].lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sph!4v1634000000000!5m2!1sen!2sph&q=${searchQuery}`;
        
        // Better approach: Use Google Maps search with specific location
        const betterSearchUrl = `https://maps.google.com/maps?q=${searchQuery}&output=embed&z=15`;
        
        // Update iframe src with the search URL
        mapIframe.src = betterSearchUrl;
        isSearchMode = true;
        
        // When the map loads, fade it back in
        mapIframe.onload = function() {
            mapIframe.style.opacity = 1;
            loadingOverlay.classList.remove('active');
        };
        
        // Display notice below search bar
        showSearchNotice();
    }
    
    function showSearchNotice() {
        // Remove existing notice if present
        removeSearchNotice();
        
        const noticeElement = document.createElement('div');
        noticeElement.id = 'search-notice';
        noticeElement.className = 'search-notice mt-2';
        noticeElement.innerHTML = `
            <div class="alert alert-info d-flex justify-content-between align-items-center">
                <span><i class="fas fa-info-circle"></i> Showing search results for "${searchInput.value}" in ${currentProvince}</span>
                <button id="back-to-province-map" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-arrow-left"></i> Back to ${currentProvince} Map
                </button>
            </div>
        `;
        document.querySelector('.search-container').appendChild(noticeElement);
        
        // Add event listener to the back button
        document.getElementById('back-to-province-map').addEventListener('click', function() {
            returnToProvinceMap();
        });
    }
    
    function removeSearchNotice() {
        const noticeElement = document.getElementById('search-notice');
        if (noticeElement) {
            noticeElement.remove();
        }
    }
    
    function returnToProvinceMap() {
        // Clear the search input field
        searchInput.value = '';
        isSearchMode = false;
        
        // Show loading overlay
        loadingOverlay.classList.add('active');
        mapIframe.style.opacity = 0.2;
        
        // Return to the original province map
        setTimeout(() => {
            mapIframe.src = provinceBaseUrls[currentProvince];
            
            mapIframe.onload = function() {
                mapIframe.style.opacity = 1;
                loadingOverlay.classList.remove('active');
            };
        }, 300);
        
        // Remove the notice/back button
        removeSearchNotice();
    }
    
    function getProvinceBounds(province) {
        // Define approximate bounds for each province (for more precise searches)
        const bounds = {
            'CAVITE': { 
                north: 14.7, south: 14.1, 
                east: 121.2, west: 120.6 
            },
            'LAGUNA': { 
                north: 14.6, south: 13.9, 
                east: 121.9, west: 121.0 
            },
            'BATANGAS': { 
                north: 14.2, south: 13.4, 
                east: 121.6, west: 120.7 
            },
            'RIZAL': { 
                north: 14.9, south: 14.2, 
                east: 121.6, west: 121.0 
            },
            'QUEZON': { 
                north: 15.0, south: 13.0, 
                east: 122.5, west: 120.8 
            }
        };
        return bounds[province];
    }
    
    // Enhanced search with suggestions (optional enhancement)
    function setupSearchSuggestions() {
        // You can add common locations for each province here
        const commonLocations = {
            'CAVITE': ['Tagaytay', 'Dasmarinas', 'Bacoor', 'Imus', 'General Trias', 'Kawit', 'Silang'],
            'LAGUNA': ['Los Banos', 'Calamba', 'Santa Rosa', 'Binan', 'San Pedro', 'Sta Cruz', 'Pagsanjan'],
            'BATANGAS': ['Batangas City', 'Nasugbu', 'Tanauan', 'Lipa', 'San Juan', 'Calatagan', 'Lemery'],
            'RIZAL': ['Antipolo', 'Cainta', 'Taytay', 'Marikina', 'San Mateo', 'Rodriguez', 'Angono'],
            'QUEZON': ['Lucena', 'Tayabas', 'Candelaria', 'Sariaya', 'Tiaong', 'Pagbilao', 'Mauban']
        };
        
        // Add datalist for search suggestions
        let datalist = document.getElementById('location-suggestions');
        if (!datalist) {
            datalist = document.createElement('datalist');
            datalist.id = 'location-suggestions';
            searchInput.setAttribute('list', 'location-suggestions');
            searchInput.parentNode.appendChild(datalist);
        }
        
        // Update suggestions based on current province
        function updateSuggestions() {
            datalist.innerHTML = '';
            if (commonLocations[currentProvince]) {
                commonLocations[currentProvince].forEach(location => {
                    const option = document.createElement('option');
                    option.value = location;
                    datalist.appendChild(option);
                });
            }
        }
        
        // Update suggestions when province changes
        buttons.forEach(button => {
            button.addEventListener('click', updateSuggestions);
        });
        
        // Initial suggestions
        updateSuggestions();
    }
    
    // Set initial map on page load
    function initializeMap() {
        // Default to CAVITE
        const defaultProvince = 'CAVITE';
        const defaultButton = document.querySelector(`.province-btn[data-province="${defaultProvince}"]`);
        
        if (defaultButton) {
            // Make sure default button is active
            buttons.forEach(btn => btn.classList.remove('active'));
            defaultButton.classList.add('active');
            currentProvince = defaultProvince;
            
            // Set initial map source
            mapIframe.src = provinceBaseUrls[defaultProvince];
            
            // Log for debugging
            console.log(`Initialized map with ${defaultProvince}: ${provinceBaseUrls[defaultProvince]}`);
        }
    }
    
    // Initialize map and search suggestions
    initializeMap();
    setupSearchSuggestions();
});