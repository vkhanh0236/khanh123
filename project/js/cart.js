if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
var cartItems = document.getElementsByClassName("product-section")[0]; // truy cập vào thẻ có class :product-section ở vị trí đầu
var cartItem = cartItems.getElementsByClassName("section-item"); // truy cập vào thẻ section-item trong thẻ product-section
function ready() {
  var quantityInputs = document.getElementsByClassName("quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }
  // js xóa item
  var removeCartItemButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]; // khai báo biến button khi class 'delete' ở vị trí i
    button.addEventListener("click", removeCartItem); // thêm sự kiện click và chạy hàm
  }
  
}
function removeCartItem(event) {
  var buttonClicked = event.target; // thêm sự kiện cụ thể cho biến event
  buttonClicked.parentElement.parentElement.parentElement.remove(); // xóa từng sản phẩm
  updateprice();
}

function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateprice();
}

// js price
function updateprice() {
  var total = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var item = cartItem[i]; // thẻ section-item ở vị trí i
    var priceI = item.getElementsByClassName("item-price")[0]; // truy cập thẻ có class item-price ở vị trí đầu trong thẻ section-item ở vị trí i
    var priceItem = priceI.getElementsByClassName("price-sale")[0]; // truy cập thẻ có class price-sale ở vị trí đầu trong thẻ price-sale
    var price = priceItem.innerText.replace("đ", ""); // giá tiền mỗi sản phẩm
    var orderItem = priceI.getElementsByClassName("order-item")[0]; // truy cập thẻ có class order-item ở vị trí đầu trong thẻ section-item ở vị trí i
    var quantityItem = orderItem.getElementsByClassName("quantity")[0]; // truy cập thẻ có class quantity ở vị trí đầu tiên trong thẻ order-item
    var quantity = quantityItem.value; // số lượng sản phẩm
    total = total + price * quantity; // tổng số tiền của từng sản phẩm (giá tiền * số lượng)
  }
  if (total <= 0) {
    document.getElementsByClassName("cart-subtotal-price")[0].innerText =
      0 + "đ";
  } else {
    total = total.toFixed(3); // hiện 3 phần tử sau dấu .
    document.getElementsByClassName("cart-subtotal-price")[0].innerText =
      total + "đ"; //tổng giá tiền tất cả sản phẩm
  }
}

$('.dec').on('click' , function(){
    quantity = $('.quantity').val()
    $('.quantity').val(quantity - 1)
})
$('.inc').on('click' , function(){
    quantity = $('.quantity').val()
    $('.quantity').val(++quantity)
})