import * as bphoneIcon from "./components/shapes/bphone-icon";
import * as bee from "./components/shapes/bee";
import * as loveLetter from "./components/shapes/love-letter";
import * as diamond from "./components/shapes/diamond";
import * as hippo from "./components/shapes/hippo";
import * as triangle from "./components/shapes/triangle";
import * as arrow from "./components/shapes/arrow";
import * as trapezoid from "./components/shapes/trapezoid";
import * as parallelogram from "./components/shapes/parallelogram";
import * as heart from "./components/shapes/heart";
import * as forkingCrazy from "./components/shapes/forking-crazy";
import * as doorKnob from "./components/shapes/door-knob";
import * as ukelele from "./components/shapes/ukelele";
import * as paperWithTapedEdges from "./components/shapes/paper-with-taped-edges";

import * as layoutCardResponsives from "./components/features/layout-card-responsive";
import * as zoomHover from "./components/features/zoom-hover";
import * as scrollSnap from "./components/features/scroll-snap";
import * as clipPath from "./components/features/clip-path";
import * as shapeOutside from "./components/features/shape-outside";
import * as filterImages from "./components/features/filter-images";
import * as skeletonLoader from "./components/features/skeleton-loader";
import * as shadowImages from "./components/features/shadow-images";
import * as cardHover from "./components/features/card-hover";
import * as markImage from "./components/features/mark-image";
import * as pricingCard from "./components/features/pricing-card";
import * as skewedBorderCard from "./components/features/skewed-border-card";
import * as commentSection from "./components/features/comment-section";
import * as textResponsiveFollowImageSize from "./components/features/text-responsive-follow-image-size";

import * as flexMultiRow from "./components/tips/flex-multi-row";
import * as lineClamping from "./components/tips/line-clamping";
import * as textOverflow from "./components/tips/text-overflow";


const shapeItems: any = [
    bphoneIcon, bee, hippo, triangle, arrow, trapezoid, parallelogram, heart, paperWithTapedEdges, forkingCrazy,
    doorKnob, ukelele, diamond, loveLetter
]

const featureItems: any = [
    layoutCardResponsives, zoomHover, textResponsiveFollowImageSize, scrollSnap, clipPath, trapezoid, skeletonLoader,
    shapeOutside, filterImages, shadowImages, cardHover, markImage, skewedBorderCard, pricingCard, commentSection
];

const tipItems: any = [
    flexMultiRow,
    lineClamping,
    textOverflow
];

enum GROUP_PAGE {
    SHAPE = 1,
    FEATURE = 2,
    TIP = 3,
}

const pages: any[] = [];

const toTitleCase = (phrase: any) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const pushItemToPages = (groupPage: GROUP_PAGE, code: any) => {
    const name = toTitleCase(code.to.replaceAll("-", " "));
    const item = {
        to: code.to,
        text: name,
        comp: code.comp,
        html: code.html,
        style: code.style,
        group: groupPage,
    }

    pages.push(item);
}

featureItems.forEach((item: any) => pushItemToPages(GROUP_PAGE.FEATURE, item));
tipItems.forEach((item: any) => pushItemToPages(GROUP_PAGE.TIP, item));
shapeItems.forEach((item: any) => pushItemToPages(GROUP_PAGE.SHAPE, item));


export { pages, GROUP_PAGE };