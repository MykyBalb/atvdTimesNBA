window.onload = function () {
  document
    .getElementById("atlanta-hawks-copy")
    .addEventListener("click", clipboardCopy);
};
async function clipboardCopy() {
  let text = document.querySelector("#atlanta-hawks").innerHTML;
  await navigator.clipboard.writeText(text);
  console.log("Texto copiado para a área de transferência: " + text);
}
