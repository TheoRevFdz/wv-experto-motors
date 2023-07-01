const inputs = document.querySelectorAll("input");
const textArea = document.getElementById("message");
const contMessage = document.getElementById("contMessage");
const frmContact = document.getElementById("frmContact");

const patterns = {
  name: /^[a-z]{3,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{9}$/,
  message: /^[a-z0-9\s]{3,120}$/,
};

const validate = (field, regex) => {
  const valid = regex.test(field.value);
  if (valid) {
    field.className = "form-control is-valid";
  } else {
    field.className = "form-control is-invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

textArea.addEventListener("keyup", (e) => {
  const { value } = e.target;
  if (value.length < 3 || value.length > 120) {
    contMessage.className = "invalid-feedback";
  } else {
    contMessage.className = "valid-feedback";
  }
  contMessage.innerText = `${value.length}/120`;
  validate(e.target, patterns[e.target.attributes.name.value]);
});

frmContact;
addEventListener("submit", (e) => {
  e.preventDefault();
  $("#successModal").modal("show");
});

const closeModal = () => {
  console.log("close modal!");
  $("#successModal").modal("hide");
};
