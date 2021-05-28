const to = `clip-path`;

const html = 
`
<div className="ellipse">
  <img src="https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg" />
</div>

<div className="circle">
  <img src="https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg" />
</div>

<div className="polygon">
  <img src="https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg" />
</div>
`;

const style = 
`
img {
  width: 50%;
}

.ellipse img {
  clip-path: ellipse(200px 200px at 100px 100px);
}

.circle img {
  clip-path: circle(30%);  
}

.polygon img {
  clip-path: polygon(5% 5%, 100% 10%, 900% 75%, 75% 75%, 75% 100%, 60% 75%, 20% 80%);
}
`;

export { html, style , to };