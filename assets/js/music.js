const music = document.getElementsById("jsMusic");
const iframe = document.getElementsById("jsIframe");

function musicHandleClick() {
  if (iframe.style.display == "none") {
    iframe.style.display = "block";
  } else {
    iframe.style.display = "none";
  }
}

music.addEventListener("click", musicHandleClick, false);
