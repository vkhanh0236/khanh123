//bai 1
function maxString(arr){
    let maxstring = 0;
    let arrmax= [] ;
    for(let i = 0 ; i < arr.length ; i++){
        if(maxstring <= arr[i].length){
            maxstring = arr[i].length
            arrmax.push(arr[i]) // thêm phần tử khi xuất hiện 1 chuỗi lớn nhất
        }
        
    }
    return arrmax
}
// bai 2

function arrcomparison(arr1,arr2){

    arr = []
    for(let i = 0 ; i < arr1.length ; i++){
        if ( arr2.indexOf(arr1[i],0) == -1){
            arr.push(arr1[i])
            
        }
    }
    for(let j = 0 ; j < arr2.length ; j++){
        if ( arr1.indexOf(arr2[j],0) == -1 ){
            arr.push(arr2[j])
        }
    }
    return arr
}
// bai 3





//bai4 
