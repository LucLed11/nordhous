import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
//import { getProductById } from '../../../asynMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../services/firebase'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `Detalle ${product.name} `
    })

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
            <button type="button" className="btn btn-outline-dark" onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default ItemDetailContainer