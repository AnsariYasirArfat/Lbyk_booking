import SuccessBtn from "@/components/hotels/booking/checkout/payment-section/success-btn";
import Img from "@/utils/BackgroundImageRatio";
import { FC, useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";
import ReactFlagsSelect from "react-flags-select";

const PaymentDebitCard: FC<any> = ({ onPrevious }) => {
  const [startDate, setStartDate] = useState("");
  const [billingCountry, setbillingCountry] = useState("IN");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="card-body">
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            event.preventDefault()
          }
          className=" d-flex flex-column justify-content-between booking-tab-fade-in"
        >
          <h1
            className="text-center mb-3"
            style={{ fontSize: "18px", fontWeight: "800", color: "#ae926a" }}
          >
            Payment Details
          </h1>
          <div className="mb-2 form-group ">
            <label
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Billing Country
            </label>
            <ReactFlagsSelect
              selected={billingCountry}
              onSelect={(code) => setbillingCountry(code)}
              className="p-0"
            />
          </div>
          <div className="mb-2 form-group">
            <label
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Card Holder Name
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="name"
                style={{ fontSize: "14px", fontWeight: "700", color: "black" }}
              />
            </div>
          </div>
          <div className="mb-2 form-group">
            <label
              style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
            >
              Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              style={{ fontSize: "14px", fontWeight: "700", color: "black" }}
            />
            <Img
              src="/assets/images/creditcards.png"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="row mb-2">
            <div className="col form-group ">
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#757786",
                }}
              >
                Card Expiry
              </label>
              <div>
                <DatePickers
                  minDate={new Date()}
                  value={startDate}
                  // onChange={setStartDate}
                  inputClass="form-control"
                  placeholder=""
                  format=""
                  onlyMonthPicker
                  formattingIgnoreList={["Date", "Time"]}
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "black",
                  }}
                />
              </div>
            </div>
            <div className="col form-group position-relative">
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#757786",
                }}
              >
                CVV
              </label>
              <input
                type="password"
                maxLength={4}
                className="form-control"
                placeholder=""
              />
              <Img
                src="/assets/images/cvv.png"
                className="img-fluid"
                alt=""
                style={{
                  height: "23px",
                  position: "absolute",
                  right: "20px",
                  bottom: "8px",
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row gap-2 px-3">
        <div className="col-12 d-flex justify-content-start align-items-center gap-1">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="payment-checkbox"
          />
          <label
            style={{ fontSize: "12px", fontWeight: "800", color: "#757786" }}
          >
            By clicking "Pay Now", I agree to the{" "}
            <span
              className="text-decoration-underline"
              style={{ color: "#ae926a" }}
            >
              fare policy
            </span>{" "}
            and{" "}
            <span
              className="text-decoration-underline"
              style={{ color: "#ae926a" }}
            >
              baggage rules.
            </span>
          </label>
        </div>
        <button className="col btn btn-solid " onClick={onPrevious}>
          Go Back
        </button>
        <button className="col btn btn-solid ">Pay Now</button>
      </div>
    </>
  );
};

export default PaymentDebitCard;
