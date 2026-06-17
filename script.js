const pages = {
    home: "index.html",
    about: "home.html",
    journey: "journey.html",
    experience: "experience.html",
    gallery: "gallery.html",
    contact: "contact.html",
    resume: "contact.html"
};

window.addEventListener("DOMContentLoaded", function () {
    startTypingText();
    setUpSearchBar();
    setUpMobileMenu();
    setUpQuoteModal();
    setUpGalleryPopups();
    setUpGalleryReveal();
    setUpPageTransitions();
});

function startTypingText() {
    const typingText1 = document.getElementById("typingText");
    const typingText2 = document.getElementById("typingText2");
    const aboutTypingText = document.getElementById("aboutTypingText");
    const typingText4 = document.getElementById("typingText4");
    const typingText5 = document.getElementById("typingText5");
    const typingText6 = document.getElementById("typingText6");

    if (!typingText1 && !typingText2 && !aboutTypingText && !typingText4 && !typingText5 && !typingText6) return;

    function typeText(element, speed, callback) {
        if (!element) return;

        const text = element.getAttribute("data-text");

        if (!text) return;

        let index = 0;
        element.textContent = "";

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }

        type();
    }

    if (typingText1 && typingText2) {
        typeText(typingText1, 75, function () {
            setTimeout(function () {
                typeText(typingText2, 45);
            }, 300);
        });
    }

    if (aboutTypingText) {
        typeText(aboutTypingText, 75);
    }

    if (typingText4) {
        typeText(typingText4, 75);
    }

    if (typingText5 && typingText6) {
        typeText(typingText5, 75, function () {
            setTimeout(function () {
                typeText(typingText6, 45);
            }, 300);
        });
    }
}

function setUpSearchBar() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchSite();
        }
    });
}

function searchSite() {
    const searchInput = document.getElementById("searchInput");
    const message = document.getElementById("searchMessage");

    if (!searchInput) return;

    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue.includes("about")) {
        goToPage("home.html");
    } else if (searchValue.includes("home")) {
        goToPage("index.html");
    } else if (searchValue.includes("journey")) {
        goToPage("journey.html");
    } else if (searchValue.includes("experience")) {
        goToPage("experience.html");
    } else if (searchValue.includes("gallery")) {
        goToPage("gallery.html");
    } else if (searchValue.includes("contact") || searchValue.includes("resume")) {
        goToPage("contact.html");
    } else if (message) {
        message.textContent = "Try searching: about, journey, experience, gallery, contact, or resume.";
    }
}

function openPage(pageName) {
    if (pages[pageName]) {
        goToPage(pages[pageName]);
    }
}

function goToPage(url) {
    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = url;
    }, 450);
}

function setUpMobileMenu() {
    const dropdown = document.querySelector(".dropdown");
    const dropButton = document.querySelector(".dropbtn");

    if (!dropdown || !dropButton) return;

    dropButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
}

function openFolder(folderName, clickedFolder) {
    const content = document.getElementById("folderContent");

    if (!content) return;

    const folders = {
        apprenticeship: `
            <h2>📁 Apprenticeship Experience</h2>
            <p>This folder highlights my work as a Youth Apprentice.</p>

            <div class="experience-items">
                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/3191749720.png" alt="Apprenticeship Experience" class="apprenticeship-img">                   
                    <p>Teachbacks ~ 10-15 minute presentations about my chosen topic</p>
                </div>

                <div class="experience-item">
                    <img src="images/apprenticeship1.png" alt="Apprenticeship Experience" class="apprenticeship-img">                    
                    <p>Foundational Training ~ 64+ hour training focused on Accenture’s methodology and team collaboration.</p>
                </div>
            </div>
        `,

        panel: `
            <h2>📁 Panels</h2>
            <p>This folder shows my experience with communication and creative projects.</p>

            <div class="experience-items">
                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/9769416720.png" alt="Panel Event" class="panel-img">                    
                    <p>Careerwise Panel - December 2024</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/5748638720.png" alt="Panel Event" class="panel-img">
                    <p>Swiss Consulate 2025</p>
                </div>
            </div>
        `,

        idk: `
            <h2>📁 Marketing + Communications</h2>
            <p>This folder includes future content you can add later.</p>

            <div class="experience-items">
                <div class="experience-item">
                    <div> <img src="https://cdn.corenexis.com/f/Px3Cswjk2RE.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Supported pre launch updates to the TIFF 2026 Accenture Gala Screening and Reception website tracker, contributing to a high visibility client event generating 200+ account leads.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/f/fBHc5H7TASo.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Maintained and optimized Excel trackers for Canada AI Leaders CALs to support accurate internal coordination, engagement, and communications.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/files/c/9291342720.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Reimagined the Accenture Canada “Who We Are” webpage, refreshing content and structure to better reflect brand identity, values, and organizational direction.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/f/6HZlPxbjwDJ.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Drafted and coordinated internal communications to CALs, tailoring messaging to drive engagement and timely information sharing.</p>
                </div>
            </div>
        `,

        "core team": `
            <h2>📁 Core Team Experience</h2>
            <p>This folder highlights the work that I've done with the core team.</p>

            <div class="experience-items">
                <div class="experience-item">
                  <img src="https://cdn.corenexis.com/f/cJ3xhhceDQV.png" class="core-img">
                    <p>Selected as the only apprentice to serve as a Communications Coach, providing structured communication guidance and professional writing feedback to 3+ year 1 youth apprentices.</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/f/UkqiA4usMG6.png" class="core-img">
                    <p>Supported onboarding of 20+ apprentices, facilitated cohort building events, developed an Excel training session, and provided peer mentorship.</p>
                </div>
            </div>
        `,

        Certifications: `
            <h2>📁 Certifications</h2>
            <p>This folder contains my certifications I've gotten over the years!</p>

            <div class="experience-items">
                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/9166176720.png" alt="Certificate Image" class="folder-img">
                    <p>Marketing Fundamentals – Udacity, 2026</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/5749889720.png" alt="Certificate Image" class="folder-img">
                    <p>AI Product Manager Nanodegree – Udacity, 2026</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/2369562720.png" alt="Certificate Image" class="folder-img">
                    <p>SQL Nanodegree — Udacity, 2026</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/7757463720.png" alt="Certificate Image" class="folder-img">
                    <p>AWS Partner: Accreditation Technical — Amazon Web Services, 2025</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/8376888720.png" alt="Certificate Image" class="folder-img">
                    <p>AWS Generative AI Certification — Amazon Web Services, 2025</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/2569746720.png" alt="Certificate Image" class="folder-img">
                    <p>SQL Fluency Certification — Udacity, 2025</p>
                </div>

                <div class="experience-item">
                    <img src="https://cdn.corenexis.com/files/c/3238669720.png" alt="Certificate Image" class="folder-img">
                    <p>Reinvention with Agentic AI — Stanford HAI / Accenture, 2025</p>
                </div>

                <div class="experience-item">
                    <img src="https://th.bing.com/th/id/OIP.xMdPECDm-YJ4yV6_8-r5vwHaE0?w=247&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Certificate Image" class="folder-img">
                    <p>HTML5 Application Development Specialist — Certiport, 2024</p>
                </div>
            </div>
        `
    };

    content.innerHTML = folders[folderName];

    document.querySelectorAll(".folder").forEach(function (folder) {
        folder.classList.remove("active");
    });

    if (clickedFolder) {
        clickedFolder.classList.add("active");
    }
}

/* PINTEREST GALLERY POPUPS */

const galleryData = {
    friends: {
        title: "Friends",
        images: [
            "https://cdn.corenexis.com/f/6ZZf3pOrES5.png",
            "https://cdn.corenexis.com/f/v16H16jhO6a.png",
            "https://cdn.corenexis.com/f/CJDfHilO8PV.png",
            "https://cdn.corenexis.com/f/v7QEstVqPmg.png",
            "https://cdn.corenexis.com/f/MdxcpT4zhI9.png"
        ]
    },

    events: {
        title: "Events / Work",
        images: [
            "https://cdn.corenexis.com/f/jzfTmZw2bms.png",
            "https://cdn.corenexis.com/f/hjeQZ7G2Xw5.png",
            "https://cdn.corenexis.com/f/KMRtPLlxE4x.png",
            "https://cdn.corenexis.com/f/MCEoYbCrLYp.png"
        ]
    },

    life: {
        title: "Life Outside Work",
        images: [
            "https://cdn.corenexis.com/f/2mIMg9IRRSp.png",
            "https://cdn.corenexis.com/f/m3aQN26jWoQ.png",
            "https://cdn.corenexis.com/f/M6mpspGuvxv.png",
            "https://cdn.corenexis.com/f/qRPLqNpg6xX.png",
            "https://cdn.corenexis.com/f/qjgdYu725p1.png" 
        ]
    },

    projects: {
        title: "Memorable Moments",
        images: [
            "https://cdn.corenexis.com/f/vBYNTB834aK.png",
            "https://cdn.corenexis.com/f/EeWhwqHA7Gs.png",
            "https://cdn.corenexis.com/f/0i9wTeiTunE.png",
            "https://cdn.corenexis.com/f/69u2fuDT3j6.png"
        ]
    }
};

function setUpGalleryReveal() {
    const pins = document.querySelectorAll(".pin");

    if (!pins.length) return;

    document.addEventListener("click", function () {
        pins.forEach(function (pin, index) {
            setTimeout(function () {
                pin.classList.add("show");
            }, index * 160);
        });
    }, { once: true });
}

function setUpGalleryPopups() {
    const pins = document.querySelectorAll(".pin");
    const popup = document.getElementById("galleryPopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupImages = document.getElementById("popupImages");
    const closePopup = document.getElementById("closePopup");

    if (!pins.length || !popup || !popupTitle || !popupImages || !closePopup) return;

    pins.forEach(function (pin) {
        pin.addEventListener("click", function () {
            const folderName = pin.getAttribute("data-folder");
            const folder = galleryData[folderName];

            if (!folder) return;

            popupTitle.textContent = folder.title;
            popupImages.innerHTML = "";

            folder.images.forEach(function (image) {
                popupImages.innerHTML += `<img src="${image}" alt="${folder.title} image">`;
            });

            popup.classList.add("active");
        });
    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            popup.classList.remove("active");
        }
    });
}

/* SEE MORE QUOTE POPUP */

function openQuote(button) {
    const card = button.closest(".quote-card");

    if (!card) return;

    const quoteText = card.querySelector("p").innerText;
    const fullQuote = document.getElementById("fullQuoteText");
    const modal = document.getElementById("quoteModal");

    if (!fullQuote || !modal) return;

    fullQuote.innerText = quoteText;
    modal.classList.add("active");
}

function closeQuote() {
    const modal = document.getElementById("quoteModal");

    if (!modal) return;

    modal.classList.remove("active");
}

function setUpQuoteModal() {
    const modal = document.getElementById("quoteModal");

    if (!modal) return;

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeQuote();
        }
    });
}

/* INTRO SCREEN */

window.addEventListener("load", () => {
    const introScreen = document.getElementById("intro-screen");

    if (!introScreen) return;

    // If intro already played, hide it right away
    if (sessionStorage.getItem("introPlayed") === "true") {
        introScreen.style.display = "none";
        return;
    }

    document.addEventListener("click", () => {
        introScreen.classList.add("start");

        setTimeout(() => {
            introScreen.classList.add("hide");
            sessionStorage.setItem("introPlayed", "true");
        }, 3000);

    }, { once: true });
});

/* PAGE TRANSITIONS */

function setUpPageTransitions() {
    document.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");

            if (!href || href.startsWith("#")) return;

            e.preventDefault();
            goToPage(href);
        });
    });
}

function filterTimeline(filter, button) {

    const cards = document.querySelectorAll(".timeline-card");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (filter === "all") {
            card.style.display = "";
        }

        else if (filter === "important") {
            card.style.display =
                card.classList.contains("important")
                    ? ""
                    : "none";
        }

        else {
            card.style.display =
                card.dataset.year === filter
                    ? ""
                    : "none";
        }
    });

    const visibleCards = [...document.querySelectorAll(".timeline-card")]
        .filter(card => card.style.display !== "none");

    visibleCards.forEach((card, index) => {

        card.classList.remove("left", "right");

        if (index % 2 === 0) {
            card.classList.add("left");
        } else {
            card.classList.add("right");
        }
    });
}