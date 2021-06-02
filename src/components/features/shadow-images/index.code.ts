const to = `shadow-images`;

const html = 
`
<div className="shadow-images__container">
<div className="item">
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/15633591/media/2c682c2a5a9546f8e3ddb40aff08a59a.jpg?compress=1&resize=1000x750" className="item-image"/>
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/15633591/media/2c682c2a5a9546f8e3ddb40aff08a59a.jpg?compress=1&resize=1000x750" className="item-image-shadow"/>
</div>
<div className="item">
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/11083446/media/d1847ad7c27bc462b30cfec9f176c8ca.jpg?compress=1&resize=1000x750" className="item-image"/>
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/11083446/media/d1847ad7c27bc462b30cfec9f176c8ca.jpg?compress=1&resize=1000x750" className="item-image-shadow"/>
    </div>
<div className="item">
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/15613077/media/db14376e9766fe4b75cb162f29044de7.jpg?compress=1&resize=1000x750" className="item-image"/>
    <img alt="" src="https://cdn.dribbble.com/users/161959/screenshots/15613077/media/db14376e9766fe4b75cb162f29044de7.jpg?compress=1&resize=1000x750" className="item-image-shadow"/>
</div>
</div>
`;

const style = 
`
.shadow-images__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 30px;

  img{
    display: block;
    max-width: 100%;
  }

  .item {
    position: relative;
    height: 300px;

    .item-image,
    .item-image-shadow{
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .item-image {
      z-index: 2;
      position: relative;
    }
    
    .item-image-shadow{
      position: absolute;
      top: 20px;
      left: 0;
      filter: blur(30px);
      transform: scale(0.95);  
    }
  }
}

`;

export { html, style , to };