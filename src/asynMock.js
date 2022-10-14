const products =  [
    { 
        id: '1', 
        name: 'Mesa de Madera', 
        price: 3000, 
        category: 'Muebles', 
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/products/whatsapp-image-2020-07-30-at-22-39-20-11-abe0fcd242539c663615986273482098-1024-1024.jpeg',
        stock: 10, 
        description:'Pie de Cama de Madera'
    },
    { id: '2', name: 'Almohadones', price: 1800, category: 'Almohadas', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/products/309-11-ba04c8a2e706c1b43116610363342743-480-0.png', stock: 10, description:'Lámpara Carilo'},
    { id: '3', name: 'Difusor NordHaus', price: 500, category: 'Aromatizador', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/products/379-071-3cc788370cea61ffe516570377184162-1024-1024.png', stock: 10, description:'Difusor de Vidrio'},
    { id: '4', name: 'Difusor con Bandeja', price: 800, category: 'Aromatizador', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/products/377-091-dd7d6007754f8ad37416597979284312-480-0.png', stock: 10, description:'Difusor de Vidrio'},
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