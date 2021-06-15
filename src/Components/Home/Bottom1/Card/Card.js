import './Card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
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
            <h3 class="bottom1__card__title">{props.modelName}</h3>
            <FontAwesomeIcon icon={faStar} class={'bottom1__card__star'}/>
            <FontAwesomeIcon icon={faStar} class={'bottom1__card__star'}/>
            <FontAwesomeIcon icon={faStar} class={'bottom1__card__star'}/>
            <FontAwesomeIcon icon={faStar} class={'bottom1__card__star'}/>
            <FontAwesomeIcon icon={faStar} class={'bottom1__card__star'}/>
            <footer class="bottom1__card__footer">
                <span class="bottom1__card__price">{props.currentPrice}</span>
                <span class="bottom1__card__price bottom1__card__price--before">{props.regularPrice}</span>
            </footer>
        </div>
    )
}

export default Card;