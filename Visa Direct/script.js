window.onload = function () {
    setTimeout(() => {
        // tarnslate custom interface 
        let LangDropdownContainer = document.querySelector('.language_dropdown');
        let LangDropdown = document.querySelector('.language_dropdown .default');
        LangDropdown.onclick = function () {
            LangDropdownContainer.classList.toggle('openDropdown');
        }
        let LangOptions = document.querySelectorAll('.language_dropdown .options .option');
    }, 1000);
}