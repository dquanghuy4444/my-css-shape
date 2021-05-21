import "./index.scss";

function IndexComp(){
    return (
        <div className="shape-container column">
            <div>
                <p>Using inline-block elemets</p>
                <div className="box">
                    <img src="https://picsum.photos/id/1/180/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
                <div className="box">
                    <img src="https://picsum.photos/id/1/250/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
                <div className="box">
                    <img src="https://picsum.photos/id/1/300/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
            </div>

            <div>
                <p>Using float elemets</p>
                <div className="box f">
                    <img src="https://picsum.photos/id/1/180/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
                <div className="box f">
                    <img src="https://picsum.photos/id/1/250/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
                <div className="box f">
                    <img src="https://picsum.photos/id/1/300/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
            </div>

            <div>
                <p>Using table elemets</p>
                <div className="box t">
                    <img src="https://picsum.photos/id/1/200/100"></img>
                    <h2>Lorem ipsum dolor silert</h2>
                </div>
            </div>

            <div>
                <p>Inside a flexbox container</p>
                <div style={{display:"flex"}}>
                    <div className="box">
                        <img src="https://picsum.photos/id/1/180/100"></img>
                        <h2>Lorem ipsum dolor silert</h2>
                    </div>

                    <div className="box">
                        <img src="https://picsum.photos/id/1/250/100"></img>
                        <h2>Lorem ipsum dolor silert</h2>
                    </div>

                    <div className="box">
                        <img src="https://picsum.photos/id/1/300/100"></img>
                        <h2>Lorem ipsum dolor silert</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IndexComp;