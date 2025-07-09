const shareButton = document.querySelector(".article-preview__share-icon");

shareButton.addEventListener("click", () => {
  const isPresent = shareButton.classList.toggle("active");
  const wrapperElement = document.querySelector(
    ".article-preview__share-socials-wrapper"
  );

  if (isPresent) {
    wrapperElement.style.display = "block";
    shareButton.innerHTML = `<img
                src="./images/icon-share-alt.svg"
                alt="icon-share-alt"
                width="15"
                height="13"
              />`;
    shareButton.style.backgroundColor = "#6e8098";
  } else {
    wrapperElement.style.display = "none";
    shareButton.innerHTML = `<img
                src="./images/icon-share.svg"
                alt="icon-share"
                width="15"
                height="13"
              />`;
    shareButton.style.backgroundColor = "#ecf2f8";
  }
});
