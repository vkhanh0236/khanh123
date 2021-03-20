if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    
    $('.product-item-addtocart').click(function () {
        var numberCart = document.getElementById('cart-number').innerText
        document.getElementById('cart-number').innerText = ++numberCart
        if (numberCart > 0 ) {
            document.getElementById('cart-number').style.display = 'block'
        }
         
    })

    $('.product-item-addtocart').click(function (event) {
        var buttonClicked = event.target ;
        $(this).off('click')
        var name = buttonClicked.parentElement.firstElementChild.lastElementChild.innerText
        $('.modall').append(`<div class="alert alert-danger" role="alert">Đã thêm ${name} vào giỏ hàng </div > `)
        setTimeout(function () {
            $('.modall').empty()
        }, 3000)
      
      })
}