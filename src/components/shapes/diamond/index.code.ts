const to = `diamond`;

const html = 
`<div className="diamond">
  <span className="diamond-part"></span>
  <span className="diamond-part"></span>
  <span className="diamond-part"></span>
  <span className="diamond-part"></span>
</div>
`;

const style = 
`.diamond {
  position: relative;
  width: 200px;
  height: 200px;
  transform: rotate(45deg);
}

.diamond:after {
  content: '';
  height: 100%;
  width: 40px;
  background-image: linear-gradient(to right, transparent, white, transparent);
  position: absolute;
  top: 0;
  left: -5px;
  animation: twinkle 1.5s linear infinite;
  animation-fill-mode: backwards;
}

.diamond-part {
  position: absolute;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border-top: solid #FFA0A0;
  border-right: solid #FFBCBC;
  border-bottom: solid #FFE3E3;
  border-left: solid #FDF6F0;
  border-width: 50px;
}

.diamond-part:nth-child(2) {
  left: 100px;
}

.diamond-part:nth-child(3) {
  top: 100px;
}

.diamond-part:nth-child(4) {
  left: 100px;
  top: 100px;
}

.diamond-part:nth-child(1) {
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
}

@keyframes twinkle {
  0% {
    left: -5px;
  }

  30% {
    left: calc(100% + 5px);
  }

  31% {
    left: -5px;
  }
}
`;

export { html, style , to };