// Toggle Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const searchMobileBtn = document.querySelector(".search-mobile-btn");
const middleSection = document.querySelector(".middle-section");

// Toggle sidebar on menu button click
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Toggle search bar on mobile
if (searchMobileBtn) {
  searchMobileBtn.addEventListener("click", () => {
    middleSection.classList.toggle("active");
  });
}

// Close search when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 640) {
    if (
      !middleSection.contains(e.target) &&
      !searchMobileBtn.contains(e.target)
    ) {
      middleSection.classList.remove("active");
    }
  }
});

// Video card interaction
const videoCards = document.querySelectorAll(".video-card");
videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Add your video play logic here
    console.log("Playing video...");
  });
});

// Search functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    console.log("Searching for:", query);
    // Add your search logic here
  }
}

// Notification button
const notificationBtn = document.querySelector(".notification-btn");
notificationBtn.addEventListener("click", () => {
  const count = document.querySelector(".notification-count");
  count.textContent = "0";
  count.style.opacity = "0.5";

  // Add your notification logic here
  console.log("Notifications cleared");
});

// Responsive adjustments
function handleResize() {
  if (window.innerWidth > 960) {
    sidebar.classList.add("active");
  } else {
    sidebar.classList.remove("active");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Initial check
