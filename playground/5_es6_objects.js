const name = 'Saurin'
const userAge = '19'

const user = {
    name,
    age : userAge,
    location : 'Mulund'
}

console.log(user)

//Object Destructuring
const product ={
    label : 'Tshirt',
    price : 30,
    stocks : 156,
    salePrice : undefined
}

const {label, stocks, rating} = product 
console.log(label)
console.log(stocks)
console.log(rating) //gives undefined
