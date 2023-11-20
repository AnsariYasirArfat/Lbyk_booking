import React from "react";
import FooterContent from "./common/footer-content";
import CopyRightFooter from "./common/copyright-footer";

const FooterComponent: React.FC<IFooterComponentProps> = ({
  place,
  footerClass,
}) => {
  return (
    <footer
      className={`${footerClass && footerClass}`}
      style={{ height: "7vh", backgroundColor: "#AE926A" }}
    >
      {/* <FooterContent place={place} /> */}
      <div
        style={{ height: "100%" }}
        className="sub-footer container-fluid px-5 row"
      >
        <CopyRightFooter />
      </div>
    </footer>
  );
};

export default FooterComponent;
