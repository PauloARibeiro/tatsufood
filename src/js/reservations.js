class FormValidation {
  constructor() {
    this.form = document.querySelector("form");
    this.form.addEventListener("submit", this.handleForm);
  }

  handleForm(e) {
    e.preventDefault();
    // JOINS ALL INPUTS AND SELECTS INTO ONE ARRAY
    this.inputs = [
      ...document.querySelectorAll("input"),
      ...document.querySelectorAll("select")
    ];

    // THIS WILL CHECK IF THE INPUTS ARE NOT EMPY
    let result = this.inputs.filter(input => input.value != "");

    // THIS WILL CHECK THE DATE INPUT AND  SEE IF IT'S NOT EMPTY
    if (this.inputs[1].value !== "") result.push(this.inputs[1]);

    // IF ALL INPUTS ARE FILED GIVE THEM A GREEN BORDER IF NOT GIVE THEM A RED BORDER
    result.length >= this.inputs.length
      ? formValidation.updateBorder("green", result)
      : formValidation.updateBorder("red", result);
  }

  updateBorder(value, result) {
    // WILL LOOP THROUGH ALL THE INPUTS AND GIVE THE BORDER COLOR
    result.forEach(input => {
      // IF ONE OF THE INPUTS HAPPENS TO BE A BUTTON DO NOT APPLY ANY STYLES
      if (!input.classList.contains("btn"))
        input.style.borderBottom = `1px solid ${value}`;
    });

    this.message = document.querySelector("h3");
    if (value == "green") this.message.style.opacity = "1";
  }
}

const formValidation = new FormValidation;