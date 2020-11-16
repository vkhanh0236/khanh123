const numbers = document.getElementsByClassName("btn");
const result = document.getElementById("result");

for (let number of numbers) {
  number.addEventListener("click", function () {
    result.innerHTML += this.value;
  });
}
// tra ve ket qua tinh
function equal() {
  let res = result.innerHTML;
  let output = eval(res);
  result.innerHTML = output;
}
//xoa toan bo
function clean() {
  result.innerHTML = " ";
}
// xoa 1 so cuoi
function undo() {
  let res = result.innerHTML;
  result.innerHTML = res.substring(0, res.length - 1);
}
// tinh binh phuong
function binhphuong() {
  let binhphuong= result.innerText;
    binhphuong=binhphuong**2
    result.innerHTML = binhphuong ;
  
}

// function giaithua() {
//     let giaithua=result.innerHTML;
//     for (i = 1 ;0 < i < giaithua ; i++){
//         giaithua=giaithua*i;
//     }
//     return result.innerHTML = giaithua;
// }

//tinh can bac 2
function can(){
    let can = result.innerText;
    can=Math.sqrt(can)
    result.innerHTML= can;
}