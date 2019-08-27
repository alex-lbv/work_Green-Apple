var tradein = document.querySelector(".tradein-calc");
if (tradein !== null) {
  var selectModel = document.querySelectorAll(".js-choice-model");
  var storage = document.querySelectorAll(".js-choice-storage");
  var discount = document.querySelector(".tradein-calc__discount");
  var totalPrice = document.querySelector(".tradein-calc__total");
  var tablePrices = document.querySelectorAll(".tradein-calc__chosen");
  var fieldPrices = document.querySelectorAll(".tradein-calc__field");

  var oldPrice = document.querySelector(".tradein-calc__table-old .tradein-calc__chosen--active").dataset.price;
  var newPrice = document.querySelector(".tradein-calc__table-new .tradein-calc__chosen--active").dataset.price;

  discount.innerHTML = "" + oldPrice + "";
  totalPrice.innerHTML = "" + (newPrice - oldPrice) + "";

  tablePrices.forEach(function(price) {
    price.addEventListener("click", function() {
      if (this.classList.contains("tradein-calc__chosen--active")) return;
      removeActive(price.parentElement.parentElement.parentElement);
      this.classList.add("tradein-calc__chosen--active");
      oldPrice = document.querySelector(
        ".tradein-calc__table-old .tradein-calc__chosen--active"
      ).dataset.price;
      newPrice = document.querySelector(
        ".tradein-calc__table-new .tradein-calc__chosen--active"
      ).dataset.price;
      this.parentElement.parentElement.classList.remove('tradein-calc__mob-drop--visible');
      this.parentElement.parentElement.previousSibling.previousSibling.innerHTML = this.innerHTML;
      
      if (this.dataset.price !== undefined) {
        discount.innerHTML = "" + oldPrice + "";
        totalPrice.innerHTML = "" + (newPrice - oldPrice) + "";
      } 
    });
  });

  fieldPrices.forEach(function(price) {
    price.addEventListener("click", function() {
      if(document.querySelector('.tradein-calc__mob-drop--visible') !== null) {
        document.querySelector('.tradein-calc__mob-drop--visible').classList.remove('tradein-calc__mob-drop--visible');
      }
      this.nextSibling.nextSibling.classList.add('tradein-calc__mob-drop--visible')
    });
  });

  function removeActive(table) {
    table
      .querySelectorAll(".tradein-calc__chosen--active")
      .forEach(function(el) {
        el.classList.remove("tradein-calc__chosen--active");
      });
  }

  function setActiveEl(table) {
    var counter = 0;
    var field = table.querySelector('.tradein-calc__table-price').previousSibling.previousSibling;
    table.querySelector('.tradein-calc__table-price .tradein-calc__chosen--active').classList.remove('tradein-calc__chosen--active')
    table.querySelectorAll('.tradein-calc__table-price li').forEach(function(li){
      if(li.style.display !== 'none' && counter === 0) {
        li.children[0].classList.add('tradein-calc__chosen--active');
        field.innerHTML = li.children[0].innerHTML;
        counter++;
      }
    })
  }

  UIkit.util.on('.tradein-calc__col-inner', 'afterFilter', function () {
    setActiveEl(this);
    oldPrice = document.querySelector(
      ".tradein-calc__table-old .tradein-calc__chosen--active"
    ).dataset.price;
    newPrice = document.querySelector(
      ".tradein-calc__table-new .tradein-calc__chosen--active"
    ).dataset.price;
    discount.innerHTML = "" + oldPrice + "";
    totalPrice.innerHTML = "" + (newPrice - oldPrice) + "";
  });
}