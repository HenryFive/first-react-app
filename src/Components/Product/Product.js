import './Product.scss'
import DisplayProduct from './DisplayProduct/DisplayProduct.js';
import Aside from './Aside/Aside.js';

function Product() {
    return ( 
        <section id="main" class="main">
            <section class="wrapper">
                <DisplayProduct />
                <Aside />
            </section>
        </section>
    )
}

export default Product;