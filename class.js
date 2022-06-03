
// console.log( laptop.price);
// console.log( laptop);
// console.log( laptop.name);
// console.log( laptop.RAM);
// console.log( typeof(laptop.owner));
// laptop.price=32432;
// console.log( laptop.price);
// eslint-disable-next-line no-unused-vars
const laptop = {
  name: 'hp',
  price: 1000,
  intel: 'i5',
  RAM: '9gb ',
  owner: 'jose'
}

const person = {
  name: 'joe',
  age: 13,
  place: 'kla',
  greet: function () {
    console.log('hello je')
    return this.greet
  }

}
// console.log(person.name)
const z = person.greet()
console.log(z)
// person.greet()
