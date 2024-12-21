document.getElementById("toggle-language").addEventListener("click", function() {
    const currentLang = document.documentElement.lang;
    const newLang = (currentLang === "en") ? "fr" : "en";
    document.documentElement.lang = newLang;
    localStorage.setItem('language', newLang);
    location.reload();
  });
  
  window.onload = function() {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      document.documentElement.lang = storedLang;
    } else {
      document.documentElement.lang = "en";
    }
  };
  