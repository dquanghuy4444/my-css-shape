const to = `instagram-icon`;

const html = 
`
<div className="insta-logo">
  <div className="camera">
      <div className="lens"></div>
      <div className="flash"></div>
  </div>
</div>
`;

const style = 
`.insta-logo {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%);
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.camera {
  width: 65%;
  height: 65%;
  border: 12px solid white;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.lens {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 12px solid white;
}

.flash {
  width: 12%;
  height: 12%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  top: 11%;
  right: 11%;
}
`;

export { html, style , to };