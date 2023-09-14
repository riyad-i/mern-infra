import * as usersService from '../utilities/users-service'

function OrderHistoryPage(){
    const handleCheckToken = async () => {
        usersService.checkToken()
    }
    return(
        <div>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
        </div>
    )
}

export default OrderHistoryPage