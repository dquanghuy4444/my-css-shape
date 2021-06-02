const to = `mark-image`;

const html = 
`
<img alt="" src="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?cs=srgb&dl=dramatic-evening-hd-wallpaper-36744.jpg&fm=jpg" />

`;

const style = 
`
.mark-image__container{
  
  img {
    width: 1000px;
    -webkit-mask-image: radial-gradient(circle at 50%, black 50%, rgba(0, 0, 0, 0.2) 10%);
    mask-image: radial-gradient(circle at 50%, black 50%, rgba(0, 0, 0, 0.2) 10%);
  }
}
`;

export { html, style , to };