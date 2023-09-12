import { Link } from "react-router-dom"


function NavBar({user}){
    // console.log(user);
    return(
        <nav>
            hi {user.name}
            &nbsp;
            <Link to={'/orders'}>Order History</Link>
            &nbsp; | &nbsp;
            <Link to={'orders/new'}>New Order</Link>
        </nav>
    )
}


export default NavBar