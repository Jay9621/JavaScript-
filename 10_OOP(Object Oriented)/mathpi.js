const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// agar object ke property ke bare me janana ho

console.log(descriptor);

const chai = {
    name: 'Cofee',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // used to change the property

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

