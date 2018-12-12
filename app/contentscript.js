

var url = new URL(window.location.href)
var domain = url.hostname
var q = url.searchParams.get("q");
var googleDomain = domain.includes("google");

console.log('complete');

if (googleDomain && q && document.querySelectorAll('a > h3')) {
    console.log(domain);

    console.log(document);
    console.log(document.querySelectorAll('a > h3'));
    for (i = 0; i < document.querySelectorAll('a > h3').length; i++) {
        document.querySelectorAll('a > h3')[i].parentElement.setAttribute('target', '_blank');
        console.log(document.querySelectorAll('a > h3')[i].parentElement);
    }
}
