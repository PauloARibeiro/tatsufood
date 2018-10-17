// NEWSLETTER
class NewsLetter{
  constructor(){
    this.form = document.querySelector('.content .newletter form');
    this.form.addEventListener('submit', this.handleForm);
  }

  handleForm(e){
    e.preventDefault();
    newsLetter.form.style.marginTop = '15px';
    newsLetter.form.innerHTML = "You'll be receiving your first newsletter shortly.";
  }
}

const newsLetter = new NewsLetter;