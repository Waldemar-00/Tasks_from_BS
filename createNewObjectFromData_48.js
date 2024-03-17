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

function fromProducts(products) {
  return products.reduce((newObj, obj) => {
    const { category, quantity } = obj
    newObj[category] = (newObj[category] || 0) + quantity
    return newObj
  }, {})
}

console.log(fromProducts(products))
