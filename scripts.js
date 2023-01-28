const productImage = document.querySelector('.product-image');
const radioButtons = document.querySelectorAll('.product-options input[type=radio]');

radioButtons.forEach(button => {
  button.addEventListener('click', event => {
    switch (event.target.value) {
      case "one":
        productImage.style.backgroundImage = "url('./images/1.png')";
        break;
      case "two":
        productImage.style.backgroundImage = "url('./images/2.png')";
        break;
      case "three":
        productImage.style.backgroundImage = "url('./images/3.png')";
        break;
      case "four":
        productImage.style.backgroundImage = "url('./images/4.png')";
        break;
      case "five":
        productImage.style.backgroundImage = "url('./images/5.png')";
        break;
    }
  });
});