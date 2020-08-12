let card_imgs = Array();
var slides = document.getElementsByClassName('img-spree-gradient');
for(const slide of slides) { slide.childNodes.forEach((i)=>{if (i.nodeName !== "#text") {card_imgs.push(i)}}) }

console.log(card_imgs)

for(const slideImg of card_imgs) {}