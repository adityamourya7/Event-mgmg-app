const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

function openSidebar() {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');

    sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.add('opacity-100', 'pointer-events-auto');

    document.body.classList.add('overflow-hidden');
}

function closeSidebar() {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');

    sidebarOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');

    document.body.classList.remove('overflow-hidden');
}

if (menuBtn) {
    menuBtn.addEventListener('click', openSidebar);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});

// Event Filtering Logic
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#event-types [data-filter]');
    const eventCards = document.querySelectorAll('[data-category]');

    const activeClasses = ['border-[#7c3aed]', 'bg-linear-to-r', 'from-purple-800', 'via-pink-500', 'to-violet-800', 'text-white'];
    const inactiveClasses = ['border-gray-300', 'text-gray-600', 'bg-white'];

    if (filterButtons.length > 0 && eventCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');

                // Update active/inactive state of filter buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove(...activeClasses);
                    btn.classList.add(...inactiveClasses);
                });

                button.classList.remove(...inactiveClasses);
                button.classList.add(...activeClasses);

                // Filter event cards
                eventCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
});