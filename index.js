// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const isPalindrome = require('./solution');
const palindrome = require('./solution');

app.use(express.static(__dirname))

app.post('/palindromechecker',(req, res) => {
  const str = req.body.str
  const answer = isPalindrome(str) 
  res.send({message:answer})
})

module.exports = app;

function isPalindrome(str){
  let newStr=""
  str.lowerCase();
  for(let i = str.length()-1 ; i >= 0 ; i++){
    newStr+=str.charAt(i);
  }
  if(str===newStr){
    return "palindrome";
  }else{
    return "notPalindrome";
  }
}
