// =================================
// FARMHOUSE WEBSITE JAVASCRIPT
// =================================


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =================================
// SMOOTH NAVIGATION
// =================================

const navigationLinks =
    document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =================================
// SCROLL REVEAL
// =================================

const revealElements = document.querySelectorAll(
    ".about-image, .about-content, .facility-card, .gallery-grid img, .booking-container"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                setTimeout(function () {

                    entry.target.classList.add("active");

                }, 50);

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    observer.observe(element);

});


// =================================
// BOOKING FORM
// =================================

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const checkin =
            document.getElementById("checkin").value;

        const guests =
            document.getElementById("guests").value;


        if (!name || !phone || !checkin || !guests) {

            alert("Please fill in all required fields.");

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your booking request has been received."
        );


        bookingForm.reset();

    }
);


// =================================
// CURRENT YEAR
// =================================

console.log(
    "Green Valley Farmhouse website loaded successfully."
);
