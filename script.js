/* =========================================================
   STUDIO PAPER KITE
   Main Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- CURRENT YEAR ---------- */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* ---------- MOBILE NAVIGATION ---------- */

    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".main-nav");

    if (header && nav) {

        const menuButton = document.createElement("button");

        menuButton.className = "mobile-menu-button";
        menuButton.type = "button";
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = "☰";

        header.querySelector(".header-inner").appendChild(menuButton);

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("mobile-nav-open");

            const isOpen = nav.classList.contains("mobile-nav-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.innerHTML = isOpen ? "✕" : "☰";
        });


        /* Close menu after clicking a navigation link */

        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("mobile-nav-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.innerHTML = "☰";
            });

        });

    }


    /* ---------- SMOOTH SCROLL ---------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ---------- CONTACT FORM ---------- */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput =
                contactForm.querySelector('[name="name"]');

            const emailInput =
                contactForm.querySelector('[name="email"]');

            const messageInput =
                contactForm.querySelector(
                    '[name="message"]'
                );

            const name =
                nameInput ? nameInput.value.trim() : "";

            const email =
                emailInput ? emailInput.value.trim() : "";

            const message =
                messageInput ? messageInput.value.trim() : "";

            if (!name || !email || !message) {

                alert(
                    "Please complete your name, email and message."
                );

                return;
            }

            const businessEmail =
                "hello@studiopaperkite.com";

            const subject =
                encodeURIComponent(
                    "New Website Enquiry from " + name
                );

            const body =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );

            window.location.href =
                "mailto:" +
                businessEmail +
                "?subject=" +
                subject +
                "&body=" +
                body;

        });

    }


    /* ---------- FADE-UP ANIMATION ---------- */

    const animatedElements =
        document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("fade-up-visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });

    }


    /* ---------- PORTFOLIO / SERVICE LINK HANDLING ---------- */

    document.querySelectorAll("[data-scroll]").forEach(function (element) {

        element.addEventListener("click", function () {

            const targetId =
                element.getAttribute("data-scroll");

            const target =
                document.getElementById(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ---------- CONSOLE MESSAGE ---------- */

    console.log(
        "Studio Paper Kite website loaded successfully."
    );

});
