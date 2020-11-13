function bai2(arr){
   if(arr.length<2){
       return "nhap lai so"
   }
       arr=arr.sort((a,b)=>a-b)
       return arr[arr.length-2]

}
function bai3(arr){
    let max=arr[0].length;
    let maxstring="";
    for(i=0;i<arr.length;i++){
        if(max<arr[i].length){
            max=arr[i].length;
            maxstring=arr[i];
        }
    }
    return maxstring ;
}
function bai4(string,ending){
    if(ending == null || string == null){
        return "Hãy nhập dữ liệu!"
    }else{
        let end = string.endsWith(ending);
        return end;
    }
}