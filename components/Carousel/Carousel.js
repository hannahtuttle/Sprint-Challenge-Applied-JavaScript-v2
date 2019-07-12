/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')

carouselContainer.appendChild(carousel("./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"))


function carousel (image1, image2, image3, image4) {

  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const rightButton = document.createElement('div')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  carousel.appendChild(leftButton)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightButton)

  img1.src = image1
  img2.src = image2
  img3.src = image3
  img4.src = image4

  let slideIndex = 0;
  showSlides();
  
  // function showSlides() {
  //   var i;
  //   ;
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none"; 
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1} 
  //   slides[slideIndex-1].style.display = "block"; 
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // }

  return carousel

}

