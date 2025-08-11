document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('close-btn');

    if (!hamburgerBtn || !sidebar || !overlay || !closeBtn) {
        console.log('Sidebar elements not found');
        return;
    }

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openSidebar();
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeSidebar();
    });

    overlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeSidebar();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
});
