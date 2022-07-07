import { useEffect, useState } from 'react'
import { IProduct } from '../../Interface/product'
import { useAppDispatch } from '../../Redux/store'
import { addSales, deleteSales } from '../../Redux/salesSlice'
import { IReceipt } from '../../Interface/receipt'




const ProductContainer = ({ _product }: { _product: IProduct }) => {
    const [productCount, setProductCount] = useState<number>(0)
    const disPatch = useAppDispatch()

    useEffect(() => {
        
        const tempProduct: IReceipt = {
            productName: _product.name,
            productPiece: productCount,
            totalFee: _product.price * productCount
        }

        if (productCount !== 0)
            disPatch(addSales(tempProduct))
        else
            disPatch((deleteSales(tempProduct)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productCount])

    const pieceIncremental = () => {
        setProductCount(productCount + 1)
    }

    const pieceDecrease = () => {
        if (productCount > 0)
            setProductCount(productCount - 1)
    }

    return (
        <div className='m-1 bg-white border flex flex-col justify-between'>
            <div className='my-2 text-xl '>{_product.name}</div>
            <div className='my-10 px-5'><img className='m-auto max-h-36' src={_product.img} alt="" /></div>
            <div className='text-2xl text-green-600'>${_product.price}</div>
            <div className='flex justify-evenly my-2 text-sm text-white'>
                <button className='bg-green-600 py-1 px-7 rounded-xl' onClick={pieceDecrease} >Sell</button>
                <input className='w-[30%] border px-2 outline-none border-black rounded-lg text-black' type="number" value={productCount} onChange={() => null} />
                <button className='bg-red-600 px-7 py-1 rounded-xl' onClick={pieceIncremental}>Buy</button>
            </div>
        </div>
    )
}

export default ProductContainer