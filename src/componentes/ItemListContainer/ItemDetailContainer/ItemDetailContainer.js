import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../../asynMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <button onClick={() => navigate(-1)}>Back</button>
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer