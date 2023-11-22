import { LocationCons } from "@/constant/constant";
import { mapId } from "@/data/common-data";
import { FC } from "react";

const Location: FC<IRoomProps> = ({ tab }) => {
  return (
    <div className="desc-box" id="location">
      <div
        className="menu-part page-section map"
        style={{ height: "30vh", overflow: "scroll" }}
      >
        <div className={`booking-tab-fade-in`}>
          {/* <h4
            className="content-title text-center"
            style={{ color: "#ae926a" }}
          >
            location
          </h4> */}
          {tab && <h4 className="content-title">{LocationCons}</h4>}
          <iframe src={mapId} style={{ border: "0" }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
