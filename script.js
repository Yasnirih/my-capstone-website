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

function openFolder(folderName) {
    const content = document.getElementById("folderContent");

    if (!content) return;

    const folders = {
        apprenticeship: `
            <h2>📁 Apprenticeship Experience</h2>
            <p>This folder highlights my work as a Youth Apprentice.</p>
            <ul>
                <li>Completed a comprehensive 250+ hour training program focused on building essential Power Skills for professional growth.</li>
                <li>Completed 64+ hour training focused on Accenture’s methodology and team collaboration. </li>
            </ul>
        `,

        panel: `
            <h2>📁 Panels</h2>
            <p>This folder shows my experience with communication and creative projects.</p>
            <ul>
                <li>Created professional messages and announcements.</li>
                <li>Helped support branding, communication, and presentation work.</li>
            </ul>
        `,

        idk: `
            <h2>📁 Marketing + Communications</h2>
            <p>This folder includes future content you can add later.</p>
            <ul>
                <li>Supported pre launch updates to the TIFF 2026 Accenture Gala Screening and Reception website tracker, contributing to a high visibility client event generating 200+ account leads</li>
<li> Maintained and optimized Excel trackers for Canada AI Leaders (CALs) to support accurate internal coordination, engagement, and communications</li>
<li>Reimagined the Accenture Canada “Who We Are” webpage, refreshing content and structure to better reflect brand identity, values, and organizational direction</li>
<li>Drafted and coordinated internal communications to CALs, tailoring messaging to drive engagement and timely information sharing

            </ul>
        `,

        "core team": `
            <h2>📁 Core Team Experience</h2>
            <p>This folder highlights the work that I've done with the core team.</p>
           <ul>
                <li>Selected as the only apprentice to serve as a Communications Coach, providing structured communication guidance and professional writing feedback to 3+ year 1 youth apprentices.</li>
                <li>Supported onboarding of 20+ apprentices, facilitated cohort building events, developed an Excel training session, and provided peer mentorship.</li>
            </ul>
        `,
         Certifications: `
            <h2>📁 Certifications</h2>
            <p>This folder contains my certifications I've gotten over the years!</p>
            <ul>
                <li>
 Marketing Fundamentals – Udacity, 2026,</li>
                <li>
AI Product Manager Nanodegree – Udacity, 2026,</li>
                <li>
SQL Nanodegree — Udacity, 2026,</li>
<li>
AWS Partner: Accreditation (Technical) — Amazon Web Services, 2025,</li>
<li>
AWS Generative AI Certification — Amazon Web Services, 2025,</li>
<li>
SQL Fluency Certification — Udacity, 2025,</li>
<li>
Reinvention with Agentic AI — Stanford HAI / Accenture, 2025, </li>
<li>
HTML5 Application Development Specialist — Certiport, 2024
</li>
            </ul>
        `
    };

    content.innerHTML = folders[folderName];
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

