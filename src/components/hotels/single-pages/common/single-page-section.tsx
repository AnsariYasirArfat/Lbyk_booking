import { FC } from "react";
// import BookInfo from "./sidebar/book-info";
import LbykBookInfo from "./sidebar/lbky-booking/lbyk-book-info";
import HotelBannerDetail from "../hotel-detail-banner/page";
import TabDescription from "../tab-description/description";
import {
  imagesection1,
  imagesection2,
  imagesection3,
} from "@/data/hotels/single-page";

import ImageSection from "@/components/common/image-section/image-section";

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
        height: "83vh",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-5">
        <div className="row">
          <div
            className={`col-lg-5 ${side === "right" ? "order-1" : ""}`}
            id="booking"
          >
            {/* <div className="sticky-cl"> */}
            <div className="mt-2">
              <LbykBookInfo />
              {/* <ContactInfo /> */}
              {/* <WeatherInfo /> */}
            </div>
          </div>

          <div
            className="col-lg-7 px-0"
            style={{ height: "83vh", overflow: "scroll" }}
          >
            <div className="" style={{ padding: " 0px" }}>
              <div className="hotel_title_section">
                <HotelBannerDetail />
              </div>
            </div>
            <ImageSection
              imagesection1={imagesection1}
              imagesection2={imagesection2}
              imagesection3={imagesection3}
            />

            <div className="description-section tab-section ">
              <TabDescription tabsData={tabsTitleData} class1="menu-top" />
            </div>

            {/* <SpecialImage /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SinglePageSection;
