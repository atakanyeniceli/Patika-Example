import { useAppSelector } from '../../Redux/store'



const MoneyBar = () => {
    const _moneySlice = useAppSelector((state) => state.money.money)
    const _salesTotal = useAppSelector((state) => state.sales.total.fee)

    return (
        <div id='moneyBar' className='text-4xl rounded-lg mb-1 bg-green-700 bg-opacity-70 py-2 sticky top-0 text-center'>
            ${(_moneySlice - _salesTotal).toLocaleString()}
        </div>
    )
}

export default MoneyBar