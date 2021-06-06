/* eslint-disable jsx-a11y/anchor-is-valid */
import './Bottom1.scss';
import Card from './Card/Card.js';

function Bottom1() {
    return (
    <section id="bottom1" class="bottom1">
        <section class="wrapper">
            <header class="bottom1__header">
                <h2>Best Seller</h2>
                <nav class="bottom1__nav">
                    <ul>
                        <li class="bottom1__menu bottom1__menu--active"><a href="#">All</a></li>
                        <li class="bottom1__menu"><a href="#">Mac</a></li>
                        <li class="bottom1__menu"><a href="#">iPhone</a></li>
                        <li class="bottom1__menu"><a href="#">iPad</a></li>
                        <li class="bottom1__menu"><a href="#">iPod</a></li>
                        <li class="bottom1__menu"><a href="#">Accessories</a></li>
                    </ul>
                </nav>
            </header>

            <article class="bottom1__products">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </article>
            <a href="#" class="bottom1__button">Load More</a>
        </section>
    </section>

    )
}

export default Bottom1;