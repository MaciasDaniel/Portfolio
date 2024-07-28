function updateCopyrightYear() {
    const year = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = year;
}

updateCopyrightYear();