

var url = new URL(window.location.href)
var domain = url.hostname
var q = url.searchParams.get("q");
var googleDomain = domain.includes("google");

if (googleDomain && q && document.querySelectorAll('a > h3')) {

    for (i = 0; i < document.querySelectorAll('a > h3').length; i++) {
        document.querySelectorAll('a > h3')[i].parentElement.setAttribute('target', '_blank');
        document.querySelectorAll('a > h3')[i].innerHTML += '&nbsp;<svg style="position:relative;top:2px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';
    }


    for (i = 0; i < document.querySelectorAll('h3 > a').length; i++) {
        document.querySelectorAll('h3 > a')[i].setAttribute('target', '_blank');
        
        document.querySelectorAll('h3 > a')[i].innerHTML += '&nbsp;<svg style="position:relative;top:2px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';
    }

    for (i = 0; i < document.querySelectorAll('g-link > a').length; i++) {
        document.querySelectorAll('g-link > a')[i].setAttribute('target', '_blank');
    }

    for (i = 0; i < document.querySelectorAll('g-inner-card > a').length; i++) {
        document.querySelectorAll('g-inner-card > a')[i].setAttribute('target', '_blank');
    }

    for (i = 0; i < document.querySelectorAll('g-inner-card > div > a').length; i++) {
        document.querySelectorAll('g-inner-card > div > a')[i].setAttribute('target', '_blank');
    }

}
