const to = `bee`;

const html = 
`<div className="bee"></div>`;

const style = 
`.bee{
  position: relative;
  background:#eff33c;
  width: 150px;
  height:75px;
  border-radius: 60px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  background:linear-gradient(
    to right,
    #191919 25px,
    #eff33c 25px 35px,
    #191919 35px 60px,
    #eff33c 60px 75px,
    #191919 75px 95px,
    #eff33c 95px 100%,
  );

  &::before,
  &::after{
    content:"";
    position:absolute;
  }

  &:before{
    background:#fff;
    width: 50%;
    height: 100%;
    border-radius:50% 50% 0 50%  ;
    -webkit-border-radius:50% 50% 0 50%  ;
    -moz-border-radius:50% 50% 0 50%  ;
    -ms-border-radius:50% 50% 0 50%  ;
    -o-border-radius:50% 50% 0 50%  ;
    transform:translateY(-100%)  ;
    -webkit-transform:translateY(-100%)  ;
    -moz-transform:translateY(-100%)  ;
    -ms-transform:translateY(-100%)  ;
    -o-transform:translateY(-100%)  ;
    -webkit-box-reflect: right;
  }

  &:after{
    background:#191919;
    width: 16px;
    height: 16px;
    border-radius:50%  ;
    -webkit-border-radius:50%  ;
    -moz-border-radius:50%  ;
    -ms-border-radius:50%  ;
    -o-border-radius:50%  ;
    top: 20%;
    right: 20px;
  }
}
`;

export { html, style , to };