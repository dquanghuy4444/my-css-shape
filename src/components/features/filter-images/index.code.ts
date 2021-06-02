const to = `filter-images`;

const html = 
`
<div className="filter-image__container">
  <img className="nofilter" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="blur" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="grayscale" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="brightness" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="sepia" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="saturate" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="invert" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
  <img className="huerotate" alt="" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" />
</div>
`;

const style = 
`
.filter-image__container img {
  max-width: 400px;
}

.blur {
  filter: blur(5px);
}

.grayscale {
  filter: grayscale(100%);
}

.brightness {
  filter: brightness(150%);
}

.saturate {
  filter: saturate(200%);
}

.invert {
  filter: invert(100%);
}

.huerotate {
  filter: hue-rotate(180deg);
}
`;

export { html, style , to };