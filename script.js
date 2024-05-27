const initSlide = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
 
    // slide image
    slideButtons.forEach(button => { 
        button.addEventListener("click", () => {
            const direction = button.id ==="prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientwidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
       });
   });
    const handleSlideButton = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}

const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
}

imageList.addEventListener("scroll", () => {
    handleSlideButtonScroll();
    updateScrollThumbPosition();
  });
}

window.addEventListener("load", initSlider);

// footer
let contactArr = [
    {
      //Details for Quick Links
      name: "HOME",
      link: "index.html",},
    { name: "ABOUT",
      link: "index.html", },
    { name: "COURSES",
      link: "index.html", },
    { name: "ADMISSIONS",
      link: "index.html",},
    { name: "CONTACT",
      link: "index.html",},
    {
      //Details for Follow Us
      name: "Facebook",
      link: "index.html",},
    { name: "X",
      link: "index.html", },
    { name: "LinkedIn",
      link: "index.html", },
    { name: "Instagram",
       link: "index.html", },
    {
      //Details for Contact Us
      name: "+254 739 944 882",
      link: "index.html", },
    { name: "+254 739 944 882",
      link: "index.html",},
    { name: "info@isteducation.com",
      link: "index.html",},
    { name: "Westpoint building, 6th floor,Mpaka Road,Westlands,Nairobi",
     link: "index.html",},
  ];
  const links = (where, start, end) => {
    for (let i = start; i <= end; i++) {
      const info = contactArr[i];
      let li = document.createElement("li");
      let a = document.createElement("a");
  
      where.appendChild(li);
      li.appendChild(a);
  
      li.innerHTML = `<li><a href='${info.link}'>${info.name}</a></li>`;
    }
  };
  links(navBtns, 0, 5);
  links(quick, 0, 4);
  links(follow, 4, 6);
  links(contact, 4, 12);