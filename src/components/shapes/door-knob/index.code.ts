const to = `door-knob`;

const html = 
`<div className="stem"></div>
<div className="base"></div>
<div className="prong item-1 inner"></div>
<div className="prong item-2 inner"></div>
<div className="prong item-3 inner"></div>
<div className="prong item-4"></div>
`;

const style = 
`.stem{
  width: 20px;
  height: 50px;
  background:#060f55;
  position: absolute;
  bottom: 0;
}

.base{
  width: 140px;
  height:120px;
  background:#060f55;
  bottom: 45px;
  position: absolute;
  border-bottom-left-radius: 90%;
  border-bottom-right-radius: 90%;
}

.prong{
  width: 20px;
  height:120px;
  background-color: #060f55;
  position: absolute;
  bottom: 150px;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;

  &.item-1{
    left:calc(50% - 70px);
  }

  &.item-2{
    left:calc(50% - 30px);
  }

  &.item-3{
    left:calc(50% + 10px);
  }

  &.item-4{
    left:calc(50% + 50px);
  }

  &.inner{

    &::after{
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
      position: absolute;
      top: 95px;
      right: -20px;
    }
  }
}
`;

export { html, style , to };