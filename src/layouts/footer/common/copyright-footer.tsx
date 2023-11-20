import { FC } from "react";
import SocialMedia from "./SocialMedia";

const CopyRightFooter: FC = () => {
  return (
    <>
      <div className="col-xl-6 col-md-6 col-sm-12 d-flex align-items-center gap-5">
        <div className="">
          <span className="text-white fw-bolder">&#169; 2023 lbyk.com</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="text-white fw-bolder">Company</span>
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "white",
              color: "white",
            }}
          />
          <span className="text-white fw-bolder">Privacy</span>
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "white",
              color: "white",
            }}
          />
          <span className="text-white fw-bolder">Terms & Condition</span>
        </div>
      </div>
      <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
        <div className="footer-social">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default CopyRightFooter;
