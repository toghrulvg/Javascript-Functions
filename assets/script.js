//3 e ve 7 ye bolunenler
let n;

function dividing(n){
    
    if (n%3==0&&n%7==0) {
        console.log("Eded bolunur")
    }else {console.log("Eded bolunmur")}
}

dividing(42);

//faktorial tapma
function factorial(n){
    let multipling = 1;
    for (; n > 1; n--) {
        multipling *= n;
    }
        
    console.log(multipling);
    
}
factorial(5);

//kvadratlarin cemini tapma
let array = [1,3,2,4,2,10,2,4];

function squareOfEven(){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) {
            sum+=array[i]*array[i]
        }
    }
    console.log(sum);
}
squareOfEven(array);

//login funksiyasi
function login(email , password){
    if (email== "cavid@code.edu.az" && password=="12345") {
        console.log("girish olundu")
    }else(console.log("shifre ve ya istifadeci adi sehvdir"))
}

login("cavid@code.edu.az" , "12345");

//teklerin cemini tapma
function sumOfOdds(array1){
    let sumOfOdd = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i]%2==1) {
            sumOfOdd+=array1[i]
        }
    }
    console.log(sumOfOdd)
}
let array1 = [1,2,3,4,5,6,7];
sumOfOdds(array1);

//cutlerin sayini tapma
let array2 = [2,4,6,8,1,3,5,10];
function countOfEvens(array2){
    let countOfEven = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i]%2==0) {
            countOfEven ++;
        }
        
    }
    console.log(countOfEven);
}
countOfEvens(array2);