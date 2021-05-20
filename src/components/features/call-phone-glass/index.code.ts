const html = 
`<section className="call-phone-glass">
<div className="card">
    <div className="face">
        <h3>Innocent Coder</h3>
        <h6>mobile</h6>
        <div className="icon-content">
            <div style={{textAlign:"center"}}>
                <i className="far fa-clock"></i>
                <h5>Remind me</h5>
            </div>
            <div style={{textAlign:"center"}}>
                <i className="fas fa-comment"></i>
                <h5>Message</h5>
            </div>
        </div>
        <div className="slide-content">
            <h5>Slide to answer </h5>
        </div>        
    </div>
</div>
</section>
`;

const style = 
`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}

.card::before{
    content: '';
    position: absolute;
    width: 170px;
    height: 170px;
    background: linear-gradient(#f00, #f0f);
    border-radius: 50%;
}

.card::before{
    bottom: 2%;
    left: 31%;
    background: linear-gradient(#0098f0, #0457d3);
}

.face{
    width: 250px;
    height: 485px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    background-color: rgba(255,255,255,0.05);
    filter: blur(0.2px);
    border-width: 0.1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.425);
}
.slide-content{
    width: 120px;
    height: 15px;
    padding: 12px 20px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    background-color: rgba(255,255,255,0.05);
    text-align: center;
    margin: 30px auto;
    cursor: pointer;
}
.face h3{

    font-weight: 300;
    font-size: 20px;
    text-align: center;
    margin-top: 100px;
}
.face h6{
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;
}
.icon-content{
    margin-top: 180px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon-content i{
    font-size: 14px;

}
h5{
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.5px;
}
`;

export { html, style };