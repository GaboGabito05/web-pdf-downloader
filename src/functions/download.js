if (typeof window !== "undefined") {
  import("html2pdf.js")
    .then((html2pdf) => {
      function downloadPageAsPDF(url) {
        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            const element = document.createElement("div");
            element.innerHTML = html;
            html2pdf().from(element).save();
          })
          .catch((error) => {
            console.error("Error fetching the URL:", error);
          });
      }

      document.addEventListener("DOMContentLoaded", () => {
        const downloadButton = document.getElementById("button-download");
        const urlInput = document.getElementById("url-input");

        if (downloadButton && urlInput) {
          downloadButton.addEventListener("click", () => {
            const url = urlInput.value;
            downloadPageAsPDF(url);
          });
        }
      });
    })
    .catch((error) => {
      console.error("Error loading html2pdf.js:", error);
    });
}
