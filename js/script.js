// Language Toggle Functionality
document.getElementById("toggle-language").addEventListener("click", function() {
    // Toggle between English and French content
    const currentLang = document.documentElement.lang; // Get the current language setting
    const newLang = (currentLang === "en") ? "fr" : "en"; // Switch between 'en' and 'fr'
    
    // Change the language attribute on the <html> element
    document.documentElement.lang = newLang;

    // Optional: Store language preference in local storage
    localStorage.setItem('language', newLang);

    // Reload the page to apply changes
    location.reload();
});

// Check and set language preference on page load
window.onload = function() {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
        document.documentElement.lang = storedLang; // Set the language based on saved preference
    } else {
        // Default to English if no language preference is saved
        document.documentElement.lang = "en";
    }
};
