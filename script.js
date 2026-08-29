/* =========================================================
   STUDIO PAPER KITE
   Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const nav = document.querySelector(".main-nav");
    const menuButton =
        document.querySelector(".menu-toggle") ||
        document.querySelector(".mobile-menu-button");

    if (nav && menuButton) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                nav.classList.toggle("mobile-nav-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            menuButton.innerHTML =
                isOpen ? "✕" : "☰";
        });


        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("mobile-nav-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuButton.innerHTML = "☰";
            });

        });
    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.querySelector("#name")?.value.trim() || "";

                const email =
                    document.querySelector("#email")?.value.trim() || "";

                const business =
                    document.querySelector("#business")?.value.trim() || "";

                const service =
                    document.querySelector("#service")?.value.trim() || "";

                const message =
                    document.querySelector("#message")?.value.trim() || "";

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
                        "\nBusiness: " + business +
                        "\nService: " + service +
                        "\n\nProject Details:\n" +
                        message
                    );

                window.location.href =
                    "mailto:" +
                    businessEmail +
                    "?subject=" +
                    subject +
                    "&body=" +
                    body;
            }
        );
    }


    /* =====================================================
       FADE-UP ANIMATION
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "fade-up-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
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

    } else {

        animatedElements.forEach(function (element) {
            element.classList.add("fade-up-visible");
        });
    }


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "Studio Paper Kite website loaded successfully."
    );

});
