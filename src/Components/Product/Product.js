import './Product.scss'
import DisplayProduct from './DisplayProduct/DisplayProduct.js';
import Aside from './Aside/Aside.js';
import Bottom1 from './Bottom1/Bottom1.js';

function Product() {
    return ( 
        <Product>
            <section id="main" class="main">
                <section class="wrapper">
                    <DisplayProduct />
                    <Aside />
                </section>
            </section>
            <Bottom1 />
        </Product>
    )
}

export default Product;