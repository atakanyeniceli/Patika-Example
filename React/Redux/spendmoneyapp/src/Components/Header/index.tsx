import billgates from '../../Assets/billgates.jpg'


const Header = () => {

    return (
        <div id='header' className='py-2'>
            <div className='rounded-lg bg-white py-5'><img className='h-36 mx-auto rounded-full' src={billgates} alt="Loading..." /></div>
        </div>
    )
}

export default Header