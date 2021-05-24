const to = `text-overflow`;

const html = 
`
<p className="overflow">This is an example text showing nothing interesting but the truncated content via text-overflow shorthand property.</p>

<div className="flex-parent has-child">
  <div className="flex-child">
      <h2>This is a long string that is OK to truncate please and thank you.This is a long string that is OK to truncate please and thank youThis is a long string that is OK to truncate please and thank you.This is a long string that is OK to truncate please and thank</h2>
  </div>
</div>
`;

const style = 
`
.overflow {
  width: 10em;
  outline: 1px solid #000;
  margin: 0 0 2em 0;

  text-overflow: ellipsis; // Cắt một đoạn text và thay thế bằng dấu ...
  white-space: nowrap; // Ngăn k cho đoạn văn bản xuống dòng
  overflow: hidden; // Ẩn đoạn text bị thừa

  // những đoạn văn bản không có space các đoạn text cứ viết liền với nhau
  word-break: break-all; // Một từ sẽ tự động ngắt ở bất kỳ chữ nào để xuống dòng.
  word-wrap: break-word; // Những từ quá dài sẽ xuống dòng.
}

.flex-parent {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  width: 200px;

  h2 {
    font-size: 1rem;
    font-weight: normal;
  }
}

.flex-child {
  flex: 1;
  min-width: 0; /* or some value */
  
  h2 {
    overflow: hidden;
    white-space:  nowrap;
    text-overflow: ellipsis;
  }
}

`;

export { html, style , to };