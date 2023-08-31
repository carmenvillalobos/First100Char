// Take a book description and get the first 100 characters of the string (including punctuation and spaces). 
// The output cannot end in the middle of a word, so if that is the case, pluck off the last word to get under 100 characters.
 
$input = "A Tale of Two Cities is a historical novel written by Charles Dickens and first published in 1859 and set in both London and Paris 
before and during the French Revolution.";

//function char(str){ //"the dog"
let arr = str.split('') //convert string to elements within the array ["t","h","e"," ", "d","o","g"]
if(arr.length<=100){
return str
}
else
//restriction if arr.length >100;
//output the first 100 elements in array
//if(str typeof is char){return value before)
}

function takes in string
case 1: the amount of chars in the string is equal to 100, return the string //"hello"
case 2: if the amount of chars is greater than 100 chars, return all the chars (including whitespace) up to 100 chars
//A Tale of Two Cities is a historical novel written by Charles Dickens and first published in 1859 and set in both London and Paris 
before and during the French Revolution.
    subcase2: within this case, return the full word on where you leave off
    // A Tale of Two Cities is a historical novel written by Charles Dickens and first published in 1859
    