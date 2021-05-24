const to = `scroll-snap`;

const html = 
`
<div className="images-list">
  <img src="https://source.unsplash.com/250x250/?nature,water" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?food" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?laptop" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?phone" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?nature,water" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?food" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?laptop" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?phone" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
  <img src="https://source.unsplash.com/250x250/?cat" alt=""></img>
</div>
`;

const style = 
`
.images-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  // scroll-snap-type: y;
  scroll-snap-type: x mandatory;
  // mandatory : trình duyệt sẽ snap theo từng điểm scroll, giả sử scroll-snap-align là start thì trình duyệt sẽ scroll theo hướng bắt đầu của container
  //scroll-padding: 1rem;
  -webkit-overflow-scrolling: touch;

  img {
    scroll-snap-stop:always;
    // always: khi lướt nhanh qua container, container sẽ dừng ở từng element

    // scroll-snap-align: end;
    scroll-snap-align: start;
    // scroll-snap-align: center;
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }
}
`;

export { html, style , to };