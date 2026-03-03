const themeBtn = document.getElementById('theme-toggle');

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeBtn.textContent = '🌙 Dark Mode';
    } else {
        themeBtn.textContent = '☀️ Light Mode';
    }
});

// Toggle theme and save preference
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme-preference', 'light');
        themeBtn.textContent = '🌙 Dark Mode';
    } else {
        localStorage.setItem('theme-preference', 'dark');
        themeBtn.textContent = '☀️ Light Mode';
    }
});