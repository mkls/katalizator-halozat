function toggleBurger() {
    var links = document.getElementById('top-links')
    if (links.style.display === 'block') {
        links.style.display = 'none'
    } else {
        links.style.display = 'block'
    }
}