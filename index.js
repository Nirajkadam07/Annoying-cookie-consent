const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
// const modalInner = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtnContainer = document.getElementById("modal-choice-btns");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  console.log("hovered");
  modalChoiceBtnContainer.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const userFullName = consentFormData.get("fullName");

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
      Uploading your data to the dark web...
    </p>
  </div>
  `;

  setTimeout(() => {
    // const uploadText = document.getElementById("uploadText");
    // uploadText.innerHTML = "Making the sale...";
    document.getElementById("upload-text").textContent = "Making the sale...";
  }, 1500);

  setTimeout(() => {
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${userFullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;

    modalCloseBtn.disabled = false;
  }, 3000);
});
