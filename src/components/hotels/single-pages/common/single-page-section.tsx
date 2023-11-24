import { FC } from "react";
// import BookInfo from "./sidebar/book-info";
// import LbykBookInfo from "./sidebar/lbky-booking/lbyk-book-info";
import HotelBannerDetail from "../hotel-detail-banner/page";
import Rating from "@/components/common/rating";

import TabDescription from "../tab-description/description";
import {
  imagesection1,
  imagesection2,
  imagesection3,
} from "@/data/hotels/single-page";

import ImageSection from "@/components/common/image-section/image-section";
import LbykBookingAll from "./sidebar/lbky-booking/booking-all";

const SinglePageSection: FC<ISinglePageSectionProps> = ({ side }) => {
  const tabsTitleData = [
    {
      id: "1",
      title: "Overview",
    },
    {
      id: "2",
      title: "Details",
    },
    {
      id: "3",
      title: "Amenities",
    },
    {
      id: "4",
      title: "location",
    },
  ];
  return (
    <section
      className="single-section xs-section bg-inner"
      style={{
        padding: " 0px",
        margin: "0px",
        height: "85vh",
        overflow: "hidden",
        backgroundColor: "#ae926a1a",
      }}
    >
      <div className="container-fluid px-5">
        {/* <div className="" style={{ padding: " 0px" }}>
          <div className="hotel_title_section">
            <HotelBannerDetail />
          </div>
        </div> */}
        <div className="row position-relative mt-2">
          <div className="lbyk-hotel-name-label  d-flex  justify-content-evenly align-items-center gap-2">
            <h2 className="fs-6 mb-0 text-light" style={{ fontWeight: "800" }}>
              {"Millennium Dubai Al Naseem"}
            </h2>
            <Rating />
          </div>
          <div
            className={`col-lg-5 ${side === "right" ? "order-1" : ""}`}
            id="booking"
          >
            {/* <div className="sticky-cl"> */}
            <div className="">
              <LbykBookingAll />
            </div>
          </div>

          <div className="col-lg-7 px-0">
            <ImageSection
              imagesection1={imagesection1}
              imagesection2={imagesection2}
              imagesection3={imagesection3}
            />

            <div className="description-section tab-section position-relative ">
              <TabDescription
                tabsData={tabsTitleData}
                class1="menu-top position-sticky"
              />
            </div>

            {/* <SpecialImage /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SinglePageSection;
