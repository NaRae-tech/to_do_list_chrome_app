const images = ["cat1.jpg","cat2.jpg","cat3.jpg","dog1.jpg","dog2.jpg","fox1.jpg","rabbit1.jpg"];
const chosenImamge = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.className = "animals";
bgImage.src=`img/${chosenImamge}`;

document.body.querySelector(".wrap").appendChild(bgImage);