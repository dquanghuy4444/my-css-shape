const to = `text-responsive-follow-image-size`;

const html = 
`
<div>
<p>Using inline-block elemets</p>
<div className="box">
    <img src="https://picsum.photos/id/1/180/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
<div className="box">
    <img src="https://picsum.photos/id/1/250/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
<div className="box">
    <img src="https://picsum.photos/id/1/300/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
</div>

<div>
<p>Using float elemets</p>
<div className="box f">
    <img src="https://picsum.photos/id/1/180/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
<div className="box f">
    <img src="https://picsum.photos/id/1/250/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
<div className="box f">
    <img src="https://picsum.photos/id/1/300/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
</div>

<div>
<p>Using table elemets</p>
<div className="box t">
    <img src="https://picsum.photos/id/1/200/100"></img>
    <h2>Lorem ipsum dolor silert</h2>
</div>
</div>

<div>
<p>Inside a flexbox container</p>
<div style={{display:"flex"}}>
    <div className="box">
        <img src="https://picsum.photos/id/1/180/100"></img>
        <h2>Lorem ipsum dolor silert</h2>
    </div>

    <div className="box">
        <img src="https://picsum.photos/id/1/250/100"></img>
        <h2>Lorem ipsum dolor silert</h2>
    </div>

    <div className="box">
        <img src="https://picsum.photos/id/1/300/100"></img>
        <h2>Lorem ipsum dolor silert</h2>
    </div>
</div>
</div>
`;

const style = 
`
.box {
  display: inline-block;
  border:1px solid red;
  margin:5px;
  text-align:center;

  h2 {
    width: 0;
    min-width: 100%;
  }
}

.f {
  float:left;
}

.t {
  display:table;
  margin:auto;
}

p {
  clear:both;
}
`;

export { html, style , to };