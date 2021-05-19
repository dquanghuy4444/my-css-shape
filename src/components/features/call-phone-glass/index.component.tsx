import "./index.scss";

function IndexComp(){
    return (
        <section className="call-phone-glass">
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
    )
}

export default IndexComp;