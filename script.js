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
});

function startTypingText() {
    const typingText = document.getElementById("typingText");

    if (!typingText) return;

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

    if (pages[searchValue]) {
        window.location.href = pages[searchValue];
    } else if (message) {
        message.textContent = "Try typing: about, journey, experience, gallery, contact, or resume.";
    }
}

function openPage(pageName) {
    if (pages[pageName]) {
        window.location.href = pages[pageName];
    }
}

window.addEventListener("DOMContentLoaded", function () {
    startTypingText();
    setUpSearchBar();
    setUpMobileMenu();
});

function setUpMobileMenu() {
    const dropdown = document.querySelector(".dropdown");
    const dropButton = document.querySelector(".dropbtn");

    if (!dropdown || !dropButton) return;

    dropButton.addEventListener("click", function (event) {
        event.preventDefault();
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

    const folders = {
        apprenticeship: `
      <h2>📁 Apprenticeship Experience</h2>
      <p>This folder highlights my work as a Youth Apprentice.</p>
      <ul>
        <li>Selected as the only apprentice to serve as a Communications Coach, providing structured communication guidance and professional writing feedback to 3+ year 1 youth apprentices</li>
        <li>Supported onboarding of  20+ apprentices, facilitated cohort building events, developed an Excel training session, and provided peer mentorship and communication coaching to improve professional writing and workplace communication </li>
       
      </ul>
    `,

        marketing: `
      <h2>📁 Marketing Experience</h2>
      <p>This folder shows my experience with communication, blah, blah.</p>
      <ul>
        <li>Created professional messages and announcements</li>
        
      </ul>
    `,

        idk: `
      <h2>📁 ????</h2>
      <p>This folder includes the ?????</p>
      <ul>
        <li>????</li>
      </ul>
    `,

        leadership: `
      <h2>📁 Leadership Experience</h2>
      <p>This folder highlights </p>
      <ul>
        <li>blah</li>
      </ul>
    `
    };

    content.innerHTML = folders[folderName];
}
