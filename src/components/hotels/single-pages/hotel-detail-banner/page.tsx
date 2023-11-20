import Button from "@/components/common/btn";
import Rating from "@/components/common/rating";
import { SeaViewHotel } from "@/constant/constant";
import { FC } from "react";
import Link from "next/link";

const HotelBannerDetail: FC = () => {
  return (
    <div className="hotel-name" style={{ padding: " 5px 0px" }}>
      <div className="top d-flex gap-2">
        <h2 className="fs-5 mb-0" style={{ fontWeight: "800" }}>
          {"Millennium Dubai Al Naseem"}
        </h2>
        <Rating />
      </div>
    </div>
  );
};

export default HotelBannerDetail;
