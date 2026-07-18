const shareBtn = document.getElementById("share-button");
const writerInfoContainer = document.querySelector(".writer-info-container");

const drawersImage = document.getElementById("drawers-image");

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


function changeImageBorders() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth <= 600) {
    drawersImage.classList.remove("rounded-left-borders");
    drawersImage.classList.add("rounded-top-borders");
  } else if (screenWidth > 600) {
    drawersImage.classList.remove("rounded-top-borders");
    drawersImage.classList.add("rounded-left-borders");
  }
}

window.addEventListener("DOMContentLoaded", changeImageBorders);



window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;

  changeImageBorders();

  if (screenWidth <= 600) {
    drawersImage.classList.remove("rounded-left-borders");
    drawersImage.classList.add("rounded-top-borders");
  } else if (screenWidth > 600) {
    drawersImage.classList.remove("rounded-top-borders");
    drawersImage.classList.add("rounded-left-borders");
  }

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