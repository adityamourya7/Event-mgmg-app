// Grab DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Function to open the mobile sidebar drawer
function openSidebar() {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
    
    sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.add('opacity-100', 'pointer-events-auto');
    
    // Prevent background page scrolling while menu is active
    document.body.classList.add('overflow-hidden');
}

// Function to close the mobile sidebar drawer
function closeSidebar() {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');
    
    sidebarOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
    
    // Re-enable page scrolling
    document.body.classList.remove('overflow-hidden');
}

// Event Listeners
if (menuBtn) {
    menuBtn.addEventListener('click', openSidebar);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Close sidebar automatically when any section link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Close sidebar if user presses Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});
