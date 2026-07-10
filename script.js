const shareBtn = document.getElementById("share-button");
const writerInfoContainer = document.querySelector(".writer-info-container");

const firstInnerContainer = document.querySelector(".first-inner-container");
const mobileLinksInnerContainer = document.querySelector(
  ".mobile-links-inner-container",
);
const desktopLinksInnerContainer = document.querySelector(
  ".desktop-links-inner-container",
);

let linksVisible = false;

function showSocialLinks() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    if (linksVisible) {
      writerInfoContainer.classList.remove("dark-background");
      firstInnerContainer.classList.remove("hidden");
      mobileLinksInnerContainer.classList.add("hidden");
      linksVisible = false;
    } else {
      writerInfoContainer.classList.add("dark-background");
      firstInnerContainer.classList.add("hidden");
      mobileLinksInnerContainer.classList.remove("hidden");
      linksVisible = true;
    }
  } else {
    if (linksVisible) {
      desktopLinksInnerContainer.classList.add("hidden");
      linksVisible = false;
    } else {
      desktopLinksInnerContainer.classList.remove("hidden");
      linksVisible = true;
    }
  }
}

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600 && linksVisible) {
    desktopLinksInnerContainer.classList.add("hidden");
    writerInfoContainer.classList.add("dark-background");
    firstInnerContainer.classList.add("hidden");
    mobileLinksInnerContainer.classList.remove("hidden");

  } else if (screenWidth > 600 && linksVisible) {
    desktopLinksInnerContainer.classList.remove("hidden");
    writerInfoContainer.classList.remove("dark-background");
    firstInnerContainer.classList.remove("hidden");
    mobileLinksInnerContainer.classList.add("hidden");
  }
});

shareBtn.addEventListener("click", showSocialLinks);
