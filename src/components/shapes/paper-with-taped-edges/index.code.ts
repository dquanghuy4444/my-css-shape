const html = 
`<div className="paper pink">
  <div className="tape-section"></div>
  <p>drink more water</p>
  <div className="tape-section"></div>
  </div>
<div className="paper blue">
  <div className="top-tape"></div>
  <p>code more pens</p>
</div>
`;

const style = 
`:root {
  --pink: #ecb2ba;
  --pink-dark: #c6939a;
  --tape-gray: #dbd8be;
  --tape-edge-gray: #b7b49d;
  --transparent: rgba(255, 255, 255, 0);
}

.pink {
  --paper-color: var(--pink);
  --paper-dark: var(--pink-dark);
  --shadow-size: 1px;
  --transparent: rgba(236, 178, 186, 0);
}

.blue {
  --paper-color: #d5e0f9;
  --paper-dark: #c2d0ea;
  --shadow-size: 3px;
  --transparent: rgba(213, 224, 249, 0);
}

.paper {
  position: relative;
  background: linear-gradient(
      to bottom right,
      var(--paper-dark),
      20%,
      var(--transparent)
    ),
    var(--paper-color);
  min-width: 250px;
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Caveat", cursive;
  font-size: 2rem;
  box-shadow: var(--shadow-size) var(--shadow-size) 2px var(--paper-dark);
  margin: auto;
  margin-top: 50px;
}

.paper::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      var(--transparent),
      50%,
      var(--paper-dark),
      51%,
      var(--transparent)
    ),
    linear-gradient(
      to right,
      var(--transparent),
      50%,
      var(--paper-dark),
      51%,
      var(--transparent)
    );
}

.tape-section {
  position: absolute;
  width: 100%;
}

.top-tape {
  position: absolute;
  height: 4vmin;
  top: -5px;
  width: 110%;
  background-color: var(--tape-gray);
  border-right: 1px dotted var(--tape-edge-gray);
  border-left: 1px dotted var(--tape-edge-gray);
  opacity: 0.5;
}

.tape-section:first-of-type {
  top: 0;
}

.tape-section:last-of-type {
  bottom: 0;
}

.tape-section::before,
.tape-section::after {
  content: "";
  width: 10vmin;
  height: 4vmin;
  position: absolute;
  background-color: var(--tape-gray);
  opacity: 0.5;
  border-right: 1px dotted var(--tape-edge-gray);
  border-left: 1px dotted var(--tape-edge-gray);
}

.tape-section:last-of-type::after {
  transform: rotate(-45deg);
  right: -4vmin;
  top: -3vmin;
}

.tape-section:first-of-type::before {
  transform: rotate(-45deg);
  left: -4vmin;
}

.tape-section:first-of-type::after {
  transform: rotate(45deg);
  right: -4vmin;
  top: 0;
}

.tape-section:last-of-type::before {
  transform: rotate(45deg);
  left: -4vmin;
  bottom: 0;
}

`;

export { html, style };