import BphoneIconComp , { html as htmlBphoneIcon, style as styleBphoneIcon }  from "./components/bphone-icon";
import BeeComp , { html as htmlBee, style as styleBee }  from "./components/bee";
import HippoComp , { html as htmlHippo, style as styleHippo }  from "./components/hippo";


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
]

export { pages };