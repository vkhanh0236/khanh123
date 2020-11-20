function bai2(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
function bai3(arr) {
  let max = arr[0].length;
  let maxstring=arr[0];
  for (i = 1; i < arr.length; i++) {
    if (max < arr[i].length) {
      max = arr[i].length;
      maxstring = arr[i];
    }
  }
  return maxstring;
}
function bai4(string, ending) {
  if (ending == null || string == null) {
    return "Hãy nhập dữ liệu!";
  } else {
    let end = string.endsWith(ending);
    return end;
  }
}
function bai5(arr){
  let kq = false;
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1 ; j < arr.length; j++){
      if (arr[i] === arr[j]){
        kq = true ;
        break;
      }

    }
  }
  return kq;
}
//16 lan lap
function bai5_1(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; i++){
        console.log(arr[i] , arr[j])
    }
  }  
}
//6 lan lap
function bai5_2(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; i++){
        console.log(arr[i] , arr[j])
    }
  }  

}
