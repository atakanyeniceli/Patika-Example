import { useEffect } from "react"
import { total } from "../../Redux/salesSlice"
import { useAppDispatch, useAppSelector } from "../../Redux/store"


const Sales = () => {
    const _salesReceipt = useAppSelector((state) => state.sales.Receipt)
    const _salesTotal = useAppSelector((state) => state.sales.total)
    const disPatch = useAppDispatch()

    useEffect(() => {
        disPatch(total())
    }, [_salesReceipt, disPatch])

    return (
        <div id='sales' className='text-center py-2'>
            <div className='text-2xl my-2'>Your Receipt</div>
            {_salesReceipt.map((product, index) => {
                return (
                    <div key={index + product.productName} className='grid grid-cols-3 max-w-xs mx-auto items-center'>
                        <span className='text-center'>{product.productName}</span>
                        <span>X{product.productPiece}</span>
                        <span className='text-left'>${product.totalFee.toLocaleString()}</span>
                    </div>
                )
            })}
            <div className='grid grid-cols-3 mx-auto max-w-xs border-t border-black'>
                <div className=''>Total</div>
                <div>X{_salesTotal.piece}</div>
                <div className='text-left'>${_salesTotal.fee.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default Sales