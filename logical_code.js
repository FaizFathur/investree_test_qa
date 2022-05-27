const numbers = [3,2,5,1,8,9,6];
const oddNumbers = [];
const evenNumber = [];

 for (var i = 0; i < numbers.length ; i++) {

    if ( numbers[i] % 2 == 1) {
        oddNumbers.sort((a, b) => a - b);
        oddNumbers.push(numbers[i]);
        //console.log(numbers[i] + " " + "Ganjil");   
    } 
    else if (numbers[i] % 2 == 0) {
        evenNumber.push(numbers[i]);
        //console.log(numbers[i]+ " " + "Genap");
    }
}
console.log(oddNumbers + "," + evenNumber);



