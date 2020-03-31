/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = function(a,b){
  if (a<b){return -1}
  if (a===b){return 0}
  if (a>b){return 1}
}
const secondNumberIsLess = function(a,b){
  if (a<b){return 1}
  if (a===b){return 0}
  if (a>b){return -1}
}
const firstNameIsFirstAlphabetically = function(a,b){
  if (a<b){return -1}
  if (a===b){return 0}
  if (a>b){return 1}
}
const firstLastNameIsFirstAlphabetically = function(a,b){
  let firstLast = a.split(' ')[1]
  let secondLast = b.split(' ')[1]
  if (firstLast<secondLast){return -1}
  if (firstLast===secondLast){return 0}
  if (firstLast>secondLast){return 1}
}
const trueIsFirst = function(a,b){
  if (a<b){return 1}
  if (a===b){return 0}
  if (a>b){return -1}
}
const sortByNumberAscending = function(arr){
  const sortedArr = arr.concat()
  sortedArr.sort(function(a,b){return a-b})
  return sortedArr
}
const sortByNumberDescending = function(arr){
  const sortedArr = arr.concat()
  sortedArr.sort(function(a,b){return b-a})
  return sortedArr
}
const truesFirst = function(arr){
  const sortedArr = arr.concat()
  sortedArr.sort(function(a,b){return b-a})
  return sortedArr
}
const sortByNameAscending = function(arr){
  const sortedArr = arr.concat()
  sortedArr.sort()
  return sortedArr
}
const sortByLastNameAscending = function(arr){
  const sortedArr = arr.concat()
  sortedArr.sort(function(a,b){
    let firstLast = a.split(' ')[1]
    let secondLast = b.split(' ')[1]
    if (firstLast<secondLast){return -1}
    if (firstLast===secondLast){return 0}
    if (firstLast>secondLast){return 1}
  })
  return sortedArr
}


/************************
// ITERATION FUNCTIONS
 ************************/




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
