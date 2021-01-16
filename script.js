const containerImage = document.querySelector('.images');

let numOfClicks = 0;
const choice = [];
containerImage.addEventListener('click', function (e) {
  const clicked = e.target;

  numOfClicks++;
  if (!clicked.classList.contains('image') || numOfClicks > 2) return;

  clicked.querySelector('.img').style.zIndex = 1;
  choice.push(clicked);

  if (numOfClicks === 2) showResults();
});

const showResults = function () {
  const imgSrc = choice.map((ch) => ch.querySelector('.img').src);

  if (imgSrc[0] === imgSrc[1]) {
    setTimeout(() => {
      alert('you won 😎😎!!');
    }, 500);
  } else
    setTimeout(() => {
      alert('you lost 😥😥!!');
    }, 500);
  //   const classNames = choice.map((ch) => {
  //     return ch.querySelector('.img').className.split(' ')[1];
  //   });
  //   if (classNames[0] === classNames[1])
  //     setTimeout(() => {
  //       alert('you won!!');
  //     }, 500);
};

document.querySelector('.new-game').addEventListener('click', function () {
  location.reload();
});
