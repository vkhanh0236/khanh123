// hiển thị giá trị ô phép tính
$('.number>.btn , .option ').on('click', function(){
    char = $(this).text() ; //lấy giá trị vừa click
    result = $('#result').text(); //lấy giá trị trong ô tính 
    $('#result').text(result + char); // hiển thị giá trị ra ô tính
    $('.option').removeAttr('disabled') // khi bấm một số khác k phải dấu x(÷) thì sẽ bấm được dấu x(÷)
})

// không thể bấm thêm dấu x (÷) khi đã bấm dấu x (÷)
$('.multi , .divide').on('click' , function(){
    $('.multi').attr('disabled' , true)
    $('.divide').attr('disabled' , true)
})

// thực hiện phép tính khi bấm dấu =
$('.equal').on('click', function(){
    result = $('#result').text(); //lấy giá trị trong ô tính
    result = result.replaceAll('x','*'); // thay đổi dấu x thành * để thực hiện phép tính
    result = result.replaceAll('÷','/'); // thay đổi dấu ÷ thành / để thực hiện phép tính 
    $('#result').text(eval(result)) // trả về kết quả
})

// khi bấm AC sẽ xóa toàn bộ trên ô phép tính 
$('.clean').on('click', function(){
    $('#result').text("")
})

// khi bấm DEL sẽ xóa 1 giá trị ở cuối 
$('.undo').on('click' , function(){
    result = $('#result').text();
    $('#result').text(result.substring(0, result.length - 1 ));
})

// tính bình phương 
$('.square').on('click', function(){
    result = $('#result').text();
    $('#result').text(result * result);
})

// tính căn bậc 2
$('.sqrt').on('click', function(){
    result = $('#result').text() ; 
    $('#result').text(Math.sqrt(result));
})

// tính giai thừa 
$('.giaithua').on('click' , function(){
    result = $('#result').text();
    let giaithua = 1 ;
    for(let i = 0 ; i < result ; i++ ){
        giaithua += giaithua * i
    }
    $('#result').text(giaithua)
})

// tính phần trăm
$('.percent').on('click',function(){
    result = $('#result').text() ; 
    $('#result').text(result / 100)
})

// thay doi theme 
$(function(){
    $('#changer').on('click',function(){
        $('.btn').toggleClass('btn1')
        $('html').toggleClass('html1')
    })
})
