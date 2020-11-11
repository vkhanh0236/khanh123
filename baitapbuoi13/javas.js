function bai1(arr){
    if(arr.length==2 ){
        if(arr[0]>arr[1]){
            return `so lon hon la ${arr[0]}`;
        }else{
            return `số lớn hơn là ${arr[1]}`;
        }
    }else{
        return `nhập lại số`;
    }
}
function bai2(n){
    var giaithua=1;
    if(n<0){
        return "nhập lại số"
    }
    for (i = 1; i <= n; i++) {
        giaithua= giaithua*i;    
    }
    return `giai thừa của ${n} là ${giaithua}`;
}
function bai3(arr){
    let sochan=[]
    sochan=arr.filter(Number=>Number%2 ==0)
    sochan=sochan.sort((a,b)=>b-a)
    return `cac so chan la ${sochan}`
}
//cách 2
function findEvenNumber (a1){
    let evenNumber = a1.filter((number)=> number%2 == 0);
    let soChan = evenNumber[0];
    for (let i = 0; i < evenNumber.length-1; i++){
        for (let j = i+ 1; j < evenNumber.length; j++){
            if (evenNumber[i] < evenNumber[j]){
                soChan = evenNumber[j];
                evenNumber[j] = evenNumber[i];
                evenNumber[i] = soChan;
            }
        }
    } return evenNumber;
}
function bai4(){
   switch (new Date().getMonth()) {
       case 0:
       case 1:
       case 2:
           month = "xuân" ;  
        break;
       case 3:
       case 4:
       case 5:
           month = "hè" ;
        break;
       case 6:
       case 7:
       case 8:
           month="thu";
        break;
       case 9:
       case 10:
       case 11:
           month="đông"  ;         
       break;
   }
   return `hôm nay là ngày ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}  và đang là mùa ${month}`
}
function bai5(arr){
    arr=arr.sort()
    return arr
}
function bai6(string){
    var newstring=""
    for(var i=string.length-1;i>=0;i--){
        newstring +=string[i]
        
    }
    return newstring
}
//bai7
function bai7(n)
{   
    var flag = false;
    if (n < 2 ){
        flag = false;
    }
    else if (n == 2 || n == 3){
        flag = true;
    }
    else{
        
        for (var i = 2; i <= (n /2); i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
            else {flag = true}
        }
    }
    if (flag == true){
        return n + " là số nguyên tố";
       
    }
    else{
        return n + " không phải là số nguyên tố ";
    }
}
function bai8(x){   
    let list = [];
    for (y=1; y<x; y++){ //Nhỏ hơn N
        let tonguoc=0;
    for (i=1; i<=y; i++){
        if (y % i == 0){
            tonguoc = tonguoc + i;
        }
    }
    if (tonguoc == y){
        list.push(y);
        }
    }
    return list;
}
function bai9(x,y){
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}
function bai10(h) {
    var str = "";
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < 2 * h-1; j++) {
        if (j >= h - 1 - i && j <= h - 1 + i) {
          str += "*";
        } else {
          str += "&nbsp&nbsp";
        }
      }
      str += "<br />";
    }
  
    document.writeln(str);
  }
