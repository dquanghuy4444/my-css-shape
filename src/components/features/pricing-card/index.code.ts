const to = `pricing-card`;

const html = 
`
<article className="card__content grid">
<div className="card__pricing">
    <div className="card__pricing-number">
        <span className="card__pricing-symbol">$</span>0
    </div>
    <span className="card__pricing-month">/month</span>
</div>

<header className="card__header">
    <div className="card__header-circle grid">
        <img src="assets/img/free-coin.png" alt="" className="card__header-img" />
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
`;

const style = 
`
/*==================== VARIABLES CSS ====================*/
:root{
    /*========== Colors ==========*/
    /* Change favorite color - Blue 210 - Purple 250 - Green 142 - Pink 340*/
    --hue-color: 210;

    /* HSL color mode */
    --first-color: hsl(var(--hue-color), 96%, 54%);
    --first-color-light: hsl(var(--hue-color), 96%, 69%);
    --first-color-alt: hsl(var(--hue-color), 96%, 37%);
    --first-color-lighter: hsl(var(--hue-color), 14%, 96%);
    --title-color: hsl(var(--hue-color), 24%, 15%);
    --text-color: hsl(var(--hue-color), 12%, 35%);
    --text-color-light: hsl(var(--hue-color), 12%, 65%);
    --white-color: #FFF;
    --body-color: hsl(var(--hue-color), 100%, 99%);
    --container-color: #FFF;

    /*========== Font and typography ==========*/
    --body-font: 'Lato', sans-serif;
    --pricing-font: 'Rubik', sans-serif;

    --biggest-font-size: 1.75rem;
    --normal-font-size: .938rem;
    --h2-font-size: 1.25rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;
    --tiny-font-size: .625rem;

    @media screen and (min-width: 968px){
        --biggest-font-size: 2.125rem;
        --h2-font-size: 1.5rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
        --tiny-font-size: .688rem;
    }

    /*========== Margenes Bottom ==========*/
    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-1: 1rem;
    --mb-1-25: 1.25rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
}

/*==================== BASE ====================*/


ul{
  list-style: none;
}

img{
  max-width: 100%;
  height: auto;
}

/*==================== REUSABLE CSS CLASSES ====================*/

.grid{
    display: grid;
}

/*==================== CARD PRICING ====================*/
.card{
    padding: 3rem 0;

    &__container{
        gap: 3rem 1.25rem;
    }

    &__content{
        position: relative;
        background-color: var(--container-color);
        padding: 2rem 1.5rem 2.5rem;
        border-radius: 1.75rem;
        box-shadow: 0 12px 24px hsla(var(--hue-color), 61%, 16%, .10);
        transition: .4s;
        margin-top: 24px;
        margin-bottom: 24px;
        width: 320px;

        &:hover{
            box-shadow: 0 16px 24px hsla(var(--hue-color), 61%, 16%, .15);
        }
    }
    &__header{
        &-img{
            width: 30px;
            height: 30px;
        }
        &-circle{
            width: 40px;
            height: 40px;
            background-color: var(--first-color-lighter);
            border-radius: 50%;
            margin-bottom: var(--mb-1);
            place-items: center;
        }
        &-subtitle{
            display: block;
            font-size: var(--smaller-font-size);
            color: var(--text-color-light);
            text-transform: uppercase;
            margin-bottom: var(--mb-0-25);
        }
        &-title{
            font-size: var(--biggest-font-size);
            color: var(--title-color);
            margin-bottom: var(--mb-1);
        }
    }
    &__pricing{
        position: absolute;
        background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
        width: 60px;
        height: 88px;
        right: 1.5rem;
        top: -1rem;
        padding-top: 1.25rem;
        text-align: center;

        &-number{
            font-family: var(--pricing-font);
        }
        &-symbol{
            font-size: var(--smaller-font-size);
        }
        &-number{
            font-size: var(--h2-font-size);
        }
        &-month{
            display: block;
            font-size: var(--tiny-font-size);
        }
        &-number,
        &-month{
            color: var(--white-color);
        }

        &::after,
        &::before{
            content: '';
            position: absolute;
        }
        &::after{
            width: 100%;
            height: 14px;
            background-color: var(--white-color);
            left: 0;
            bottom: 0;
            clip-path: polygon(0 100%, 50% 0, 100% 100%);
        }
        &::before{
            width: 14px;
            height: 16px;
            background-color: var(--first-color-alt);
            top: 0;
            left: -14px;
            clip-path: polygon(0 100%, 100% 0, 100% 100%);
        }
    }
    &__list{
        row-gap: .5rem;
        margin-bottom: var(--mb-2);

        &-item{
            display: flex;
            align-items: center;
        }
        &-icon{
            font-size: 1.5rem;
            color: var(--first-color);
            margin-right: var(--mb-0-5);
        }
    }
    &__button{
        padding: 1.25rem;
        border: none;
        font-size: var(--normal-font-size);
        border-radius: .5rem;
        background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
        color: var(--white-color);
        cursor: pointer;
        transition: .4s;

        &:hover{
            box-shadow: 0 12px 24px hsla(var(--hue-color), 97%, 54%, .2);
        }
    }
}
`;

export { html, style , to };