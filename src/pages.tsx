import BphoneIconComp , { html as htmlBphoneIcon, style as styleBphoneIcon }  from "./components/shapes/bphone-icon";
import BeeComp , { html as htmlBee, style as styleBee }  from "./components/shapes/bee";
import HippoComp , { html as htmlHippo, style as styleHippo }  from "./components/shapes/hippo";
import TriangleComp , { html as htmlTriangle, style as styleTriangle }  from "./components/shapes/triangle";
import ArrowComp , { html as htmlArrow, style as styleArrow }  from "./components/shapes/arrow";
import TrapezoidComp , { html as htmlTrapezoid, style as styleTrapezoid }  from "./components/shapes/trapezoid";
import ParallelogramComp , { html as htmlParallelogram, style as styleParallelogram } from "./components/shapes/parallelogram";
import HeartComp , { html as htmlHeart, style as styleHeart } from "./components/shapes/heart";
import CanvasComp , { html as htmlCanvas, style as styleCanvas } from "./components/shapes/canvas";
import PaperWithTapedEdgesComp , { html as htmlPaperWithTapedEdges, style as stylePaperWithTapedEdges } from "./components/shapes/paper-with-taped-edges";

import CallPhoneGlassComp , { html as htmlCallPhoneGlass, style as styleCallPhoneGlass } from "./components/features/call-phone-glass";
import LayoutCardResponsiveComp , { html as htmlLayoutCardResponsive, style as styleLayoutCardResponsives } from "./components/features/layout-card-responsive";
import ZoomHoverComp , { html as htmlZoomHover, style as styleZoomHover } from "./components/features/zoom-hover";

import FlexMultiRowComp , { html as htmlFlexMultiRow, style as styleFlexMultiRow } from "./components/tips/flex-multi-row";


enum GROUP_PAGE{
    SHAPE=1,
    FEATURE=2,
    TIP=3,
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
        to:"/canvas",
        text:"Canvas",
        comp: <CanvasComp></CanvasComp>,
        html:htmlCanvas,
        style:styleCanvas,
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
        to:"/paper-with-taped-edges",
        text:"Paper With Taped Edges",
        comp: PaperWithTapedEdgesComp,
        html:htmlPaperWithTapedEdges,
        style:stylePaperWithTapedEdges,
        group:GROUP_PAGE.SHAPE,
    },
    {
        to:"/flex-multi-row",
        text:"Flex Multi Row",
        comp: FlexMultiRowComp,
        html:htmlFlexMultiRow,
        style:styleFlexMultiRow,
        group:GROUP_PAGE.TIP,
    },
    {
        to:"/layout-card-responsive",
        text:"Layout Card Responsive ",
        comp: LayoutCardResponsiveComp,
        html:htmlLayoutCardResponsive,
        style:styleLayoutCardResponsives,
        group:GROUP_PAGE.FEATURE,
    },
    {
        to:"/call-phone-glass",
        text:"Call Phone Glass ",
        comp: CallPhoneGlassComp,
        html:htmlCallPhoneGlass,
        style:styleCallPhoneGlass,
        group:GROUP_PAGE.FEATURE,
    },
    {
        to:"/zoom-hover",
        text:"Zoom Hover ",
        comp: ZoomHoverComp,
        html:htmlZoomHover,
        style:styleZoomHover,
        group:GROUP_PAGE.FEATURE,
    },
]

export { pages , GROUP_PAGE };