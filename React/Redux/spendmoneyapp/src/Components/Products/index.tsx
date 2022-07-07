import SampleProducts from "../../sampleProducts"
import ProductModel from "./productConatiner"


const Products = () => {
    return (
        <div id='products' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center'>
            {SampleProducts.map((product, index) => {
                return <ProductModel key={index * product.price} _product={product} />
            })}
        </div>
    )
}

export default Products