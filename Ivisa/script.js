window.onload = function () {
    setTimeout(() => {
        // tarnslate custom interface 
        let LangDropdownContainer = document.querySelector('.language_dropdown');
        let LangDropdown = document.querySelector('.language_dropdown .default');
        LangDropdown.onclick = function () {
            LangDropdownContainer.classList.toggle('openDropdown');
        }
        let LangOptions = document.querySelectorAll('.language_dropdown .options .option');
        // my translate items
        LangOptions.forEach(e => {
            e.onclick = function () {
                let imageSource = e.firstElementChild.getAttribute('src');
                LangDropdown.innerHTML = '<img src="'+imageSource+'">' + e.textContent + '<i class="bi bi-chevron-down"></i>';
                for (let i = 0; i < LangOptions.length; i++) {
                    LangOptions[i].classList.remove('active');
                }
                let selecteDefaultOptions = document.querySelectorAll('.goog-te-combo option'); 
                this.classList.add('active'); 
                for (let i = 0; i < selecteDefaultOptions.length; i++) {
                    selecteDefaultOptions[i].selected = false;
                }
                // select items
                let French = document.querySelector('option[value="fr"]');
                let English = document.querySelector('option[value="en"]');
                // click on google languages
                let selecteDefault = document.querySelector('.goog-te-combo'); 
                let EventVar = new Event('change');
                if (e.classList.contains('english_lg')) {
                    English.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('french_lg')) { 
                    French.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else {
                    console.log('!! Error: cannot translate this page');
                }
            }
        });
    }, 1000);
}