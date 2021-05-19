import { useEffect } from "react";
import "./index.scss";

const IndexComp = () =>{
    
    useEffect(() =>{
        var c :any = document.getElementById("my-canvas-fill");
        var ctx = c.getContext("2d");
        // tô màu 
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,200,100); // 0,0 là tọa độ bắt đầu 
        // 200 là chiều rộng
        // 100 là chiều dài

        // vẽ đường thẳng
        // điểm bắt đầu
        ctx.moveTo(0,0);
        // điểm kết thúc
        ctx.lineTo(300,150);
        // hàm vẽ nét
        ctx.stroke();

        // vẽ đường tròn
        ctx.beginPath();
        ctx.arc(100,50,50,0,2*Math.PI); // 100,50 là tọa độ tâm
        // 50 là bán kính
        ctx.stroke(); // có thể dùng hàm fill();
    } , [])
    
    useEffect(() =>{
        var c :any = document.getElementById("my-canvas-text");
        var ctx = c.getContext("2d");

        // viết text
        ctx.font="30px Arial"; // 30px là fontsize , font-family
        ctx.strokeText("Hello World",10,50); // 10,50 là tọa độ điểm bắt đầu vẽ
        // Viết chữ trên ô canvas nhưng không tô màu chữ
        ctx.fillText("Hello World",20,100); //  Viết chữ trên ô canvas
    } , [])
    
    useEffect(() =>{
        var c :any = document.getElementById("my-canvas-img");
        var ctx = c.getContext("2d");

        var img:any=document.getElementById("img");
        img.width = "200";
        img.height = "100";
        ctx.drawImage(img,0,0); // 0,0 là tọa độ bắt đầu
    } , [])
    
    useEffect(() =>{
        var c :any = document.getElementById("my-canvas-radient");
        var ctx = c.getContext("2d");

        var grd=ctx.createRadialGradient(75,50,5,90,60,100);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white"); // Fill with gradient
        ctx.fillStyle=grd;
        ctx.fillRect(10,10,150,80);
    } , [])
    

    return (
        <div className="shape-container">
            <img id="img" style={{ display: "none" }} src="https://cdn1.tuoitre.vn/zoom/600_315/2019/5/8/avatar-publicitystill-h2019-1557284559744252594756-crop-15572850428231644565436.jpg" alt=""></img>
            <canvas id="my-canvas-fill" width="200" height="100"></canvas>
            <canvas id="my-canvas-text" width="200" height="100" style={{ border:"1px solid #000000" }}></canvas>
            <canvas id="my-canvas-img" width="200" height="100" style={{ border:"1px solid #000000" }}></canvas>
            <canvas id="my-canvas-radient" width="200" height="100" style={{ border:"1px solid #000000" }}></canvas>
        </div>
    )
}

export default IndexComp;