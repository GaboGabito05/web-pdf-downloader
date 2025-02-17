const downloadButton = document.getElementById("button-download");
const urlInput = document.getElementById("url-input");

downloadButton.addEventListener("click", () => {
  let url = urlInput.value;
  if (!url) {
    alert("Ingrese una URL válida");
    return;
  }

  let iframe = document.getElementById("pageFrame");
  iframe.src = url;
  iframe.onload = function () {
    html2pdf().from(iframe.contentDocument.body).save("pagina.pdf");
  };
  iframe.style.display = "block";
});
