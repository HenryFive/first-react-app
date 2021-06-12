import './DisplayProduct.scss';

function DisplayProduct() {
    return (
        <section class="main__product--info">
            <section class="main__product--upper">
                <section class="main__product--image">
                    <img class="main__product--image--big" src="images/black_hero_retina_1800x1800_V2.png" alt="Beat Solo 2 on Ear Headphones - Black" />
                    <footer class="main__product--thumbnail">
                        <img src="images/0053_rgb_MP582-RGB-bttm_V2.png" alt="Beat Solo 2 on Ear Headphones - Black" />
                        <img src="images/0066_rgb_MNEN2-RGB-side_V2.png" alt="Beat Solo 2 on Ear Headphones - Black" />
                        <img src="images/Rectangle_5.png" alt="Beat Solo 2 on Ear Headphones - Black" />
                        <img src="images/151101_bbd_sodc_blk_06.png" alt="Beat Solo 2 on Ear Headphones - Black" />
                    </footer>
                </section>
                <section class="main__product--details">
                    <h3 class="main__product--title">Beats Solo2 On Ear Headphones - Black</h3>
                    <section class="main__product--review">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>0 Reviews</span>
                        <a href="#" class="main__product--submit">Submit a review</a>
                    </section>
                    <hr />
                    <section class="bottom1__card__footer main__product--price">
                        <span class="bottom1__card__price">$499</span>
                        <span class="bottom1__card__price bottom1__card__price--before">$599</span>
                    </section>

                    <section class="main__product--ship main__product--avail">
                        <span>Availability: </span>In stock
                    </section>

                    <section class="main__product--ship main__product--category">
                        <span>Category: </span>Accessories
                    </section>

                    <section class="main__product--ship main__product--shipping">
                        <span>Free Shipping </span>
                    </section>
                    <hr />
                    <section class="main__product--color">
                        <span>Select Color: </span>
                        <aside class="main__product--select_color">
                            <span class="main__product--white" onclick="selectWhite()"></span>
                            <span class="main__product--red" onclick="selectRed()"></span>
                            <span class="main__product--pink" onclick="selectPink()"></span>
                            <span class="main__product--black" onclick="selectBlack()"></span>
                            <span class="main__product--copper" onclick="selectCopper()"></span>
                        </aside>
                    </section>

                    <section class="main__product--ship main__product--size">
                        <span>Size </span>
                        <span class="main__product--sizes">XS <i class="fas fa-caret-down"></i></span>
                    </section>

                    <hr />

                    <section class="main__product--bottom">
                        <section class="cart-section__table-row--qty main__product--quantity">
                            <button class="cart-section__table-row--qty--minus-btn" id="qty-minus-btn">-</button>
                            <div class="cart-section__table-row--qty--number">2</div>
                            <button class="cart-section__table-row--qty--plus-btn" id="qty-plus-btn">+</button>
                        </section>

                        <section class="main__product--cart">
                            <a href="#" class="main__product--add-to-cart"><i class="fas fa-shopping-cart"></i>Add to Cart</a>
                            <i class="far fa-heart main__product--heart"></i>
                        </section>
                    </section>

                    <hr />
                    
                    <section class="main__product--social-media">
                        <a href="#" class="main__product--facebook">
                            <i class="fab fa-facebook-f"></i>Share on Facebook</a>
                        <a href="#" class="main__product--twitter">
                            <i class="fab fa-twitter"></i>Share on Twitter</a>
                    </section>
                </section>
            </section>
            <footer class="main__product--lower">
                <section class="main__product--header">
                    <a class="main__product--tab active" href="#">Product Information</a>
                    <a class="main__product--tab" href="#">Reviews <span>0</span></a>
                    <a class="main__product--tab" href="#">Another tab</a>
                </section>
                <hr/>
                <p class="main__product--desc">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.
                </p>
                <p class="main__product--desc">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                </p>
            </footer>
        </section>
   )
}

export default DisplayProduct;