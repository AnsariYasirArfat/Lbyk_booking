"use client";

import { useState } from "react";
import SelectQuantity from "./quantity-select";
import UserBookingForm from "./user-form";
import PaymentDebitCard from "./new-payment";

export default function LbykBookingAll() {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="booking-order">
      <div
        className="summery-box p-4 d-flex flex-column justify-content-between"
        style={{ height: "84vh" }}
      >
        {step === 1 && <SelectQuantity onNext={handleNext} />}

        {step === 2 && (
          <UserBookingForm onNext={handleNext} onPrevious={handlePrevious} />
        )}

        {step === 3 && <PaymentDebitCard onPrevious={handlePrevious} />}
      </div>
    </div>
  );
}
