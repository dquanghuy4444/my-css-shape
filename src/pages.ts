import BphoneIconComp , { html as htmlBphoneIcon, style as styleBphoneIcon }  from "./components/bphone-icon";
import BeeComp , { html as htmlBee, style as styleBee }  from "./components/bee";
import HippoComp , { html as htmlHippo, style as styleHippo }  from "./components/hippo";
import TriangleComp , { html as htmlTriangle, style as styleTriangle }  from "./components/triangle";
import ArrowComp , { html as htmlArrow, style as styleArrow }  from "./components/arrow";
import TrapezoidComp , { html as htmlTrapezoid, style as styleTrapezoid }  from "./components/trapezoid";
import ParallelogramComp , { html as htmlParallelogram, style as styleParallelogram } from "./components/parallelogram";
import HeartComp , { html as htmlHeart, style as styleHeart } from "./components/heart";


const pages = [
    {
        to:"/bee",
        text:"Bee",
        comp: BeeComp,
        html:htmlBee,
        style:styleBee,
    },
    {
        to:"/bphone-icon",
        text:"Bphone Icon",
        comp: BphoneIconComp,
        html:htmlBphoneIcon,
        style:styleBphoneIcon,
    },
    {
        to:"/hippo",
        text:"Hippo",
        comp: HippoComp,
        html:htmlHippo,
        style:styleHippo,
    },
    {
        to:"/triangle",
        text:"Triangle",
        comp: TriangleComp,
        html:htmlTriangle,
        style:styleTriangle,
    },
    {
        to:"/arrow",
        text:"Arrow",
        comp: ArrowComp,
        html:htmlArrow,
        style:styleArrow,
    },
    {
        to:"/trapezoid",
        text:"Trapezoid",
        comp: TrapezoidComp,
        html:htmlTrapezoid,
        style:styleTrapezoid,
    },
    {
        to:"/parallelogram",
        text:"Parallelogram",
        comp: ParallelogramComp,
        html:htmlParallelogram,
        style:styleParallelogram,
    },
    {
        to:"/heart",
        text:"Heart",
        comp: HeartComp,
        html:htmlHeart,
        style:styleHeart,
    },
]

export { pages };