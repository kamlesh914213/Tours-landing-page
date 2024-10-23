
// -----------------hero-box-carousel---------------
$('.hero-box-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['', '<span class="custom-next-btn">NEXT <i class="fa fa-chevron-right"></i></span>'],
    smartSpeed: 600,
    autoplaySpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


// ---------------top-toted-business-carousel----------------

$(window).on('load', function () {
    $(".top-toted-business-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        dotsClass: 'owl-dots', // Default Owl dots class
        dotClass: 'business-carousel-dot-btn', // Custom dot class
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            1000: {
                items: 2
            },
            1364: {
                items: 3
            }
        }
    });
});


// ---------------airlinesCarousel-----------------------
$(window).on('load', function () {
    $('.airlinesCarousel').owlCarousel({
        loop: true,
        margin: 20, // Adjust the margin to avoid overlap
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1300: {
                items: 5
            }
        }
    }).trigger('refresh.owl.carousel'); // Force refresh after initialization
});


// ---------------------travelers-carousel------------------------

$(document).ready(function () {
    $(".travelers-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        dotsId: "owl-travelers",
        dotsClass: 'owl-dots', // Default Owl dots class
        dotClass: 'business-carousel-dot-btn travelers-carousel-dot', // Custom dot class
        autoplay: true,       // Enable auto-rotation
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            996: {
                items: 2
            },
            1212: {
                items: 3
            },
            1564: {
                items: 4
            }
        }
    });
});



// --------------sidebar-------------------------
// Select elements
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebarMenu = document.getElementById('sidebar-menu');
const menuItems = document.getElementById('menu-items');
const addItemButton = document.getElementById('add-item');

// Open sidebar when clicking button
openMenu.addEventListener('click', () => {
    sidebarMenu.classList.add('active');
    openMenu.classList.add('active'); // Add active class to hamburger
});

// Close sidebar when clicking close button
closeMenu.addEventListener('click', () => {
    sidebarMenu.classList.remove('active');
    openMenu.classList.remove('active'); // Remove active class from hamburger
});

// Add dummy item to the sidebar
addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.setAttribute('draggable', true);
    newItem.innerHTML = `<a href="#">New Item ${menuItems.children.length + 1}</a>`;
    menuItems.appendChild(newItem);
    addDragAndDropHandlers(newItem);
});

// Function to add drag-and-drop handlers to an item
function addDragAndDropHandlers(item) {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.outerHTML);
        e.target.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.target.classList.add('hovered');
    });

    item.addEventListener('dragleave', () => {
        item.classList.remove('hovered');
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedHTML = e.dataTransfer.getData('text/plain');
        const droppedItem = e.target.closest('li');

        // Insert the dragged item before the dropped item
        if (droppedItem) {
            droppedItem.insertAdjacentHTML('beforebegin', draggedHTML);
            const draggedElement = document.querySelector('.dragging');
            if (draggedElement) draggedElement.remove(); // Remove original item
        }
    });
}

// Initialize existing menu items for drag and drop
Array.from(menuItems.children).forEach(item => {
    addDragAndDropHandlers(item);
});

// Toggle submenu on click
menuItems.addEventListener('click', (e) => {
    const menuLink = e.target.closest('.menu-link');
    if (menuLink) {
        const submenu = menuLink.nextElementSibling;
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    }

    // Handle back button functionality
    if (e.target.classList.contains('back-btn')) {
        const submenu = e.target.closest('.submenu');
        if (submenu) {
            submenu.style.display = 'none'; // Hide the submenu
        }
    }
});


