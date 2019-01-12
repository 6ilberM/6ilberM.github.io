//By 6ilberM
//Lazy loads once

window.onload = lolload;
// document.addEventListener("click", lolload);

// Consider using another one

function LazyLoad()
{
    [...document.querySelectorAll('[data-src]')].map(img => img.addEventListener('click', e => img.src = img.dataset.src))
}

var DoOnce = new Boolean(false);
 
function lolload()
{
    if (DoOnce == false) {
        
    var images = document.querySelectorAll('[data-src]');
    for (var i = 0; i < images.length; i++)
    {
        var img = images[i];
        img.src = img.dataset.src;
        }
        DoOnce = true;
    }
    // alert("why does this not fucking call");
}