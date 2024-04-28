const petCreatedToastBtn = document.getElementById('petCreatedToastBtn')
const petCreatedToast = document.getElementById('petCreatedToast')
if (petCreatedToastBtn) {
    const toastCoreUI = coreui.Toast.getOrCreateInstance(petCreatedToast)
    petCreatedToastBtn.addEventListener('click', () => {
        toastCoreUI.show()
    })
}
