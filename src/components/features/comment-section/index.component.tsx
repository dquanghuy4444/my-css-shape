import "./index.scss";
import { getUrlPublicImage } from "ultis/index"

function IndexComp(){
    return (
        <div className="shape-container">
            <ul className="comment-section">
                <li className="comment user-comment">
                    <div className="info">
                        <a href="#">Anie Silverston</a>
                        <span>4 hours ago</span>
                    </div>
                    <a className="avatar" href="#">
                        <img src={getUrlPublicImage("comment-section" , "avatar_user_1.jpg")} width="35" alt="Profile Avatar" title="Anie Silverston" />
                    </a>
                    <p>Suspendisse gravida sem?</p>
                </li>

                <li className="comment author-comment">
                    <div className="info">
                        <a href="#">Jack Smith</a>
                        <span>3 hours ago</span>
                    </div>
                    <a className="avatar" href="#">
                        <img src={getUrlPublicImage("comment-section" , "avatar_author.jpg")} width="35" alt="Profile Avatar" title="Jack Smith" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida sem sit amet molestie portitor.</p>
                </li>

                <li className="comment user-comment">
                    <div className="info">
                        <a href="#">Bradley Jones</a>
                        <span>1 hour ago</span>
                    </div>

                    <a className="avatar" href="#">
                        <img src={getUrlPublicImage("comment-section" , "avatar_user_2.jpg")} width="35" alt="Profile Avatar" title="Bradley Jones" />
                    </a>

                    <p>Suspendisse gravida sem sit amet molestie portitor?</p>
                </li>

                <li className="comment author-comment">
                    <div className="info">
                        <a href="#">Jack Smith</a>
                        <span>1 hour ago</span>
                    </div>
                    <a className="avatar" href="#">
                        <img src={getUrlPublicImage("comment-section" , "avatar_author.jpg")} width="30%" alt="Profile Avatar" title="Jack Smith" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisee gravida sem sit amet molestie porttitor.</p>
                </li>

                <li className="write-new">
                    <form action="#" method="post">
                        <textarea placeholder="Write your comment here" name="comment"></textarea>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default IndexComp;