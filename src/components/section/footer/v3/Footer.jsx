import FooterBottom from "./footerBottom/FooterBottom";

import data from "../../../../assets/data/footer/footerDataV3";
import footerLogo from "../../../../assets/images/logo.png";
import btnArrow from "../../../../assets/images/blog/arrow-icon.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <div className="top-footer-content">
        <div className="container">
          <div className="row">
            {/*<div className="col-lg-4">
              <div className="footer_image">
                <a href="# ">
                  <img src={footerLogo} alt="riph nft footer logo" />
                </a>
                <p>
                  riph is great solution for launch your NFT for minting. It
                  uses a dictionary over 200 Latin words, combined with a
                  handful.
                </p>
              </div>
            </div>

            {/* link widgets  
            {data?.map((menu, i) => (
              <div key={i} className=" col-sm-6 col-md-3 col-lg-2 link-widgets">
                <div className="footer-menu">
                  <h5 className="menu-title">{menu.widgetName}</h5>
                  <ul className="menu-list">
                    {menu.items?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}*/}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <center>
            <div className="col-md-6 col-lg-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
              <div className="footer-menu footer_newsletter">
                <h1 className="menu-title">WILL YOU ASCEND?</h1>
                <h5 className="menu-title">Pre-Register now!</h5>
                <div className="form-box">
                  <input
                    type="text"
                    name="text"
                    placeholder="Email address"
                    required
                  />
                  <button>
                    <img src={btnArrow} alt="riph nft arrow" />
                  </button>
                </div>
              </div>
            </div>
            </center>
          </div>
        </div>
      </div>
      {/* footer bottom 
      <FooterBottom /> */}
    </FooterStyleWrapper>
  );
};

export default Footer;
