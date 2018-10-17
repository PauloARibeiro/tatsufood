class NavBar{constructor(){this.navUl=document.querySelector("nav .container ul"),this.modal=document.querySelector(".modal"),this.hamburger=document.querySelector("#hamburger-holder #hamburger"),this.hamburger.addEventListener("click",()=>{this.toggleMobileMenu()}),this.isSelected=!1,window.onscroll=()=>{this.Scroll()}}toggleMobileMenu(){this.modal.appendChild(this.navUl),this.isSelected?this.hamburger.classList.remove("close"):this.hamburger.classList.add("close"),this.isSelected?setTimeout(()=>{this.modal.style.opacity="0",this.modal.style.zIndex="-998"},460):(this.modal.style.opacity="1",this.modal.style.zIndex="998"),setTimeout(()=>{this.isSelected?this.navUl.classList.add("slide"):this.navUl.classList.remove("slide")},150),this.isSelected=!this.isSelected}Scroll(){this.navBar=document.querySelector("nav"),this.navLi=this.navBar.querySelectorAll(".container ul li"),50<document.body.scrollTop||50<document.documentElement.scrollTop?(this.navBar.style.position="fixed",this.UpdatePadding("20px")):(this.navBar.style.position="relative",this.UpdatePadding("30px"))}UpdatePadding(a){this.navLi.forEach((b,c,d)=>{b.style.padding=`${a} 30px`,Object.is(d.length-1,c)&&(b.style.padding=`${a} 0px ${a} 20px`)})}}class MediaQueries{constructor(){this.about="/tatsufood/"===window.location.pathname||"/tatsufood/index.php"===window.location.pathname?document.querySelector(".content .about-us .container"):null,this.separator=document.querySelector(".separator"),this.contactHolder=document.querySelector(".content .contact .container"),this.contact=document.querySelector(".content .contact .container .info"),window.addEventListener("resize",()=>{this.UpdateSeparator()}),this.UpdateSeparator()}UpdateSeparator(){null!=this.about&&(this.separator.style.height=this.about.clientHeight-40+"px"),this.contactHolder.style.height=this.contact.clientHeight-30+"px"}}const mediaQueries=new MediaQueries,navBar=new NavBar;