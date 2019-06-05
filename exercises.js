// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.
function FirstFactorial(num){
    if(num === 1){
        return 1;
    } else {
        return num * FirstFactorial(num - 1);
    }
}       

// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.
function SimpleAdding(num){
    var count = 0;
    for(var i = 0; i <= num; i++){
        count += i;
    }
    return count;
}

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.
function LetterCapitalize(str){
    var arr = str.split(' ');
    for(var i = 0, n = arr.length; i < n; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    arr = arr.join(' ');
    return arr;
}

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.
function rangeRover(arr){
    var low = 0;
    var high = 0;
    if(arr[0] > arr[1]){
        low = arr[1];
        high = arr[0];
    } else {
        low = arr[0];
        high = arr[1];
    }
    for(var i = low + 1; i <= high; i++){
        low += i;
    }
    return low;
}

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.
function missingLetter(str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0, n = alphabet.length; i < n; i++){
        if(alphabet.charAt(i) === str.charAt(0)){
            alphabet = alphabet.slice(i);
            i = 1;
        }
        if(alphabet.charAt(i) === str.charAt(str.length - 1)){
            alphabet = alphabet.replace(alphabet.slice(i), '');
        }

    }
    var missing = '';
    for(var i = 0, j = 0, n = alphabet.length; i < n; i++, j++){
        if(alphabet.charAt(i) !== str.charAt(i)){
            j--;
            missing += alphabet.charAt(i);
        }
    }
    if(missing.length === 0){
        return undefined;
    } else {
        return missing;
    }
}

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".
function hailCaesar(num){
    var answer = '';
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    for(var key in roman){
        while(num >= roman[key]) {
            answer += key;
            num -= roman[key];
        }
    }
    return answer;
}

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".
function spinalTap(str){
    str = str.toLowerCase();
    str = str.split(' ');
    str = str.join('-');
    return str;
}

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example sumFibs(4) should return 5, sumFibs(1000) should return 1785.
function sumFibs(num){
    var arr = [0, 1];
    var sum;
    if(num === 1){
        return 1
    } else {
        while(arr[arr.length - 1] + arr[arr.length - 2] < num){
            sum = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(sum);
        }
        sum = 0;
        for(var i = 0, n = arr.length; i < n; i++){
            if(arr[i] % 2 === 1){
                sum += arr[i];
            }
        }
        return sum;
    }
}