const to = `hippo`;

const html = 
`<div className="hippo">
  <div className="ear"></div>
  <div className="nose"></div>
</div>
`;

const style = 
`.hippo{
  background: #f55f55;
  width: 130px;
  height: 150px;
  border-radius:50px;
  -webkit-border-radius:50px;
  -moz-border-radius:50px;
  -ms-border-radius:50px;
  -o-border-radius:50px;
  position: relative;
  z-index: 1;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    background: #000;
    width: 10px;
    height: 10px;
    border-radius:50%  ;
    -webkit-border-radius:50%  ;
    -moz-border-radius:50%  ;
    -ms-border-radius:50%  ;
    -o-border-radius:50%  ;
    top: 50px;
    left: 25px;
    -webkit-box-reflect: right 60px;
  }

  &:after {
    background: #a64942;
    width: 150px;
    height:100px;
    border-radius: 70px 70px 55px 55px;
    -webkit-border-radius: 70px 70px 55px 55px;
    -moz-border-radius: 70px 70px 55px 55px;
    -ms-border-radius: 70px 70px 55px 55px;
    -o-border-radius: 70px 70px 55px 55px;
    left: 50%;
    bottom: -20px;
    transform:translateX(-50%);
    -webkit-transform:translateX(-50%);
    -moz-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    -o-transform:translateX(-50%);
  }
} 

.ear{
  position: relative;


  &::after,
  &::before{
    content:"";
    position: absolute;
    background: #000;
    width: 25px;
    height: 15px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border:5px solid #f55f55;
    top: 4px;
  }

  &::before{
    left: 0;
    transform:rotate(45deg)  ;
    -webkit-transform:rotate(45deg)  ;
    -moz-transform:rotate(45deg)  ;
    -ms-transform:rotate(45deg)  ;
    -o-transform:rotate(45deg)  ;
    z-index: -1;
  }

  &::after{
    right: 0;
    transform:rotate(-45deg)  ;
    -webkit-transform:rotate(-45deg)  ;
    -moz-transform:rotate(-45deg)  ;
    -ms-transform:rotate(-45deg)  ;
    -o-transform:rotate(-45deg)  ;
    z-index: -1;
  }
}

.nose{
  position: relative;

  &::after,
  &::before{
    content:"";
    position: absolute;
    background: #000;
    width: 30px;
    height: 20px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    top: 100px;
    z-index: 1;
  }
  
  &::before{
    left: 0;
    transform:rotate(145deg)  ;
    -webkit-transform:rotate(145deg)  ;
    -moz-transform:rotate(145deg)  ;
    -ms-transform:rotate(145deg)  ;
    -o-transform:rotate(145deg)  ;
  }
  
  &::after{
    right: 0;
    transform:rotate(-145deg)  ;
    -webkit-transform:rotate(-145deg)  ;
    -moz-transform:rotate(-145deg)  ;
    -ms-transform:rotate(-145deg)  ;
    -o-transform:rotate(-145deg)  ;
  }
}
`;

export { html, style , to };