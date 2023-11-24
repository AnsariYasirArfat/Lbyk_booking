"use client";

import { FC } from "react";
import SliderImage from "./slider-image";
import Rating from "@/components/common/rating";

const ImageSection: FC<IImageSection> = ({
  imagesection1,
  imagesection2,
  imagesection3,
}) => {
  return (
    <div className="image_section  ">
      <div className="row  " style={{ overflow: "hidden" }}>
        <div className="col-sm-8  position-relative">
          {/* <div className="lbyk-hotel-name-label  d-flex  justify-content-evenly align-items-center gap-2">
            <h2 className="fs-6 mb-0 text-light" style={{ fontWeight: "800" }}>
              {"Millennium Dubai Al Naseem"}
            </h2>
            <Rating />
          </div> */}
          <SliderImage
            imageSectionData={imagesection1}
            classSlide="arrow-dark zoom-gallery ratio2_3"
          />
        </div>
        <div className="col-sm-4  d-none d-sm-block">
          <div className="row">
            <div className="col ratio_59">
              <SliderImage
                imageSectionData={imagesection2}
                classSlide="zoom-gallery no-arrow"
              />
              <SliderImage
                imageSectionData={imagesection3}
                classSlide="zoom-gallery no-arrow m-cls"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
