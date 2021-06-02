const to = `card-hover`;

const html = 
`
<div className="card-hover__container">
  <div className="card-item">
      <img
      src="https://lh3.googleusercontent.com/-h9Vw01ffbKY/YGnJU35eHBI/AAAAAAAACAE/FbXDvjOc5ZojyWTbxkR6zDqG3dTdCNimgCLcBGAsYHQ/1.jpg"
      alt=""
      />
      <div className="card-details">
      <h1>Card 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
  </div>
</div>
`;

const style = 
`
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

.card-hover__container {

  .card-item {
    position: relative;

    &:hover .card-details {
      opacity: 1;
      bottom: 10px;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  img {
    height: 250px;
    width: 300px;
    transition: 0.4s ease-in-out all;
  }
  
  .card-details {
    position: absolute;
    padding: 10px 5px;
    bottom: 0px;
    opacity: 0;
    transition: 0.4s ease-in-out all;

    h1 {
      font-size: 18px;
      margin: 2px 0;
    }

    p {
      font-size: 14px;
    }
  }
}
`;

export { html, style , to };