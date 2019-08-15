var pattern = "https://www.google.com/recaptcha/"
chrome.webRequest.onBeforeRequest.addListener(
    function(urlObj){
        return {redirectUrl:urlObj.url.replace(pattern , "https://www.recaptcha.net/recaptcha/")}
    },
    {
        urls: [pattern+'*']
    },
    ["blocking"]
);
