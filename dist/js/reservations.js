class FormValidation{constructor(){this.form=document.querySelector("form"),this.form.addEventListener("submit",this.handleForm)}handleForm(a){a.preventDefault(),this.inputs=[...document.querySelectorAll("input"),...document.querySelectorAll("select")];let b=this.inputs.filter(a=>""!=a.value);""!==this.inputs[1].value&&b.push(this.inputs[1]),b.length>=this.inputs.length?formValidation.updateBorder("green",b):formValidation.updateBorder("red",b)}updateBorder(a,b){b.forEach(b=>{b.classList.contains("btn")||(b.style.borderBottom=`1px solid ${a}`)}),this.message=document.querySelector("h3"),"green"==a&&(this.message.style.opacity="1")}}const formValidation=new FormValidation;