const maxPics = 7;
const maxCards = 5;

const swiper = document.querySelector('#swiper');

const imgUrls = [
   './img/gallery/me1.jpeg',
   './img/gallery/hockey.jpeg',
   './img/gallery/skating.jpeg',
   './img/gallery/me2.jpeg',
   './img/gallery/painting.jpeg',
   './img/gallery/me3.jpeg',
   './img/gallery/mun.jpeg',
];

//
let cardCount = 0;

//functions

function appendNewCard() {
   const card = new Card ({
      imageUrl: imgUrls[cardCount%maxPics],
      onDismiss: appendNewCard
   });
   // card.element.style.setProperty('--i',cardCount%5);
   swiper.append(card.element);
   cardCount++;

   const cards = swiper.querySelectorAll('.card:not(.dismissing');
   cards.forEach((card, index) => {
      card.style.setProperty('--i', index);
   });
}

//first 5 cards
for (let i=0; i<maxCards; i++) {
   appendNewCard();
}