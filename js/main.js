// Top
let carouselSlides = document.getElementById("carousel-top");
let carouselBtnLeft = document.getElementById("carTopBtnLeft");
let carouselBtnRight = document.getElementById("carTopBtnRight");
let carouselTopPosition = 0;
function carouselTopGoRight() {
  if (carouselTopPosition > 110) {
    carouselTopPosition -= 110;
    carouselSlides.style.translate = carouselTopPosition + "px";
    carouselBtnLeft.style.display = "flex";
    carouselBtnRight.style.display = "flex";
  } else {
    carouselBtnLeft.style.display = "flex";
    carouselBtnRight.style.display = "none";
  }
}
function carouselTopGoLeft() {
  if (carouselTopPosition < 870) {
    carouselTopPosition += 110;
    carouselSlides.style.translate = carouselTopPosition + "px";
    carouselBtnLeft.style.display = "flex";
    carouselBtnRight.style.display = "flex";
  } else {
    carouselBtnLeft.style.display = "none";
    carouselBtnRight.style.display = "flex";
  }
}

// Offer
let carouselOffersSlides = document.getElementById("carousel-offers");
let offersBtnLeft = document.getElementById("carOffBtnLeft");
let offersBtnRight = document.getElementById("carOffBtnRight");
let carouselOfferPosition = 0;
function carouselOffGoRight() {
  carouselOfferPosition -= 150;
  carouselOffersSlides.style.translate = carouselOfferPosition + "px";
  offersBtnLeft.style.display = "flex";
  offersBtnRight.style.display = "flex";
  if (carouselOfferPosition - 150 < 0) {
    offersBtnLeft.style.display = "flex";
    offersBtnRight.style.display = "none";
  }
}
function carouselOffGoLeft() {
  carouselOfferPosition += 150;
  carouselOffersSlides.style.translate = carouselOfferPosition + "px";
  offersBtnLeft.style.display = "flex";
  offersBtnRight.style.display = "flex";
  if (carouselOfferPosition + 150 > 850) {
    offersBtnLeft.style.display = "none";
    offersBtnRight.style.display = "flex";
  }
}

// Brands
let carouselBrandsSlides = document.getElementById("carousel-brands");
let brandsBtnLeft = document.getElementById("carBrandsBtnLeft");
let brandsBtnRight = document.getElementById("carBrandsBtnRight");
let carouselBrandsPosition = 0;
function carouselBrandsGoRight() {
  carouselBrandsPosition -= 100;
  carouselBrandsSlides.style.translate = carouselBrandsPosition + "px";
  brandsBtnLeft.style.display = "flex";
  brandsBtnRight.style.display = "flex";
  if (carouselBrandsPosition - 100 < 0) {
    brandsBtnLeft.style.display = "flex";
    brandsBtnRight.style.display = "none";
    // alert('skdskjhd')
  }
}
function carouselBrandsGoLeft() {
  carouselBrandsPosition += 100;
  carouselBrandsSlides.style.translate = carouselBrandsPosition + "px";
  brandsBtnLeft.style.display = "flex";
  brandsBtnRight.style.display = "flex";
  if (carouselBrandsPosition + 100 > 1500) {
    brandsBtnLeft.style.display = "none";
    brandsBtnRight.style.display = "flex";
  }
}

// Most Sells
let mostSellChapters = document.getElementById("most-sells-main");
let mostSellsBtnLeft = document.getElementById("mostSellsBtnLeft");
let mostSellsBtnRight = document.getElementById("mostSellsBtnRight");
let mostSellsPosition = 0;
function mostSellsGoRight() {
  mostSellsPosition -= 300;
  mostSellChapters.style.translate = mostSellsPosition + "px";
  mostSellsBtnLeft.style.display = "flex";
  mostSellsBtnRight.style.display = "flex";
  if (mostSellsPosition - 100 < 0) {
    mostSellsBtnLeft.style.display = "flex";
    mostSellsBtnRight.style.display = "none";
    // alert('skdskjhd')
  }
}
function mostSellsGoLeft() {
  mostSellsPosition += 300;
  mostSellChapters.style.translate = mostSellsPosition + "px";
  mostSellsBtnLeft.style.display = "flex";
  mostSellsBtnRight.style.display = "flex";
  if (mostSellsPosition + 100 > 1000) {
    mostSellsBtnLeft.style.display = "none";
    mostSellsBtnRight.style.display = "flex";
  }
}

// Most Trends
let mostTrendChapters = document.getElementById("most-trends-main");
let mostTrendsBtnLeft = document.getElementById("mostTrendsBtnLeft");
let mostTrendsBtnRight = document.getElementById("mostTrendsBtnRight");
let mostTrendsPosition = 0;
function mostTrendsGoRight() {
  mostTrendsPosition -= 300;
  mostTrendChapters.style.translate = mostTrendsPosition + "px";
  mostTrendsBtnLeft.style.display = "flex";
  mostTrendsBtnRight.style.display = "flex";
  if (mostTrendsPosition - 100 < 0) {
    mostTrendsBtnLeft.style.display = "flex";
    mostTrendsBtnRight.style.display = "none";
    // alert('skdskjhd')
  }
}
function mostTrendsGoLeft() {
  mostTrendsPosition += 300;
  mostTrendChapters.style.translate = mostTrendsPosition + "px";
  mostTrendsBtnLeft.style.display = "flex";
  mostTrendsBtnRight.style.display = "flex";
  if (mostTrendsPosition + 100 > 1000) {
    mostTrendsBtnLeft.style.display = "none";
    mostTrendsBtnRight.style.display = "flex";
  }
}

// Slider
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider-slides");
let sliderBtnRight = document.getElementById("sliderBtnRight");
let sliderBtnLeft = document.getElementById("sliderBtnLeft");
let currentIndex = 0;
const totalSlides = slides.length;
let isDragging = false;
let startX, currentX;

function sliderGoRight() {
  if (currentIndex + 1 > 5) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  updateSlides();
}
function sliderGoLeft() {
  if (currentIndex - 1 < 0) {
    currentIndex = 5;
  } else {
    currentIndex -= 1;
  }
  updateSlides();
}

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  console.log("downe");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  currentX = e.pageX;
  const diffX = startX - currentX;

  console.log("movee");
  updateSlides();
  if (diffX > 50) {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
    isDragging = false;
  } else if (diffX < -50) {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
    isDragging = false;
  }
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
});

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.left = `${(index - currentIndex) * 100}%`;
  });
}

setInterval(() => {
  if (currentIndex + 1 > 5) {
    currentIndex = 0;
  }
  currentIndex += 1;
  slides.forEach((slide, index) => {
    slide.style.left = `${(index - currentIndex) * 100}%`;
  });
}, 3000);