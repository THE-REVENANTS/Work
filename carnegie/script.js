let SiteMainTitle = document.querySelector('title');
let checkTitle = document.querySelector('#page_main_title');
let body = document.querySelector('body');
if (body.contains(checkTitle)) {
    let SiteMainTitleContent = document.querySelector('#page_main_title').textContent;
    SiteMainTitle.innerHTML = SiteMainTitle.textContent + SiteMainTitleContent;
} 
// tarnslate custom interface 
let LangDropdownContainer = document.querySelector('.language_dropdown');
let LangDropdown = document.querySelector('.language_dropdown .default');
LangDropdown.onclick = function () {
    LangDropdownContainer.classList.toggle('openDropdown');
}
let LangOptions = document.querySelectorAll('.language_dropdown .options .option');
window.onload = function () {
    setTimeout(() => {
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
                let czech = document.querySelector('option[value="cs"]');
                let Dutch = document.querySelector('option[value="nl"]');
                let French = document.querySelector('option[value="fr"]');
                let German = document.querySelector('option[value="de"]');
                let Italian = document.querySelector('option[value="it"]');
                let Polish = document.querySelector('option[value="pl"]');
                let Portuguese = document.querySelector('option[value="pt"]');
                let Spanish = document.querySelector('option[value="es"]');
                let English = document.querySelector('option[value="en"]');
                // click on google languages
                let selecteDefault = document.querySelector('.goog-te-combo'); 
                let EventVar = new Event('change');
                if (e.classList.contains('english_lg')) {
                    English.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('dutch_lg')) { 
                    Dutch.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('french_lg')) { 
                    French.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('german_lg')) { 
                    German.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('portuguese_lg')) { 
                    Portuguese.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('spanish_lg')) { 
                    Spanish.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('italian_lg')) { 
                    Italian.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('czech_lg')) { 
                    czech.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                }
                else if (e.classList.contains('polish_lg')) { 
                    Polish.selected = true;
                    selecteDefault.dispatchEvent(EventVar);
                } else {
                    console.log('error')
                }
            }
        });
    }, 1000);
}