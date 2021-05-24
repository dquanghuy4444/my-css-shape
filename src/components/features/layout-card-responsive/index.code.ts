const to = `layout-card-responsive`;

const html = 
`
<div className="card">
  <h3 className="card__title">Lorem, ipsum dolor</h3>
  <div className="card__avatar">
    <img src="https://www.baohanam.com.vn/DATA/0/2019/09/anh_di_san-16_57_57_677.jpg" alt="" />
  </div>

  <div className="card__description">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate, doloremque expedita, fugit esse totam veniam ab maxime consectetur nesciunt fugiat, quis hic tempora temporibus beatae laborum cumque qui! Accusamus.
  </div>

  <a href="" className="card__button">Read more</a>
</div>
`;

const style = 
`
img {
  max-width: 100%;
  vertical-align: middle;
}

.card {
  position: relative;
  width: 700px;
  box-shadow: 0px 14px 80px rgba(#000, 0.2);
  padding: 50px 50px 50px 140px;
  background: #fff;
  border-radius: 20px;
  
  &__avatar {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 220px;
    border-radius: 20px;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    overflow: hidden;
  }
  
  &__title {
    padding: 10px 0;
    
    a {
      color: #5D4037;
      font-size: 30px;
      font-weight: 600;
      line-height: 1.35;
      text-decoration: none;
    }
  }
  
  &__description {
    margin: 10px 0;
    color: #333;
    line-height: 1.35;
  }
  
  &__button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 25px;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    color: #fff;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border-radius: 50px;
    box-shadow: 0px 14px 60px rgba(252, 56, 56, 0.4);
  }
}

@media screen and (max-width: 640px) {
  .card {
    padding: 20px;
    
    &__avatar {
      width: 80%;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }
    
    &__description {
      margin: 20px 0;
    }
    
    &__button {
      display: block;
    }
  }
}
`;

export { html, style , to };