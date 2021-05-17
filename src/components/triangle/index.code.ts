const html = 
`<div className="triangle-up"></div>
<div className="triangle-right"></div>
<div className="triangle-down"></div>
<div className="triangle-left"></div>
<div className="triangle-topleft"></div>
<div className="triangle-bottomleft"></div>
<div className="triangle-bottomright"></div>
`;

const style = 
`.triangle-up{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}

.triangle-right{
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
}

.triangle-down{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
}

.triangle-left{
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid red;
  border-bottom: 50px solid transparent;
}

.triangle-topleft{
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
}

.triangle-bottomleft {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
}

.triangle-bottomright {
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
}
`;

export { html, style };