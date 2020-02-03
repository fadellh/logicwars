function faktorial(n){
    //  if (n===0) {
    //      return 1; 
    //  }
    return n * faktorial(n-1);
}

console.log(faktorial(6))

// function faktor(num){
//     for(i=num;i>0;i--){
//        return num * faktor(num-1)
//     }
// }
// //console.log(faktor(5))