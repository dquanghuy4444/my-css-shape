const html = 
`<div className="curved-arrow"></div>
`;

const style = 
`.curved-arrow {
  position: relative;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-right: 12px solid red;
  transform: rotate(10deg);
}

.curved-arrow:after {
  content: "";
  position: absolute;
  border: 0 solid transparent;
  border-top: 3px solid red;
  border-radius: 20px 0 0 0;
  top: -18px;
  left: -21px;
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
}
`;

export { html, style };