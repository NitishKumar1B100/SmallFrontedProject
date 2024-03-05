let words =[
    "hello","game","joker","world","computer","helmet","page","lora","boy","singnal",
    "keyboard","throne","charge","some","inportant","cold","hot","box","his","her","guess",
    "like","new","why","what","you","your","I","am","are","were","we","they","he","she","it","is","there",
    "those","where"
];
words.sort();
console.log(words);
let input = document.getElementById("text");
let suggestion = document.getElementById("suggestion");

input.addEventListener("input",(e)=>{
  for(let i in words){
    if(text.value != ""){
        words[i] = caseCheck(words[i]);
        console.log(words[i]);
    }
  }
});

const caseCheck = (word) => {
    //Array of characters
    word = word.split("");
    let inp = input.value;
    //loop through every character in ino
    for (let i in inp) {
      //if input character matches with character in word no need to change
      if (inp[i] == word[i]) {
        continue;
      } else if (inp[i].toUpperCase() == word[i]) {
        //if inp[i] when converted to uppercase matches word[i] it means word[i] needs to be lowercase
        word.splice(i, 1, word[i].toLowerCase());
      } else {
        //word[i] needs to be uppercase
        word.splice(i, 1, word[i].toUpperCase());
      }
    }
    //array to string
    return word.join("");
  };