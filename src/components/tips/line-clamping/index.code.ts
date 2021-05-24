const to = `line-clamping`;

const html = 
`
<div className="module line-clamp">
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</div>
`;

const style = 
`
.module {
  width: 250px;
  margin: 0 0 1em 0;
  overflow: hidden;
  
  p {
    margin: 0;
  }
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}
`;

export { html, style , to };