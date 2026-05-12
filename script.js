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
        <li>Worked in a professional corporate environment</li>
        <li>Supported apprentice onboarding and events</li>
        <li>Helped create organized materials and resources</li>
        <li>Built communication and workplace skills</li>
      </ul>
    `,

        marketing: `
      <h2>📁 Marketing Experience</h2>
      <p>This folder shows my experience with communication, branding, and content.</p>
      <ul>
        <li>Created professional messages and announcements</li>
        <li>Helped organize marketing-related materials</li>
        <li>Worked on presentations and visual layouts</li>
        <li>Practiced making information clear and engaging</li>
      </ul>
    `,

        tech: `
      <h2>📁 Tech Skills</h2>
      <p>This folder includes the technical skills I have been building.</p>
      <ul>
        <li>HTML, CSS, and JavaScript</li>
        <li>Website design and responsive layouts</li>
        <li>GitHub and project organization</li>
        <li>Experience with tools like VS Code and Phoenix Code</li>
      </ul>
    `,

        leadership: `
      <h2>📁 Leadership Experience</h2>
      <p>This folder highlights moments where I supported and guided others.</p>
      <ul>
        <li>Helped mentor newer apprentices</li>
        <li>Supported group activities and events</li>
        <li>Practiced professional communication</li>
        <li>Built confidence through teamwork and responsibility</li>
      </ul>
    `
    };

    content.innerHTML = folders[folderName];
}
s;
