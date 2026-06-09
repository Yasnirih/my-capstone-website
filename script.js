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
});

function startTypingText() {
    const typingText = document.getElementById("typingText");

    if (!typingText) return;

    const text = typingText.getAttribute("data-text");
    let index = 0;

    typingText.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 75);
        }
    }

    typeWriter();
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
        window.location.href = "home.html";
    } else if (searchValue.includes("home")) {
        window.location.href = "index.html";
    } else if (searchValue.includes("journey")) {
        window.location.href = "journey.html";
    } else if (searchValue.includes("experience")) {
        window.location.href = "experience.html";
    } else if (searchValue.includes("gallery")) {
        window.location.href = "gallery.html";
    } else if (searchValue.includes("contact") || searchValue.includes("resume")) {
        window.location.href = "contact.html";
    } else if (message) {
        message.textContent = "Try searching: about, journey, experience, gallery, contact, or resume.";
    }
}

function openPage(pageName) {
    if (pages[pageName]) {
        window.location.href = pages[pageName];
    }
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
                    <div><img src="https://cdn.corenexis.com/files/c/9291342720.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Supported pre launch updates to the TIFF 2026 Accenture Gala Screening and Reception website tracker, contributing to a high visibility client event generating 200+ account leads.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/files/c/9291342720.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Maintained and optimized Excel trackers for Canada AI Leaders CALs to support accurate internal coordination, engagement, and communications.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/files/c/9291342720.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Reimagined the Accenture Canada “Who We Are” webpage, refreshing content and structure to better reflect brand identity, values, and organizational direction.</p>
                </div>

                <div class="experience-item">
                    <div><img src="https://cdn.corenexis.com/files/c/9291342720.png" alt="Marketing Experience" class="marketing-img"></div>
                    <p>Drafted and coordinated internal communications to CALs, tailoring messaging to drive engagement and timely information sharing.</p>
                </div>
            </div>
        `,

        "core team": `
            <h2>📁 Core Team Experience</h2>
            <p>This folder highlights the work that I've done with the core team.</p>

            <div class="experience-items">
                <div class="experience-item">
                    <div class="image-placeholder">Add Image Here</div>
                    <p>Selected as the only apprentice to serve as a Communications Coach, providing structured communication guidance and professional writing feedback to 3+ year 1 youth apprentices.</p>
                </div>

                <div class="experience-item">
                    <div class="image-placeholder">Add Image Here</div>
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
                    <img src="https://cdn.corenexis.com/files/c/1721253720.png" alt="Certificate Image" class="folder-img">
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
            "https://picsum.photos/400/560?random=11",
            "https://picsum.photos/400/420?random=12",
            "https://picsum.photos/400/620?random=13",
            "https://picsum.photos/400/480?random=14",
            "https://picsum.photos/400/520?random=15"
        ]
    },

    events: {
        title: "Events / Work",
        images: [
            "https://picsum.photos/400/500?random=21",
            "https://picsum.photos/400/390?random=22",
            "https://picsum.photos/400/610?random=23",
            "https://picsum.photos/400/450?random=24",
            "https://picsum.photos/400/570?random=25"
        ]
    },

    life: {
        title: "Life Outside Work",
        images: [
            "https://picsum.photos/400/620?random=31",
            "https://picsum.photos/400/430?random=32",
            "https://picsum.photos/400/520?random=33",
            "https://picsum.photos/400/380?random=34",
            "https://picsum.photos/400/590?random=35"
        ]
    },


    projects: {
        title: "Projects",
        images: [
            "https://picsum.photos/400/540?random=51",
            "https://picsum.photos/400/420?random=52",
            "https://picsum.photos/400/610?random=53",
            "https://picsum.photos/400/470?random=54",
            "https://picsum.photos/400/560?random=55"
        ]
    }


};

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

window.addEventListener("load", function () {
    const introScreen = document.getElementById("intro-screen");

    if (!introScreen) return;

    document.addEventListener("click", function () {
        introScreen.classList.add("start");

        setTimeout(function () {
            introScreen.classList.add("hide");
        }, 3000);

    }, { once: true });
});