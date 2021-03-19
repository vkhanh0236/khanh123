if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
var cartItems = document.getElementsByClassName("product-section")[0]; // truy cập vào thẻ có class :product-section ở vị trí đầu
var cartItem = cartItems.getElementsByClassName("section-item"); // truy cập vào thẻ section-item trong thẻ product-section

function ready() {

  updateprice();

  // tăng số lượng sản phẩm
  $('.inc').click(function () {
    if ($(this).prev().val() > 0) {
      $(this).prev().val(+$(this).prev().val() + 1);
      updateprice()
    }
  });

  // giảm số lượng sản phẩm
  $('.dec').click(function () {
    if ($(this).next().val() > 1) {
      $(this).next().val(+$(this).next().val() - 1);
      updateprice()
    }
  });

  // thêm hàm thay đổi khi thay đổi số lượng sản phẩm
  var quantityInputs = document.getElementsByClassName("quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }

  // js thêm sự kiện click xóa item
  var removeCartItemButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]; // khai báo biến button khi class 'delete' ở vị trí i
    button.addEventListener("click", removeCartItem); // thêm sự kiện click và chạy hàm

  }

  // xóa toàn bộ sản phẩm
  $('.reset-cart').click(function () {
    var r = confirm('ban co muon xoa gio hang khong')
    if (r == true) {
      $('.section-item').remove()
      $('#cart-empty').css('display', 'block')
      $('#cart-number').css('display', 'none')
      $('#cart-number').text('0')
      updateprice()
    }
  })
  // số lượng sản phẩm ở giỏ hàng
}

// xóa từng sản phẩm
function removeCartItem(event) {
  var buttonClicked = event.target; // thêm sự kiện cụ thể cho biến event
  var name = buttonClicked.parentElement.parentElement.firstElementChild.firstElementChild.innerText
  var r = confirm(`Bạn có muốn xoá sản phẩm ${name} không ?`)
  if (r == true) {
    buttonClicked.parentElement.parentElement.parentElement.remove(); // xóa từng sản phẩm
    var numberCart = document.getElementById('cart-number').innerText
    document.getElementById('cart-number').innerText = --numberCart
    updateprice();

    if (cartItems.children.length < 4) {
      document.getElementById("cart-empty").style.display = "block"
      $('#cart-number').css('display', 'none')
    }
  }
}

// thay đổi số lượng 
function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 1) {
    input.value = 1;
  }
  updateprice();
}

// js price
function updateprice() {
  var total = 0
  if ($('body').width() <= 768) {
    for (var i = 0; i < cartItem.length; i++) {
      var item = cartItem[i];
      var itemmobile = item.getElementsByClassName('item-mobile')[0];
      var priceItem = itemmobile.getElementsByClassName("price-sale")[0]; // truy cập thẻ có class price-sale ở vị trí đầu trong thẻ price-sale
      var price = priceItem.innerText.replace("đ", ""); // giá tiền mỗi sản phẩm
      var orderItem = itemmobile.getElementsByClassName("order-item")[0]; // truy cập thẻ có class order-item ở vị trí đầu trong thẻ section-item ở vị trí i
      var quantityItem = orderItem.getElementsByClassName("quantity")[0]; // truy cập thẻ có class quantity ở vị trí đầu tiên trong thẻ order-item
      var quantity = quantityItem.value; // số lượng sản phẩm
      total = total + (price * quantity); // tổng số tiền của từng sản phẩm (giá tiền * số lượng)
    }
  } else {
    for (var i = 0; i < cartItem.length; i++) {
      var item = cartItem[i]; // thẻ section-item ở vị trí i
      var priceI = item.getElementsByClassName("item-price")[0]; // truy cập thẻ có class item-price ở vị trí đầu trong thẻ section-item ở vị trí i
      var priceItem = priceI.getElementsByClassName("price-sale")[0]; // truy cập thẻ có class price-sale ở vị trí đầu trong thẻ price-sale
      var price = priceItem.innerText.replace("đ", ""); // giá tiền mỗi sản phẩm
      var orderItem = priceI.getElementsByClassName("order-item")[0]; // truy cập thẻ có class order-item ở vị trí đầu trong thẻ section-item ở vị trí i
      var quantityItem = orderItem.getElementsByClassName("quantity")[0]; // truy cập thẻ có class quantity ở vị trí đầu tiên trong thẻ order-item
      var quantity = quantityItem.value; // số lượng sản phẩm
      total = total + (price * quantity); // tổng số tiền của từng sản phẩm (giá tiền * số lượng)
    }
  }

  if (total > 0) {
    total = total.toFixed(3); // hiện 3 phần tử sau dấu .
    document.getElementsByClassName("cart-subtotal-price")[0].innerText =
      total + "đ"; //tổng giá tiền tất cả sản phẩm
    document.getElementsByClassName('cart-discount-value')[0].innerText = "-" + total / 100 + '0đ'

    document.getElementsByClassName('cart-grandtotal-price')[0].innerText = (total - total / 100 + 1).toFixed(3) + 'đ'
  } else {
    document.getElementsByClassName("cart-subtotal-price")[0].innerText =
      0 + "đ";
    document.getElementsByClassName('cart-discount-value')[0].innerText = "-" + '0đ'
    document.getElementsByClassName('cart-shipping-price')[0].innerText = '0đ'
    document.getElementsByClassName('cart-grandtotal-price')[0].innerText = '0đ'
  }
}




