const products =  [
    { 
        id: '1', 
        name: 'Mesa de Madera', 
        price: 3000, 
        category: 'Muebles', 
        img: '/Imagenes/1.jpeg',
        stock: 10, 
        description:'Pie de Cama de Madera'
    },
    { id: '2', name: 'Lámpara Carilo', price: 1800, category: 'Lámparas', img: '/Imagenes/2.jpeg', stock: 10, description:'Lámpara Carilo'},
    { id: '3', name: 'Vela Aromatizante', price: 500, category: 'Aromatizador', img: '/Imagenes/3.jpeg', stock: 10, description:'Vela Aromatizante'},
    { id: '4', name: 'Difusor con Bandeja', price: 800, category: 'Aromatizador', img: '/Imagenes/4.jpeg', stock: 10, description:'Difusor de Vidrio'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}


export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}