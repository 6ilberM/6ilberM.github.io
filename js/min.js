document.addEventListener("click", LazyLoad);

// Consider using another one

function LazyLoad() {
    [...document.querySelectorAll('[data-src]')].map(img => img.addEventListener('click', e => img.src = img.dataset.src))
}