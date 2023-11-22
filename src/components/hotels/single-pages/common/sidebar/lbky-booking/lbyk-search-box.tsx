"use client";
import { CheckIn, CheckOut } from "@/constant/constant";
import { FC, useState, useEffect, useCallback, useRef } from "react";
import LbykDatePickerComponent from "./lbyk-date-picker";
import LbykQtyBox from "./lbyk-qty-box";
// import Button from "../btn";
// import Link from "next/link";

const LbykSearchBox: FC<ISearchBoxProps> = ({ classRound }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());

  const [nights, setNights] = useState(1);
  const [guest, setGuest] = useState({ adults: 1, child: 0 });

  const [show, setShow] = useState(false);
  const searchBoxRef: any = useRef(null);

  const handleClickOutside = useCallback((e: any) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return (
    <div className={`search-box ${classRound && "rounded10"}`}>
      <div className="left-part row">
        <div
          className="search-body col search-input"
          style={{ padding: "10px" }}
        >
          <h6 style={{ fontSize: "12px", fontWeight: "800", color: "#ae926a" }}>
            {CheckIn}
          </h6>
          <LbykDatePickerComponent start={startDate} setStart={setStartDate} />
        </div>
        <div
          className="search-body col search-input"
          style={{ padding: "10px" }}
        >
          <h6 style={{ fontSize: "12px", fontWeight: "800", color: "#ae926a" }}>
            {CheckOut}
          </h6>
          <LbykDatePickerComponent
            start={startDate1}
            setStart={setStartDate1}
          />
        </div>

        <div className="search-body col" style={{ padding: "10px" }}>
          <h6 style={{ fontSize: "12px", fontWeight: "800", color: "#ae926a" }}>
            {"Guests"}
          </h6>
          <div className={` selector-box py-2 ${show ? "show" : ""}`}>
            <LbykQtyBox guest={guest} setGuest={setGuest} />
            <button
              onClick={() => setShow((prev) => !prev)}
              className="btn btn-solid text-capitalize "
              style={{
                fontSize: "11px",
                padding: "0px 4px ",
                margin: "0px",
              }}
            >
              Done
            </button>
          </div>
          <button
            onClick={() => setShow((prev) => !prev)}
            className="btn text-capitalize"
            style={{
              fontSize: "14px",
              color: "#757786",
              padding: "0",
            }}
          >
            {/* {`${guest.adults + guest.child}`} */}
            {guest.adults} {guest.adults > 1 ? "Adults" : "Adult"}
            {guest.child > 0 &&
              ` . ${guest.child} ${guest.child > 1 ? "Children" : "Child"} `}
          </button>
        </div>
        {/* <div className="search-body col" style={{ padding: "10px" }}>
          <h6 className="text-dark">{nights > 1 ? "Nights" : "Night"}</h6>
          <div className="qty-box">
            <div className="input-group">
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-left-minus"
                  data-type="minus"
                  data-field=""
                  onClick={() => setNights(nights <= 1 ? nights : nights - 1)}
                >
                  <i className="fas fa-chevron-down"></i>
                </button>
              </span>
              <input
                type="text"
                name="quantity"
                onChange={() => setNights(nights)}
                className="form-control input-number"
                value={nights}
                style={{
                  fontSize: "14px",
                  color: "#757786",
                }}
              />
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-right-plus"
                  data-type="plus"
                  data-field=""
                  onClick={() => setNights(nights + 1)}
                >
                  <i className="fas fa-chevron-up"></i>
                </button>
              </span>
            </div>
          </div>
        </div> */}
        {/* <div>{`Total AED ${nights * 905}`}</div> */}
      </div>
    </div>
  );
};

export default LbykSearchBox;
