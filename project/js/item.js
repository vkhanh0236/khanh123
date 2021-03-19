if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
function ready() {
    $('.inc').click(function () {
        if ($(this).prev().val() > 0) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });

    $('.dec').click(function () {
        if ($(this).next().val() > 1) {
            $(this).next().val(+$(this).next().val() - 1);
        }
    });

    $('.product-item-addtocart').click(function () {
        $('.modall').append(`<div class="alert alert-danger" role="alert">Đã thêm BimBim o'sta cị kim chi vào giỏ hàng </div > `)
        setTimeout(function () {
            $('.modall').empty()
        }, 3000)
    })

    $('.product-item-addtocart').click(function () {
        var numberCart = document.getElementById('cart-number').innerText
        document.getElementById('cart-number').innerText = ++numberCart
        if (numberCart > 0) {
            document.getElementById('cart-number').style.display = 'block'

        }
    })
}

