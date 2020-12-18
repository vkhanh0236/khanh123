//bai1 
function tinhTong(a, b) {
  let sum = 0;
  
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }

  return sum;

}

//bai2
function tinhTong2(number) {
  let sum = number;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  return sum;

}

//bai3
function songuyenTo(number) {

  if (number == 4) {
    return false;
  }

  for (let i = 2; i < number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;

}

//bai4
function songuyenTo1(number) {
  let sum = 0;
  
  for (let i = 2; i <= number; i++) {
    if (songuyenTo(i)) {
      sum += i;
    }
  }

  return sum;

}
//bai 5

function chuHoa(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
  }

  return str.join(" ");

}

//bai6

function stringlower(str) {

  str = str.substring(0).toLowerCase();
  str = str.replace(/ /g, "-");

  return str;

}

//bai 7
function palindrome(str) {

  str = str.toLowerCase();
  str = str.replace(/ /g, "");

  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
