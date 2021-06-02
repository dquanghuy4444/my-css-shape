const to = `skeleton-loader`;

const html = 
`
<div className="skeleton-loader__container">
  <div className="placeholder title"></div>
  <div className="placeholder content"></div>
</div>
`;

const style = 
`
.skeleton-loader__container {
  width: 300px;
  background: #eee;
  display: block;
  padding: 10px;

  .title {
    width: 80%;
    min-height: 20px;
    margin-bottom: 10px;
  }
  
  .content {
    width: 100%;
    min-height: 60px;
  }
  
  .placeholder {
    position: relative;
    overflow: hidden;
    
    background: #ccc;
    border-radius: 3px;

      
    &::after{
      content: "";
      position: absolute;
    
      height: 100%;
      width: 100px;
      left: -100px;
      top: 0;
    
      background: linear-gradient(to right, transparent, #ffffff70, transparent);
      animation: reflect 800ms ease-out infinite;
    }
  }
  
  @keyframes reflect {
    to {
      left: calc(100% + 100px);
    }
  }
}
`;

export { html, style , to };