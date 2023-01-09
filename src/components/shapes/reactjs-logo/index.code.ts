const to = `reactjs-logo`;

const html = `
<div className='reactjs-logo'>
<div className="ball"></div>
<div className="ellipse ellipse1"></div>
<div className="ellipse ellipse2"></div>
<div className="ellipse ellipse3"></div>
</div>
`;

const style = `
.reactjs-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
  animation: roll 15s linear 0.5s infinite;
}

.ball{
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background-color:#5ed3f3;
}

.ellipse {
  position: absolute;
  width: 4vw;
  height: 12vw;
  border-radius: 50%;
  border: 0.6vw solid #5ed3f3;
}

.ellipse1{
  transform: rotate(30deg)
}

.ellipse2{
  transform: rotate(-30deg)
}

.ellipse3{
  transform: rotate(90deg)
}


@keyframes roll{
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
}
`;

export { html, style, to };
