function tinhdoF(doc){
    return (`độ F đổi từ ${doc} độ C là : ${(doc*1.8)+32} độ F`);
}
function tinhdoC(dof){
    return (`độ C đổi từ ${dof} độ F là : ${(dof-32)/1.8} độ C`);
}
function tinhtheKY(nam){
    return Math.ceil(nam/100);
}
function catChuoi(str){
    return (`chuỗi cắt được là : ${str.substring(0,10)}...`);
}
function chuHoa(text){
    return (`${(text.substring(0,1)).toUpperCase()}${(text.substring(1)).toLowerCase()}`)
}