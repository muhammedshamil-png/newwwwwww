```javascript
/* =====================================================
   KOZHIKODE CORPORATION FLEET MANAGEMENT
====================================================== */


/* =====================================================
   PAGE INFORMATION
====================================================== */

const pageNames = {

    home: [
        "Kozhikode Corporation",
        "Smart Fleet Management System"
    ],

    dashboard: [
        "Fleet Dashboard",
        "Kozhikode Corporation Vehicle Management"
    ],

    vehicles: [
        "Vehicle Management",
        "View and manage corporation vehicles"
    ],

    drivers: [
        "Driver Management",
        "Manage drivers and licences"
    ],

    maintenance: [
        "Maintenance",
        "Vehicle service and repair management"
    ],

    documents: [
        "Documents",
        "Vehicle documents and certificates"
    ],

    fuel: [
        "Fuel Management",
        "Monitor fuel usage and expenditure"
    ],

    trips: [
        "Trip Management",
        "Track vehicle trips and assignments"
    ],

    reports: [
        "Reports & Analytics",
        "Fleet performance and reports"
    ],

    alerts: [
        "Alerts & Notifications",
        "Important fleet notifications"
    ],

    settings: [
        "Settings",
        "Configure fleet management system"
    ]

};


/* =====================================================
   ELEMENTS
====================================================== */

const menuLinks =
    document.querySelectorAll(".menu-link");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("pageTitle");

const pageSubtitle =
    document.getElementById("pageSubtitle");


/* =====================================================
   SIDEBAR
====================================================== */

menuLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const page =
            link.dataset.page;

        showPage(page);

    });

});


/* =====================================================
   SHOW PAGE
====================================================== */

function showPage(pageName) {

    /* Hide every page */

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    /* Find selected page */

    const selectedPage =
        document.getElementById(pageName);


    if (!selectedPage) {

        console.error(
            "Page not found:",
            pageName
        );

        return;

    }


    /* Show selected page */

    selectedPage.classList.add("active-page");


    /* Remove active sidebar */

    menuLinks.forEach(function(link) {

        link.classList.remove("active");

    });


    /* Activate selected sidebar item */

    const selectedLink =
        document.querySelector(
            `.menu-link[data-page="${pageName}"]`
        );


    if (selectedLink) {

        selectedLink.classList.add("active");

    }


    /* Change title */

    if (pageNames[pageName]) {

        pageTitle.textContent =
            pageNames[pageName][0];

        pageSubtitle.textContent =
            pageNames[pageName][1];

    }


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   VEHICLE MODAL
====================================================== */

const vehicleModal =
    document.getElementById("vehicleModal");


function openVehicleModal() {

    vehicleModal.classList.add("show");

}


function closeVehicleModal() {

    vehicleModal.classList.remove("show");

}


/* =====================================================
   VEHICLE DETAILS
====================================================== */

const detailsModal =
    document.getElementById("detailsModal");


const vehicleData = {

    "KL-11-AB-1234": {

        name: "Ashok Leyland",

        type: "Heavy Truck",

        fuel: "Diesel",

        year: "2022",

        odometer: "72,450 km",

        driver: "Ravi Kumar"

    },

    "KL-11-CD-5678": {

        name: "Tata Ace",

        type: "Mini Truck",

        fuel: "Diesel",

        year: "2021",

        odometer: "54,230 km",

        driver: "Suresh"

    },

    "KL-11-EF-9012": {

        name: "Mahindra Bolero",

        type: "Utility",

        fuel: "Diesel",

        year: "2020",

        odometer: "89,210 km",

        driver: "Manoj"

    },

    "KL-11-GH-3456": {

        name: "Tata Bus",

        type: "Bus",

        fuel: "Diesel",

        year: "2019",

        odometer: "105,400 km",

        driver: "Ajith"

    }

};


function openVehicleDetails(registration) {

    const vehicle =
        vehicleData[registration];


    document.getElementById(
        "detailRegistration"
    ).textContent =
        registration;


    document.getElementById(
        "infoRegistration"
    ).textContent =
        registration;


    if (vehicle) {

        document.getElementById(
            "detailVehicleName"
        ).textContent =
            vehicle.name +
            " • " +
            vehicle.type;


        document.getElementById(
            "detailOdometer"
        ).textContent =
            vehicle.odometer;


        document.getElementById(
            "detailFuel"
        ).textContent =
            vehicle.fuel;


        document.getElementById(
            "detailYear"
        ).textContent =
            vehicle.year;

    }


    detailsModal.classList.add("show");

}


function closeDetails() {

    detailsModal.classList.remove("show");

}


/* =====================================================
   ADD VEHICLE
====================================================== */

const vehicleForm =
    document.getElementById("vehicleForm");


vehicleForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "newVehicleName"
            ).value.trim();


        const registration =
            document.getElementById(
                "newRegistration"
            ).value.trim().toUpperCase();


        const type =
            document.getElementById(
                "newVehicleType"
            ).value;


        const fuel =
            document.getElementById(
                "newFuelType"
            ).value;


        const year =
            document.getElementById(
                "newYear"
            ).value;


        const odometer =
            document.getElementById(
                "newOdometer"
            ).value;


        if (!name || !registration) {

            showToast(
                "Please enter vehicle details"
            );

            return;

        }


        /* Save vehicle in JavaScript data */

        vehicleData[registration] = {

            name: name,

            type: type,

            fuel: fuel,

            year: year || "2026",

            odometer:
                odometer ?
                Number(odometer).toLocaleString() + " km" :
                "0 km",

            driver: "Not Assigned"

        };


        /* Add new row */

        const vehicleList =
            document.getElementById(
                "vehicleList"
            );


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>${escapeHTML(name)}</strong>
            </td>

            <td>
                ${escapeHTML(registration)}
            </td>

            <td>
                ${escapeHTML(type)}
            </td>

            <td>
                Not Assigned
            </td>

            <td>
                ${escapeHTML(fuel)}
            </td>

            <td>

                <span class="status active-status">
                    Active
                </span>

            </td>

            <td>

                <button
                    class="view-button"
                    onclick="openVehicleDetails('${escapeHTML(registration)}')">

                    View

                </button>

            </td>

        `;


        vehicleList.appendChild(row);


        /* Update total */

        const totalElement =
            document.getElementById(
                "vehicleTotal"
            );


        const dashboardTotal =
            document.getElementById(
                "totalVehicleCount"
            );


        if (totalElement) {

            totalElement.textContent =
                parseInt(totalElement.textContent) + 1;

        }


        if (dashboardTotal) {

            dashboardTotal.textContent =
                parseInt(dashboardTotal.textContent) + 1;

        }


        /* Close modal */

        closeVehicleModal();


        /* Reset */

        vehicleForm.reset();


        /* Show notification */

        showToast(
            name +
            " added successfully!"
        );


        /* Go to vehicle page */

        showPage("vehicles");

    }
);


/* =====================================================
   VEHICLE SEARCH
====================================================== */

const vehicleSearch =
    document.getElementById("vehicleSearch");


if (vehicleSearch) {

    vehicleSearch.addEventListener(
        "input",
        function() {

            const search =
                vehicleSearch.value.toLowerCase();


            const rows =
                document.querySelectorAll(
                    "#vehicleList tr"
                );


            rows.forEach(function(row) {

                const text =
                    row.textContent.toLowerCase();


                if (text.includes(search)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }
    );

}


/* =====================================================
   GLOBAL SEARCH
====================================================== */

const globalSearch =
    document.getElementById("globalSearch");


globalSearch.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Enter") {

            return;

        }


        const search =
            globalSearch.value
                .trim()
                .toLowerCase();


        if (!search) {

            return;

        }


        if (
            search.includes("vehicle") ||
            search.includes("truck") ||
            search.includes("tata") ||
            search.includes("bolero") ||
            search.includes("registration")
        ) {

            showPage("vehicles");

            if (vehicleSearch) {

                vehicleSearch.value =
                    globalSearch.value;

                vehicleSearch.dispatchEvent(
                    new Event("input")
                );

            }

        }

        else if (
            search.includes("driver") ||
            search.includes("ravi") ||
            search.includes("suresh")
        ) {

            showPage("drivers");

        }

        else if (
            search.includes("fuel") ||
            search.includes("diesel")
        ) {

            showPage("fuel");

        }

        else if (
            search.includes("maintenance") ||
            search.includes("service") ||
            search.includes("repair")
        ) {

            showPage("maintenance");

        }

        else if (
            search.includes("document") ||
            search.includes("insurance") ||
            search.includes("certificate")
        ) {

            showPage("documents");

        }

        else if (
            search.includes("trip") ||
            search.includes("route")
        ) {

            showPage("trips");

        }

        else if (
            search.includes("report")
        ) {

            showPage("reports");

        }

        else if (
            search.includes("alert") ||
            search.includes("notification")
        ) {

            showPage("alerts");

        }

        else {

            showToast(
                "No matching section found"
            );

        }

    }
);


/* =====================================================
   DEMO BUTTONS
====================================================== */

function demoAction(message) {

    showToast(message);

}


/* =====================================================
   ALERTS
====================================================== */

function clearAlerts() {

    const alertList =
        document.getElementById(
            "alertList"
        );


    alertList.innerHTML = `

        <div style="
            background:white;
            padding:45px 25px;
            text-align:center;
            border-radius:14px;
            border:1px solid #e5e9f0;
        ">

            <i
                class="fa-solid fa-circle-check"
                style="
                    color:#16a34a;
                    font-size:40px;
                    margin-bottom:15px;
                ">
            </i>

            <h3>
                No unread alerts
            </h3>

            <p style="
                color:#7b8496;
                font-size:10px;
                margin-top:6px;
            ">

                All notifications have been marked as read.

            </p>

        </div>

    `;


    const notification =
        document.querySelector(
            ".notification"
        );


    if (notification) {

        notification.textContent = "0";

        notification.style.display =
            "none";

    }


    showToast(
        "All alerts marked as read"
    );

}


/* =====================================================
   DARK MODE
====================================================== */

const darkMode =
    document.getElementById(
        "darkMode"
    );


if (darkMode) {

    darkMode.addEventListener(
        "change",
        function() {

            document.body.classList.toggle(
                "dark-mode",
                darkMode.checked
            );


            if (darkMode.checked) {

                showToast(
                    "Dark mode enabled"
                );

            } else {

                showToast(
                    "Light mode enabled"
                );

            }

        }
    );

}


/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
====================================================== */

window.addEventListener(
    "click",
    function(event) {

        if (
            event.target === vehicleModal
        ) {

            closeVehicleModal();

        }


        if (
            event.target === detailsModal
        ) {

            closeDetails();

        }

    }
);


/* =====================================================
   ESC KEY
====================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeVehicleModal();

            closeDetails();

        }

    }
);


/* =====================================================
   TOAST
====================================================== */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =====================================================
   SECURITY HELPER
====================================================== */

function escapeHTML(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =====================================================
   START WEBSITE
====================================================== */

showPage("home");

```
