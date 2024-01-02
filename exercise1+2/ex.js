import validator from 'validator';
import { faker } from '@faker-js/faker';

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'));
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958"));
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist));
/////////////////////////////////////////////////////////////////

const makeHuman=function(num){
    const humans=[];
    while(num>0){
        const human={
            name:faker.person.firstName(),
            avatar:faker.image.avatar(),
            companyName:faker.company.name()
        }
        humans.push(human)
        num--;
    }
    return humans
}
const result=makeHuman(3);
result.forEach(person => {
    console.log(`${person.name}, ${person.avatar}, ${person.companyName}`);
});