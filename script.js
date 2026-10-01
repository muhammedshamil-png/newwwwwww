// ============================================
// KOZHIKODE CORPORATION FLEET SYSTEM
// ============================================


// ===============================
// ADD VEHICLE MODAL
// ===============================

const vehicleModal =
    document.getElementById("vehicleModal");

function openVehicleModal() {

    vehicleModal.classList.add("show");

}

function closeVehicleModal() {

    vehicleModal.classList.remove("show");

}


// ===============================
// VEHICLE DETAILS
// ===============================

const detailsModal =
    document.getElementById("detailsModal");

const detailRegistration =
    document.getElementById("detailRegistration");


function showVehicle(registration) {

    detailRegistration.textContent =
        registration;

    detailsModal.classList.add("show");

}


function closeDetails() {

    detailsModal.classList.remove("show");

}


// ===============================
// CLOSE MODALS WHEN CLICKING
// OUTSIDE
// ===============================

window.addEventListener("click", function(event) {

    if (event.target === vehicleModal) {

        closeVehicleModal();

    }

    if (event.target === detailsModal) {

        closeDetails();

    }

});


// ===============================
// ADD VEHICLE
// ===============================

const vehicleForm =
    document.getElementById("vehicleForm");

vehicleForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const vehicleName =
            document.getElementById("vehicleName").value;

        const registration =
            document.getElementById("registration").value;


        alert(
            vehicleName +
            " (" +
            registration +
            ") has been added successfully."
        );


        vehicleForm.reset();

        closeVehicleModal();

    }
);


// ===============================
// SEARCH VEHICLES
// ===============================

const searchInput =
    document.getElementById("searchInput");

const vehicleRows =
    document.querySelectorAll(".vehicle-row");


searchInput.addEventListener(
    "input",
    function() {

        const searchValue =
            searchInput.value.toLowerCase();


        vehicleRows.forEach(function(row) {

            const searchData =
                row.dataset.search.toLowerCase();


            if (searchData.includes(searchValue)) {

                row.style.display = "grid";

            } else {

                row.style.display = "none";

            }

        });

    }
);


// ===============================
// FILTER BUTTONS
// ===============================

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// ===============================
// DETAIL TABS
// ===============================

const tabs =
    document.querySelectorAll(".tab");


tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        tabs.forEach(function(item) {

            item.classList.remove("active");

        });

        tab.classList.add("active");

    });

});


// ===============================
// ESC KEY
// ===============================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeVehicleModal();

            closeDetails();

        }

    }
);


// ===============================
// WELCOME MESSAGE
// ===============================

console.log(
    "Kozhikode Corporation Fleet Management System loaded."
);
