const to = `carrot`;

const html = 
`      <div className="carrot">
<div className="leave"></div>
<div className="root"></div>
</div>
`;

const style = 
`.carrot {
  display: inline-block;
  margin: 0 10px;
}

.root {
  position: relative;
  height: 100px;
  width: 40px;
  /* //background: #DB6400; */
  background: radial-gradient(20px 3px at 10px 10px, #DB6400 85%, transparent 86%),
    radial-gradient(15px 2px at 25px 30px, #DB6400 85%, transparent 86%),
    radial-gradient(15px 2px at 0px 55px, #DB6400 85%, transparent 86%),
    radial-gradient(18px 2px at 32px 75px, #DB6400 85%, transparent 86%);
  background-color: #FFA62B;
  z-index: 2;
  border-radius: 30% 30% 70% 70%;
  margin-top: -5px;
}
.leave {
  position: relative;
  width: 10px;
  height: 30px;
  background-color: #A0C334;
  border-radius: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.leave:before {
  content: '';
  position: absolute;
  width: 10px;
  height: 30px;
  background-color: #A0C334;
  border-radius: 50%;
  top: 0;
  left: -10px;
  z-index: 1;
  transform: rotate(-18deg);
}
.leave:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 30px;
  background-color: #A0C334;
  border-radius: 50%;
  top: 0;
  right: -10px;
  z-index: 1;
  transform: rotate(18deg);
}
`;

export { html, style , to };