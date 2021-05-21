const html = 
`
<div className="image-frame">
  <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
</div>
<div className="image-frame">
  <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
</div>
<div className="image-frame">
  <img src="https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
</div>
`;

const style = 
`
.image-frame {
  width: 200px;
  margin-right: 10px;
  overflow: hidden;
}

img {
  width: 200px;
}

img:hover {
  transform: scale(1.3);
  transition: 3s;
}
`;

export { html, style };