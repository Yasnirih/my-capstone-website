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
    setUpGalleryFilters();
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
<img src="https://cdn.corenexis.com/files/c/3191749720.png" alt="Apprenticeship Experience" class="apprenticeship-img">                    <p>Teachbacks!</p>
                </div>

                <div class="experience-item">
<img src="images/apprenticeship1.png" alt="Apprenticeship Experience" class="apprenticeship-img">                    <p>Completed 64+ hour training focused on Accenture’s methodology and team collaboration.</p>
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
                    <div class="image-placeholder">Add Image Here</div>
                    <p>Supported pre launch updates to the TIFF 2026 Accenture Gala Screening and Reception website tracker, contributing to a high visibility client event generating 200+ account leads.</p>
                </div>

                <div class="experience-item">
                    <div class="image-placeholder">Add Image Here</div>
                    <p>Maintained and optimized Excel trackers for Canada AI Leaders CALs to support accurate internal coordination, engagement, and communications.</p>
                </div>

                <div class="experience-item">
                    <div class="image-placeholder">Add Image Here</div>
                    <p>Reimagined the Accenture Canada “Who We Are” webpage, refreshing content and structure to better reflect brand identity, values, and organizational direction.</p>
                </div>

                <div class="experience-item">
                    <div class="image-placeholder">Add Image Here</div>
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
                    <img src ="https://cdn.corenexis.com/files/c/9166176720.png" alt="Certificate Image" class="folder-img">
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
                    <img src = "https://cdn.corenexis.com/files/c/8376888720.png" alt="Certificate Image" class="folder-img">
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
                     <img src="https://cdn.corenexis.com/files/c/1721253720.png " alt="Certificate Image" class="folder-img">
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

/* GALLERY FILTER */

function setUpGalleryFilters() {
    const columns = document.querySelectorAll(".column");
    const buttons = document.querySelectorAll(".filter-buttons .btn");

    if (!columns.length || !buttons.length) return;

    filterSelection("all");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
}

function filterSelection(category) {
    const columns = document.querySelectorAll(".column");

    columns.forEach(function (column) {
        column.classList.remove("show");

        if (category === "all" || column.classList.contains(category)) {
            column.classList.add("show");
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

