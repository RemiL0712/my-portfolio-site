document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переключателя темы
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Обработчик клика по кнопке темы
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Инициализация меню загрузки
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadMenu = document.getElementById('downloadMenu');
    const closeBtn = downloadMenu.querySelector('.close-btn');

    // Открытие меню при клике на кнопку
    downloadBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        downloadMenu.classList.add('active');
    });

    // Закрытие меню при клике на кнопку закрытия
    closeBtn.addEventListener('click', function() {
        downloadMenu.classList.remove('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!downloadMenu.contains(e.target) && !downloadBtn.contains(e.target)) {
            downloadMenu.classList.remove('active');
        }
    });

    // Предотвращение закрытия меню при клике внутри него
    downloadMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
