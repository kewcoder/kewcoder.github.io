
document.addEventListener("DOMContentLoaded", function(event) { 
  startMultiCaseStudy()
});

// if (document.querySelector(".siema").length) {
  // extend a Siema class by two methods
  // addDots - to create a markup for dots
  // updateDots - to update classes on dots on change callback
const startMultiCaseStudy = () => {
  console.log('Starting multipage case study');
  
  class SiemaWithDots extends Siema {
    addDots() {
      // create a contnier for all dots
      // add a class 'dots' for styling reason
      this.dots = document.createElement("div");
      this.dots.classList.add("dots");

      // loop through slides to create a number of dots
      for (let i = 0; i < this.innerElements.length; i++) {
        // create a dot
        const dot = document.createElement("button");

        // add a class to dot
        dot.classList.add("dots__item");
        dot.setAttribute("aria-label","Slide "+(i+1) );
        // add an event handler to each of them
        dot.addEventListener("click", () => {
          this.goTo(i);
        });

        // append dot to a container for all of them
        this.dots.appendChild(dot);
      }

      // add the container full of dots after selector
      this.selector.parentNode.insertBefore(this.dots, this.selector.parentNode.querySelector('.zi-2.prev'));
    }

    updateDots() {
      // loop through all dots
      for (let i = 0; i < this.dots.querySelectorAll("button").length; i++) {
        // if current dot matches currentSlide prop, add a class to it, remove otherwise
        const addOrRemove = this.currentSlide === i ? "add" : "remove";
        const visited = this.currentSlide > i ? "add" : "remove";
        this.dots
          .querySelectorAll("button")
          [i].classList[addOrRemove]("dots__item--active");

        if(this.currentSlide == i){
          this.dots.querySelectorAll("button")[i].setAttribute("aria-current", true);
          document.querySelector(".slider > .siema > div >div:nth-child("+(i+1)+")").classList.remove("a11y-inactive");
          document.querySelector(".slider > .siema > div >div:nth-child("+(i+1)+")").classList.add("a11y-active");
          
        }else{
          this.dots.querySelectorAll("button")[i].setAttribute("aria-current", false);
          document.querySelector(".slider > .siema > div >div:nth-child("+(i+1)+")").classList.remove("a11y-active");
          document.querySelector(".slider > .siema > div >div:nth-child("+(i+1)+")").classList.add("a11y-inactive");
        }
          // Add middle circle to visited dots
        this.dots
          .querySelectorAll("button")
          [i].classList[visited]("dots__item--visited");
      }
    }

    updateControls() {
      const isFirst = this.currentSlide === 0 ? "add" : "remove";
      const isLast =
        this.currentSlide === this.innerElements.length - 1 ? "add" : "remove";

      document.querySelector(".prev").classList[isFirst]("controls--inactive");
      document.querySelector(".next").classList[isLast]("controls--inactive");
    }
  }


  // instantiate new extended Siema
  const mySiemaWithDots = new SiemaWithDots({
    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    duration: 500,
    // on init trigger method created above
    onInit: function () {
        this.addDots();
        this.updateDots();
      
    },

    onChange: function () {
        this.updateDots();
        this.updateControls();
      
    },
  });


  // Controls
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dots = document.querySelector(".dots");

  if (mySiemaWithDots.innerElements.length === 1) {
    // Disable controls if only one slide
    prev.remove();
    next.remove();
    dots.remove();
  } else {
    prev.addEventListener("click", () => mySiemaWithDots.prev());
    next.addEventListener("click", () => mySiemaWithDots.next());
  }


  // Modal Handling
  for (let i = 0; i < document.querySelector('.p_cards').children.length; i++) {
    const cards = [];
    const modals = [];

    cards[i] = document.querySelector(`#card-${i+1}`);  
    modals[i] = document.querySelector(`#answer-${i+1}`);

    const modalWrappers = document.querySelectorAll(".modal-wrapper");
    const closeBtns = document.querySelectorAll(".modal__btn");
    const markers = document.querySelectorAll(".marker");

    cards[i].addEventListener("click", () => {
      modals[i].classList.toggle("is-active");
      cards[i].children[2].style.opacity = 1;
    });

    for (const btn of closeBtns) {
      btn.addEventListener("click", () => {
        for (const wrapper of modalWrappers) {
          wrapper.classList.remove("is-active");
        }
        for (const marker of markers) {
          marker.style.opacity = 0;
        }
      });
    }
  }


  // Disable Siema on small screens
  if (screen.width <= 767) {
    mySiemaWithDots.destroy();
    document.querySelector('.siema > div').style.width = '100%';
    for (let i = 0; i < mySiemaWithDots.innerElements.length; i++) {
      mySiemaWithDots.innerElements[i].parentNode.style.float = 'initial';
      mySiemaWithDots.innerElements[i].parentNode.style.width = '100%';
    } 

  }
}

