// Function to show content for a specific year
function showYearContent(year) {
    // Hide all tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active');
    });
    
    // Show selected year's content
    const selectedPane = document.getElementById(`tab${year}`);
    if (selectedPane) {
        selectedPane.classList.add('show', 'active');
    }
}

// Function to switch tabs
document.querySelectorAll('.year-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.year-tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show the corresponding content
        const year = this.dataset.year;
        showYearContent(year);
        
        // Update the decade dropdown to match the selected year
        const decade = this.dataset.decade;
        document.getElementById('decadeSelect').value = decade;
    });
});

// Function to filter years by decade
function filterYearsByDecade(decade) {
    const yearTabs = document.querySelectorAll('.year-tab');
    
    if (decade === 'all') {
        // Show all years
        yearTabs.forEach(tab => {
            tab.style.display = 'block';
        });
    } else {
        // Show only years from selected decade
        yearTabs.forEach(tab => {
            if (tab.dataset.decade === decade) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    }
    
    // Activate the first visible tab
    const firstVisibleTab = document.querySelector(`.year-tab[style="display: block"]`) || 
                            document.querySelector(`.year-tab:not([style*="display: none"])`);
    
    if (firstVisibleTab) {
        yearTabs.forEach(t => t.classList.remove('active'));
        firstVisibleTab.classList.add('active');
        
        // Show the corresponding content
        const year = firstVisibleTab.dataset.year;
        showYearContent(year);
    }
}

// Function to handle memo downloads
function setupDownloadButtons() {
    document.querySelectorAll('.memo-download').forEach(button => {
        button.addEventListener('click', function(e) {
            const fileUrl = this.getAttribute('href');
            
            // Skip if href is just "#" or empty
            if (!fileUrl || fileUrl === '#') {
                console.log('No file URL specified');
                alert('The download file is not yet available.');
                e.preventDefault();
                return;
            }
            
            // For actual file URLs with the download attribute,
            // the browser will handle the download automatically
            console.log('Downloading file:', fileUrl);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show content for active tab on page load
    const activeTab = document.querySelector('.year-tab.active');
    if (activeTab) {
        showYearContent(activeTab.dataset.year);
    }
    
    // Setup download buttons
    setupDownloadButtons();
});

document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.getElementById('backButton');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            history.back();
        });
    }
});