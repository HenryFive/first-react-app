import './Card.scss';

function Card() {
    return (
        <div class="bottom1__card bottom1__card--hot">
            <div class="bottom1__card__flip">
                <div class="bottom1__card__inner">
                    <div class="bottom1__card__front">
                        <img src="images/macbook-pro.png" alt="Macbook Pro" class="bottom1__card__image" />
                    </div>
                    <div class="bottom1__card__back">
                        <section class="bottom1__card__favCart">
                            <i class="bottom1__card__icon far fa-heart"></i>
                            <i class="bottom1__card__icon fas fa-shopping-cart"></i>
                        </section>
                    </div>
                </div>
            </div>
            <h3 class="bottom1__card__title">Apple Macbook Pro</h3>
            <i class="fas fa-star bottom1__card__star"></i>
            <i class="fas fa-star bottom1__card__star"></i>
            <i class="fas fa-star bottom1__card__star"></i>
            <i class="fas fa-star bottom1__card__star"></i>
            <i class="fas fa-star bottom1__card__star"></i>
            <footer class="bottom1__card__footer">
                <span class="bottom1__card__price">$499</span>
                <span class="bottom1__card__price bottom1__card__price--before">$599</span>
            </footer>
        </div>
    )
}

export default Card;