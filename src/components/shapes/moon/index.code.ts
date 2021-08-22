const to = `moon`;

const html = 
`<div className="moon"></div>
`;

const style = 
`.moon {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  background: radial-gradient(30px circle at 100px 100px,
    #CDD0CB 50%,
    transparent 51%),
    radial-gradient(40px circle at 170px 150px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(25px circle at 120px 5px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(25px circle at 120px 5px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(20px circle at 42px 165px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(40px circle at 165px 40px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(60px circle at 15px 110px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(10px circle at 130px 180px,
      #CDD0CB 50%,
      transparent 51%),
    radial-gradient(20px circle at 70px 30px,
      #CDD0CB 50%,
      transparent 51%);
  background-color: #E8EAE6;
}
`;

export { html, style , to };