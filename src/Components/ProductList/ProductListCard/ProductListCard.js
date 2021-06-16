import './ProductListCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStar,
    faShoppingCart,
    faHeart    
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

export default function ProductListCard () {
    return (
        <section class="product-listing__products__card">
            <section class="product-listing__products__card--image">
                <span>HOT</span>
                <img src="images/macbook-pro.png" alt="iMac" />
            </section>
            <section class="product-listing__products__card__details">
                <h3 class="product-listing__products__card__details--title">Beats Solo2 On Ear Headphones - Black</h3>
                <section class="product-listing__products__card__details--review">
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>0 Reviews</span>
                    <a href="#" class="main__product--submit">Submit a review</a>
                </section>
                <hr />
                <span class="product-listing__products__card__details--price">$499
                    <span class="product-listing__products__card__details--price--before">$599</span>
                </span>
                <p>Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.</p>
                <footer>
                    <button id="product-listing--add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    <button id="product-listing--like-btn"><FontAwesomeIcon icon={farHeart} /></button>
                </footer>
            </section>
        </section>
    )
}