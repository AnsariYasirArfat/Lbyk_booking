import { ChangeEvent, useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "./booking.css";
import "react-phone-input-2/lib/style.css";
import DatePickers from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";
export default function UserBookingForm({
  onNext,
  onPrevious,
}: {
  onNext: any;
  onPrevious: any;
}) {
  const [selectedRadio, setSelectedRadio] = useState("male");
  const [guestName, setGuestName] = useState("Lbyk Booking");
  const [email, setEmail] = useState("guest@LbykBooking.com");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("AE");
  const [birthDate, setBirthDate] = useState("");
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };
  const phonenumber = (value: any, data: any) => {
    // setDialCode(data.dialCode);
    // setNumber(value);
    setPhone(value);
  };

  useEffect(() => {
    // Set the default value ('HTML') when the component mounts
    setSelectedRadio("male");
  }, []);
  return (
    <>
      <div className=" booking-order d-flex flex-column justify-content-between booking-tab-fade-in">
        <h1
          className="text-center mb-3"
          style={{ fontSize: "18px", fontWeight: "800", color: "#ae926a" }}
        >
          Guest's Personal Details
        </h1>

        <div className="form-group ">
          <label
            style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
          >
            Guest Name
          </label>
          <div className="col">
            <input
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              type="text"
              className="form-control"
              placeholder=""
              style={{ fontSize: "14px", fontWeight: "700", color: "black" }}
            />
          </div>
        </div>

        <div className="form-group">
          <label
            className=""
            style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
          >
            Email Address
          </label>
          <div className="">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder=""
              style={{ fontSize: "14px", fontWeight: "700", color: "black" }}
            />
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-6 form-group ">
            <label
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Country/region
            </label>
            <ReactFlagsSelect
              selected={country}
              onSelect={(code) => {
                setCountry(code);
                console.log(code);
              }}
              className="p-0"
            />
          </div>

          <div className="col-6 form-group ">
            <label
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              {"PhoneNumber"}
            </label>
            <PhoneInput
              value={phone}
              onChange={phonenumber}
              country={"ae"}
              inputClass="form-control"
              containerClass="phone-input-container"
              inputStyle={{
                width: "100%",
                fontSize: "14px",
                fontWeight: "700",
                color: "black",
              }}
            />
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col form-group justify-content-between align-items-center">
            <h5
              className="mb-1 p-0"
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Gender
            </h5>
            <div className="radio-inputs ">
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
          </div>
          <div className="col form-group justify-content-around align-items-center">
            <label
              className=""
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Date of birth
            </label>

            <DatePickers
              value={birthDate}
              // onChange={setBirthDate}
              inputClass="form-control"
              placeholder=""
              format="DD/MM/YYYY"
              formattingIgnoreList={["Date", "Time"]}
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "black",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row gap-2 px-3">
        <div className="col-12 d-flex justify-content-start align-items-center gap-4">
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
        <button className="col btn btn-solid " onClick={onPrevious}>
          Go Back
        </button>
        <button className="col btn btn-solid " onClick={onNext}>
          Proceed to Payment
        </button>
      </div>
    </>
  );
}
