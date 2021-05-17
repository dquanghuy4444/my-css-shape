import BphoneIconComp , { html as htmlBphoneIcon, style as styleBphoneIcon }  from "./components/bphone-icon";
import BeeComp , { html as htmlBee, style as styleBee }  from "./components/bee";
import HippoComp , { html as htmlHippo, style as styleHippo }  from "./components/hippo";
import TriangleComp , { html as htmlTriangle, style as styleTriangle }  from "./components/triangle";
import ArrowComp , { html as htmlArrow, style as styleArrow }  from "./components/arrow";
import TrapezoidComp , { html as htmlTrapezoid, style as styleTrapezoid }  from "./components/trapezoid";
import ParallelogramComp , { html as htmlParallelogram, style as styleParallelogram } from "./components/parallelogram";
import HeartComp , { html as htmlHeart, style as styleHeart } from "./components/heart";
import FlexMultiRowComp , { html as htmlFlexMultiRow, style as styleFlexMultiRow } from "./components/flex-multi-row";
import LayoutCardResponsiveComp , { html as htmlLayoutCardResponsive, style as styleLayoutCardResponsives } from "./components/layout-card-responsive";


enum GROUP_PAGE{
    SHAPE=1,
    FEATURE=2,
}

const pages = [
    {
        to:"/bee",
        text:"Bee",
        comp: BeeComp,
        html:htmlBee,
        style:styleBee,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/bphone-icon",
        text:"Bphone Icon",
        comp: BphoneIconComp,
        html:htmlBphoneIcon,
        style:styleBphoneIcon,
        group:GROUP_PAGE.SHAPE,

    },
    {
        to:"/hippo",
        text:"Hippo",
        comp: HippoComp,
        html:htmlHippo,
        style:styleHippo,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/triangle",
        text:"Triangle",
        comp: TriangleComp,
        html:htmlTriangle,
        style:styleTriangle,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/arrow",
        text:"Arrow",
        comp: ArrowComp,
        html:htmlArrow,
        style:styleArrow,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/trapezoid",
        text:"Trapezoid",
        comp: TrapezoidComp,
        html:htmlTrapezoid,
        style:styleTrapezoid,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/parallelogram",
        text:"Parallelogram",
        comp: ParallelogramComp,
        html:htmlParallelogram,
        style:styleParallelogram,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/heart",
        text:"Heart",
        comp: HeartComp,
        html:htmlHeart,
        style:styleHeart,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/flex-multi-row",
        text:"Flex Multi Row",
        comp: FlexMultiRowComp,
        html:htmlFlexMultiRow,
        style:styleFlexMultiRow,
        group:GROUP_PAGE.FEATURE,
    },
    {
        to:"/layout-card-responsive",
        text:"Layout Card Responsive ",
        comp: LayoutCardResponsiveComp,
        html:htmlLayoutCardResponsive,
        style:styleLayoutCardResponsives,
        group:GROUP_PAGE.FEATURE,
    },
]

export { pages , GROUP_PAGE };