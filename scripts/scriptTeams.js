window.onload = function () {
  document
    .getElementById("atlanta-hawks-copy")
    .addEventListener("click", clipboardCopy);
};
async function clipboardCopy() {
  let text = document.querySelector("#atlanta-hawks").innerHTML;
  await navigator.clipboard.writeText(text);
  console.log("Texto copiado para a área de transferência: " + text);

  const img = document.querySelector('img.jes');
  if (img) {
    img.style.opacity = '1';
  }
  setTimeout(() => {
    if (img) {
      img.style.opacity = '0';
    }
  }, 500);
}
