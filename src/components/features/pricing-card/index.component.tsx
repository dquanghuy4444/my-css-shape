import "./index.scss";
import { getUrlPublicImage } from "ultis/index"

function IndexComp() {
    return (
        <article className="card__content grid">
            <div className="card__pricing">
                <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>0
                </div>
                <span className="card__pricing-month">/month</span>
            </div>

            <header className="card__header">
                <div className="card__header-circle grid">
                    <img src={getUrlPublicImage("pricing-card" , "free-coin.png")} alt="" className="card__header-img" />
                </div>
                
                <span className="card__header-subtitle">Free plan</span>
                <h1 className="card__header-title">Basic</h1>
            </header>
            
            <ul className="card__list grid">
                <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">3 user request</p>
                </li>
                <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">10 downloads por day</p>
                </li>
                <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Daily content updates</p>
                </li>
                <li className="card__list-item">
                    <i className="uil uil-check card__list-icon"></i>
                    <p className="card__list-description">Fully editable files</p>
                </li>
            </ul>

            <button className="card__button">Choose this plan</button>
        </article>
    );
}

export default IndexComp;
