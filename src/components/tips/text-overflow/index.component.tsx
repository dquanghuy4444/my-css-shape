import "./index.scss";

function IndexComp(){
    return (
        <div className="shape-container">
            <p className="overflow">This is an example text showing nothing interesting but the truncated content via text-overflow shorthand property.</p>
        
            <div className="flex-parent has-child">
                <div className="flex-child">
                    <h2>This is a long string that is OK to truncate please and thank you.This is a long string that is OK to truncate please and thank youThis is a long string that is OK to truncate please and thank you.This is a long string that is OK to truncate please and thank</h2>
                </div>
            </div>
        </div>
    )
}

export default IndexComp;