const html = 
`<div className="bphone-logo">
    <div className="body-bottom"></div>
    <div className="body-bottom-top-none"></div>
    <div className="body-bottom-right-none"></div>

    <div className="body-middle"></div>
    <div className="body-middle-top-none"></div>
    <div className="body-middle-right-none"></div>

    <div className="body-top"></div>
    <div className="body-top-top-none"></div>
    <div className="body-top-right-none"></div>

    <div className="rostrum"></div>
    <div className="rostrum-none"></div>

    <div className="eye"></div>

    <div className="head-left"></div>
    <div className="head-left-none"></div>
    <div className="head-right"></div>
    <div className="head-right-none"></div>
</div>
`;

const style = 
`$background-color: #da6144;
$logo-color: #fff;

.bphone-logo {
  position: relative;
  width: 250px;
  height: 250px;
  background: $background-color;
  overflow: hidden;
  border-radius: 27%;
  border: 2px solid $background-color;

  > div {
    position: absolute;
    background: $logo-color;

    &[class*="-none"] {
      background: $background-color;
    }
  }

  .body-bottom {
    top: -21px;
    left: 4px;
    width: 203px;
    height: 206px;
    border-radius: 296% 23%;
  }
  .body-bottom-top-none {
    top: -39px;
    left: 10px;
    width: 190px;
    height: 205px;
    border-radius: 280% 55%;
    transform: skew(340deg, 25deg);
  }
  .body-bottom-right-none {
    top: -30px;
    left: -18px;
    width: 50px;
    height: 500px;
    transform: skew(348deg, 33deg);
  }

  .body-middle {
    top: 45px;
    left: -16px;
    width: 190px;
    height: 99px;
    border-top-right-radius: 60% 68%;
    border-bottom-right-radius: 85% 100%;
    border-bottom-left-radius: 70% 100%;
  }

  .body-middle-top-none {
    top: -94px;
    left: 10px;
    width: 185px;
    height: 211px;
    transform: skew(327deg, 37deg);
    border-radius: 176% 141%;
  }
  .body-middle-right-none {
    top: -30px;
    left: -34px;
    width: 50px;
    height: 500px;
    transform: skew(348deg, 33deg);
  }

  .body-top {
    top: 41px;
    left: 23px;
    width: 156px;
    height: 84px;
    border-top-right-radius: 60% 68%;
    border-bottom-right-radius: 85% 100%;
    border-bottom-left-radius: 70% 100%;
  }
  .body-top-top-none {
    top: -66px;
    left: 19px;
    width: 151px;
    height: 149px;
    border-radius: 176% 130%;
    transform: skew(328deg, 51deg);
  }
  .body-top-right-none {
    top: 46px;
    left: -43px;
    width: 117px;
    height: 42px;
    transform: skew(326deg, 32deg);
  }
  .rostrum {
    background: none;
    width: 0;
    height: 0;
    border-top: 27px solid transparent;
    border-right: 6px solid $logo-color;
    border-bottom: 26px solid transparent;
    transform: skew(311deg, 62deg);
    top: 26%;
    left: 74%;
  }

  .rostrum-none {
    top: 33.5%;
    left: 67.5%;
    width: 8px;
    height: 35px;
    transform: rotate(221deg);
    border-top-right-radius: 150%;
    border-bottom-left-radius: 100%;
  }
  .eye {
    top: 35%;
    left: 64%;
    width: 13px;
    height: 7px;
    transform: rotate(305deg);
    border-radius: 50%;
  }
  .head-left {
    top: 28%;
    left: 53%;
    width: 21px;
    height: 18px;
    border-radius: 0 100%;
    transform: rotate(325deg);
  }
  .head-left-none {
    top: 26%;
    left: 52%;
    width: 21px;
    height: 19px;
    transform: rotate(315deg);
    border-radius: 0 100%;
  }
  .head-right {
    top: 27%;
    left: 61%;
    width: 21px;
    height: 21px;
    transform: rotate(397deg);
    border-radius: 100% 0;
  }
  .head-right-none {
    top: 27.1%;
    left: 64.7%;
    width: 11px;
    height: 27px;
    transform: rotate(422deg);
    border-radius: 100% 0;
  }
}
`;

export { html, style };