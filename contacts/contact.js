function sendMail(params) {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact-number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_b4fc85s";
  const tempalteID = "template_syysxz9";

  emailjs
    .send(serviceID, tempalteID, params)
    .then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contact-number").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => console.log(err));
}

let eventHandler = document.getElementById("button-submit");
eventHandler.addEventListener("click", sendMail);

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="button btn-close btn-close-dark" data-bs-dismiss="alert" aria-label="Close" id="button-submit">',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("button-submit");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Nice, you triggered this alert message!", "success");
  });
}
