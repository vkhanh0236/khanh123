//bai 1
function maxString(arr){
    let maxstring = 0;
    let arrmax = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        if(maxstring < arr[i].length){
            maxstring = arr[i].length;
        }
    }
    function check(maxstrings){
        return maxstrings.length == maxstring;
    }

    return arrmax = arr.filter(check) 
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
function arrziczac(m , n ){
    let arr = [];
    let x =1;
    for(let k = 0; k< m; k++){
        arr[k]=[];
    }
    for(let i= 0 ; i <= m ; i++){
        if (i%2==0) {
            
        }
        
        
    }

    return arr
}
//bai3 copycode
function vehinhkhohieu(m,n)
        {
            let mangMe = [];
            let mangCon = [];
            let mangKetQua = [];

            for (let i=0; i<m*n; i++)
                {
                    mangMe.push(i+1);
                }
            
            for (let y=0; y<m; y++)
                {
                    mangCon = mangMe.splice(0,n)

                    if (y!=0 && y%2==1)
                        {
                            mangKetQua[y] = mangCon.reverse();
                            // console.log(mangKetQua[y]);
                        }
                    else
                        {
                            mangKetQua[y] = mangCon;
                            // console.log(mangKetQua[y]);
                        }
                }

            return mangKetQua;
        }


// object
//  let sv = [{ name:"Huy", gender: "Male", age: 20}, { name:"uya", gender: "Male", age: 100}]
//bai4 
function ageTb(arr){
    let Tb = []
    let tong = 0

    for(let i = 0 ; i < arr.length ; i++){
        Tb.push(arr[i]['age'])
    }

    for(let j of Tb ){
        tong = tong + j
        agetb = tong / 2
    }
    return agetb
}
// bai 5
function sortAge(arr){
    return arr.sort(function(a,b){return b.age - a.age})
}
//bai 6
function sortName(arr){
    return arr.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
}
//bai 7
function timTen(){
    
    return newArray= arr.filter(a=> (a.name.substring(0,1)=="H"|| a.name.substring(0,1)=="h"))
    
}