document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.getElementById('backButton');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            history.back();
        });
    }
});