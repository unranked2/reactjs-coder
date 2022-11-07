import carrito from './../../img/cohete.png'
import "./cart.css";

function CartWidget(){
    return(
        <>
        <a href="#" id="">
            <img src={carrito} width="28px" height="28px"></img>
            <p className='pCarrito'>Mi carrito</p>
        </a>
        </>
    );
}
export default CartWidget
