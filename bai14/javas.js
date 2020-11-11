//Bài 1 : Đếm số nguyên tố trong đoạn [a, b]
function countPrime(a, b) {
    if (a > b) {
        return "b phải lớn hơn a. Nhập lại";
    }
    let count = 0;
    function isPrime(n) {
        if (typeof (n) != 'number') {
            return "Đây không phải số";
        }
        // Nếu n bé hơn 2 tức là không phải số nguyên tố
        if (n < 2) {
            return false;
        }
        else if (n == 2) {
            return true;
        }
        else if (n % 2 == 0) {
            return false;
        }
        else if (n > 2) {
            if (n == 3) {
                return true;
            }
            // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
            for (var i = 3; i <= n / 2; i++) {
                if (n % i == 0) {
                    return false;
                    break;
                }
                return true;
            }
        }
    }
    if (typeof (a) != 'number' || typeof (b) != 'number' || typeof (a) == 'NaN' || typeof (a) == 'NaN') {
        return "Yêu cầu nhập số";
    }
    // a = parseInt(a);
    // b = parseInt(b);
    for (let n = a; n <= b; n++) {
        if (isPrime(n) == true) {
            console.log(n);
            count = count + 1;
        }
    }
    return "Tổng số nguyên tố trong khoảng " + a + " và " + b + " là: " + count;
}

//Bài 2 Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
function checkMonth(months, years) {
    if (typeof (months) != 'number' || typeof (years) != 'number') {
        return "Phải nhập số. Yêu cầu nhập lại";
    }
    if (months < 1 || months > 12) {
        return "số phải trong khoảng từ 1 đến 12";
    }
    switch (months) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Tháng " + months + "/" + years + " có 31 ngày.";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return "Tháng " + months + "/" + years + " có 30 ngày.";
            break;
        case 2:
            if (years % 4 == 0 && years % 100 !=0 || years % 400 ==0) {
                return "Tháng " + months + "/" + years + " có 29 ngày.";
                break;
            }
            else
                return "Tháng " + months + "/" + years + " có 28 ngày.";
            break;
    }
}

//Bài3. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.
//cách 1 dùng hàm có sẵn trong javascript
function addItemArrays(Array1, x) {
    Array1.sort(function (a, b) { return a - b });
    Array1.push(x);
    return Array1;
}
//cách 2
function addItems(Arr2, x) {
    var y = 0;
    let max = Arr2[0];
    for (let j = 1; j < Arr2.length; j++) {
        if (max < Arr2[j]) {
            max = Arr2[j];
y = j + 1;
}
    }
    Arr2.splice(y, 0, x);
    return Arr2;
}

//Bài 4 Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.
function noChangeArray(Array2, x) {
    let n = Array2.length;
    //Sắp xếp mảng tăng dần
    Array2.sort(function (a, b) { return a - b });
    //So sánh x với các phần tử mảng, x lớn hơn phần tử nào thì thêm x vào sau phần tử đó
    for (let i = 0; i < Array2.length; i++) {
        if ((Array2[i] >= x && i == 0)) {//neu x nho hon tat ca cac phan tu trong mang
            n++;
            for (j = n - 1; j >= i; j--) {
                Array2[j] = Array2[j - 1];
            }
            Array2[i] = x;
            return Array2;
            break;
        } else if ((Array2[i] <= x && Array2[i + 1] > x && i != n - 1) || (Array2[i] <= x && i == n - 1)) {
            /*neu x nam trong khoang giua mang hoac x lon hon tat ca cac phan tu trong mang*/
            n++;
            for (j = n - 1; j > i; j--) {
                Array2[j] = Array2[j - 1];
            }
            Array2[i + 1] = x;
            return Array2;
            break;
        }
    }
}

//Bài 5 Tính tổng các chữ số trong 1 số nguyên dương
function totalItem(a) {
    var tong = 0;
    if (a <= 0) {
        return "Nhập số lớn hơn 0. Nhập lại";
    }
    while (a > 0) {
        var sodu = a % 10;
        a = Math.floor(a / 10);
        tong += sodu;
    }
    return "Tổng của các chữ số trong " + a + " là: " + tong;
}

//Bài 6 kiểm tra tính đối xứng của 1 số

//cách 1
function soDoiXung(numbers) {
    if (typeof (numbers) != 'number') {
        return "Phải nhập số. Nhập lại";
    }
    function timSoDao(n) {
        let sodao = 0;
        let sodu;
        while (n > 0) {
            sodu = n % 10; //Lấy chữ số cuối của số n
            sodao = sodao * 10 + sodu;
            n = Math.floor(n / 10);
        }
        return sodao;
    }
    if (numbers == timSoDao(numbers)) {
        return numbers + " là số đối xứng"
    }
    else
        return numbers + " không phải số đối xứng";
}

//Cách 2 coi số là 1 chuỗi để so sánh
function checkPalidrome(n) {
    let flag = false;
    let str = n.toString();
    let m = str.length;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[m - i - 1]) {
            flag = true;
        }
        else flag = false;
    }
    if (flag == true) {
        return n + " là số đối xứng";
    } else return n + " là số không đối xứng";
}


//Bài 7 Giải phương trình bậc 2: ax^2 + bx + c = 0.
function giaiPtBac2(a, b, c) {
    var delta = (b * b) - (4 * a * c);
    if (delta > 0) {
        let x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(5);
        let x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(5);
return "Nghiệm của phương trình " + a + "x\xB2" + "+" + b + "x" + "+" + c + " là " + x1 + " và " + x2 + ".";
} else if (delta == 0) {
        let x3 = -b / (2 * a);
        return "Nghiệm của phương trình " + a + "x\xB2" + "+" + b + "x" + "+" + c + " là nghiệm kép: " + x3 + ".";
    }
    else {
        return "Phương trình vô nghiệm";
    }
}

//Bài 8 vẽ hình chữ nhật rỗng kích thước m ,n
function printRectangle(m, n) {
    if (m <= 1 || n <= 1) {
        return "Phải nhập số lớn hơn 1"
    }
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= m; k++) {
            if (i == 1 || k == 1 || i == n || k == m) {
                document.write("*");
            }
            else {
                document.write("\xa0");
            }
        }
        document.write("<br>");
    }
}

//Bài 9 Vẽ tam giác vuông chiều cao h
function printTrialgle(h) {
    if (h <= 1) {
        return "Số nhập phải lớn hơn 1. Nhập lại";
    }
    for (let i = 1; i <= h; i++) {
        for (let k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

//Bài 10 Vẽ tam giác đều ngược
function TamGiacCanNguoc(n) {
    if (n <= 1) {
        return "phải nhập số lớn hơn 1"
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (j >= n - i - 1 && j <= n + i - 1) {
                document.write('*')
            } else {
                document.write('\xa0\xa0');
            }
        }
        document.write("<br>");
    }
}

//Bài 11 Viết chương trình vẽ một chữ X bằng các dấu * với chiều cao nhập từ bàn phím (chiều cao lớn hơn 0 và là số lẻ)
function PrintX(h) {
    if (h < 1 || h % 2 == 0) {
        return "Nhập lại, số phải lớn hơn 0 và là số lẻ";
    }
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= h; j++) {
            if (j == i || j == (h - i + 1)) {
                document.write('*');
            }else {
                document.write('\xa0');
            }
        }
        document.write('<br>');
    }
}