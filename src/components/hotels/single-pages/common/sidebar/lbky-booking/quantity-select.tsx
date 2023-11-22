import React, { FC, useState } from "react";
import { bookingData } from "@/data/hotels/booking";
import LbykSearchBox from "@/components/hotels/single-pages/common/sidebar/lbky-booking/lbyk-search-box";

const SelectQuantity: FC<any> = ({ onNext }: { onNext: any }) => {
  return (
    <>
      <div className="col-lg-12 booking-order d-flex flex-column justify-content-between booking-tab-fade-in">
        <h1
          className="text-center mb-3"
          style={{ fontSize: "18px", fontWeight: "800", color: "#ae926a" }}
        >
          Room Booking Details
        </h1>
        <div className="hotel-section p-0 m-0 d-flex justify-content-between align-items-center">
          <h2 style={{ fontSize: "15px", fontWeight: "700" }} className="m-0">
            Room &times; 1
          </h2>

          <h4
            style={{ fontSize: "14px", fontWeight: "600", color: "#757786" }}
            className="m-0"
          >
            Standard King Room per night
          </h4>
          <div className="hotel-detail">
            <p
              style={{ color: "#757786", fontWeight: "600", fontSize: "12px" }}
            >
              AED{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                  color: "black",
                }}
              >
                905
              </span>
            </p>
          </div>
        </div>
        <div
          className="p-0 m-0 my-3"
          style={{ borderTop: "1px solid #f9f9f9" }}
        >
          <div className="search-panel" id="searchBar">
            <div className="container">
              <div className="row">
                <div className="">
                  <div className="search-panel" id="searchBar">
                    <div className="search-section">
                      <LbykSearchBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #f9f9f9" }}>
          <div className=" p-2 m-0 pt-3 d-flex justify-content-between align-items-center">
            <h5
              className="mb-0"
              style={{ fontSize: "15px", fontWeight: "700" }}
            >
              3 Nights
            </h5>
            {/* <h5>AED 2,715</h5> */}
            <p
              style={{
                color: "#757786",
                fontWeight: "600",
                fontSize: "12px",
                margin: "0",
              }}
            >
              AED{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "800",

                  color: "#757786",
                }}
              >
                2,715
              </span>
            </p>
          </div>
          <div className=" p-2 m-0 pt-3 d-flex justify-content-between align-items-center">
            <h5
              className="mb-0"
              style={{ color: "grey", fontSize: "15px", fontWeight: "700" }}
            >
              Taxes, fee and charges
            </h5>
            {/* <h5 style={{ color: "grey" }}>AED 410</h5> */}
            <p
              style={{
                color: "#757786",
                fontWeight: "600",
                fontSize: "12px",
                margin: "0",
              }}
            >
              AED{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                  color: "#757786",
                }}
              >
                410
              </span>
            </p>
          </div>
          <div className=" p-2 m-0 pt-3 d-flex justify-content-between align-items-center">
            <h5
              className="mb-0"
              style={{ fontSize: "15px", fontWeight: "700" }}
            >
              Total{" "}
              <span style={{ fontSize: "12px", color: "#757786" }}>
                (Includes Taxes and charges)
              </span>
            </h5>
            {/* <h5>AED 3,125</h5> */}
            <p
              style={{
                color: "#757786",
                fontWeight: "600",
                fontSize: "12px",
                margin: "0",
              }}
            >
              AED{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                  color: "#ae926a",
                }}
              >
                3,125
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row gap-2 px-3">
        <div className=" d-flex justify-content-start align-items-center gap-4">
          <label
            style={{ fontSize: "14px", fontWeight: "800", color: "#757786" }}
          >
            <span
              className="text-decoration-underline"
              style={{ color: "#ae926a" }}
            >
              Reservation Policies
            </span>{" "}
            &#9432;
          </label>
          <label
            style={{ fontSize: "14px", fontWeight: "800", color: "#757786" }}
          >
            <span
              className="text-decoration-underline"
              style={{ color: "#ae926a" }}
            >
              Reservation Policies
            </span>{" "}
            &#9432;
          </label>
        </div>
        <button
          style={{ width: "100%" }}
          className="btn btn-solid "
          onClick={onNext}
        >
          Reserve Now
        </button>
      </div>
    </>
  );
};

export default SelectQuantity;
