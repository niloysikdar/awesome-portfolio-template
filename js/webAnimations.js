$(window).on("load", function () {
    $("section, header, footer").css({ overflow: "hidden" });

    lax.init();

    // Animations on Scroll
    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });

    // Animation to Elements

    // All Headings
    lax.addElements(
        ".about_heading, .education-heading, .skills_heading, .projects_heading, .contact_heading",
        {
            scrollY: {
                scale: [
                    ["elInY", "elCenterY", "elOutY"],
                    [0, 1.1, 1.4],
                ],
                opacity: [
                    ["elInY", "elCenterY", "elOutY"],
                    [0, 1, 0],
                ],
            },
        }
    );

    // Banner Section
    lax.addElements(".developer-bio, .developer-img", {
        scrollY: {
            scale: [
                ["elCenterY", "elOutY"],
                [1, 0.5],
            ],
            opacity: [
                ["elCenterY", "elOutY"],
                [1, 0],
            ],
        },
    });

    // About Section
    lax.addElements(".about-image, .about-desc", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1, 0],
            ],
        },
    });

    // Education Section
    lax.addElements(".education-item", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1, 0],
            ],
            blur: [
                ["elInY", "elCenterY", "elOutY"],
                [1, 0, 1],
            ],
        },
    });

    // Skills Section
    lax.addElements(".skill-img-container", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1.1, 1.4],
            ],
            opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1, 0],
            ],
        },
    });

    // Project Section
    lax.addElements(".cards-container", {
        scrollY: {
            opacity: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 1, 0],
            ],
            rotateY: [
                ["elInY", "elCenterY"],
                ["180", "0"],
            ],
            blur: [
                ["elInY", "elCenterY", "elOutY"],
                [1, 0, 1],
            ],
        },
    });

    // Footer Section
    // Footer Social Contact
    lax.addElements(".social-contact", {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY-200"],
                ["-screenWidth", 0],
            ],
            opacity: [
                ["elInY", "elCenterY-200"],
                [0, 1],
            ],
        },
    });

    // Footer Address Contact
    lax.addElements(".address-contact", {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY-200"],
                ["screenWidth", 0],
            ],
            opacity: [
                ["elInY", "elCenterY-200"],
                [0, 1],
            ],
        },
    });
});
