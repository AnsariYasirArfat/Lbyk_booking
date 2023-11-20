"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { bookingData, paymentData } from "@/data/hotels/booking";
import PhoneInput from "react-phone-input-2";
import "./booking.css";
import "react-phone-input-2/lib/style.css";
// import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
// import Button from "@/components/common/btn";
// import DatePickerComponent from "@/components/common/date-picker";
// import { Apply, BookThisNow, DeluxeRate, Viewonmap } from "@/constant/constant";
// import { mapId } from "@/data/common-data";

// import Link from "next/link";

const LbykBookInfo: FC = () => {
  const [selectedRadio, setSelectedRadio] = useState("male");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [dialCode, setDialCode] = useState("");
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };
  const phonenumber = (
    value: any,
    data: any,
    event: any,
    formattedValue: any
  ) => {
    setDialCode(data.dialCode);
    setNumber(value);
    setPhone(value);
  };

  useEffect(() => {
    // Set the default value ('HTML') when the component mounts
    setSelectedRadio("male");
  }, []);
  return (
    <div className="booking-order">
      <div className="summery-box p-3">
        <h2 style={{ fontSize: "15px", fontWeight: "700" }} className="m-0">
          Room X1
        </h2>
        <div className="hotel-section p-0 m-0 d-flex justify-content-between align-items-center">
          {/* <div className="hotel-img">
            <Img src={hotelData.imageSrc} className="img-fluid" alt="" />
          </div> */}
          <h4 style={{ fontSize: "14px", fontWeight: "600" }}>
            Standard King Room per night
          </h4>
          <div className="hotel-detail">
            <p>
              AED{" "}
              <span style={{ fontSize: "15px", fontWeight: "700" }}>905</span>
            </p>
          </div>
        </div>
        <div className="summery-section p-0 m-0">
          <div
            className="box"
            style={{
              border: "2px solid rgb(231,232,226)",
              borderRadius: "7px 7px 7px 7px",
            }}
          >
            <div className="left" style={{ width: "40%", padding: "3px" }}>
              <div className="up">
                <h6>check in</h6>
                <h5>{bookingData.checkIn.date}</h5>
              </div>
            </div>
            <div
              className="left"
              style={{
                width: "20%",
                padding: "3px",
                border: "2px solid rgb(231,232,226)",
                borderRadius: "7px 7px 7px 7px",
              }}
            >
              <div className="up">
                <h6 style={{ textAlign: "center" }}>3</h6>
                <h5 style={{ textAlign: "center" }}>Nights</h5>
              </div>
            </div>
            <div className="right" style={{ width: "40%", padding: "3px" }}>
              <div className="up">
                <h6>check out</h6>
                <h5>{bookingData.checkOut.date}</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="box d-flex justify-content-between align-items-center"
          style={{
            borderRight: "2px solid rgb(231,232,226)",
            borderLeft: "2px solid rgb(231,232,226)",
            borderBottom: "2px solid rgb(231,232,226)",
            borderRadius: "0px 0px 7px 7px",
          }}
        >
          <h4>Guests</h4>
          <h5>2 adults,1 child</h5>
        </div>
        <div className="summery-section p-2 m-0 d-flex justify-content-between align-items-center">
          <h5 className="mb-0">3 Nights</h5>
          <h5>AED 2,715</h5>
        </div>
        <div className="summery-section p-2 m-0 d-flex justify-content-between align-items-center">
          <h5 className="mb-0" style={{ color: "grey" }}>
            Taxes, fee and charges
          </h5>
          <h5 style={{ color: "grey" }}>AED 410</h5>
        </div>
        <div className="summery-section p-2 m-0 d-flex justify-content-between align-items-center">
          <h5 className="mb-0" style={{ fontSize: "15px", fontWeight: "700" }}>
            Total
            <span style={{ fontSize: "12px" }}>
              (Includes Taxes and charges)
            </span>
          </h5>
          <h5>AED 3,125</h5>
        </div>

        <div className="form-group row">
          <label
            htmlFor="inputEmail3"
            className="col-sm-3 col-form-label"
            style={{ fontSize: "12px", fontWeight: "600" }}
          >
            Guest Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center p-2">
          <h5 className="col-sm-2 p-0" style={{ fontSize: "15px" }}>
            Gender
          </h5>
          <div className="radio-inputs col-sm-3">
            <label className="radio">
              <input
                type="radio"
                checked={selectedRadio === "male"}
                value={"male"}
                onChange={handleRadioChange}
              />
              <span className="name">Male</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                checked={selectedRadio === "female"}
                value={"female"}
                onChange={handleRadioChange}
              />
              <span className="name">Female</span>
            </label>
          </div>
          <label
            htmlFor="inputEmail3"
            className="col-sm-2 col-form-label"
            style={{ fontSize: "12px", fontWeight: "600" }}
          >
            Date of birth
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="inputEmail3"
            className="col-sm-4 col-form-label"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            Country/region
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="inputEmail3"
            className="col-sm-4 col-form-label"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            Email Address
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group d-flex justify-content-center align-items-center">
          <label
            htmlFor="Phone"
            className="col-sm-4"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            {"PhoneNumber"}
          </label>
          <PhoneInput
            value={phone}
            onChange={phonenumber}
            specialLabel=""
            country={"in"}
            inputClass="form-control"
            containerClass="phone-input-container col-sm-8"
            inputStyle={{ width: "100%" }}
          />
        </div>
        <button style={{ width: "100%" }} className="btn btn-lg btn-secondary ">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default LbykBookInfo;
