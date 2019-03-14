const companies=[
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//basic For Loop Example
//for(i = 0; i < companies.length; i++){
  //  console.log(companies[i]);
//}

// ***********
// forEach
// ***********

// x.forEach(function(y){});

// array_name.ForEach(function(<some_name_to_iterate_through>)){
// console.log(<some_name_to_iterate_through);
//});

companies.forEach(function(company){
  console.log(company);
});

console.log(" ");

ages.forEach(function(Theage){
  console.log(Theage);
});

console.log(" ");
console.log(" ");



// ***********
// filter
// ***********

//const canDrink = ages.filter(function(age){
//  if (age >= 21){
//    return true;
//  }
// })

// Using E6 Arrow function to make the above code more streamlined
// Create an array (canDrink) and assign it to an existing array (ages),
// using filter function with some given value (age) to iterate through, with a conditional statement (age >= 21)

const canDrink = ages.filter(age => age >= 21);

console.log('Can Drink Function');
console.log(canDrink);
console.log('');


// Filter Example:
// Filter retail companies from Companies Array

const retailCompanies = companies.filter(retail => retail.category == 'Retail');

console.log('Filtering Example - Retail Companies:');
console.log(retailCompanies);
console.log(" ");
console.log(" ");


// Filter all companies from the 1980s

const getYear80 = companies.filter(year => year.start <= 1990);
console.log("Companies in the 1980 decade:")
console.log(getYear80);
console.log(" ");
console.log(" ");

// Filter all companies that lasted a decade or more
const decadeCompanies = companies.filter(ten => (ten.end - ten.start >= 10));
console.log("Companies that lasted a decade a more:")
console.log(decadeCompanies);
console.log(" ");
console.log(" ");


// ***********
// map
// ***********

// create new arrays from current array

// Grab all company names and put them in new array

//const companyNames = companies.map(function(company){
//  return company.name;
//});
//console.log("Grab all company names and put them in new array:")
//console.log(companyNames);
//console.log(" ");
// console.log(" ");

// The E6 Arrow function way

const companyNames = companies.map(company => company.name);
console.log(companyNames);
console.log(" ");
console.log(" ");


// Can format the output as needed, using ` and $ in the return syntax

//const testMap = companies.map(function(company){
//  return `${company.name} [${company.category} ${company.start}]`;
//});
//console.log("Grab all company names, category, and start date:")
//console.log(testMap);
//console.log(" ");
//console.log(" ");


// Use E6 Arrow method
const testMap = companies.map(company =>
`${company.name} [${company.category} ${company.start}]`
);
console.log("Grab all company names, category, and start date:")
console.log(testMap);
console.log(" ");
console.log(" ");

const agesSqaured = ages.map(age => Math.sqrt(age));
console.log('Ages Squared:')
console.log(agesSqaured)
console.log('');
console.log('');



// ***********
// sort
// ***********

// sort(a,b) =>
//(a.<some_index_value>  (condition) b.<some_index_value>)
// ? 1 (to return 1)
// : -1 ( else to return -1)

// Sort company by start year
const sortedCompanies = companies.sort((a,b) =>(a.start > b.start ? 1 : -1));
console.log('Sorted Companies by start date:');
console.log(sortedCompanies);
console.log('');
console.log('');

// Sort Ages from Lowest to Highest
const sortAges = ages.sort((a,b) => a - b);
console.log('Sort Ages from smallest to largest:');
console.log(sortAges);
console.log('');
console.log('');


// ***********
// reduce
// ***********

// Add all of the ages together

const ageSum = ages.reduce(function(total, age){
  return total + age;
}, 0);
console.log('Add all of the numbers together:');
console.log(ageSum);
console.log('');
console.log('');

// E6 Arrows

const betterAge = ages.reduce((total,age) => total + age, 0);

console.log('Add all of the numbers together:');
console.log(betterAge);
console.log('');
console.log('');


// Get Total Years for all companies

const totalYear = companies.reduce((total,company) => total + (company.end - company.start), 0);

console.log('Get Total Years for all companies:');
console.log(totalYear);
console.log('');
console.log('');




// Combine Example

// Array 1

const car =[
  {maker:'nissan', model: 'car', color: 'red', year: 2000},
  {maker:'ford', model: 'car', color: 'black', year: 2016},
  {maker:'chevy', model: 'truck', color: 'green', year: 2002},
  {maker:'telsa', model: 'car', color: 'red', year: 2019},
  {maker:'nissan', model: 'truck', color: 'white', year: 2005},
  {maker:'ford', model: 'truck', color: 'black', year: 2007},
  {maker:'telsa', model: 'suv', color: 'blue', year: 2010},
  {maker:'nissan', model: 'car', color: 'blue', year: 2010}
];


// Array 2
const numbers = [11,22,99,56,78,9,18,15,13,45]; 

const combine = numbers
  .map(value => value)
  //.map(value => value *2)
  //.filter(value => value > 10)
  //.sort((a,b) => a-b)
  .filter((a,b) => a+b,0)

  console.log('')
  console.log('Combine Example:');
  console.log(combine);


const combine2 = car
  //.filter(auto => auto.color == 'red');
  //.filter(auto => auto.model == 'nissan')
  //.map(auto => auto.model)
  //.map(auto => auto.year)
  //.map(auto =>`[${auto.maker} ${auto.model} ${auto.color} ${auto.year}]`
//);
  .sort((a,b) => a.year > b.year ? 1 : -1)



  console.log('')
  console.log('Combine Example 2:');
  console.log(combine2);
