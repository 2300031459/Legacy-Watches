const button = document.querySelector('.right-arrow');

const images = [
    { selector: '.storeimage', src: 'second-images/storeimg1.png', alt: 'Next1' },
    { selector: '.store1', hiddenSelector: '.store1-1', hiddenSrc: 'second-images/storeimg1-1.jpg' },
    { selector: '.store2', hiddenSelector: '.store1-2', hiddenSrc: 'second-images/storeimg1-2.jpg' },
    { selector: '.store3', hiddenSelector: '.store1-3', hiddenSrc: 'second-images/storeimg1-3.jpg' },
    { selector: '.store4', hiddenSelector: '.store1-4', hiddenSrc: 'second-images/storeimg1-4.jpg' },
];

button.addEventListener('click', () => {
    images.forEach((image) => {
        const mainImage = document.querySelector(image.selector);
        const hiddenImage = document.querySelector(image.hiddenSelector);

        if (mainImage) {
            mainImage.src = image.src || mainImage.src;
            mainImage.alt = image.alt || mainImage.alt;
        }

        if (hiddenImage) {
            hiddenImage.src = image.hiddenSrc || hiddenImage.src;
            hiddenImage.style.display = 'block';
        }
    });
});

// Details
document.querySelector('.right-arrow').addEventListener('click', () => {

    document.querySelector('.circle').style.transition = 'none';


    document.querySelector('.circle').classList.add('new-position-circle');
    document.querySelector('.circle1').classList.add('new-position-circle1');


      document.querySelector('.navline').classList.add('new-position-navline');
      document.querySelector('.navline2').classList.add('new-position-navline2');
      document.querySelector('.navline1').classList.add('new-position-navline1');

    document.querySelector('.lthr-detail').classList.add('new-position-lthr');
    document.querySelector('.steel-detail').classList.add('new-position-steel');


    document.querySelector('.lthr-detail').textContent = 'New Leather';
    document.querySelector('.steel-detail').textContent = 'Hello';
  });

  // Like

  function toggleLike() {
    const likeDiv = document.querySelector(".like");
    const likeIcon = likeDiv.querySelector("svg");

    const isLiked = likeIcon.getAttribute("data-liked") === "true";

    if (isLiked) {

      likeIcon.innerHTML = `
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
      `;
      likeIcon.style.fill = "black";
      likeIcon.setAttribute("data-liked", "false");
    } else {

      likeIcon.innerHTML = `
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
      `;
      likeIcon.style.fill = "#ff0000";
      likeIcon.setAttribute("data-liked", "true");
    }
  }

  //Save

  function toggleSave() {
    const saveDiv = document.querySelector(".save");
    const saveIcon = saveDiv.querySelector("svg");

    const isSaved = saveIcon.getAttribute("data-saved") === "true";

    if (isSaved) {

      saveIcon.innerHTML = `
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
      `;
      saveIcon.style.fill = "#000000";
      saveIcon.setAttribute("data-saved", "false");
    } else {

      saveIcon.innerHTML = `
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/>
      `;
      saveIcon.style.fill = "#ff0000";
      saveIcon.setAttribute("data-saved", "true");
    }
  }