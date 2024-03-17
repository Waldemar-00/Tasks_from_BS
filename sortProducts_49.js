const products = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Sport watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport watch',
    price: 35,
    quantity: 7,
    category: 'Watches',
  },
]
function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price)
}
console.log(sortProductsByPrice(products))
console.log(products)
