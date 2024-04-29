document.addEventListener("DOMContentLoaded", function() {
    const popoverTriggerList = document.querySelectorAll('[data-coreui-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new coreui.Popover(popoverTriggerEl))
    const menuToggle = document.getElementsByClassName("sidebar-toggler")[0];
    const menu = document.getElementById("sidebar");
    let isMenuToggled = localStorage.getItem("sidebarToggled") === "true";
    if (isMenuToggled) {
        menu.classList.add("sidebar-narrow-unfoldable");
    } else {
        menu.classList.remove("sidebar-narrow-unfoldable");
    }
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("sidebar-narrow-unfoldable");
        localStorage.setItem("sidebarToggled", !menu.classList.contains("sidebar-narrow-unfoldable"));
        isMenuToggled = localStorage.getItem("sidebarToggled") === "true";
        if (isMenuToggled) {
            menu.classList.add("sidebar-narrow-unfoldable");
        } else {
            menu.classList.remove("sidebar-narrow-unfoldable");
        }
    });
    document.addEventListener('submit', function(event) {
        var form = event.target;
        var submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.setAttribute('disabled', 'disabled');
        }
    });
    const petCreatedToastBtn = document.getElementById('petCreatedToastBtn')
    const petCreatedToast = document.getElementById('petCreatedToast')
    if (petCreatedToastBtn) {
        const toastCoreUI = coreui.Toast.getOrCreateInstance(petCreatedToast)
        petCreatedToastBtn.addEventListener('click', () => {
            toastCoreUI.show()
        })
    }
});

