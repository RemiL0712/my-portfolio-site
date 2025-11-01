document.addEventListener('DOMContentLoaded', function() {
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
